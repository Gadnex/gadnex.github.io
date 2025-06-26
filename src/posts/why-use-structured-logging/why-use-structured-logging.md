---
title: Why use Structured Logging
description: A blog post explaining what Structured Logging is and when we should be using it.
date: 2025-04-22
"tags": [
  "development", "operations", "devops"
]
---

## Introduction

With the release of Spring Boot 3.4 on 21 November 2024, native support for [Structured Logging](https://spring.io/blog/2024/08/23/structured-logging-in-spring-boot-3-4) was added to Spring Boot. Before Spring Boot 3.4 it was possible to use Structured Logging, but additional dependencies and custom logging configuration was required.

Unfortunately many developers are not aware of what Structured Logging is, or why it is important, and thus is not widely used.

In this post I will try and explain what Structured Logging is and make a case for why we should be using it.

## What is Structured Logging?

Structured Logging refers to the idea of structuring our system logging data in a manner similar to how we structure our application data in a relational database. The goal of structuring our logs is to enhance the searchability of our logs in the same way that relational database queries allow us to search our application data.

Historically our logging data was written to plain text log files on disk where we typically had one log file per application. Log data was sequentially appended to the bottom of the file and a developer could simply read the log file from top to bottom or use the search capabilities of the text editor/viewer to find the correct place in the file to read. In this context Structured Logging is not possible and is not really required.

In the modern application landscape our applications are often more distributed. We often run our applications withing containers (i.e. Docker) managed by container management software like Kubernetes. In these deployments we often run multiple containers for our application for load balancing and redundancy purposes. We often divide our applications into separately deployable components or microservices. In this context we will end up with multiple log files in different locations. A developer may need to find, open and search multiple log files in order to figure out how exactly an error occurred.

In order to deal with logging in these more complex deployment scenarios, we often make use of log collectors to collect logs from individual containers and send them to centralised data stores such as [EleasticSearch](https://www.elastic.co/elasticsearch) or [Splunk](https://www.splunk.com/). These data stores offer powerful query capabilities to deal with the large volume of logging data they collect.

By creating our logging data in a structured manner in our code, we can make use of the powerful indexing and query capabilities of our logging data stores.

## Structuring data in a relational database

Let us look at a simple SQLite database script that stores data in a unstructured manner.

```sql
-- Create table
CREATE TABLE employee
(
    id     INT PRIMARY KEY NOT NULL,
    detail TEXT
);

-- Insert records
INSERT INTO employee(id, detail)
VALUES (1, 'Employee with first name John, last name Smith working for department IT and is active');

INSERT INTO employee(id, detail)
VALUES (2, 'Employee with first name Jane, last name Doe working for department HR and is inactive');
```

The above script does execute correctly and technically all the data about the employees are persisted in the database. The problem is that this data is completely unstructured and querying the database later to retrieve only records matching specific criteria will be very difficult.

Consider having to find all active employees named John in the IT department. You would need to white a query as follows.

```sql
SELECT *
FROM employee
WHERE detail LIKE '%John%'
  AND detail LIKE '%department IT and is active%';
```

While possible, this query is not easy to read or write. It is also not efficient to execute as we cannot make use of the indexing capabilities of the database to speed up our queries.

Now consider a better example that makes use of the structuring capabilities of the SQL database.

```sql
-- Create table
CREATE TABLE employee
(
    id         INT PRIMARY KEY NOT NULL,
    first_name TEXT,
    last_name  TEXT,
    department TEXT,
    active     INT
);

-- Insert records
INSERT INTO employee(id, first_name, last_name, department, active)
VALUES (1, 'John', 'Smith', 'IT', 1);

INSERT INTO employee(id, first_name, last_name, department, active)
VALUES (2, 'Jane', 'Doe', 'HR', 0);
```

If we want to run the same query as before on this database schema, we will have the following query.

```sql
SELECT *
FROM employee
WHERE first_name = 'John'
  AND department = 'IT'
  AND active = 1;
```

This query is far easier to read and write and also more efficient to execute.

## Structuring log data

If it is not acceptable to store unstructured data in a relational database, then why is it acceptable to store unstructured logs in our logging data store? I believe it is not acceptable and should be considered bad practice to do so.

While writing unstructured logs to an old-fashioned log file may be perfectly acceptable, creating unstructured logs in a modern logging data store should not be acceptable.

Creating unstructured logs in a logging data store will result in writing complex LIKE queries in ElasticSearch/Kibana when trying to query the logs. These queries would be quite similar to the example bad relational database queries above. 

## Structured logging in practise

It is important to understand how Structured Logging can be implemented in our code, and here I give an example using Spring Boot 3.4 or later.

We would need to enable the Structured Logging feature in Spring Boot and specify the target logging data store so that Spring Boot knows how to output the logs for the chosen data store to ingest. Here I am assuming we are writing our logs to the console where a log collector will collect the logs from the container and send them to the logging data store. As a target logging data store I have chosen ElasticSearch. We will add the following line to our Spring Boot application.properties file.

```
logging.structured.format.console=ecs
```

This configuration change will output console logs in JSON format with a schema dictated by ElasticSerach. Here is an example log message that has been formatted for readability.

```json
{
  "@timestamp": "2024-07-30T08:41:10.561295200Z",
  "log.level": "INFO",
  "process.pid": 67455,
  "process.thread.name": "main",
  "service.name": "structured-logging-demo",
  "log.logger": "com.example.structured_logging_demo.StructuredLoggingDemoApplication",
  "message": "Started StructuredLoggingDemoApplication in 0.329 seconds (process running for 0.486)",
  "ecs.version": "8.11"
}
```

Now, when we write our logging messages in our code we should not cram all the data into the message field in an unstructured way. We should rather have a simple static text message in the message field that uniquely identifies a single line in our code. Try and avoid using the same message text in multiple lines of code, as it makes it more difficult to determine which line in the code created the log message.

Each data item related to the log message should be added to the log as a key-value pair. Each key-value pair will then be added as a separate field in the JSON log message where it will be placed in a separate column in ElasticSearch where is can be queried.

Here is an example of an unstructured log message.

```java
LOGGER.info("Hello structured logging! - userId=1");
```

Here is an example of an structured log message.

```java
LOGGER.atInfo()
        .addKeyValue("userId", "1")
        .log("Hello structured logging!");
```

The way we do our logging in our code is a bit different, but still simple enough. 

Now it is much easier to search for all log entries where `userId : 1` in ElasticSearch/Kibana.

## Conclusion

The blog post explained what Structured Logging is and when we should be using it.

I hope to have successfully made the argument to make use of Structured Logging when our logs are ingested into a logging data store such as ElasticSearch.