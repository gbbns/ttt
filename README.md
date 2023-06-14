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
- ~Added `swr` to enable react hook for data fetching for search~ Hooked up search without needing SWR, have used the nextjs useSearchParams to get query param instead coupled with `router.push` method to trigger a new route
- Hooked up the search results page, and re-used some of the new components from earlier refactoring

- Need to add (better) error handling around search string, currently if no results are returned then the app fully errors, rather than a graceful generic error page.
- Next up is to wire up the pagination form. Plan is to hit API, get current pagination data, set initial page to `1` then have an event handler on the select to update page when user has selected
- Need to look at a way of combining the, current, three lib files for data retrieval
