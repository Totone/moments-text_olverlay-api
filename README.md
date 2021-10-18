# Moments Overlay Effects API

A service for SteelSeries Moments software.  

Computes the request to make a request to ffmpeg api to add visual effects on an input video.  

For now, handles only text effects overlay on a given video.

## Getting started

### Setup

You need npm (or yarn) to run the project on your computer

1. Download or clone this repo
2. Install dependencies `npm install`
3. Set config values in `.env` file

Project is ready

### Dev

- `npm run dev` starts a dev server to develop app.
- `npm run dev:watch` works like npm run dev but server refreshes on each save on a file.
- `npm run test` starts a process of tests.
- `npm run test:watch` works like npm run watch, tests refreshes on each save on a file.

Please use eslint & prettier coding tools to format code.

### Build

Run `npm run build` to build the app & get a deployable server, created in the `dist/` folder.

### Deploy

You can deploy the app in a server using `dist/` folder created with npm run build.

You can run `npm run start` to emulate a server.

## Features

- [x] Text effect overlay
- [] Video effect overlay

## Commit convention

### Commit pattern

```html
    <TYPE> <SUBJECT>

    <DESCRIPTION>
```

- Only the 1st line is mandatory
  - Has to be as explicit to be understood using `git log --oneline`
- `SUBJECT` is a short sentence explaining the project state **AFTER** this commit
  - ex: `feat: src/components/ created to store app components`
- `DESCRIPTION`
  - Free text field giving details about the commit
  - Includes errors & breaking changes descriptions if necessary

#### Emojis

- WIP: 🚧
- Error added: 🔥
- Breaking change: 💥

### Commit Types

#### 🌱 init

Inits the repository

#### 🎉 feat

Indicates that a new feature is added

#### ⚡️ perf

Indicates that the code is upgraded - code splitted, deleted, refactored, comments added,..

#### 🚑️ fix

Indicates that about a bug resolution

#### 🔒️ test

Indicates that commit is about tests changes

#### 📝 docs

Indicates that commit is about documentation changes

#### 🔧 chor

Indicates that commit is about something else - project structure, dependencies added|removed, CI/CD config changes,..

## Notes (role play off)

I decided to implement tests on this project. As I said during the first interview, I didn't practise tests for a while, that's why I though it would be a good idea to practise.

For this reason, it took me more time than expected. As I had a lot of work to do last week, I couldn't free much time to do the test, so I did it this weekend.

I structured the project to be able to add some other features like video overlays.
