import React, { useState } from "react";
import ArrowRight from "../Components/Icons/ArrowRight";
import { Link } from '@inertiajs/react';
export default function Category({ content }){

    return(
        <div className="">
            <div className="flex flex-row text-white justify-between px-16 pt-20">
                <div>
                    <h1 className="font-bold text-5xl">Category Product</h1>
                </div>
                <div>
                    <div className="flex flex-row gap-5">
                        <a href="" className="text-l hover:underline z-10">
                            See More
                        </a>
                        <ArrowRight />
                    </div>
                </div>
            </div>
            <div className="flex flex-row px-16 gap-10 text-white pb-10 justify-around items-center">
                {content.data && content.data.slice(0,4).map((category, index) => (
                <div className="flex flex-col justify-center items-center pt-10 hover:underline z-10 w-[400px] h-[400px]" key={index}>
                    <div className="bg-white/10 rounded-3xl">
                            <Link href={`/categories/${category.id}`}>
                            <img
                                className="m-10 hover:scale-110 transition-all duration-500"
                                src={category.image}
                                alt={category.name}
                                width={229}
                                height={229}
                            />
                            </Link>
                    </div>
                    <div className="text-white text-center pt-5">
                        <a href="" className="text-2xl">
                            {category.name}
                        </a>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}