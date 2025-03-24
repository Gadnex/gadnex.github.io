# gadnex.github.io
My Github pages repository for my personal blogging site

## Installation

The project uses [Eleventy](https://www.11ty.dev/) to generate a static site from [Markdown](https://www.markdownguide.org) text. [Node JS](https://nodejs.org/) is used to run Eleventy. 

Install Node JS and run: 

```bash
npm install
```

## Run eleventy locally

To run eleventy locally run:

```bash
npx @11ty/eleventy --serve
```
The static HTML site will be generated into the `_site` folder that is not checked into Git.

## Build static site for production

GitHub Actions is use to build the static site into a Git branch called `gh-pages` using the pipeline `.github\workflows\deploy.yml`.
