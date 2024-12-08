import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import Swal from "sweetalert2";
import ArrowLeft from "@/Components/Icons/ArrowLeft";
import Search from "@/Components/Icons/Search";
import EditIcon from "@/Components/Icons/EditIcon";
import DeleteIcon from "@/Components/Icons/DeleteIcon";
import DoubleArrowLeft from "@/Components/Icons/DoubleArrowLeft";
import DoubleArrowRight from "@/Components/Icons/DoubleArrowRight";

export default function Category(categoryArr) {
    console.log("categories", categoryArr.categories);

    const [editCategory, setEditCategory] = useState(null);
    const [searchQuery, setSearchQuery] = useState(""); // State untuk pencarian
    const { data, setData, put, delete: destroy } = useForm({
        name: "",
        description: "",
    });

    console.log("data : ", data);

    const categoryList = categoryArr.categories.data || [];
    const pagination = categoryArr.categories || [];

    const filteredCategories = categoryList.filter((category) => {
        const query = searchQuery.toLowerCase();
        return (
            category.id.toString().includes(query) || // Cari berdasarkan ID
            category.name.toLowerCase().includes(query) // Cari berdasarkan nama
        );
    });

    const handleEdit = (category) => {
        setEditCategory(category); // Set the category for editing
        setData({
            name: category.name || "", // Isi name
            description: category.description || "", // Isi description
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        put(`/admin/updateCategory/${editCategory.id}`); // Kirim request update
        setEditCategory(null); // Tutup modal
    };

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this category?")) {
            destroy(`/admin/deleteCategory/${id}`);
        }
    };

    const submit = () => {
        event.preventDefault();
        Swal.fire({
            icon: "warning",
            title: "Success",
            text: "Data has been successfully submitted!",
        });
        return false;
    };

    return (
        <AdminLayout>
            <Head title="Categories" />
            <div>
                <div className="py-12 px-16">
                    <Link href={`/admin/dashboard`} className="flex flex-row text-white mb-10 gap-5 items-center text-lg">
                        <ArrowLeft />
                        <p className="hover:underline">Back</p>
                    </Link>
                    <div className="flex bg-white rounded-xl h-20 justify-between items-center">
                        <div className="px-10 py-4">
                            <h1 className="text-2xl font-bold">Categories</h1>
                        </div>
                        <div className="px-10 py-4">
                            <Link href={`/admin/addCategory`}>
                                <button className="bg-[#0A223C] text-white px-9 py-3 rounded-xl hover:bg-blue-600">
                                    Create New Category
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between px-16 pb-5">
                    <div className="relative flex w-1/3">
                        <input
                            type="text"
                            placeholder="Search by ID or name..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="p-2 rounded-l-xl w-full pl-5 placeholder:text-gray-500"
                        />
                        <button
                            className="bg-black text-white px-4 rounded-r-xl hover:bg-blue-600 flex items-center"
                        >
                            <Search className="w-5 h-5 mr-2" />
                        </button>
                    </div>
                    <div className="flex gap-5">
                        <Link href={pagination.prev_page_url}>
                            <button className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-400">
                                <DoubleArrowLeft/>
                            </button>
                        </Link>
                        <Link href={pagination.next_page_url}>
                            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-400">
                                <DoubleArrowRight/>
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="text-white">
                    {filteredCategories.length > 0 ? (
                        <div className="px-16 pb-10">
                            <div className="bg-white rounded-2xl">
                                <table className="w-full">
                                    <thead>
                                        <tr>
                                            <th className="px-3 py-3 text-black">ID</th>
                                            <th className="px-3 py-3 text-black">Name</th>
                                            <th className="px-3 py-3 text-black">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredCategories.map((category) => (
                                            <tr key={category.id}>
                                                <td className="text-center px-3 py-3 text-black">{category.id}</td>
                                                <td className="px-3 py-3 text-black">{category.name}</td>
                                                <td className="px-3 py-3 text-black">
                                                    <div className="flex gap-5 justify-center">
                                                        <button
                                                            className="bg-blue-600 text-white px-9 py-1 rounded-md hover:bg-blue-300"
                                                            onClick={() => handleEdit(category)}
                                                        >
                                                            <EditIcon/>
                                                        </button>
                                                        {" "}
                                                        <Link href={`/admin/deleteCategory/${category.id}`}>
                                                            <button
                                                                className="bg-red-600 text-white px-9 py-1 rounded-md hover:bg-red-300"
                                                                onClick={() => handleDelete(category.id)}
                                                            >
                                                                <DeleteIcon/>
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : (
                        <p className="text-center text-4xl font-bold text-gray-500 py-20">
                            No Categories Match Your Search
                        </p>
                    )}
                </div>
            </div>
            {editCategory && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <form
                        onSubmit={handleUpdate}
                        className="bg-white p-6 rounded shadow-lg w-1/3"
                    >
                        <h2 className="text-lg font-bold mb-4">Edit Category</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700">Category Name</label>
                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) => setData("name", e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Description</label>
                            <textarea
                                value={data.description}
                                onChange={(e) => setData("description", e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded resize-none"
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="button"
                                onClick={() => setEditCategory(null)}
                                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </AdminLayout>
    );
}
