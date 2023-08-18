"use client";

import Image from "next/image";
import { useState } from "react";

type propsTypes = {
  url: string;
  title: string;
};

export const Card = ({ url, title }: propsTypes) => {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <div
        className={`h-52 w-44 border rounded-md shadow-md cursor-pointer relative duration-700 preserve-3d  ${
          show ? "rotate-y-180" : ""
        }`}
        onClick={handleClick}
      >
        <div className="w-full h-full rounded-md  backface-hidden absolute p-2">
          <div className="w-full h-full bg-[url('/images/back-card.svg')] rounded-sm"></div>
        </div>
        <div className="w-full h-full rounded-md  backface-hidden absolute rotate-y-180 p-2 flex flex-col justify-center">
          <figure className="flex flex-col items-center justify-center">
            <Image
              src={url}
              alt={title}
              height={140}
              width={140}
              className="max-h-[140px]"
            />
            <figcaption className="uppercase py-2">{title}</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};
