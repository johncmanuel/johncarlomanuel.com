# johncarlomanuel.com

Personal website version 4 i think.

Some ideas that came to mind as of now:

1. custom retro-like game library at games.johncarlomanuel.com or hidden inside the 404 page
   -> would contain fighting, card, puzzle, and platform single-player games, all built into website.
   will keep it simple tho, i don't want to overwhelm myself.  
    -> reference for this: <https://www.reddit.com/r/sveltejs/comments/wq27w1/i_made_some_games_using_svelte/>
   -> could experiment with running Ren'Py visual novels in browser using WebAssembly. see <https://www.renpy.org/doc/html/web.html>.
   this would possibly require a server to serve these games.
2. cool 404 page platformer game (currently working on it)
3. add special fx on website according to the dates
   -> i.e snowflakes falling from top of screen to down during December
   -> can be a game where you click snowflakes and get points saved in localstorage
4. maybe a `/setup` for current set ups on all machines i use?

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
