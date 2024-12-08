import { Link } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function ForbiddenLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-[#0A223C] justify-center items-center text-white">
            <div className="flex flex-col justify-center items-center text-center">
                <h1 className="text-[200px] font-bold mb-4">403</h1>
                <p className="text-[100px] mb-6">Access Forbidden</p>
                <p className="mb-4">Sorry, you don't have permission to access this page.</p>
                <Link
                    href="/"
                    className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-medium rounded-md transition duration-150 ease-in-out"
                >
                    Go to Homepage
                </Link>
            </div>
        </div>
    );
}
