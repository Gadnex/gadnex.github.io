---
title: Understanding story points
description: This blog post critiques the common misuse of story points in Agile software development, arguing that teams often treat them as fixed time estimates rather than relative effort measures, which undermines their purpose; it highlights pitfalls like inconsistent estimation practices and suggests that simply counting user stories—as advocated by the &#35;NoEstimates movement—can be more effective for project forecasting.not gaining the intended benefit of story points.
date: 2025-06-23
"tags": [
  "Agile", "Project Management", "Planning"
]
---

## Introduction

When developing software, there is always someone paying the bills and they want to know how long will it take and how much will it cost. In the past software developers were asked to create work breakdown structures and then estimating work items. This never led to accurate answers to the above questions.

Then agile entered with a different approach. Focus on delivering value in short incremental iterations instead of trying to predict the future. But these questions remained and story points were invented as a proxy for time based estimates.

In this blog post I will unpack my thoughts about story points and highlight some common pitfalls that I have identified.

## What are story points?

> Story points are estimates of effort as influenced by the amount of work, complexity, risk and uncertainty.
> <cite>-- [mountaingoatsoftware.com](https://www.mountaingoatsoftware.com/blog/what-are-story-points)</cite>

Story points are estimates of effort. The article from the quote above states that this effort is a question of time. How long will it take to finish something. What is important about story points is that they are always relative. If one story is 1 story point and a second story is 2 story points, we estimated that the second story will take twice as long to complete. But we still have no idea how many hours or days either story will take to complete. In theory, if we actually complete either one of the two stories and measure how many hours or days it took, we can use this relative estimate to estimate the completion for the other.

## How teams use story points

In practice I find that most teams do use story points as a unit of time. But teams do not make story points relative.

Image a team sitting in a poker planning session, discussing a story for a few minutes and then deciding to vote on the number of story points. What a developer might do is estimate the number of hours or days and then conversing this estimate to story points using some loosely defined rules. For example:

<table>
    <thead>
        <tr>
            <th>Story points</th>
            <th>Time</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>1</th>
            <td>1 hour</td>
        </tr>
        <tr>
            <th>2</th>
            <td>1 day</td>
        </tr>
        <tr>
            <th>3</th>
            <td>2 days</td>
        </tr>
        <tr>
            <th>5</th>
            <td>5 days</td>
        </tr>
        <tr>
            <th>8</th>
            <td>10 days (Whole sprint)</td>
        </tr>
        <tr>
            <th>&gt;8</th>
            <td>Too big. Split story.</td>
        </tr>
    </tbody>
</table>

A team would never publish such a table to the team wiki for the fear of being held accountable for not delivering work items on time.

What most likely happens when a new developer joins the team is that they join a poker planning meeting, listen to the discussion of the story and picking one of the 5 numbers  based on the feeling of what they heard. If they guess the same as the rest, they are not questioned. If they pick a different number, they are asked to explain why, which is uncomfortable. Over time this new developer is trained like a AI neural network to estimate the same as the rest of the team.

Now and again a developer exposes the fact that the emperor has no clothes by asking the uncomfortable question. In our team, how much is a story point? Someone would likely verbally reveal the conversion table they use and swiftly move on.

I will argue that during this process the story is not compared relatively to other stories and the result would not be an accurate relative estimate.

## Story point logarithmic scale

When looking at the example conversion table from the previous section you will notice that it has a logarithmic scale.

Consider a team that completed 30 one point user stories in a sprint. Their velocity is <kbd>30 x 1 = 30</kbd> story points per sprint. In the next sprint the team completed 6 five point user stories in the sprint. Their velocity is <kbd>6 x 5 = 30</kbd> story points per sprint. The team's velocity remained constant and the scrum master is happy.

But use the conversion table to do the same calculation in hours. The fist sprint has <kbd>30 x 1 hour = 30 hours</kbd> of work completed. The second sprint had <kbd>6 x 5 days x 8 hours = 240 hours</kbd>. Something is clearly wrong. We don't know if the team didn't work hard in the first sprint and worked hard in the second, or if the estimates were completely unreliable.

This illustrates another reason why story points need to be relative.

## Long term estimates

If we measure that we completed 50 story points in a 2 week sprint, then in the next sprint we should again be able to complete 50 story points. This conclusion is based on the assumption that the story points are all relative to one another. If they are not, we cannot reach such a conclusion.

Without being able to rely on the assumption that story points are relative, we cannot use our team velocity to calculate longer term estimates. For example, our team's velocity is 50 story points per sprint and we have 500 story points in the backlog. Thus we can calculate <kbd>500 / 50 = 10 sprints</kbd>. This calculated end date and associated cost would be unreliable.

## Assigning story points to all backlog items

In the section example above we stated that there are 500 story points in the backlog. How could we know this if we do not have some confidence that we have identified all of the user stories that still needs to be completed. We also could not know this if all of the backlog items have not been estimated and assigned story points.

Poker planning meetings take a lot of time. It is not uncommon to spend an hour to estimate 5 stories. If we have hundreds of items in our backlog, estimating them all up front is not feasible. Thus calculations as per the previous example would not be possible if the backlog is not complete and short.

This means we need fewer bigger stories to make such calculations and they cannot be so big that they would not fit into a single sprint. 

## Relative estimation is hard

Consider the following 2 user stories:

```text
As a healthcare provider
I want to record a patient interaction
so that we can build a clear log with a timeline for all patient interactions
```

```text
As a software developer
I want to add the patient interaction table to the database
so that we can persist a complete list of patient interactions for auditing purposes 
```

Trying to relatively estimate these two user stories would be trying to compare apples to <del>oranges</del> <ins>apple farms</ins>. Not an easy task.

The first user story is a functional user story expressing a requirement of the software. The second user story is a technical user story that is really a task for a development team member masquerading as a user story. Each functional user story would likely require many (30+) technical tasks to complete, depending on how fine grained the team would like to break down tasks.

So, if the technical story is estimated as 1 story point, the functional story would be 30+ story points and scrum would dictate that the story is too big and needs to be split.

This idea is going the wrong way. We cannot possibly identify all the technical tasks and estimate them all early in a project. That would be trying to do exactly what big upfront design and big upfront planning tried to do.

It is thus important to identify all user stories on functional level early in the project and estimating them relatively.

## #NoEstimates

Considering what was said before, things are looking very grim. But there is some hope. Vasco Duarte explained in his book [#NoEstimates](https://oikosofyseries.com/) that estimating user stories in story points is not required. This gave birth to the #NoEstimates movement.

In short, Vasco Duarte studied data from around 2000 agile projects that had been completed. This data contained all the stories and their estimated story points. He used the story points and team velocities (story points per sprint) to predict the project end date. He also just counted the number of stories completed and the team velocity (stories per sprint) and predicted the project end date. This is equivalent to saying that all stories are 1 story point. He also knew that actual end dates of the projects. He could determine for every project which estimation method produced the more accurate end date. He found that just counting the number of stories led to more accurate predictions than estimating story points.

Vasco suggests that teams do not spend time estimating story points, but rather investing this time in identifying and refining user stories.

## Identifying user stories

In my [previous blog post](/posts/software-development-opening-principles/) I described why it is important to identify all user stories up front on a functional level. I also explained the process I follow to do this and put to rest the fears of this being big upfront design. It is also important to keep the list of user stories up to date as our understanding of the requirements evolve.

## Conclusion

In this blog post I described what story points are and how they are intended to be used. I also explained how teams often misunderstand story points and thus not gaining the intended benefit of story points.

I also gave some practical suggestions how to avoid common problems of story points and maybe even avoiding story points completely.