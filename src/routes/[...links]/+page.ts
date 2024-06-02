import { error, redirect } from "@sveltejs/kit";
import Links from "$lib/public/links";

export const load = (req) => {
  const url = req.url;
  // Remove forward slash
  const routeName = url.pathname.substring(1);
  if (routeName in Links) {
    // @ts-ignore
    const link: string = Links[routeName];
    throw redirect(307, link);
  }
  throw error(404, { message: "Not found" });
};
