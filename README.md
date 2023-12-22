# Dradha app

## What is it?

A collection of resources and modules for learning and productivity. 

## References

General Next.js app structure for reference.

```
src
.
├── app                       (only for routing)
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx              (dradha.co/)
│   └── v                     (dradha.co/v/) -> empty directory/refresh to main
│       ├── layout.tsx
│       ├── page.tsx
│       └── (users)
│           ├── layout.tsx
│           └── [user].tsx    (dradha.co/v/[user]) -> user's main dashboard
│
├── components/               (base components)
│   ├── common/
│   ├── layout/
│   ├── modals/
│   └── primitives/
│
├── lib 
│   ├── nextauthprovider.tsx  (passes next-auth Providers through entire app)
│   ├── store.ts              (store for zustand state)
│   └── ...                   (other library-related files)
│
├── pages 
│   ├── _app.tsx
│   └── api/                  (routes for api for authentication)
│       └── auth/
│           └── [...nextauth].ts
│
├── types                     (define types)
│   └── next-auth.d.ts  
│
└── utilities
    ├── api/                  (api-related functions)
    └── helpers/              (other helper functions)       
```


<hr>


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
