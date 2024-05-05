// Cards 
import React from "react";

const Card = ({item}) => {
    const {img,name,details}=item
  return (
    <div>
      <div class="max-w-2xl mx-auto">
        <div class="bg-white shadow-md rounded-lg max-w-sm">
          <a href="#">
            <img
              class="rounded-t-lg p-8 w-72"
              src={img}
              alt="product"
            />
            
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h3 class="text-gray-900 font-semibold text-xl tracking-tight">
                {name}
              </h3>
            </a>
            <p>{details}</p>
            <div class="flex items-center justify-between">
              <a
                href="/"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Details
              </a>
              <a
                href="/"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Already Read
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
