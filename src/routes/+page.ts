import type { PageLoad } from "./$types";
import { XMLParser } from "fast-xml-parser";
import type { Post } from "$lib/types/post";
import Links from "$lib/public/links";

export const load: PageLoad = async ({ fetch }) => {
  // todo: get link from jsonldsite rather than links
  const blogUrl = `${Links["blog"]}index.xml`;
  const numItemsToSend = 3;
  const parser = new XMLParser();

  const blogData = await fetchRSS(blogUrl, fetch);
  const blogPosts: Post[] = blogData ? parser.parse(blogData).rss.channel.item : [];
  blogPosts.sort((post1, post2) => {
    const d1 = new Date(post1.pubDate);
    const d2 = new Date(post2.pubDate);
    return d2.getTime() - d1.getTime();
  });
  const recentPosts = blogPosts.slice(0, numItemsToSend);

  const jsonLdSite = "https://id.johncarlomanuel.com";
  const ld = await fetchPersonalJsonId(jsonLdSite, fetch);
  if (!ld) {
    console.error("Failed to fetch personal JSON ID data.");
    return { recentPosts };
  }
  const graph = ld["@graph"][0] || [];
  const skills = graph.skills || [];
  const projects = graph.projects || [];
  const webring = graph.webring || [];
  const books = graph.books || [];

  return { recentPosts, skills, projects, webring, books };
};

const fetchRSS = async (url: string, loadFetch: any) => {
  try {
    new URL(url);
  } catch {
    console.error(`Invalid URL for`, url);
    return null;
  }

  try {
    const res = await loadFetch(url);
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

const fetchPersonalJsonId = async (url: string, loadFetch: any) => {
  try {
    new URL(url);
  } catch {
    console.error(`Invalid URL for`, url);
    return null;
  }
  try {
    const res = await loadFetch(url);
    if (!res.ok) {
      console.error(`Failed to fetch data for`, url);
      return null;
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(`Error fetching data:`, err);
    return null;
  }
};
