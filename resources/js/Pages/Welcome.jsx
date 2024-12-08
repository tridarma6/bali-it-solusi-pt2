import { Link, Head } from "@inertiajs/react";
import React, { useState } from "react";
import GuestLayout from "../Layouts/GuestLayout";
import Carousel from "@/Components/Carousell";
import ArrowRight from "../Components/Icons/ArrowRight";
import Light1 from '../Components/Icons/Light1';
import Light2 from '../Components/Icons/Light2';
import Light3 from '../Components/Icons/Light3';
import Light4 from "@/Components/Icons/Light4";
import FAQ from '@/Components/Faq';
import ContactPerson from "@/Components/ContactPerson";
import { MapContainer, TileLayer } from "react-leaflet";
import "../../css/app.css";
import "leaflet/dist/leaflet.css";
import AboutUS from "@/Components/AboutUS";
import Category from "@/Components/Category";
import AuthModal from "@/Components/AuthModal"


export default function Welcome({ auth, laravelVersion, phpVersion, products, faqs, categories, brands }) {
    const [showOnSale, setShowOnSale] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    function formatPrice(price) {
        // Memastikan angka menjadi string dan memisahkan bagian ribuan dan desimal
        const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return `Rp ${formattedPrice},-`;
    }
    return (
        <>
            <Head title="Bali IT Solusi" />
            <GuestLayout>
                <div>
                    <Carousel />
                </div>
                <div className="absolute right-0 top-0 z-0">
                    <Light1 />
                </div>
                <div className="flex flex-row gap-12 text-white text-5xl justify-center pt-14">
                    <button
                        className={`focus:outline-none ${showOnSale ? 'underline font-extrabold' : ''} bg-transparent border-none cursor-pointer z-20`}
                        onClick={() => setShowOnSale(true)}
                    >
                        On Sale
                    </button>
                    <button
                        className={`focus:outline-none ${!showOnSale ? 'underline font-extrabold' : ''} bg-transparent border-none cursor-pointer z-20`}
                        onClick={() => {
                            console.log('Featured button clicked');
                            setShowOnSale(false);
                        }}
                    >
                        Featured
                    </button>
                </div>
                {showOnSale && (
                    <div className="flex flex-row px-16 justify-around gap-5 py-8">
                        {products.data && products.data.filter((_, index) => index % 2 === 0).map((product, index) => (

                            <div className="flex flex-col z-10 w-[400px]">
                                <div className="flex bg-gradient-to-r from-[#003875] via-[#0152a9] to-[#0571e4] rounded-t-[15px]">
                                    <div className="absolute mt-5 bg-gradient-to-r from-red-600 via-red-500 to-red-400  rounded-e-md p-2 font-bold text-xl z-10 text-white">
                                        {Math.floor(product.discount)}% OFF
                                    </div>
                                    <div className="flex justify-center items-center w-full">
                                        <Link href={`/products/${product.id}`}>
                                            <img
                                                src={product.image}
                                                alt=""
                                                className="relative z-0 hover:scale-110 transition-all duration-500"
                                                width={229}
                                                height={229}
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex flex-col bg-gradient-to-r from-[#003875] via-[#0152a9] to-[#0571e4] p-4 rounded-b-[15px] text-white gap-10">
                                    <div className="">
                                        <h1 className="font-bold text-2xl"
                                            style={{
                                                display: '-webkit-box',
                                                WebkitBoxOrient: 'vertical',
                                                WebkitLineClamp: 1,
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                            }}
                                        >
                                            {product.name}
                                        </h1>
                                        <p className="text-sm w"
                                            style={{
                                                display: '-webkit-box',
                                                WebkitBoxOrient: 'vertical',
                                                WebkitLineClamp: 1,
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                            }}
                                        >
                                            {product.description}
                                        </p>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div className="flex flex-col">
                                            <p className="font-bold text-xl">
                                                {formatPrice(parseFloat(product.original_price * (100 - product.discount) / 100).toFixed(2))}
                                            </p>
                                            <p className="line-through text-gray-400">
                                                {formatPrice(product.original_price)}
                                            </p>
                                        </div>
                                        <div className="flex justify-center items-end ">
                                            {auth.user ? (
                                                <button className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-300 px-1 py-1 rounded-md font-bold tracking-widest">
                                                    BUY
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() => setIsModalOpen(true)}
                                                    className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-300 px-1 py-1 rounded-md font-bold tracking-widest"
                                                >
                                                    BUY
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>)}
                {!showOnSale &&
                    (
                        <div className="flex flex-row px-16 justify-around gap-5 py-8">
                            {products.data && products.data.filter((_, index) => index % 2 !== 0).map((product, index) =>
                            (
                                <div className="flex flex-col z-10 w-[400px]">
                                    <div className="flex bg-gradient-to-r from-[#818080]  via-[#FFFFFF] to-[#FFFFFF] rounded-t-[15px]">
                                        <div className="absolute mt-5 bg-gradient-to-r from-[#003875] via-[#0152a9] to-[#0571e4] rounded-e-md p-2 font-bold text-xl z-10 text-white">
                                            NEW
                                        </div>
                                        <div className="flex justify-center items-center w-full">
                                            <Link href={`/products/${product.id}`}>
                                                <img
                                                    src={product.image}
                                                    alt=""
                                                    className="relative z-0 hover:scale-110 transition-all duration-500"
                                                    width={229}
                                                    height={229}
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flex flex-col bg-gradient-to-r from-[#003875] via-[#0152a9] to-[#0571e4] p-4 rounded-b-[15px] text-white gap-10">
                                        <div className="">
                                            <h1 className="font-bold text-2xl"
                                                style={{
                                                    display: '-webkit-box',
                                                    WebkitBoxOrient: 'vertical',
                                                    WebkitLineClamp: 1,
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                }}
                                            >
                                                {product.name}
                                            </h1>
                                            <p className="text-sm w-full"
                                                style={{
                                                    display: '-webkit-box',
                                                    WebkitBoxOrient: 'vertical',
                                                    WebkitLineClamp: 1,
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                }}
                                            >
                                                {product.description}
                                            </p>
                                        </div>
                                        <div className="flex flex-row justify-between">
                                            <div className="flex flex-col">
                                                <p className="font-bold">
                                                    {formatPrice(product.price)}
                                                </p>
                                            </div>
                                            <div className="flex justify-center items-end">
                                                {auth.user ? (
                                                    <button className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-300  px-1 py-1 rounded-md font-bold tracking-widest">
                                                        BUY
                                                    </button>
                                                ) : (
                                                    <Link
                                                        onClick={() => setIsModalOpen(true)}
                                                        href="/login"
                                                        className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-300  px-1 py-1 rounded-md font-bold tracking-widest"
                                                    >
                                                        BUY
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            )}
                        </div>
                    )
                }

                <div className="relative">
                    <div className="absolute left-0 top-0 z-0">
                        <Light2 />
                    </div>
                </div>

                <Category content={categories} />

                <div className="flex flex-row text-white justify-between px-16 pt-20">
                    <div className="z-10">
                        <h1 className="font-bold text-5xl">Recommendation</h1>
                    </div>
                    <div>
                        <div className="flex flex-row gap-5 items-center">
                            <a href="" className="text-lg hover:underline">
                                Explore
                            </a>
                            <ArrowRight />
                        </div>
                    </div>
                </div>
                <div className="relative flex flex-row justify-around gap-10 m-16">
                    {/* <div className="absolute right-0 top-0 z-0">
                        <Light3/>
                    </div> */}
                    {products.data && products.data.sort((a, b) => b.sold - a.sold).slice(0, 3).map((product, index) => (
                        <div className="flex flex-col z-10 w-[500px]">
                            <div className="flex bg-gradient-to-r from-[#818080] via-[#FFFFFF] to-[#FFFFFF] rounded-t-[15px]">
                                <div className="absolute mt-5 bg-gradient-to-r from-[#003875] via-[#0152a9] to-[#0571e4] rounded-e-md p-2 font-bold text-xl z-10 text-white">
                                    RECOMMENDATION
                                </div>
                                <div className="flex justify-center items-center w-full">
                                    <Link href={`/products/${product.id}`}>
                                        <img
                                            src={product.image}
                                            alt=""
                                            className="relative z-0 hover:scale-110 transition-all duration-500"
                                            width={229}
                                            height={229}
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-col bg-gradient-to-r from-[#818080]  via-[#FFFFFF] to-[#FFFFFF] p-4 rounded-b-[15px] text-black gap-10">
                                <div className="">
                                    <h1 className="font-bold text-2xl"
                                        style={{
                                            display: '-webkit-box',
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 1,
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                        }}
                                    >
                                        {product.name}
                                    </h1>
                                    <p className="text-sm w"
                                        style={{
                                            display: '-webkit-box',
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 1,
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                        }}
                                    >
                                        {product.description}
                                    </p>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <div className="flex flex-col">
                                        <p className="font-bold">
                                            {formatPrice(product.price)}
                                        </p>
                                    </div>
                                    <div className="flex justify-center items-end">
                                        {auth.user ? (
                                            <button className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-300  px-1 py-1 rounded-md font-bold tracking-widest">
                                                BUY
                                            </button>
                                        ) : (
                                            <Link
                                                href="/login"
                                                className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-300 px-1 py-1 rounded-md font-bold tracking-widest"
                                            >
                                                BUY
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
                <FAQ content={faqs} />
                <ContactPerson />
                <AboutUS />
                <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </GuestLayout>
        </>
    );
}
