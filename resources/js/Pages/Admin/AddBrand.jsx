import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from "react";
import Swal from "sweetalert2";
import ArrowLeft from "@/Components/Icons/ArrowLeft";

export default function AddBrand() {
    const [brandName, setBrandName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validasi form
        if (!brandName || !description || !image) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "All fields are required!",
            });
            return;
        }

        const formData = new FormData();
        formData.append("name", brandName);
        formData.append("description", description);
        formData.append("image", image);

        try {
            const response = await axios.post(route('admin.storeBrand'), formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if (response.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Brand has been successfully added!",
                });
                // Reset form
                setBrandName('');
                setDescription('');
                setImage('');
            }
        } catch (error) {
            console.error("Error adding brand:", error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Failed to add brand. Please try again.",
            });
        }
    };

    return (
        <AdminLayout>
            <Head title="Add Brand" />
            <div className="px-16 pb-16">
                <Link href={route('admin.showBrand')} className="flex flex-row text-white m-10 gap-5 items-center text-lg">
                    <ArrowLeft />
                    <p className="hover:underline">Back</p>
                </Link>
                <div className="relative flex flex-col justify-center bg-white rounded-2xl">
                    <div className="flex flex-row px-16 pt-10">
                        <h1 className="text-3xl font-bold">Add a Brand</h1>
                    </div>
                    <div className="flex flex-row px-16 py-10">
                        <form className="w-full" onSubmit={handleSubmit}>
                            <div className="flex flex-row justify-between gap-24">
                                <div className="w-1/2 flex flex-col gap-16 ">
                                    <div>
                                        <p>Brand name</p>
                                        <input
                                            className="w-full rounded-[10px]"
                                            type="text"
                                            value={brandName}
                                            onChange={(e) => setBrandName(e.target.value)}
                                            placeholder="e.g Company name"
                                        />
                                    </div>
                                    <div className="">
                                        <p>Brand Description</p>
                                        <textarea
                                            className="w-full rounded-[10px] h-[200px] resize-none"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            placeholder="A brand description"
                                        />
                                    </div>
                                </div>
                                <div className="w-1/2 flex flex-col gap-16 ">
                                    <div>
                                    <p className="mb-2">Brand Logo</p>
                                        <div className="flex flex-row gap-4">
                                            
                                            <input 
                                                type="text"
                                                className="w-full rounded-[10px] border-gray-300 p-3"
                                                name="image"
                                                value={image}
                                                placeholder="public\assets\images\products\kingston_kyson_128gb.png"
                                                onChange={(e) => setImage(e.target.value)}
                                                />
                                        </div>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </div>
                            <div className="py-12">
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
