import { Head, useForm, Link } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler, useState } from 'react';
import InputError from '@/components/input-error';

type LoginForm = {
    email: string;
    password: string;
    remember: boolean;
};

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    const [showPassword, setShowPassword] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="bg-[#172230] flex items-center justify-center h-screen font-sans">
            <div className="w-[300px]">
                <Head title="Login" />

                {/* Logo */}
                <div className="flex justify-center mb-6 text-white text-5xl font-bold">
                    <span className="flex items-center">
                        <img src="/images/logo.png" alt="logo" className="w-14 h-14 mt-3" />
                        <span>rcode</span>
                    </span>
                </div>

                {status && (
                    <div className="mb-4 text-sm font-medium text-green-600 text-center">
                        {status}
                    </div>
                )}

                <form onSubmit={submit} className="space-y-6">
                    {/* Email */}
                    <div className="flex items-center bg-gray-700 rounded-full px-4 py-2">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd"
                                d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z"
                                clipRule="evenodd" />
                        </svg>
                        <input
                            type="email"
                            placeholder="Email"
                            className="bg-transparent ml-2 text-white placeholder-white outline-none w-full"
                            required
                            autoFocus
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                    </div>
                    <InputError message={errors.email} className="mt-1 ml-4" />

                    {/* Password */}
                    <div className="flex items-center bg-gray-700 rounded-full px-4 py-2">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd"
                                d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
                                clipRule="evenodd" />
                        </svg>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="bg-transparent text-white placeholder-white outline-none w-full ml-2"
                            required
                            autoComplete="current-password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        <button
                            type="button"
                            onClick={togglePassword}
                            className="focus:outline-none"
                        >
                            <svg
                                className={`w-6 h-6 ${showPassword ? 'text-blue-400' : 'text-gray-400'}`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path stroke="currentColor" strokeWidth="2" d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z"/>
                                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                        </button>
                    </div>
                    <InputError message={errors.password} className="mt-1 ml-4" />

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between">
                        <label className="flex items-center text-gray-400">
                            <input
                                type="checkbox"
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                                className="rounded border-gray-600 bg-gray-700 focus:ring-blue-500 mr-2"
                            />
                            <span>Remember me</span>
                        </label>

                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="text-sm text-blue-400 hover:text-blue-300"
                            >
                                Forgot password?
                            </Link>
                        )}
                    </div>

                    {/* Sign in Button */}
                    <button
                        type="submit"
                        className="bg-transparent border border-white text-white w-full py-2 rounded-full font-semibold transition-colors duration-200 hover:bg-white hover:text-[#0f172a] flex justify-center items-center"
                        disabled={processing}
                    >
                        {processing ? (
                            <>
                                <LoaderCircle className="h-4 w-4 animate-spin mr-2" />
                                Logging in...
                            </>
                        ) : (
                            'Sign in'
                        )}
                    </button>

                    {/* Sign up link */}
                    <p className="text-center text-gray-400 text-sm">
                        Don't have an account yet?{' '}
                        <Link href={route('register')} className="text-white underline">
                            Sign up now!
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
