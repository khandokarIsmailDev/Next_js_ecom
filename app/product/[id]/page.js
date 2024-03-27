"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { singleProduct } from "@/utils/util";
import Rating from "@/components/Rating";
// import data from '@/data/productData.json'

const ProductPage = () => {
  const pathName = usePathname();
  // console.log(pathName)
  const id = pathName.split("/")[2];
  // console.log(id)

  const product = singleProduct(id);
  console.log(product)

  return (
    <main className="h-screen mb-28">
      <section className="bg-[#fafaf2] h-full py-20">
        {product.map((prodac) => (
          <div key={prodac.id} className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
            <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
              <img
                src={`${prodac.images[0]}`}
                className="w-[400px] h-[500px] mx-auto object-cover"
                alt
              />
              <div className="flex gap-4 mt-4">
                <img
                  src={`${prodac.images[1]}`}
                  className="w-[100px] h-[100px] mx-auto border object-cover"
                  alt
                />
                <img
                  src={`${prodac.images[2]}`}
                  className="w-[100px] h-[100px] mx-auto border object-cover"
                  alt
                />
                <img
                  src={`${prodac.images[3]}`}
                  className="w-[100px] h-[100px] mx-auto border object-cover"
                  alt
                />
                <img
                  src={`${prodac.images[4]}`}
                  className="w-[100px] h-[100px] mx-auto border object-cover"
                  alt
                />
              </div>
            </div>
            <div className="w-full lg:w-5/12">
              <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
                {prodac.title}
              </h1>
              <span className="text-[#919090] my-3">{prodac.brand}</span>
              <Rating rating={prodac.rating}/>
              <hr className="my-5 bg-black" />
              <div>
                <p className="my-3">
                  <span className="text-rose-600 opacity-60 line-through">
                    ${`${prodac.previousPrice}`}
                  </span>
                  <span className="font-bold text-2xl">${`${prodac.price}`}</span>
                </p>
              </div>
              <div>
                <p className="leading-7">
                  {prodac.description}
                </p>
                <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                  Add To Cart - ${prodac.price}
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default ProductPage;
