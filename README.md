# johncarlomanuel.com

Personal website version version 4. Aside from showing the usual information on a portfolio site, this will embed some cool stuff (on the frontend) such as video games and visuals.

Some ideas that came to mind as of now:

1. custom retro-like game library
   -> would contain fighting, card, puzzle, and platform games, all built into website.
   will keep it simple tho, i don't want to overwhelm myself.
   -> would need to use a node server for websockets if wanting to build multiplayer games
   -> could experiment with running Ren'Py visual novels in browser using WebAssembly. see <https://www.renpy.org/doc/html/web.html>.
   this would possibly require another server to serve these games.
2. blog (carry over blog posts from personal website v3)
3. webring with close friends
   -> see Diamond's webring: <https://github.com/diamondburned/acmfriends-webring>

## create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
