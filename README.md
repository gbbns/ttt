This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Status

Data is retrieve from API call successfully, and each item is clickable.

Next steps would be to connect the pagination and search to the two relevant API end points.

There are a few CSS tweaks I'd like to have made, but, time was a factor.

### Since initial submission

- Broken pages down into smaller, single responsibility components - or as close to as possible (continually refactoring as I go)
- Added `swr` to enable react hook for data fetching for search

- Next up is to wire up the pagination form. Plan is to hit API, get current pagination data, set initial page to `1` then have an event handler on the select to update page when user has selected