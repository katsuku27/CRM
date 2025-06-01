import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

type RegisterForm = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
            <Head title="Register" />
            <div className="flex h-screen items-center justify-center bg-gradient-to-br from-[#487D96] to-[#0f172a] font-sans">
                <form onSubmit={submit} className="w-[300px]">
                    {/* Logo */}
                    <div className="mb-6 flex justify-center text-5xl font-bold text-white">
                        <span className="flex items-center">
                            <img src="/images/logo.png" alt="logo" className="mt-3 h-14 w-14" />
                            <span>rcode</span>
                        </span>
                    </div>

                    {/* Name */}
                    <div className="mb-6 flex items-center rounded-full bg-gray-300 px-4 py-2">
                        <svg
                            className="h-6 w-6 text-white dark:text-gray-800"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z"
                                clip-rule="evenodd"
                            />
                        </svg>

                        <input
                            type="text"
                            placeholder="Name"
                            className="ml-2 w-full bg-transparent text-gray-800 placeholder-gray-800 outline-none"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            disabled={processing}
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-6 flex items-center rounded-full bg-gray-300 px-4 py-2">
                        <svg
                            className="h-6 w-6 text-white dark:text-gray-800"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16"
                                stroke="#000000"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <input
                            type="email"
                            placeholder="Email"
                            className="ml-2 w-full bg-transparent text-gray-800 placeholder-gray-800 outline-none"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            disabled={processing}
                            required
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="mb-6 flex items-center rounded-full bg-gray-300 px-4 py-2">
                        <svg
                            className="h-6 w-6 text-white dark:text-gray-800"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <input
                            id="phonenumber"
                            type="text"
                            placeholder="Phone Number"
                            className="ml-2 w-full bg-transparent text-gray-800 placeholder-gray-800 outline-none"
                            // JAN LUPA DICOCOKIN //

                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            disabled={processing}
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-6 flex items-center rounded-full bg-gray-300 px-4 py-2">
                        <svg
                            className="h-6 w-6 text-white dark:text-gray-800"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
                                clip-rule="evenodd"
                            />
                        </svg>

                        <input
                            id="password"
                            type="password"
                            placeholder="Confirm Password"
                            className="ml-2 w-full bg-transparent text-gray-800 placeholder-gray-800 outline-none"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            disabled={processing}
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="mb-6 w-full rounded-full border border-white bg-transparent py-2 font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-[#0f172a]"
                        disabled={processing}
                    >
                        {processing ? 'Creating...' : 'Create account'}
                    </button>

                    {/* Already have an account */}
                    <p className="text-center text-sm text-gray-400">
                        Already have an account?{' '}
                        <a href={route('login')} className="text-white underline">
                            Sign in
                        </a>
                    </p>
                </form>
            </div>
        </>
    );
}
