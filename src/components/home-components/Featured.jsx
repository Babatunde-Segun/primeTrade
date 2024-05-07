import React from "react";

function Featured() {
  return (
    // DaisyCard
    <div className="mx-auto px-[1%] ">
      <div className="flex mt-[-50px] gap-[2rem] flex-col md:flex-row justify-center items-center px-[1%] sm:px-[1rem] flex-wrap">
        <div className="card max-w-96 bg-base-100 shadow-xl">
          <div className="card-body w-full  ">
            <span className="text-[#052A453D] text-[2.5rem]">01</span>
            <h2 className="card-title sm:text-3xl text-2xl">
              Manage Investments Efficiently
            </h2>
            <p>
              Spread your investments across different currency pairs to reduce
              risk and avoid over-exposure to a single market.
            </p>
            <div className="h-[3px] bg-accent mt-[30px] w-full"></div>
          </div>
        </div>

        <div className="card max-w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <span className="text-[#052A453D] text-[2.5rem]">02</span>
            <h2 className="card-title sm:text-3xl text-2xl">
              Sophisticated A.I Trading bot
            </h2>
            <p>
              Implement our AI model to make profit by using real-time trading
              decisions based on the analysis of current market conditions.
            </p>
            <div className="h-[3px] bg-accent mt-[10px] w-full"></div>
          </div>
        </div>

        <div className="card max-w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <span className="text-[#052A453D] text-[2.5rem]">03</span>
            <h2 className="card-title sm:text-3xl text-2xl">
              Instantly withdrawable $200 profit on registration
            </h2>
            <p>
              Its that simple! Get $200 bonus immediately you sign up for any of
              our plans. t.
            </p>
            <div className="h-[3px] bg-accent mt-[10px] w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
