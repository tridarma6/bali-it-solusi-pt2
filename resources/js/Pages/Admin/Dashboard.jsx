import BrandIcon from '@/Components/Icons/BrandIcon';
import CategoryIcon from '@/Components/Icons/CategoryIcon';
import ProductIcon from '@/Components/Icons/ProductIcon';
import AdminLayout from '@/Layouts/AdminLayout';
import ForbiddenLayout from '@/Layouts/ForbiddenLayout';
import { Head, Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Dashboard({ auth, products, isadmin}) {
    console.log(auth);
    console.log(isadmin[0].name);

    const [dashboardData, setDashboardData] = useState({
        products: 0,
        categories: 0,
        brands: 0,
    });

    useEffect(() => {
        // Mengambil data dari API
        fetch('/api/dashboard/data')
            .then((response) => response.json())
            .then((data) => setDashboardData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);
    
    return (
        isadmin[0].name === 'admin' ? (
            <AdminLayout>
                <Head title="Admin Page" />
                
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        {/* <div className="bg-[#003875] overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-white font-bold">Page for Admin</div>
                        </div> */}
                        <div className="flex flex-row justify-between pt-16">
                            <Link href={`/admin/brand`}>
                                <div className="bg-white w-[350px] h-[175px] rounded-xl p-6 group">
                                    <div className='flex flex-row justify-between'>
                                        <div className='flex flex-col gap-12'>
                                            <h1 className="text-3xl font-bold text-black group-hover:underline">
                                                Brands
                                            </h1>
                                            <p className=" text-4xl text-gray-400">
                                                {dashboardData.brands}
                                            </p>
                                        </div>
                                        <div className='group-hover:scale-110 transition-all duration-500'>
                                            <BrandIcon/>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href={`/admin/categories`}>
                                <div className="bg-white w-[350px] h-[175px] rounded-xl p-6 group">
                                    <div className='flex flex-row justify-between'>
                                        <div className='flex flex-col gap-12'>
                                            <h1 className="text-3xl font-bold text-black group-hover:underline">
                                                Categories
                                            </h1>
                                            <p className=" text-4xl text-gray-400">
                                                {dashboardData.categories}
                                            </p>
                                        </div>
                                        <div className='group-hover:scale-110 transition-all duration-500'>
                                            <CategoryIcon/>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href={`/admin/product`}>
                                <div className="bg-white w-[350px] h-[175px] rounded-xl p-6 group">
                                    <div className='flex flex-row justify-between'>
                                        <div className='flex flex-col gap-12'>
                                            <h1 className="text-3xl font-bold text-black group-hover:underline">
                                                Products
                                            </h1>
                                            <p className=" text-4xl text-gray-400">
                                                {dashboardData.products}
                                            </p>
                                        </div>
                                        <div className='group-hover:scale-110 transition-all duration-500'>
                                            <ProductIcon/>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>  
            </AdminLayout>

        ) : (
            <ForbiddenLayout>
    
            </ForbiddenLayout>

        )
    );
}
