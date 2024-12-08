import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import GuestLayout from '../Layouts/GuestLayout';
import ArrowLeft from '@/Components/Icons/ArrowLeft';
import axios from 'axios';

export default function ProductDetail({ product, otherProducts, auth }) {
    const [activeTab, setActiveTab] = useState('detail');
    const [quantity, setQuantity] = useState(1); 
    const [loading, setLoading] = useState(false);
    
    function formatPrice(price) {
        const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return `Rp ${formattedPrice},-`;
    }

    async function handleCheckout() {
        // Validasi input
        if (quantity < 1 || quantity > product.stock) {
            alert("Please enter a valid quantity.");
            return;
        }
    
        const checkoutData = {
            name: auth.name, 
            phone_number: auth.phone_number, 
            address: auth.address, 
            productId: product.id,
            quantity: quantity,
        };
    
        try {
            setLoading(true); // Tampilkan loading
            const response = await axios.post('/checkout', checkoutData);
            const waUrl = response.data.waUrl;
    
            // Redirect ke WhatsApp
            window.location.href = waUrl;
        } catch (error) {
            console.error("Error during checkout:", error);
            alert("An error occurred during checkout. Please try again.");
        } finally {
            setLoading(false); // Matikan loading
        }
    }    

    return (
        <GuestLayout>
            <Head title={product ? product.name : "Product Details"} />
            {product ? (
                <div className="container mx-auto flex flex-col py-10 px-20 justify-between">
                    <div>
                        <Link href={route('Welcome')} className="flex flex-row text-white px-16 pt-5 mb-10 hover:underline gap-5 items-center text-lg">
                            <ArrowLeft />
                            <p>Back</p>
                        </Link>
                    </div>
                    <div className="flex flex-row">
                        <div className="bg-white ml-5 p-6 rounded-lg shadow-lg w-[1050px] mx-auto flex flex-col md:flex-row gap-10 min-h-[500px]">
                            {/* Gambar Produk */}
                            {product.sale && product.discount > 0 ? (
                                <div className="absolute mt-5 bg-gradient-to-r from-red-600 via-red-500 to-red-400 rounded-e-md p-2 font-bold text-xl z-10 text-white">
                                    {Math.floor(product.discount)}% OFF
                                </div>
                            ) : null}
                            <div className="md:w-1/2">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="rounded-lg w-full object-cover mb-4 bg-[#003875] p-2"
                                />
                            </div>

                            <div className="md:w-1/2 flex flex-col flex-grow">
                                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                                <div className="flex flex-col">
                                    {product.sale ? (
                                        <>
                                            <p className="font-bold">
                                                {formatPrice(parseFloat(product.original_price * (100 - product.discount) / 100).toFixed(2))}
                                            </p>
                                            <p className="line-through text-gray-400">
                                                {formatPrice(product.original_price)}
                                            </p>
                                        </>
                                    ) : (
                                        <p className="font-bold">{formatPrice(product.original_price)}</p>
                                    )}
                                </div>
                                <div className="mt-5 mb-6">
                                    <p>{product.description}</p>
                                </div>

                                <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6 flex-grow min-w-[500px] max-w-[500px]">
                                    <h2 className="text-lg font-bold mb-2">Information</h2>
                                    <div className="flex space-x-4 mb-4">
                                        <button
                                            className={`flex-1 py-2 text-center ${activeTab === 'detail' ? 'text-white bg-[#003875]' : 'text-[#003875]'} ${activeTab === 'detail' ? 'font-bold' : ''}`}
                                            onClick={() => setActiveTab('detail')}
                                        >
                                            Detail
                                        </button>
                                        <button
                                            className={`flex-1 py-2 text-center ${activeTab === 'spec' ? 'text-white bg-[#003875]' : 'text-[#003875]'} ${activeTab === 'spec' ? 'font-bold' : ''}`}
                                            onClick={() => setActiveTab('spec')}
                                        >
                                            Specification
                                        </button>
                                        <button
                                            className={`flex-1 py-2 text-center ${activeTab === 'info' ? 'text-white bg-[#003875]' : 'text-[#003875]'} ${activeTab === 'info' ? 'font-bold' : ''}`}
                                            onClick={() => setActiveTab('info')}
                                        >
                                            Information
                                        </button>
                                    </div>

                                    <div className="max-h-40 overflow-y-auto scrollbar-hidden">
                                        {activeTab === 'detail' && (
                                            <div>
                                                <p>{product.detail}</p>
                                            </div>
                                        )}
                                        {activeTab === 'spec' && (
                                            <div>
                                                <ul className="list-disc pl-5">
                                                    <p>{product.specification}</p>
                                                </ul>
                                            </div>
                                        )}
                                        {activeTab === 'info' && (
                                            <div>
                                                <p>{product.important_information}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bagian Add to Cart dan Buy Now */}
                        <div className="flex md:flex-row gap-1">
                            <div className="bg-gray-100 p-6 rounded-lg shadow-md md:w-3/3">
                                <h2 className="text-lg font-bold mb-4">Choose How Many Item</h2>
                                {product.stock > 0 ? (
                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-row justify-between items-center">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="rounded-lg w-16 object-cover mb-4 bg-[#003875] p-2"
                                            />
                                            <h2 className="text-base overflow-hidden whitespace-nowrap text-ellipsis" style={{ maxWidth: '150px' }}>
                                                {product.name}
                                            </h2>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <label htmlFor="quantity" className="font-bold">Quantity:</label>
                                            <input
                                                type="number"
                                                id="quantity"
                                                min="1"
                                                max={product.stock}
                                                value={quantity}
                                                onChange={(e) => {
                                                    const value = parseInt(e.target.value, 10);
                                                    if (value > 0 && value <= product.stock) {
                                                        setQuantity(value);
                                                    } else if (value > product.stock) {
                                                        alert(`Maximum stock available is ${product.stock}`);
                                                    }
                                                }}
                                                className="w-32 p-2 border border-gray-300 rounded"
                                            />
                                        </div>
                                        <button
                                            onClick={() => handleCheckout()}
                                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-e-md transition-all duration-300"
                                            disabled={loading || product.stock <= 0} // Disable tombol saat loading atau stok habis
                                        >
                                            {loading ? 'Processing...' : 'Buy Now'}
                                        </button>

                                    </div>
                                ) : (
                                    <p className="text-red-500 font-bold">Product out of stock</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Produk Lainnya */}
                    <div className="mt-12">
                        <h2 className="text-3xl ml-5 font-bold mb-6 text-white ">Other Products</h2>
                        <div className="grid ml-5 grid-cols-2 md:grid-cols-4 gap-6">
                            {otherProducts.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white p-12 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
                                >
                                    <Link href={`/products/${item.id}`}>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="rounded-lg w-full h-40 object-cover mb-3"
                                        />
                                        <h3 className="pt-5 text-lg font-bold mb-1 text-gray-800">{item.name}</h3>
                                        <p className="text-xl font-bold text-[#003875]">{formatPrice(item.price)}</p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center text-white py-10">
                    <p>Loading product details...</p>
                </div>
            )}
        </GuestLayout>
    );
}
