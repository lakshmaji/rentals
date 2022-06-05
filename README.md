# Rentals

This is a monorepo consists of API built using [Nest](https://nestjs.com/) and a web application built using [React](https://reactjs.org/).

## What's inside?

This uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org) app
- `web`: a [React.js](https://reactjs.org/) app
- `api`: a [Nestjs](https://nestjs.com/) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Setup

```bash
$ cd rentals
$ yarn install
```

### Build

To build all apps and packages, run the following command:

```
$ cd rentals
$ yarn run build
```

### Develop

To develop all apps and packages, run the following command:

```
$ cd rentals
$ yarn run dev
```