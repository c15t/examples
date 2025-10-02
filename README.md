<p align="center">
  <a href="https://c15t.com?utm_source=github&utm_medium=repopage_%40c15t%2Ftranslations" target="_blank" rel="noopener noreferrer">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/c15t/c15t/raw/main/docs/assets/c15t-banner-readme-dark.svg" type="image/svg+xml">
      <img src="https://github.com/c15t/c15t/raw/main/docs/assets/c15t-banner-readme-light.svg" alt="c15t Banner" type="image/svg+xml">
    </picture>
  </a>
  <br />
  <h1 align="center">c15t: examples</h1>
</p>
&nbsp;
This repository contains examples that use [c15t](https://c15t.com).

## Included Examples

- [astro-react](./astro-react/) - using astro + react + c15t
- [cloudflare-worker](./cloudflare-worker/) - using cloudflare worker + c15t
- [next](./next/) - using next.js app router + c15t
- [next-pages](./next-pages/) - using next.js pages router + c15t
- [next-self-host](./next-self-host/) - using next.js with self-hosted c15t
- [svelte](./svelte/) - using svelte + c15t
- [vite-react](./vite-react/) - using vite + react + c15t

## Running Examples

Install dependencies

```bash
pnpm install
```

For running the examples, run the below command and replace `[workspace]` with the example name.

```bash
pnpm -w [workspace] run dev
```

Or if you have cloned a specific example, you can follow the instructions in the example's README.

### For deno examples

```bash
deno run --allow-net hello.ts
```

or allow to read files on local disk:

```bash
deno run --allow-net --allow-read jsx.tsx
```

### For bun examples

Install dependencies

```bash
bun install
```

Run the example

```bash
bun run hello.ts
```

## License

Distributed under the MIT License.

---

**Built with ❤️ by the [consent.io](https://www.consent.io?utm_source=github&utm_medium=repo_homepage) team**
