import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from '@inertiajs/react';
import ArrowLeft from "@/Components/Icons/ArrowLeft";

export default function Category({ category, otherCategory, products }){
    console.log(products);
    function formatPrice(price) {
        const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return `Rp ${formattedPrice},-`;
    }
    return(
        <GuestLayout>
            <Head title={category.name} />
            <div className="flex flex-row justify-between">
                <div>
                    <Link href={route('Welcome')} className="flex flex-row text-white px-16 pt-10 hover:underline gap-5 items-center text-lg">
                        <ArrowLeft/>
                        <p>Back</p>
                    </Link>
                </div>
                <div className="flex flex-row gap-10 px-16">
                    {otherCategory.map((item) => (
                        <div key={item.id}>
                            <Link href={`/categories/${item.id}`}>
                                <h3 className="pt-10 text-lg font-bold mb-1 text-white text-center hover:underline">{item.name}</h3>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full py-16">
                <p className="font-extrabold text-white text-5xl pt-12">
                    {category.name}
                </p>

                <div className="gap-10 grid grid-cols-5 pt-20 px-16">
                    {products.data
                        .filter((product) => product.category_id === category.id)
                        .map((item, index) => (
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
                                            key={index}
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
                    }
                </div>
            </div>
        </GuestLayout>
    );
}
