import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Cart({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Shopping Cart</h2>}
        >
            <Head title="Shopping Cart" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-[#003875] overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-white font-bold">Page for Shopping Cart</div>
                    </div>
                </div>
            </div>  
        </AuthenticatedLayout>
    );
}
