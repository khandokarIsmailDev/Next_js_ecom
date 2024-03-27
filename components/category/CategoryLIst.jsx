"use client";

import React, { useState } from "react";

const CategoryLIst = ({ data }) => {
  const [product, setProduct] = useState(data);

  function handleChange(category) {
    if (category === "smartphones") {
      let find = product.filter((prod) => prod.category === category);
      setProduct([...find]);
    }else if(category === 'laptops' ){
        let find = product.filter((prod) => prod.category === category);
        setProduct([...find]);
    }else if(category === 'skincare' ){
        let find = product.filter((prod) => prod.category === category);
        setProduct([...find]);
    }else if(category === 'fragrances' ){
        let find = product.filter((prod) => prod.category === category);
        setProduct([...find]);
    }else if(category ==='all'){
        setProduct(data)
    }
    
    //  
  }

  return (
    <main>
      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
        <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
          <button
          onClick={()=>handleChange("all")}
          className="hover:border-b border-black block h-6 box-border mt-4">
            All
          </button>
          <button
            onClick={()=>handleChange("smartphones")}
            className="hover:border-b border-black block h-6 box-border mt-5"
          >
            Smartphones
          </button>
          <button
          onClick={()=>handleChange("laptops")}
          className="hover:border-b border-black block h-6 box-border mt-5">
            Laptops
          </button>
          <button
          onClick={()=>handleChange("fragrances")}
          className="hover:border-b border-black block h-6 box-border mt-5">
            Fragrances
          </button>
          <button
          onClick={()=>handleChange("skincare")}
          className="hover:border-b border-black block h-6 box-border mt-5">
            Skincare
          </button>
        </div>
        <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
          {product.map((produc, index) => (
            <div key={produc.id}>
              <div className="relative delay-150 w-180px lg:w-full h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-[url('/products/iphone.jpg')] bg-cover bg-center transition-all duration-3000 ease-in-out transform"></div>
              <h2 className="text-sm lg:text-base mt-2">
                <a className="text-base font-bold" href="./productPage.html">
                    {produc.title}
                </a>
                <span className="text-[#919090]">
                  <a href="./category.html">(Smartphones)</a>
                </span>
              </h2>
              <p className="text-[#919090] text-sm ">
                {produc.description}
              </p>
              <p className="text-rose-600 text-sm mt-4">
                <span className="text-[#919090] line-through">${}</span>{" "}
                $195.00
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default CategoryLIst;
