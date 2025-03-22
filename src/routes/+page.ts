import type { PageLoad } from "./$types";
import { XMLParser } from "fast-xml-parser";
import type { Post } from "$lib/types/post";
import Links from "$lib/public/links";
import type { Story } from "$lib/types/stories";
import { decode } from "html-entities";

export const load: PageLoad = async ({ fetch }) => {
  const blogUrl = `${Links["blog"]}rss.xml`;

  const parser = new XMLParser();
  const numItemsToSend = 3;

  const [blogData] = await Promise.all([fetchRSS(blogUrl)]);

  const blogPosts: Post[] = blogData ? parser.parse(blogData).rss.channel.item : [];

  blogPosts.sort((post1, post2) => {
    const d1 = new Date(post1.pubDate);
    const d2 = new Date(post2.pubDate);
    return d2.getTime() - d1.getTime();
  });

  const recentPosts = blogPosts.slice(0, numItemsToSend);

  return { recentPosts };
};

const fetchRSS = async (url: string) => {
  try {
    new URL(url);
  } catch {
    console.error(`Invalid URL for`, url);
    return null;
  }

  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`Failed to fetch data for`, url);
      return null;
    }
    const data = await res.text();
    return data;
  } catch (err) {
    console.error(`Error fetching data:`, err);
    return null;
  }
};

const cleanText = (text: string): string => {
  const decoded = decode(text, { level: "xml" });
  return decoded;
};
