import { useState } from "react";
import "../App.css";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import { VscCircleFilled } from "react-icons/vsc";

const amazon_carosel_images = [
  "./amazon_carosel_images/img1.jpg",
  "./amazon_carosel_images/img2.jpg",
  "./amazon_carosel_images/img3.jpg",
  "./amazon_carosel_images/img4.jpg",
  "./amazon_carosel_images/img5.jpg",
  "./amazon_carosel_images/img6.jpg",
];

function AmazoneCaroselExample() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Amazone Carosel Example</h1>
      <div className="d-flex">
        <button
          onClick={() => {
            if (count === 0) {
              setCount(amazon_carosel_images.length - 1);
            } else {
              setCount(count - 1);
            }
          }}
        >
          <MdArrowBackIos />
        </button>
        <img width={"1200px"} src={amazon_carosel_images[count]} alt="movieImg" />
        {/* next-btn */}
        <button
          onClick={() => {
            if (count === amazon_carosel_images.length - 1) {
              setCount(0);
            } else {
              setCount(count + 1);
            }
          }}
        >
          <MdArrowForwardIos />
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          margin: "10px 0px",
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((e, i) => (
          <div className={count === i ? "common active" : "common"}></div>
        ))}
      </div>

      <div>
        <button
          style={{
            width: "150px",
          }}
          onClick={() => {
            setCount(count + 1);
          }}
        >
          {count}
        </button>
      </div>
      <p>
        Here you can also track the carousel image index with below dotted
        circles
      </p>
    </>
  );
}

export default AmazoneCaroselExample;