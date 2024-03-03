# Personal Websites monorepo

This is a monorepo built to store the personal websites of [Srish](https://srish.me) & [Shreyans](https://shreyans.co).

## What's inside?

It uses turbo from Vercel to orchestrate builds. Here's the stack:

- Next.js & React
- TypeScript
- TailwindCSS
- Sanity Headless CMS

## Here's some features that are either already there, or planned:
- "common" package to share components / utility functions between both websites
- All components would should be customisable to allow different design language for each website.
- All content is stored on Sanity, to make sure it's easy to copy an app, and create another one.
  - Pages are built using Sanity, except the blog post page, which at the moment, only shows the post content.
- Blog functionality
  - A blog post can contain a cover image, title, description, and rich-text body.
  - A blog post can possibly be locked requiring password to access.
  - All images use a custom Image gallery with features such as zooming & panning.
