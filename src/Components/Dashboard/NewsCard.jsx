import { useEffect, useState } from "react";

export default function NewsCard() {
  const [news, setNews] = useState({});

  useEffect(() => {
    fetch(
      `https://corsproxy.io/?${encodeURIComponent(
        "https://news.google.com/rss/search?q=investments&hl=en-GB&gl=GB&ceid=GB:en",
      )}`,
    )
      .then((res) => res.text())
      .then((json) => setNews(json));
    console.log(news);
  }, []);

  return (
    <div className="border rounded-lg p-4 flex flex-col justify-between">
      <h3 className="text-sm font-semibold mb-2">Top Pick</h3>
      <p className="text-xs text-gray-600 mb-4">Lorem ipsum dolor sit amet</p>

      <div className="h-24 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-teal-600 to-teal-300"></div>
      </div>
    </div>
  );
}
