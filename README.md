# Sample monorepo

Based on the [Monorepo Style Guide][guide], with some tweaks:

- Use npm v7 instead of yarn
- Use TypeScript

[guide]: https://monorepo.guide/

## How to use

```bash
# install dependencies (this will also build packages/* and services/*)
npm install

# start in dev mode in one terminal
npm run dev:api

# start in dev mode in another terminal
npm run dev:web

# add dependency zod to package @demo/name
npm -w @demo/name install zod -E

# run script build in package @demo/name
npm -w @demo/name run build

# add a new package (may need to update the package.json name)
npm init -w ./packages/name

# ensure package is correctly configured for preconstruct
npx preconstruct fix
```

## Recommended reading

- https://monorepo.guide/getting-started
- https://monorepo.guide/thinking-in-monorepos
- https://docs.npmjs.com/cli/v7/using-npm/workspaces
- https://preconstruct.tools/
- https://github.com/Thinkmill/manypkg
