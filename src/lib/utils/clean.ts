// Links from my stories site have a weird way of structuring RSS feeds.
// Esp since I have to construct the URL myself and clean it with this func
// since the link attribute in the RSS feed is empty lmao
// Plus, I'll need to remove the double slashes that appear in the URLs
export const removeDoubleSlashes = (url: string): string => {
  return url.replace(/([^:]\/)\/+/g, "$1");
};
