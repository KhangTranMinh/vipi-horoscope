This is a [Next.js](https://nextjs.org) horoscope prototype that can be deployed to GitHub Pages as a static site.

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

The main UI lives in `src/app/page.tsx`. The page auto-updates as you edit it.

## Build for Production

```bash
npm run build
```

This project uses Next.js static export mode, so the production build is generated into the `out/` directory.

## Deploy on GitHub Pages

The repository includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

To finish deployment in GitHub:

1. Open the repository settings.
2. Go to Pages.
3. Set Source to `GitHub Actions`.
4. Push to `main`.

Once the workflow finishes, the site will be published at:

`https://khangtranminh.github.io/vipi-horoscope/`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for other hosting targets.
