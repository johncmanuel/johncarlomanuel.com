import type { PageLoad } from "./$types";
import { XMLParser } from "fast-xml-parser";
import type { Post } from "$lib/types/post";
import Links from "$lib/public/links";

export const load: PageLoad = async ({ fetch }) => {
  const blogUrl = `${Links["blog"]}rss.xml`;

  // Check if URL is valid
  try {
    new URL(blogUrl);
  } catch (err) {
    return {};
  }

  const res = await fetch(blogUrl);
  if (!res.ok) {
    return {};
  }
  const data = await res.text();

  const parser = new XMLParser();
  let blogData = parser.parse(data);

  const posts: Post[] = blogData.rss.channel.item;

  // sort by most recent posts
  posts.sort((post1, post2) => {
    const date1 = new Date(post1.pubDate);
    const date2 = new Date(post2.pubDate);
    return date2.getTime() - date1.getTime();
  });

  const numRecentPosts = 3;
  const recentPosts = posts.slice(0, numRecentPosts);

  return { recentPosts };
};
