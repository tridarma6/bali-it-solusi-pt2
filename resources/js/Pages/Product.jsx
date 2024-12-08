import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from '@inertiajs/react';
import ArrowLeft from "@/Components/Icons/ArrowLeft";

export default function Product({ search, query, product }) {
    function formatPrice(price) {
        const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return `Rp ${formattedPrice},-`;
    }
    return (
        <GuestLayout>
            <Head title="products" />
            <div>
                <Link href={route('Welcome')} className="flex flex-row text-white px-16 pt-10 hover:underline gap-5 items-center text-lg">
                    <ArrowLeft/>
                    <p>Back</p>
                </Link>
            </div>
            <div className="text-white text-5xl text-center pb-16 font-bold">
                <h1>Search Results for {query}</h1>
            </div>
            <div className="flex-row grid grid-cols-5 gap-9 px-16 justify-center pb-10 ">
                {search.length > 0 ? (
                    search.map((item) => (
                            <div className="">
                                {item.sale == 1? (
                                    <div className="absolute mt-5 bg-gradient-to-r  from-red-600 via-red-500 to-red-400  rounded-e-md p-2 font-bold text-xl z-10 text-white">
                                        {Math.floor(item.discount)}% OFF
                                    </div>
                                ) : ( 
                                    <div className="absolute mt-5 bg-gradient-to-r from-[#003875] via-[#0152a9] to-[#0571e4]  rounded-e-md p-2 font-bold text-xl z-10 text-white">
                                        NEW
                                    </div>
    
                                ) }
                                <div className="bg-gradient-to-r from-[#818080] via-[#FFFFFF] to-[#FFFFFF] rounded-md p-5 w-[250px] h-[385px]">
                                    <Link href={`/products/${item.id}`}>
                                        <img
                                            src={item.image}
                                            alt={item.name} 
                                            className="w-50 h-50 object-cover hover:scale-110 transition-all duration-500" 
                                        />
                                    </Link>
                                    <div className="flex flex-col gap-12">
                                        <div className="">
                                            <p className="font-bold text-xl pt-5"
                                            style={{
                                                display: '-webkit-box',
                                                WebkitBoxOrient: 'vertical',
                                                WebkitLineClamp: 1,
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                            }}>
                                                {item.name}
                                            </p>
                                        </div>
                                        <div className="flex flex-row justify-between">
                                            <div className="">
                                                <p className="pt-3">
                                                        {formatPrice(item.price)}
                                                </p>
                                            </div>
                                            <button className=" text-white bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-300  p-1 rounded-md font-bold tracking-widest">
                                                BUY
                                            </button>    
                                        </div>
                                    </div>
                                </div>

                            </div>
                    ))
                ) : (
                    <div className="flex text-center items-center justify-center col-span-5">
                        <p className="text-white text-center text-xl">No products found</p>
                    </div>
                )}
            </div>

            <div className="flex flex-row text-white justify-between px-16 pt-20">
                <div className="z-10">
                    <h1 className="font-bold text-5xl">Recommendation</h1>
                </div>
            </div>
            <div className="relative flex flex-row justify-around gap-10 p-16">
                {product?.data?.length > 0 ? (
                product.data && product.data.sort((a, b) => b.sold - a.sold).slice(0, 3).map((product) => (
                    <div className="flex flex-col z-10 w-[500px]">
                        <div className="flex bg-gradient-to-r from-[#818080] via-[#FFFFFF] to-[#FFFFFF] rounded-t-[15px]">
                            <div className="absolute mt-5 bg-gradient-to-r from-[#003875] via-[#0152a9] to-[#0571e4] rounded-e-md p-2 font-bold text-xl z-10 text-white">
                                RECOMENMDATION
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
                                        <Link
                                            href="/login"
                                            className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-300 px-1 py-1 rounded-md font-bold tracking-widest"
                                        >
                                            BUY
                                        </Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                ) : (
                    <div>
                        <p className="text-white">No Recommendations</p>
                    </div>
                )
                }
            </div>
        </GuestLayout>
    );
}
