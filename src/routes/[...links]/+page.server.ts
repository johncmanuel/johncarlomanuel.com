import { error, redirect } from "@sveltejs/kit";
import Links from "$lib/public/links";
import type { RequestEvent } from "./$types";

export const load = (req: RequestEvent) => {
  const url = req.url;
  const routeName = url.pathname.substring(1);
  if (routeName in Links) {
    // @ts-ignore
    const link: string = Links[routeName];
    throw redirect(307, link);
  }
  throw error(404, { message: "Not found" });
};
