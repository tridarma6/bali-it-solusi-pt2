import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import LottieAnimation from './AnimaLogin';
import Eye from '@/Components/Icons/Eye';
import EyeSlash from '@/Components/Icons/EyeSlash';
import React, { useState } from 'react';



export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            <div className='h-full p-12'>
                <div className='flex flex-row'>
                    <form onSubmit={submit} className='flex flex-col gap-3 bg-white p-16 w-full rounded-l-[20px]'>
                        <h1 className='text-6xl font-bold pb-4'>LOGIN</h1>
                        <div >
                            <InputLabel htmlFor="email" value="Email" className='text-xl' />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="relative mt-4">
                            <InputLabel htmlFor="password" value="Password" className='text-xl' />
                            <TextInput
                                id="password"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Your Password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <InputError message={errors.password} className="mt-2" />

                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-3 top-11 focus:outline-none "
                            >
                                {showPassword ? <EyeSlash /> : <Eye />}
                            </button>

                        </div>

                        <div className="block mt-4">
                            <PrimaryButton className="w-full justify-center items-center" disabled={processing}>
                                Log in
                            </PrimaryButton>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                />
                                <p className="ms-2 text-sm text-gray-600">Remember me</p>
                            </label>
                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md"
                                >
                                    Forgot your password?
                                </Link>
                            )}

                        </div>
                        <div className='flex items-center justify-center mt-4 ms-2 text-sm text-gray-600'>
                            Dont Have an Account Yet?&nbsp;
                            <Link href={route('register')} className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign Up Here</Link>
                        </div>
                    </form>
                    <div className='w-full h-[600px] bg-gradient-to-l from-[#818080] to-[#FFFFFF] flex justify-center items-center rounded-r-[20px]'>
                        <LottieAnimation />
                    </div>

                </div>
            </div>
        </GuestLayout>
    );
}
