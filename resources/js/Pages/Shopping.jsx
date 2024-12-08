import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Shopping({ auth, products }) {
    console.log(products);

    // Format harga
    function formatPrice(price) {
        const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return `Rp ${formattedPrice},-`;
    }

    // Fungsi untuk memfilter produk berdasarkan kategori
    function filterByCategory(products, category) {
        return products.filter(product => product.category_id == category);
    }

    const filterLaptop = filterByCategory(products.data, 1);
    const filterAccessories = filterByCategory(products.data, 4);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Shopping</h2>}
        >
            <Head title="Shopping" />
            
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-[#003875] via-[#0152a9] to-[#0571e4] overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-white font-bold">Please add an item to your cart</div>
                    </div>
                    <div className="text-5xl pt-8 pb-4">
                        <h1 className='text-white font-extrabold'>LAPTOP</h1>
                    </div>
                    <div className="flex flex-row gap-5 pb-8">
                        {filterLaptop && filterLaptop.map((product, index) => (
                            <div className="flex flex-col z-10" key={index}>
                                <div className="flex bg-gradient-to-r from-[#003875] via-[#0152a9] to-[#0571e4] rounded-t-[15px]">
                                    <div className="flex justify-center items-center w-full">
                                        <img
                                            src={product.image}
                                            alt=""
                                            className="relative z-0 hover:scale-110 transition-all duration-500"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col bg-gradient-to-r from-[#003875] via-[#0152a9] to-[#0571e4] p-4 rounded-b-[15px] text-white gap-10">
                                    <div className="">
                                        <h1 className="font-bold text-2xl">
                                            {product.name}
                                        </h1>
                                        <p className="text-sm">
                                            {product.description}
                                        </p>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div className="flex flex-col">
                                            <p className="font-bold">
                                                {formatPrice(product.price)}
                                            </p>
                                            <p className="line-through">
                                                {formatPrice(product.price)}
                                            </p>
                                        </div>
                                        <div className="flex justify-center items-end">
                                            <button className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-300 px-1 py-1 rounded-md font-bold tracking-widest">
                                                BUY
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="text-5xl pt-8 pb-4">
                        <h1 className='text-white font-extrabold'>Computer Accessories</h1>
                    </div>
                    <div className="flex flex-row gap-5 py-8">
                        {filterAccessories && filterAccessories.map((product, index) => (
                            <div className="flex flex-col z-10" key={index}>
                                <div className="flex bg-gradient-to-r from-[#003875] via-[#0152a9] to-[#0571e4] rounded-t-[15px]">
                                    <div className="flex justify-center items-center w-full">
                                        <img
                                            src={product.image}
                                            alt=""
                                            className="relative z-0 hover:scale-110 transition-all duration-500"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col bg-gradient-to-r from-[#003875] via-[#0152a9] to-[#0571e4] p-4 rounded-b-[15px] text-white gap-10">
                                    <div className="">
                                        <h1 className="font-bold text-2xl">
                                            {product.name}
                                        </h1>
                                        <p className="text-sm">
                                            {product.description}
                                        </p>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div className="flex flex-col">
                                            <p className="font-bold">
                                                {formatPrice(product.price)}
                                            </p>
                                            <p className="line-through">
                                                {formatPrice(product.price)}
                                            </p>
                                        </div>
                                        <div className="flex justify-center items-end">
                                            <button className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-300 px-1 py-1 rounded-md font-bold tracking-widest">
                                                BUY
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>  
        </AuthenticatedLayout>
    );
}
