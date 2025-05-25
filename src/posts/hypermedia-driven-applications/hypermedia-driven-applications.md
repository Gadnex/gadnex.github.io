---
title: Hypermedia Driven Applications
date: 2025-05-25
"tags": [
  "hypermedia", "front-end", "HTMX", "Datastar"
]
---

## Introduction

In this post I want to look at the new term [Hypermedia Driven Application (HDA)](https://htmx.org/essays/hypermedia-driven-applications/) coined
by [Carson Gross](https://www.cs.montana.edu/directory/2256398/carson-gross), the creator of the hypermedia framework [HTMX](https://htmx.org/).

I want to explore why web development trends moved from Multiple-Page Applications (MPA)
to [Single-Page Applications (SPA)](https://en.wikipedia.org/wiki/Single-page_application). I also want to explore why MPAs are having a resurgence in
the form of the HDA.

I will also look at two HDA technologies, namely [HTMX](https://htmx.org/) and [Datastar](https://data-star.dev/), and compare them to native HTML and Vanilla JavaScript solutions. 

## How the web started

When the web started and HTML was developed, the idea was very simple. HTML was a way to mark up static text to be displayed in a readable way and
allowing the reader to navigate around using hyperlinks. The first ever web page is still available today and can be
found [here](https://info.cern.ch/). The web quickly took on a life of its own and developers have pushed the web forward ever since. As the web needed to
do more, new technologies evolved and development trends changed.

When simple web pages for reading text turned into applications where users could do more, these web applications were MPAs. There were two methods of
navigating between pages:

- The Anchor **&lt;a&gt;** HTML tag for navigating to another page.
- The Form **&lt;form&gt;** HTML tag for sending data to the web server.

Both of these mechanisms resulted in the web browser window being refreshed with a new page. This new page displayed either the new page navigated to
or the result of submitting the form.

### What was wrong with this approach

The MPA approach to developing web applications did work, but had significant problems with user experience. For example:

- The user would see a white flash every time the new page was loaded.
- If the user was scrolled down a table of data and hit the refresh button to see the latest data on the server, the refreshed page would be at the
  top again and the user would have to scroll down again to find the place they were before.
- If audio or video was playing and the user refreshed the page, the audio/video would stop and would then play from the start.
- If the user had completed non-submitted data on a form, the data would be lost.
- If the user had highlighted some text, the highlight would be lost.
- May more such problems exist, but I will focus on the problems above for this post.

## Problem example

Below is an HTML example with a YouTube video embedded inside an **&lt;iframe&gt;** tag.
It is followed by an **&lt;input&gt;** field.
Then there is a **&lt;table&gt;** with some date that could be from a database.
Finally we have an **&lt;a&gt;** tag styled like a button to refresh the current page in case the data changed. *The data will not actually change as this is a static HTML page.*

<div id="example"></div>
<div id="fragment1"></div>
<iframe width="560"
        height="315"
        src="https://www.youtube.com/embed/aqz-KE-bpKQ?si=oqXa6VL94h3rNFSy"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen></iframe>
<div id="fragment2"></div>
<p>
    <label>
        Name:
        <input type="text" name="name" id="name">
    </label>
</p>

<table id="data-table">
    <thead>
    <tr>
        <th scope="col" class="center">Name</th>
        <th scope="col" class="center">Phone</th>
        <th scope="col" class="center">Email</th>
        <th scope="col" class="center">Country</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Colton Boyle</td>
        <td>(948) 870-4245</td>
        <td>suspendisse.eleifend@protonmail.couk</td>
        <td>Indonesia</td>
    </tr>
    <tr>
        <td>Gabriel Herrera</td>
        <td>(844) 846-3120</td>
        <td>ante.nunc@aol.com</td>
        <td>Ireland</td>
    </tr>
    <tr>
        <td>Yeo Murphy</td>
        <td>(789) 221-9558</td>
        <td>in.lorem.donec@icloud.edu</td>
        <td>Poland</td>
    </tr>
    <tr>
        <td>Elton Hodges</td>
        <td>1-227-811-6393</td>
        <td>aliquam.ultrices@google.org</td>
        <td>Costa Rica</td>
    </tr>
    <tr>
        <td>Wayne Casey</td>
        <td>1-217-852-3770</td>
        <td>non@aol.net</td>
        <td>France</td>
    </tr>
    </tbody>
</table>
<p>
    <a href="/posts/hypermedia-driven-applications/"
       role="button">
        Refresh with hyperlink
    </a>
    <a href="/posts/hypermedia-driven-applications/"
       role="button"
       id="jsButton">
        Refresh with vanilla JS
    </a>
    <a href="/posts/hypermedia-driven-applications/"
       role="button"
       hx-get="/hypermedia-data/htmx-data/"
       hx-target="#data-table"
       hx-swap="outerHTML">
        Refresh with HTMX
    </a>
    <a href="/posts/hypermedia-driven-applications/"
       role="button"
       data-on-click__prevent="@get('/hypermedia-data/datastar-data/')">
        Refresh with Datastar
    </a>
</p>
<script>
  const jsButton = document.getElementById("jsButton");
  jsButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    replaceHTML("/hypermedia-data/js-data/", "data-table");
  });
async function replaceHTML(url, targetId) {
try {
const response = await fetch(url);
const html = await response.text();
const target = document.getElementById(targetId);
target.outerHTML = html;
} catch (error) {
console.error('Error fetching:', error);
}
}
</script>
<script src="https://unpkg.com/htmx.org@2.0.4"></script>
<script type="module"
        src="/datastar-v1.0.0-RC8.js">
</script>

### Instructions

Do the following:

- Play the YouTube video
- Fill some text in the name text field
- Highlight this instruction text
- Click the **Refresh with hyperlink** button

### What happened

You would have noticed the following:

- The entire web page was refreshed and you saw the top of the page again.
- You needed to scroll down again to see the example again and continue reading.
- While web browsers have gotten much faster and the white screen flash is mostly a thing of the past, the YouTube video will still have the white flash today.
- The Youtube video stopped playing and when you hit the play button it will start to play from the start.
- The text you entered in the text field is gone.
- The highlighted instruction text is no longer highlighted.

### The code

Here is the code for the button you clicked:

```html
<a href="/posts/hypermedia-driven-applications/"
   role="button">
    Refresh with hyperlink
</a>
```

This is just a simple anchor tag that specifies the page to navigate to, which happens to be the same page in this case. The role="button" is just used for CSS styling purposes to style the anchor like a button.

## JavaScript to the rescue

Early on developers started to use JavaScript to circumvent the problems of HTML as per the example above. We will look at how JavaScript could improve the behaviour of our example.

Follow the [instructions](#example) above again, but this time click the **Refresh with JS** button.

### What happened

You would have noticed the following:

- The text of the table was updated with new data
- The YouTube video kept playing
- The text you entered in the text field is still there
- The highlighted text is still highlighted.

This is certainly a big improvement.

### The code

Here is the code for the JS button you clicked:

```html
<a href="/posts/hypermedia-driven-applications/"
   role="button"
   id="jsButton">
    Refresh with vanilla JS
</a>
```

Only an **id** was added to the button so the JavaScript code can attach an event to the button.

```javascript
const jsButton = document.getElementById("jsButton");
jsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  replaceHTML("/hypermedia-data/js-data/", "data-table");
});

async function replaceHTML(url, targetId) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const target = document.getElementById(targetId);
    target.outerHTML = html;
  } catch (error) {
    console.error('Error fetching:', error);
  }
}
```

This JavaScript code uses modern features like the fetch API and promises, but it is still a lot of code for such a simple idea. I looked at JQuery, but its code was not really more concise.

## The rise of the SPA

With developers having to write so much JavaScript to make good web applications, they looked for ways of writing better and more concise JavaScript. Somewhere along the line the idea arose to just do everything in JavaScript on a single HTML page. This included the paradigm shift to render HTML in the browser using JavaScript rather than on the server. The server would thus only send and receive data in the form of JSON, instead of HTML.

### Advantages

SPAs do have some advantages:

- Server resources would not be used for rendering HTML.
- The users device (desktop or mobile) would carry the load of rendering HTML.
- The single HTML page, CSS and JavaScript could be cached in the browser and speed up page loads on subsequent site visits.
- There is a potential for creating applications that can operate offline for some features and sync data to the server when the connection to the internet is restored.
- Some types of applications like Google Maps, Google Docs, Office Online, Photoshop Online etc. that would be difficult or impossible to implement with an MPA became possible.

### Disadvantages

But SPAs also have some disadvantages:

- Bloated and excessive javascript downloads slowing down page loads and consuming a lot of bandwidth.
- Slow web applications due to [inappropriate use of SPAs](https://infrequently.org/2023/02/the-market-for-lemons/).
- Web applications that don't perform well on low-end hardware.
- Too many SPA frameworks competing for market share and each having its own domain specific language to learn. While competition is a good thing, it does create a scenario where many web developers know a little bit about many different frameworks, but are not experts at any framework. This in turn leads to poorer quality code being written.
- SPA architectures introduce a lot of complexity to the applications as a whole. While most of the logic is moved from the server to the browser, these concerns don't simply disappear on the server. The server does not need to render HTML, but needs to render JSON instead. The browser needs to take care of security, but the JSON API endpoints on the server still need to be secured. This additional complexity slow down development teams and cause additional issues in the code, because there is more code to have issues.

While SPAs certainly have their place in the world, I believe the idea that every web page and web application should be an SPA is wrong. If you have a static web page like this blog, there is no need for an SPA. If your application is about getting text from a screen into the database and from the database back to a screen, then an SPA is overkill.

More recently the SPA world has independently rediscovered the advantages of rendering HTML on the server with JavaScript frameworks such as [Next.js](https://nextjs.org/) and React's React Server Components that do Server Side Rendering (SSR).

## What is old is new again

> The **Hypermedia Driven Application (HDA)** architecture is a new/old approach to building web applications. It combines the simplicity & flexibility of traditional Multi-Page Applications (MPAs) with the better user experience of Single-Page Applications (SPAs).
> <cite>--htmx.org</cite>

The HDA architecture achieves this goal by extending the existing HTML infrastructure of the web to allow hypermedia developers to create more powerful hypermedia-driven interactions without having to write JavaScript. This is achieved by adding additional HTML attributes to your HTML tags. These additional attributes are detected by the HDA client library and ads the enhanced behaviours without the developer having to write any JavaScript.

HDA client libraries are not anti-JavaScript. They are written in JavaScript to make the desired behaviours declarative in HTML.

## HTMX example

Follow the [instructions](#example) above again, but this time click the **Refresh with HTMX** button.

### What happened

You would have noticed that the behaviour is basically the same as the vanilla JS example, but the difference lies in the code that the developer had to write to achieve this efect.

### The code

Here is the code for the HTMX button you clicked:

```html
<a href="/posts/hypermedia-driven-applications/"
   role="button"
   hx-get="/hypermedia-data/htmx-data/"
   hx-target="#data-table"
   hx-swap="outerHTML">
  Refresh with HTMX
</a>
```
The anchor tag is basically the same as the plain HTML example, with 3 additional attributes added:

- **hx-get** - Tells HTMX to do a HTTP GET to this URL when the anchor is clicked. The default trigger for all HTML tags except forms is a **click** event.
- **hx-target** - Tells HTMX which HTML tag to replace with the response of the get request. The *#data-table* is a CSS selector indicating a tag with an id of data-table. 
- **hx-swap** - Tells HTMX to replace the outer HTML of the targeted HTML tag, instead of the default inner HTML.

I think this is definitely a lot better than the vanilla JavaScript we had to write before.

## Datastar example

Follow the [instructions](#example) above again, but this time click the **Refresh with Datastar** button.

### What happened

You would have noticed that the behaviour is basically the same as the vanilla JS example.

You will also notice the addition of some text in red immediately above and below the YouTube video. This is to demonstrate the Datastar's ability to update multiple HTML fragments in the page. Technically HTMX has this features as well in the form of [out-of-band (oob) swaps](https://htmx.org/attributes/hx-swap-oob/), but Datastar makes this simpler to implement.

### The code

Here is the code for the Datastar button you clicked:

```html
<a href="/posts/hypermedia-driven-applications/"
   role="button"
   data-on-click__prevent="@get('/hypermedia-data/datastar-data/')">
  Refresh with Datastar
</a>
```

The anchor tag is basically the same as the plain HTML example, with one additional attribute added.

- All Datastar attributes start with **data-***, which is part of the [HTML standard](https://developer.mozilla.org/en-US/docs/Web/HTML/How_to/Use_data_attributes). This is also where the name Datastar comes from.
- data-on-**click** tells Datstar to trigger on the click event.
- **__prevent** tells Datastar to prevent the default behaviour of the anchor tag.
- **@get** tells Datastar to issue a HTTP GET request to the URL.

You will notice that there is no equivalent to the HTMX hx-target and hx-swap attributes. This is because Datastar uses a merging strategy from a JavaScript library called [Idiomorph](https://github.com/bigskysoftware/idiomorph). With this strategy every root HTML tag in the HTTP response must have an id. Datastar then looks for an HTML tag in the existing HTML page with the same id and then morphs rather than replaces the changes. This means that if some HTML did not change, it will not be replaced. This has some additional performance improvements.

### Disclaimer

In the above example I made use of a new feature of Datastar not currently available in the latest public beta release. Version 1.0.0 of Datastar should be available soon and at that point this feature will be generally available.

## What makes Datastar better

I really do believe that the replacement of hx-target and hx-swap with a morphing strategy is a great improvement. In the case of HTMX, the decision of which HTML tag to target and how to swap the response is done before the anchor tag is clicked. In fact, this decision was made when the original HTML page was rendered on the server.

In the case of Datastar, the decision is made after the anchor tag is clicked. The server makes this decision when the response HTML is rendered. This means that the server can choose to target and swap different HTML tags depending on the state on the server at that time. For example, a different state for a successful and unsuccessful request. I believe that developers will be able to take advantage of this small difference and craft even better user experiences using Datastar.

Datastar has many other great features such as client side reactivity which with HTMX requires the developer to either write JavaScript code or use another library such as [Alpine.js](https://alpinejs.dev/). Datastar is also smaller in size than HTMX and Alpine.js and less than half the size of the two combined.

Datastar's primary and suggested way of implementing server side reactivity is using [Server Sent Events (SSE)](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events), which also opens up the ability for so called "Multi-Player" applications. When one user of the web application performs an action that alters the state on the server, multiple connected clients can be updated asynchronously.

These additional abilities go far beyond the scope of this post, so I will not go into more detail.

## Conclusion

I showed how web development started and evolved to the current state where SPAs are the norm.

I also gave an introduction to the idea of HDAs, and that it could be a viable alternative to developing SPAs.

If you are interested in developing web applications faster and cheaper, then why not give HDAs and Datastar a try. I bet you will have fun.