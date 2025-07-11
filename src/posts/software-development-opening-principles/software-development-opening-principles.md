---
title: Software Development Opening Principles
description: A blog post to explain important software development principles when starting a development project and leading to a successful outcome.
date: 2025-06-20
"tags": [
  "Business Analysis", "Requirements Analysis", "Agile"
]
---

## Introduction

During my long career working mostly on agile software projects, I have encountered multiple teams struggling with agile adoption. This often leads to the business and management being dissatisfied with the team's feature development velocity. While it is easy to suspect the problem is with the team's technical abilities or dedication, I would like to put forward an alternative explanation.

I would suggest that the problem is due to projects getting a poor start and not following the principles that would lead to long term success.

## History of agile

Before the popularity of agile, the norm was to perform big upfront requirements gathering followed by big upfront design before the development was started. This waterfall approach was certainly a bad idea.

Agile on the other hand places its focus on incrementally and continually delivering value over short predictable time periods (often 2 weeks). Teams want to get this value in the hands of real users and use the feedback from these users to determine the way forward. This is very different to a big upfront design and big upfront planning approach.

Having no clear goal that you are working towards, with no upfront design and no long terms planing is an even worse idea. This is throwing out the baby with the bathwater. Going from one extreme to the other and completely missing the sweet spot in the middle.

> Big design upfront is dumb, and doing no design upfront is even dumber.
> <cite>-- Dave Thomas</cite>

## Chess opening principles

As an analogy I would like to look at chess opening principles. When a person learns to play chess they would first learn the rules of the game and how the pieces move. Shortly thereafter they would likely be taught the same opening principles worded in a variety of ways. Here is my attempt:

1. Control the center, which means to try and get 2 pawns in the center of the board if you can.
2. Develop your minor pieces (knights and bishops) to stregthen your control of the center.
3. Castle to get your king to safety.
4. Connect your rooks so they can protect each other and your king.

![Image of chess opening principles](chess-opening-principles.png)

In reality it is not so easy, as your opponent is trying to do the same or perhaps is making some unexpected attacking moves. Long term plans rarely work out, but that is no excuse to abandon these principles. The player who can avoid early blunders and follow these principles will strategically have an advantage for the middle and end game.

Analogously, in software development long-term plans rarely work out, but that is no excuse to ignore good software development principles.

## Software development opening principles

Here are the opening principles I have used on software development projects to reach long term success and productivity.

1. Define the goal and scope of the software.
2. Identify and describe the users of the software.
3. Identify the goals (user stories) for each of the identified users.
4. Prioritize the goals (user stories) and always work on developing the highest priority items first.

This information needs to be persisted somewhere so that all teams members and the business have a shared understanding of what is being developed.

Don't spend more than a day or 2 on this at the start of the development, trying to get everything perfect. This would be a foolish pursuit as you don't know enough at the start of the development to get it perfect.

Rather spend the time throughout the life of the software to keep this simple description of the software up to date with the most recent understanding. This ensures that everyone is aligned as your understanding changes.

## Defining the software goal and scope

Our first opening principle is to define the goal and scope of the software. To do this we should summarize the goal and the scope of the software in one or two paragraphs. Keep it short and simple. Just say what the system is and is not.

Here is an example:

```text
The ABC Healthcare Patient Administration System is a web based system used by healthcare providers 
on mobile computing devices to record details of all patient interactions such as medical examinations, 
tests, pharmaceutical prescriptions and administrations.

The system will feed data into the hospital billing system, but will not provide any accounting functionality.
The system will not be responsible for human resources and payroll administration of the healthcare providers. 
The system will not manage the procurement and logistics of medical and pharmaceutical supplies.
```

Notice how the details about what the system will **not** do can be very useful when identifying users and their goals. We can easily determine that the *HR Manager* user and the *Clock in for shift* user story is outside the scope of the system.

## Identify the users

Our second opening principle is to identify and describe the users of the software. Here we simply want to identify who the users are and the descriptions can help us define our terms.

Here are 2 examples:

```text
Healthcare Provider
--------------------
Healthcare providers are doctors, nurses, anesthesiologists and other medical professionals 
that interact directly with patients. It does not include laboratory staff that do not 
interact directly with patients. It excludes supporting staff such as porters and cleaning staff.
```

```text
Billing System
---------------
The billing system refers to the existing ABC Healthcare billing system that will interface with the
Patient Administration System, but is not part of the system.
```

As can be seen from the second example, users do not necessarily have to be human beings, but could also be other systems. Be very careful here not to identify parts of your software as users. 

## Identify the user stories

Our third opening principle is to identify the goals (user stories) for each of the identified users. Here we want to look at ours users from the previous step one-by-one and identify all their goals when interacting with the system. We want to describe the **who**, the **what** and the **why** for each user story.

We often write these user stories using the format:
**As a ..., I want to ..., so that ...**

Here is an example:

```text
As a healthcare provider
I want to record a patient interaction
so that we can build a clear log with a timeline for all patient interactions
```

The most common trap I see development teams step into is to identify tasks of the development team as user stories. See the following example:

```text
As a software developer
I want to add the patient interaction table to the database
so that we can persist a complete list of patient interactions for auditing purposes 
```

These technical tasks masquerading as user stories completely miss the point of what a user story is. Even a small software system is likely to have thousands of these technical tasks. Writing them down is a waste of time as no person will ever read them. Reading them all will not help the reader understand the goals and the scope of the system. The moment these tasks are completed, they have no further value.

Good user stories on the other hand have long term value. They describe the requirements of the software and not the design of the solution or the timeline of the project. Even after the software has been used in production for many years, a new business person or software developer joining the team can read these user stories and quickly gain an understanding of the size and the goals of the software.

## Prioritize the user stories

Our fourth opening principle is to prioritize the goals (user stories) and always work on developing the highest priority items first.

This prioritization is at the heart of agile software development. We want get our software in the hands of real users in production as soon as possible. If we develop all the user stories before our software is put in the hands of real users, we are waiting a very long time and spending a lot of money before learning if our solution design is viable. Putting software on test environments and having pseudo users test the software is unlikely to uncover all the *what if* questions that real users will have when using the software to accomplish their goals. 

Many teams set out to build a Minimum Viable Product (MVP) before building the rest of the system. But how do you decide what the MVP includes if you don't know what the whole system is. The answer is to identify all the user stories and prioritize them. Then you can identify a cutoff point in the prioritized list that will be your MVP.

## Planning and management

User stories are a wonderful tool for planning and cost management. By definition a user story is a requirement that should be delivered in a single iteration (sprint). As stated earlier, user stories are not tasks to be completed by a single team member. Thus user stories are not delivered by a single team member in the iteration. They are delivered by the team working together to accomplish a shared goal.

You will not have so many user stories in an iteration that you will need a Kanban board. You will not need to move post-it notes from the left column to the right column during your daily standup to see if everyone in the team is working. The team will definitely need to identify tasks that are needed to be done to complete the user stories. These tasks will be identified and completed within a single iteration. Kanban boards and post-it notes are handy tools to manage these tasks and the team should use them. But management should not manage at this level of detail. Manage at the level of detail of user stories only.

Here is an example of a status report at the end of an iteration:

<table>
  <thead>
    <tr>
      <th></th>
      <th>Previous Iteration</th>
      <th>Current Iteration</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Iteration number</th>
      <td>4</td>
      <td>5</td>
    </tr>
    <tr>
      <th>Team size</th>
      <td>5</td>
      <td>5</td>
    </tr>
    <tr>
      <th>User stories dragged from previous iteration</th>
      <td>2</td>
      <td>0</td>
    </tr>
    <tr>
      <th>User stories included</th>
      <td>2</td>
      <td>4</td>
    </tr>
    <tr>
      <th>User stories completed</th>
      <td>4</td>
      <td>3</td>
    </tr>
    <tr>
      <th>User stories not completed</th>
      <td>0</td>
      <td>1</td>
    </tr>
    <tr>
      <th>Users added</th>
      <td>3</td>
      <td>0</td>
    </tr>
    <tr>
      <th>Users removed</th>
      <td>1</td>
      <td>0</td>
    </tr>
    <tr>
      <th>User stories added</th>
      <td>6</td>
      <td>4</td>
    </tr>
    <tr>
      <th>User stories removed</th>
      <td>2</td>
      <td>1</td>
    </tr>
    <tr>
      <th>In production</th>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Production incidents</th>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <th># User stories</th>
      <td>70</td>
      <td>73</td>
    </tr>
    <tr>
      <th># User stories completed (All iterations)</th>
      <td>8</td>
      <td>11</td>
    </tr>
    <tr>
      <th># User stories completed (Last 5 iterations)</th>
      <td>8</td>
      <td>11</td>
    </tr>
    <tr>
      <th># User stories to complete</th>
      <td>64</td>
      <td>62</td>
    </tr>
    <tr>
      <th># Velocity - all iterations (Stories/Iteration)</th>
      <td>2</td>
      <td>2.2</td>
    </tr>
    <tr>
      <th># Velocity – last 5 iterations (Stories/Iteration)</th>
      <td>1.6</td>
      <td>2.2</td>
    </tr>
    <tr>
      <th># Iterations to complete ±2 (All iteration average)</th>
      <td><strong>32</strong></td>
      <td><strong>29</strong></td>
    </tr>
    <tr>
      <th># Iterations to complete ±2 (Last 5 iteration average)</th>
      <td><strong>40</strong></td>
      <td><strong>29</strong></td>
    </tr>
    <tr>
      <th>Comments</th>
      <td>
        <ul>
          <li>List of users not settling yet</li>
          <li>List of user stories not settling yet</li>
          <li>All user stories completed</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>List of users seems to have settled</li>
          <li>List of user stories not settling yet</li>
          <li>1 user story not completed</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

By looking at the table above you can probably draw a lot of conclusions about the health of the project. If you know how much the team costs per iteration, you can easily calculate how much the software will cost to complete based on the current understanding of what it means to be complete.

While this table is just an idea of what is possible, I would suggest that following the data as per the above is more accurate than asking developers to guess how long items will take to complete. Estimation is guessing and humans are bad at guessing. You will also gain lots of productive working hours if the team is not sitting in backlog refinement and poker planning  **guessing** meetings. 

## What about non user story work?

We cannot ignore the fact that there are things that development teams need to do that cannot be classified as user stories. These include:

- Non functional requirements including quality, performance and security.
- Setting up servers and other infrastructure.
- Dependency version upgrades.
- Production support issues.
- etc.

I would argue that most of the items above are part of the effort of user story development.

- A user story is not done if the quality is bad, the performance is inadequate and it is insecure.
- A user story is not done if it is not deployed to a production environment and setting up servers and infrastructure is part of the job. Your organization should have a platform team that makes these tasks simple for your teams to implement.
- Dependency version upgrades should not take a significant amount of time unless your software has been over engineered.
- Time should be set aside for production support issues etc.

In general we must accept that non user story work will happen. When it does the team's velocity will go down. Don't view velocity as a promise made ahead of the time, but rather a value that is measured after the fact. Then you can investigate and take action to avoid future velocity obstacles.

You can say, in the last iteration our velocity went down due to having many production issues. How can we prevent so many production issues to get the team moving faster again?

## What happens when all the user stories are done?

This is a great place to be. You no longer need to answer the question: "When will we be done?". You are done. You no longer need agile, iterations, velocities etc.

Your software is now in maintenance mode. Now you should be measuring different criteria and answer different questions. Consider switching to a Kanban approach where you measure the time from a new work item being reported to the time that it is done. Consider a new work item spending six weeks in the **Not started** column and then rapidly moving from the **In progress** to the **Done** done column in a single day. Agile would have measured how long it takes work items to move from **In progress** to **Done**. This is no longer your bottleneck. You need to measure how long items are spending in the **Not started** column and minimize this time.

If you later need to add a bunch of new user stories to your software. Do add these to the product overview. Launch a mini agile project to get this done. Agile will again help you answer the questions of *when will it be done* and *how much will it cost*.

## What if your project did not have a great opening?

I am sorry for your predicament and I do understand your team's pain. But there is hope. I would suggest following the software development opening principles and identify your users and user stories. Create a shared understanding of what you currently have and what still needs to be done. Agile can help you dig yourself out of the hole you find yourself in.

## Conclusion

I hope to have provided a new way to look at agile software development and user stories. I believe that these ideas can help software development teams be more productive and more fulfilled. The business and management will also feel more in control and have increased confidence in the team.

These opening principles work best at the start of a project, but can help even mature projects get back on track and in control to work down their user story development backlog.