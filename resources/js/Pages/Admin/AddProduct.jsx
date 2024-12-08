import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link } from '@inertiajs/react';
import { useState } from "react";
import Swal from "sweetalert2";
import ArrowLeft from "@/Components/Icons/ArrowLeft";

export default function AddProduct({ products, categories, brands }) {

    const [image, setImage] = useState('');
    const [product, setProduct] = useState({
        name: "",
        stock: 0,
        description: "",
        image: "",
        detail: "",
        specification: "",
        important_information: "",
        original_price: 0,
        discount: 0,
        category_id: 0,
        brand_id: 0,
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,  // Update field yang sesuai
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validasi form
        if (!product.name || !product.stock || !product.description || !product.image || !product.detail || !product.specification || !product.important_information || !product.discount || !product.original_price || !product.brand_id || !product.category_id) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "All fields are required!",
            });
            return;
        }

        const formData = new FormData();
        formData.append("name", product.name);
        formData.append("description", product.description);
        formData.append("image", product.image);
        formData.append("stock", product.stock);
        formData.append("detail", product.detail);
        formData.append("specification", product.specification);
        formData.append("important_information", product.important_information);
        formData.append("discount", product.discount);
        formData.append("original_price", product.original_price);
        formData.append("category_id", product.category_id);
        formData.append("brand_id", product.brand_id);

        try {
            
            const response = await axios.post(route('product.storeProduct'), formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log(response);
            
            if (response.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Category has been successfully added!",
                });
                // Reset form
                setProduct({
                    name: "",
                    stock: 0,
                    description: "",
                    image: "",
                    detail: "",
                    specification: "",
                    important_information: "",
                    original_price: 0,
                    discount: 0,
                    category_id: 0,
                    brand_id: 0,
                })
            }
        } catch (error) {
            console.error("Error adding brand:", error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: error.message || "An unexpected error occurred.",
            });
        }
    };

    return (
        <AdminLayout>
            <Head title="Add Product" />
            <div className="px-16 pb-16">
                <Link href={route('admin.showProduct')} className="flex flex-row text-white m-10 gap-5 items-center text-lg">
                    <ArrowLeft />
                    <p className="hover:underline">Back</p>
                </Link>
                <div className="relative flex flex-col justify-center bg-white rounded-2xl shadow-md">
                    <div className="flex flex-row px-16 pt-10">
                        <h1 className="text-3xl font-bold">Add a Product</h1>
                    </div>
                    <div className="flex flex-row px-16 py-10">
                        <form onSubmit={handleSubmit} className="w-full">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
                                <div className="flex flex-col gap-8">
                                    <div>
                                        <p className="font-medium">Product Name</p>
                                        <input
                                            className="w-full rounded-[10px] border-gray-300 p-3"
                                            type="text"
                                            name="name"
                                            value={product.name}
                                            onChange={handleChange}
                                            placeholder="e.g Lenovo Yoga 7"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-medium">Stock</p>
                                        <input
                                            className="w-full rounded-[10px] border-gray-300 p-3"
                                            type="number"
                                            name="stock"
                                            value={product.stock}
                                            onChange={handleChange}
                                            placeholder="e.g 15"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-medium">Original Price</p>
                                        <input
                                            className="w-full rounded-[10px] border-gray-300 p-3"
                                            type="number"
                                            name="original_price"
                                            value={product.original_price}
                                            onChange={handleChange}
                                            placeholder="e.g 20500000"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-medium">Discount (%)</p>
                                        <input
                                            className="w-full rounded-[10px] border-gray-300 p-3"
                                            type="number"
                                            name="discount"
                                            value={product.discount}
                                            onChange={handleChange}
                                            placeholder="e.g 15"
                                        />
                                    </div>
                                    <div>
                                        <div className="flex flex-col gap-1">
                                            <p className="">Product Image</p>
                                        
                                            <input 
                                                type="text"
                                                className="w-full rounded-[10px] border-gray-300 p-3"
                                                name="image"
                                                value={product.image}
                                                onChange={handleChange}
                                                placeholder="public\assets\images\products\kingston_kyson_128gb.png"
                                                />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-8">
                                    <div>
                                        <p className="font-medium">Description</p>
                                        <textarea
                                            className="w-full rounded-[10px] border-gray-300 p-3 h-[150px] resize-none"
                                            name="description"
                                            value={product.description}
                                            onChange={handleChange}
                                            placeholder="Short description of the product"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-medium">Details</p>
                                        <textarea
                                            className="w-full rounded-[10px] border-gray-300 p-3 h-[150px] resize-none"
                                            name="detail"
                                            value={product.detail}
                                            onChange={handleChange}
                                            placeholder="Additional details about the product"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-8">
                                    <div>
                                        <p className="font-medium">Specification</p>
                                        <textarea
                                            className="w-full rounded-[10px] border-gray-300 p-3 h-[150px] resize-none"
                                            name="specification"
                                            value={product.specification}
                                            onChange={handleChange}
                                            placeholder="Technical specifications of the product"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-medium">Important Information</p>
                                        <textarea
                                            className="w-full rounded-[10px] border-gray-300 p-3 h-[150px] resize-none"
                                            name="important_information"
                                            value={product.important_information}
                                            onChange={handleChange}
                                            placeholder="Warranty, compatibility, etc."
                                        />
                                    </div>
                                    <div className="flex flex-row gap-6">
                                        <div>
                                            <p className="font-medium">Brand</p>
                                            <select
                                                className="w-full rounded-[10px] border-gray-300 p-3"
                                                name="brand_id"
                                                value={product.brand_id}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select a Brand</option>
                                                {brands.map((brand) => (
                                                    <option key={brand.id} value={brand.id}>
                                                        {brand.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <p className="font-medium">Category</p>
                                            <select
                                                className="w-full rounded-[10px] border-gray-300 p-3"
                                                name="category_id"
                                                value={product.category_id}
                                                onChange={handleChange}
                                                >
                                                <option value="">Select a Category</option>
                                                {categories.map((category) => (
                                                    <option key={category.id} value={category.id}>
                                                        {category.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="py-12 text-center">
                                <button
                                    className="bg-[#0A223C] text-white px-9 py-3 rounded-xl hover:bg-blue-600"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
