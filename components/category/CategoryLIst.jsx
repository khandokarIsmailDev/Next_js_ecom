'use client'

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const CategoryList = ({ data }) => {

    const pathName = usePathname()
    const categoryPath = pathName.split('/')[2]


  const [product, setProduct] = useState(data);
  const [category, setCategory] = useState(categoryPath);

  useEffect(() => {
    let find;
    
    if (category === "smartphones") {
      find = data.filter((prod) => prod.category === category);
    } else if (category === "laptops") {
      find = data.filter((prod) => prod.category === category);
    } else if (category === "skincare") {
      find = data.filter((prod) => prod.category === category);
    } else if (category === "fragrances") {
      find = data.filter((prod) => prod.category === category);
    } else {
      find = data;
    }

    setProduct(find);
  }, [category, data]);

  const handleChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <main>
      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
        <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
          <button
            onClick={() => handleChange("all")}
            className={`hover:border-b border-black block h-6 box-border mt-4 ${category === "all" ? "font-bold" : ""}`}
          >
            All
          </button>
          <button
            onClick={() => handleChange("smartphones")}
            className={`hover:border-b border-black block h-6 box-border mt-5 ${category === "smartphones" ? "font-bold" : ""}`}
          >
            Smartphones
          </button>
          <button
            onClick={() => handleChange("laptops")}
            className={`hover:border-b border-black block h-6 box-border mt-5 ${category === "laptops" ? "font-bold" : ""}`}
          >
            Laptops
          </button>
          <button
            onClick={() => handleChange("fragrances")}
            className={`hover:border-b border-black block h-6 box-border mt-5 ${category === "fragrances" ? "font-bold" : ""}`}
          >
            Fragrances
          </button>
          <button
            onClick={() => handleChange("skincare")}
            className={`hover:border-b border-black block h-6 box-border mt-5 ${category === "skincare" ? "font-bold" : ""}`}
          >
            Skincare
          </button>
        </div>
        <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
          {product.map((product, index) => (
            <div key={product.id}>
              <Link href={`/product/${product.id}`}><div style={{backgroundImage:`url(${product.images[0]})`}} className={`relative delay-150 w-180px lg:w-full h-[205px] lg:h-[310px] bg-[#f8f8f8]  bg-cover bg-center transition-all duration-3000 ease-in-out transform`}></div></Link>
              <h2 className="text-sm lg:text-base mt-2">
                <a className="text-base font-bold" href="./productPage.html">
                  {product.title}
                </a>
                <span className="text-[#919090]">
                  <a href="./category.html">({product.category})</a>
                </span>
              </h2>
              <p className="text-[#919090] text-sm ">
                {product.description}
              </p>
              <p className="text-rose-600 text-sm mt-4">
                <span className="text-[#919090] line-through">${product.previousPrice}</span>{" "}
                ${product.price}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default CategoryList;
