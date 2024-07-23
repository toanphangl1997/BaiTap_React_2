import React, { useState } from "react";

const StateGlass = () => {
  const selectGlass = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "/public/imageGlass/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "/public/imageGlass/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "/public/imageGlass/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "/public/imageGlass/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "/public/imageGlass/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "/public/imageGlass/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "/public/imageGlass/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "/public/imageGlass/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "/public/imageGlass/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  const [glass, setGlass] = useState("/public/imageGlass/v1.png");
  const [model, setModel] = useState("/public/img/g1.jpg");

  const searchGlass = (findGlass) => {
    for (let glass of selectGlass) {
      if (findGlass === glass.url) {
        return glass;
      }
    }
  };
  const findGlass = searchGlass(glass);
  console.log(findGlass);
  return (
    <div className="container mx-auto">
      <div className="mx-auto py-5 grid grid-cols-2 w-1/2">
        <div className="relative w-full">
          <img src="/public/img/model.jpg" alt="" />
          <div className="absolute top-24">
            <img src={glass} alt="" className="w-1/2 mx-auto" />
          </div>
        </div>
        <div className="bg-white pt-20 h-80 w-full">
          <img src={glass} alt="" className=" w-full mx-auto h-auto" />
          <div className="bg-white mt-20">
            <div className="px-10 text-xl bg-gray-200">
              <h3 className="font-bold">
                Name: {findGlass ? findGlass.name : "GUCCI G8850U"}
              </h3>
              <p className="font-bold">
                Price:{" "}
                <span className="text-green-600 font-bold">
                  {findGlass ? findGlass.price : 30} $
                </span>
              </p>
              <p>
                Desc:{" "}
                {findGlass
                  ? findGlass.desc
                  : "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto py-5 grid grid-cols-7 w-3/4 gap-3">
        {selectGlass.map((item, index) => (
          <div>
            <img
              src={item.url}
              key={index}
              onClick={() => {
                setGlass(item.url);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StateGlass;
