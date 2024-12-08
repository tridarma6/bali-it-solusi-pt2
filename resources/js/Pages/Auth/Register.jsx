import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';
import LottieAnimationSignUp from './AnimaSignUp';
import LottieAnimationSignUp2 from './AnimaSignUp2';
import Eye from '@/Components/Icons/Eye';
import EyeSlash from '@/Components/Icons/EyeSlash';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        phone_number: '',
        address: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [step, setStep] = useState(1); // State untuk mengatur step form
    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            <div className='max-h-screen p-12'>
                <div className='flex '>
                    <div className="">
                        {step === 1 && (
                            <div className='w-[600px] h-[580px] bg-gradient-to-r from-[#818080] to-[#FFFFFF] flex justify-center items-center rounded-l-[20px]'>
                                <LottieAnimationSignUp />
                            </div>

                        )}
                    </div>
                    <div className="">
                        {step === 2 && (
                            <div className='w-[600px] h-[580px] bg-gradient-to-r from-[#818080] to-[#FFFFFF] flex justify-center items-center rounded-l-[20px]'>
                                <LottieAnimationSignUp2 />
                            </div>
                        )}
                    </div>

                    <form onSubmit={submit} className='flex flex-col gap-3 bg-white p-16 w-full rounded-r-[20px]'>

                        {step === 1 && (
                            <div>
                                <h1 className='text-6xl font-bold pb-4'>REGISTER</h1>
                                <div>
                                    <InputLabel htmlFor="name" value="Name" />
                                    <TextInput
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        autoComplete="name"
                                        isFocused={true}
                                        onChange={(e) => setData('name', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="email" value="Email" />
                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        onChange={(e) => setData('email', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.email} className="mt-2" />
                                </div>

                                <div className="relative mt-4">
                                    <InputLabel htmlFor="password" value="Password" />
                                    <TextInput
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={data.password}
                                        className="mt-1 block w-full"
                                        autoComplete="new-password"
                                        onChange={(e) => setData('password', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.password} className="mt-2" />

                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility} // Toggle visibility
                                        className="absolute right-3 top-9 focus:outline-none " // Posisi ikon
                                    >
                                        {showPassword ? <EyeSlash /> : <Eye />} {/* Tampilkan ikon sesuai state */}
                                    </button>
                                </div>

                                <div className="relative mt-4">
                                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                                    <TextInput
                                        id="password_confirmation"
                                        type={showPassword ? "text" : "password"}
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        className="mt-1 block w-full"
                                        autoComplete="new-password"
                                        onChange={(e) => setData('password_confirmation', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.password_confirmation} className="mt-2" />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility} // Toggle visibility
                                        className="absolute right-3 top-9 focus:outline-none " // Posisi ikon
                                    >
                                        {showPassword ? <EyeSlash /> : <Eye />} {/* Tampilkan ikon sesuai state */}
                                    </button>
                                </div>

                                <div className="flex items-center justify-between mt-4">
                                    <div className="">
                                        <p>Have an account?&nbsp;
                                            <Link href={route('login')} className="underline text-md text-black hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Log in</Link></p>
                                    </div>
                                    <PrimaryButton className="ms-4" onClick={nextStep}>
                                        Next
                                    </PrimaryButton>
                                </div>
                            </div>
                        )}
                        {step === 2 && (
                            <div>
                                <h1 className='text-6xl font-bold pb-4'>REGISTER </h1>

                                <div>
                                    <InputLabel htmlFor="phone_number" value="Phone Number" />
                                    <TextInput
                                        id="phone_number"
                                        type="text"
                                        name="phone_number"
                                        value={data.phone_number}
                                        className="mt-1 block w-full"
                                        autoComplete="phone"
                                        onChange={(e) => setData('phone_number', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.phone_number} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="address" value="Address" />
                                    <TextInput
                                        id="address"
                                        type="text"
                                        name="address"
                                        value={data.address}
                                        className="mt-1 block w-full"
                                        autoComplete="address"
                                        onChange={(e) => setData('address', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.address} className="mt-2" />
                                </div>

                                <div className="block mt-4">
                                    <PrimaryButton className="w-full justify-center items-center" disabled={processing}>
                                        Register
                                    </PrimaryButton>
                                </div>
                                <div className="flex items-center justify-start mt-20">
                                    <PrimaryButton className="" onClick={prevStep}>
                                        Back
                                    </PrimaryButton>
                                </div>
                            </div>
                        )}

                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
