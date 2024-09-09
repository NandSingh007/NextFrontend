import Image from "next/image";
import React from "react";

const Box = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="grid grid-cols-2 gap-4  my-4">
        <div className="p-4 bg-gray-200">
          {" "}
          <Image
            src="/Images/left.png"
            alt="Video Cover"
            layout="responsive"
            width={30}
            height={20}
            className="rounded-lg"
          />
        </div>
        <div className="p-4 bg-gray-300">
          {" "}
          <Image
            src="/Images/right.png"
            alt="Video Cover"
            layout="responsive"
            width={30}
            height={20}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4  my-4">
        <div className="p-4 bg-gray-200">
          {" "}
          <Image
            src="/Images/left2.png"
            alt="Video Cover"
            width={30}
            height={20}
            layout="responsive"
            className="rounded-lg"
          />
        </div>
        <div className="p-4 bg-gray-300">
          {" "}
          <Image
            src="/Images/right2.png"
            alt="Video Cover"
            width={30}
            height={20}
            layout="responsive"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 my-4">
        <div className="p-4 bg-gray-200">
          {" "}
          <Image
            src="/Images/lower.png"
            alt="Video Cover"
            width={30}
            height={20}
            layout="responsive"
            className="rounded-lg"
          />
        </div>
        {/* <div className="p-4 bg-gray-300">Column 2</div> */}
      </div>
    </div>
  );
};

export default Box;
