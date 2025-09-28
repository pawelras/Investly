import { useEffect, useState } from "react";
import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PIXABAY_KEY = import.meta.env.VITE_PIXABAY_KEY;

// Custom arrow components with Material Icons
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} !flex !items-center !justify-center !bg-gray-800 !rounded-full`}
      style={{
        ...style,
        width: "30px",
        height: "30px",
        right: "-35px",
        zIndex: 10,
      }}
      onClick={onClick}
    >
      <ArrowForwardIosIcon sx={{ color: "white", fontSize: "16px" }} />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} !flex !items-center !justify-center !bg-gray-800 !rounded-full`}
      style={{
        ...style,
        width: "30px",
        height: "30px",
        left: "-35px",
        zIndex: 10,
      }}
      onClick={onClick}
    >
      <ArrowBackIosNewIcon sx={{ color: "white", fontSize: "16px" }} />
    </div>
  );
}

export default function NewsCarousel({ articles }) {
  const [thumbnails, setThumbnails] = useState([]);

  useEffect(() => {
    if (!articles || articles.length === 0) return;

    fetch(
      `https://pixabay.com/api/?key=${PIXABAY_KEY}&q=finance+investment&image_type=photo&orientation=horizontal&per_page=${articles.length}`,
    )
      .then((res) => res.json())
      .then((data) => {
        const imgs = data.hits || [];
        setThumbnails(imgs.map((img) => img.webformatURL));
      })
      .catch((err) => console.error("Pixabay fetch error:", err));
  }, [articles]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  if (!articles || articles.length === 0) {
    return <p className="text-gray-500 text-xs">Loading news…</p>;
  }

  return (
    <div className="h-auto pb-5">
      <Slider {...settings}>
        {articles.map((a, i) => (
          <div key={i} className="px-2">
            <img
              src={thumbnails[i] || `https://picsum.photos/500/250?random=${i}`}
              alt="investment"
              className="w-full h-40 md:h-56 rounded-xl object-cover mb-3"
            />

            <a
              href={a.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-600 hover:underline text-base font-semibold leading-snug"
            >
              {a.title}
            </a>
            <p className="text-[12px] text-gray-500 mt-1">
              {a.source} –{" "}
              {new Date(a.pubDate).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
