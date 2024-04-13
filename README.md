This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## TODOs

- Use react context to save variables such as a collection of post metadata
- The 'last updated' value

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Some notes on NextJS

- This project uses the app router as opposed to the page router
- api routes can be defined in any api folder within or nested within the app folder
- Components are server rendered by default
- Add ```'use client'``` to make a component Client Rendered
- Non-NEXT_PUBLIC_ environment variables are only available in the Node.js environment, meaning they aren't accessible to the browser (the client runs in a different environment).
- Refer to this link for managing the private key used to access google drive api: https://console.cloud.google.com/iam-admin/serviceaccounts/
