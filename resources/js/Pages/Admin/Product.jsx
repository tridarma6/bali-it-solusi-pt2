import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import EditIcon from "@/Components/Icons/EditIcon";
import DeleteIcon from "@/Components/Icons/DeleteIcon";
import DoubleArrowLeft from "@/Components/Icons/DoubleArrowLeft";
import DoubleArrowRight from "@/Components/Icons/DoubleArrowRight";
import LeftArrow from "@/Components/Icons/LeftArrow";
import RightArrow from "@/Components/Icons/RightArrow";
import Search from "@/Components/Icons/Search";
import FilterIcon from "@/Components/Icons/FilterIcon";

export default function Product(productArr) {
    console.log("array: ", productArr.products)

    const productList = productArr.products.data || [];
    const pagination = productArr.products || [];
    const pages = Array.from({ length: pagination.last_page }, (_, i) => i + 1);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
    const [editProduct, setEditProduct] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false); 
    const FilteredProducts = productList.filter((product) => {
    const query = searchQuery.toLowerCase();
        return (
            product.id.toString().includes(query) || 
            product.name.toLowerCase().includes(query) 
        );
    });

    // Membaca URL Query untuk itemsPerPage jika ada
    const queryParams = new URLSearchParams(location.search);
    const initialItemsPerPage = queryParams.get('itemsPerPage') || 10; // Default 10 jika tidak ada di URL
    const [itemsPerPage, setItemsPerPage] = useState(Number(initialItemsPerPage));  // Default 10 items per page


    const handlePageChange = (page) => {
        window.location.href = `${pagination.path}?page=${page}&itemsPerPage=${itemsPerPage}`;
    };

    const handleItemsPerPageChange = (items) => {
        setItemsPerPage(items);
        setFilterDropdownOpen(false);
        window.location.href = `?itemsPerPage=${items}&page=1`;
    };

    const { data, setData, put, delete: destroy } = useForm({
        name: "",
        description: "",
        price: "",
        stock: "",
        image: "",
        sold: "",
        detail: "",
        specification: "",
        important_information: "",
        original_price: "",
        discount: "",
        category_id: "",
        brand_id: "",
    });

    const handleEdit = (product) => {
        setEditProduct(product); // Set the product for editing
        setData({
            name: product.name || "", 
            description: product.description || "",
            price: product.price || "",
            stock: product.stock || "",
            image: product.image || "",
            sold: product.sold || "",
            detail: product.detail || "",
            specification: product.specification || "",
            important_information: product.important_information || "",
            original_price: product.original_price || "",
            discount: product.discount || "",
            category_id: product.category_id || "",
            brand_id: product.brand_id || "",
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        put(`/admin/updateProduct/${editProduct.id}`); // Kirim request update
        setEditProduct(null); // Tutup modal
    };

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this Product?")) {
            destroy(`/admin/deleteProduct/${id}`);
        }


    };
    return (
        <AdminLayout>
            <Head title="Products" />
            <div>
                <div className="py-12 px-16">
                    <div className="flex bg-white rounded-xl h-20 justify-between items-center">
                        <div className="px-10 py-4">
                            <h1 className="text-2xl font-bold">Products</h1>
                        </div>
                        <div className="px-10 py-4">
                            <Link href={`/admin/addProduct`}>
                                <button className="bg-[#0A223C] text-white px-9 py-3 rounded-xl hover:bg-blue-600">
                                    Create New Product
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
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-row gap-5">
                            <div className="flex items-center text-center justify-center">
                                <p className="text-gray-200">
                                    Showing {productArr.products.to} of {productArr.products.total} items
                                </p>
                            </div>

                            <div className="relative">
                                <button
                                    onClick={() => setFilterDropdownOpen(!filterDropdownOpen)}
                                    className="flex items-center justify-center px-3 py-3 bg-white hover:bg-gray-200 rounded-md"
                                >
                                    <FilterIcon/>
                                </button>
                                {filterDropdownOpen && (
                                    <div 
                                        className="absolute top-full left-0 w-40 bg-white border rounded-md shadow-lg"
                                    >
                                        <ul className="space-y-2">
                                            {[5, 10, 25, 50].map((items) => (
                                                <li key={items}>
                                                    <button
                                                        onClick={() => handleItemsPerPageChange(items)}
                                                        className="w-full px-3 py-2 text-left hover:bg-gray-100"
                                                    >
                                                        Show {items} items
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="flex rounded-xl justify-center">
                            {/* Tombol Halaman Pertama */}
                            <Link href={pagination.first_page_url}>
                                <button className="px-3 py-3 bg-white rounded-l hover:bg-gray-200 ">
                                    <DoubleArrowLeft />
                                </button>
                            </Link>
                            {/* Tombol halaman berikutnya */}
                            <Link href={pagination.prev_page_url}>
                                <button className="px-2 py-3 bg-white hover:bg-gray-200">
                                    <LeftArrow />
                                </button>
                            </Link>
                            {/* Dropdown untuk memilih halaman */}
                            <div className="relative">
                                <button
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className="px-3 py-3 bg-white hover:bg-gray-200 text-sm"
                                >
                                    Page {pagination.current_page} of {pagination.last_page}
                                </button>

                                {dropdownOpen && (
                                    <div className="absolute top-full left-0 w-40 bg-white border rounded-md shadow-lg max-h-60 overflow-y-auto">
                                        <ul className="space-y-2">
                                            {pages.slice(0, pagination.last_page).map((page) => (
                                                <li key={page}>
                                                    <button
                                                        onClick={() => handlePageChange(page)}
                                                        className="w-full px-3 py-2 text-left hover:bg-gray-100"
                                                    >
                                                        {page}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Tombol halaman sebelumnya */}
                            <Link href={pagination.next_page_url}>
                                <button className="px-2 py-3 bg-white hover:bg-gray-200">
                                    <RightArrow />
                                </button>
                            </Link>
                            {/* Tombol Halaman Terakhir */}
                            <Link href={pagination.last_page_url}>
                                <button className="px-3 py-3 bg-white rounded-r hover:bg-gray-200">
                                    <DoubleArrowRight />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="text-white">
                    {FilteredProducts.length > 0 ? (
                        <div className="px-16 pb-10">
                            <div className="bg-white rounded-2xl">
                                <table className="w-full">
                                    <thead>
                                        <tr>
                                            <th className="px-3 py-3 text-black">ID</th>
                                            <th className="px-3 py-3 text-black">Name</th>
                                            <th className="px-3 py-3 text-black">Price</th>
                                            <th className="px-3 py-3 text-black">Stock</th>
                                            <th className="px-3 py-3 text-black">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {FilteredProducts.map((product) => (
                                            <tr key={product.id}>
                                                <td className="text-center px-3 py-3 text-black">{product.id}</td>
                                                <td className="px-3 py-3 text-black">{product.name}</td>
                                                <td className="px-3 py-3 text-black">{product.price}</td>
                                                <td className="px-3 py-3 text-black">{product.stock}</td>
                                                <td className="px-3 py-3 text-black">
                                                    <div className="flex gap-5 justify-center">
                                                        <button
                                                            className="bg-blue-600 text-white px-9 py-1 rounded-md hover:bg-blue-300"
                                                            onClick={() => handleEdit(product)} // Fix here
                                                        >
                                                            <EditIcon/>
                                                        </button>
                                                    
                                                        <Link href={`/admin/deleteProduct/${product.id}`}>
                                                            <button className="bg-red-600 text-white px-9 py-1 rounded-md hover:bg-red-300">
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
                            No brands Match Your Search
                        </p>
                    )}
                </div>
            </div>
            {editProduct && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <form
                        onSubmit={handleUpdate}
                        className="bg-white  p-6 rounded shadow-lg w-3/4"
                    >
                        <h2 className="text-lg font-bold mb-1">Edit Product</h2>
                        <div className="flex flex-row justify-between gap-10">
                        <div className="flex flex-col w-1/2">
                            <div className="mb-1">
                                <label className="block text-gray-700">Product Name</label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => setData("name", e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-1">
                                <label className="block text-gray-700">Product Price</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    value={data.price}
                                    onChange={(e) => setData("price", e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-1">
                                <label className="block text-gray-700">Product Stock</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    value={data.stock}
                                    onChange={(e) => setData("stock", e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-1">
                                <label className="block text-gray-700">Description</label>
                                <textarea
                                    value={data.description}
                                    onChange={(e) => setData("description", e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded resize-none"
                                />
                            </div>
                            <div className="mb-1">
                                <label className="block text-gray-700">Detail</label>
                                <textarea
                                    value={data.detail}
                                    onChange={(e) => setData("detail", e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded resize-none"
                                />
                            </div>
                            <div className="mb-1">
                                <label className="block text-gray-700">Specification</label>
                                <textarea
                                    value={data.specification}
                                    onChange={(e) => setData("specification", e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded resize-none"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col w-1/2">
                            <div className="mb-1">
                                <label className="block text-gray-700">Original Price</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    value={data.original_price}
                                    onChange={(e) => setData("original_price", e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-1">
                                <label className="block text-gray-700">Discount</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    value={data.discount}
                                    onChange={(e) => setData("discount", e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-1">
                                <label className="block text-gray-700">Category ID</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    value={data.category_id}
                                    onChange={(e) => setData("category_id", e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-1">
                                <label className="block text-gray-700">Brand ID</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    value={data.brand_id}
                                    onChange={(e) => setData("brand_id", e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-1">
                                <label className="block text-gray-700">Important Information</label>
                                <textarea
                                    value={data.important_information}
                                    onChange={(e) => setData("important_information", e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded resize-none"
                                />
                            </div>
                        </div>
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="button"
                                onClick={() => setEditProduct(null)}
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

