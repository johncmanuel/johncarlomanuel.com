import { error, redirect } from "@sveltejs/kit";
import Links from "$lib/public/links";
import type { PageLoad } from "./$types";

export const load: PageLoad = (req) => {
  const url = req.url;

  // Remove forward slash
  const routeName = url.pathname.substring(1);

  const github = Links["github"] + routeName;

  // Check if url is valid
  try {
    new URL(github);
  } catch {
    throw error(404, { message: "Page not found" });
  }

  // Prioritize defined links first
  if (routeName in Links) {
    // @ts-ignore: ignore type error when reading from JSON
    const link: string = Links[routeName];
    throw redirect(307, link);
  }

  // Add some easter eggs. Hehe...
  switch (routeName) {
    case "404":
      throw error(404, { message: "Page not found" });
    case "418":
      throw error(418, { message: "I'm a teapot" });
    case "500":
      throw error(500, { message: "Internal server error" });
  }

  // Redirect to GitHub
  throw redirect(307, github);
};
