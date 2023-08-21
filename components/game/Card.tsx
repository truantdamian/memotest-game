import Image from "next/image";
import React from "react";

type propsTypes = {
  children?: React.ReactNode;
  url?: string;
  title?: string;
  show?: boolean;
  handleClick?: () => void;
};

export const Card = ({
  children,
  url,
  title,
  show = false,
  handleClick = () => {},
}: propsTypes) => {
  return (
    <div>
      <div
        className={`h-32 w-28 xs:h-36 xs:w-32 md:h-44 md:w-40 border rounded-md shadow-md cursor-pointer relative duration-700 preserve-3d  ${
          show ? "rotate-y-180" : ""
        }`}
        onClick={handleClick}
      >
        <div className="w-full h-full rounded-md  backface-hidden absolute p-2">
          <div className="w-full h-full bg-[url('/images/back-card.svg')] rounded-sm"></div>
        </div>
        <div className="w-full h-full rounded-md  backface-hidden absolute rotate-y-180 p-2">
          {url && (
            <Image
              src={url}
              alt={title}
              fill
              className="p-2"
              objectFit="contain"
            />
          )}
          {children}
        </div>
      </div>
    </div>
  );
};
