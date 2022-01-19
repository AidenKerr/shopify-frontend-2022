# Shopify Frontend

I wanted to design the image feed in a way that would make it easily reusable. New feeds can be created by creating a wrapper component that supplies the data in the correct format. As an example, I created two wrappers, which you can select on the front page.

The wrappers allowed me to have unique control panels, API calls, and functions to format data. This could be improved if it were written in TypeScript, or at least had property annotations, so that it is clear to the developer how they can use it.

For the likes saving feature, I initially set it up to save the "liked" state for every single post. I realized quickly how much this would pollute the local storage, so now it only saves the posts that are actually liked.

I designed my website so that the page could be navigated with tabs in a way that made sense. I also used semantic HTML and aria attributes to improve accessibility.

There's still more that could be done to improve this application.
For example, the API fetching method could be improved. Currently there is a memory leak if the component unmounts before the data is returned. This could be solved with a useEffect cleanup function.
Another improvement would be generating URLs for different control panel options, so image feeds can be shared directly. 


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
