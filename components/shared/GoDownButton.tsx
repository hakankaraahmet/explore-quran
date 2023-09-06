import React, { useEffect, useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

const GoDownButton = () => {
  const [isHalfway, setIsHalfway] = useState<boolean>(false);

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );

      const middleOfPage = documentHeight / 2;

      if (scrollY + windowHeight >= middleOfPage) {
        setIsHalfway(true);
      } else {
        setIsHalfway(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed right-[1px] p-1 md:right-8 border-2 rounded-xl md:p-1 border-secondary_color focus:border-secondary_color ${
        isHalfway
          ? "bottom-36 md:bottom-20 rotate-180 transition-all ease-in-out"
          : "top-20 md:mt-2 "
      }`}
      onClick={() =>
        window.scroll({
          top: !isHalfway ? document.body.scrollHeight : 0,
          left: 0,
          behavior: "smooth",
        })
      }
    >
      <AiOutlineArrowDown size={16} />
    </button>
  );
};

export default GoDownButton;
