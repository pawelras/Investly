import { useEffect, useState } from "react";
import NewsCarousel from "./NewsCarousel";

export default function NewsCard() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://corsproxy.io/?" +
        encodeURIComponent(
          "https://news.google.com/rss/search?q=investments&hl=en-GB&gl=GB&ceid=GB:en"
        )
    )
      .then((res) => res.text())
      .then((str) => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(str, "application/xml");
        const items = xml.querySelectorAll("item");

        const articlesArray = Array.from(items)
          .slice(0, 5)
          .map((item) => ({
            title: item.querySelector("title")?.textContent,
            link: item.querySelector("link")?.textContent,
            pubDate: item.querySelector("pubDate")?.textContent,
            source: item.querySelector("source")?.textContent,
          }));

        setNews(articlesArray);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching news:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{"background-color": "#f9fafb"}} className="rounded-lg p-4 flex flex-col justify-between">
      <h3 className="text-sm font-semibold mb-4">Top Pick</h3>

      {loading && <p className="text-gray-500 text-sm">Loading news…</p>}
      {!loading && news.length === 0 && (
        <p className="text-gray-500 text-sm">No news available</p>
      )}
      {news.length > 0 && <NewsCarousel articles={news} />}

    </div>
  );
}
