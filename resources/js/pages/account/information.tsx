import Layout from '@/layouts/layout';

export default function AccountInfo() {
    return (
        <Layout title="Account Information">
            <div className="flex min-h-screen items-start justify-center bg-[#141C2C] px-4 py-12 text-white">
                <div className="flex w-full max-w-3xl gap-12 h-74">
                    {/* Sidebar */}
                    <div className="mt-24 bg-opacity-30 w-64 space-y-4 rounded-xl bg-gray-600 p-6">
                        {/* Account Information Tab */}
                        <a href="/account/information"><div className="bg-opacity-50 mb-4 flex items-center space-x-2 rounded-lg bg-gray-500 px-3 py-2">
                            <svg
                                className="h-6 w-6 text-gray-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-width="2"
                                    d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                            </svg>
                            <span className="text-sm font-medium">Account Information</span>
                        </div></a>
                        {/* History Tab */}
                        <a href="/account/history"><div className="mb-4 hover:bg-opacity-40 flex cursor-pointer items-center space-x-2 rounded-lg px-3 py-2 hover:bg-gray-500">
                            <svg
                                className="h-6 w-6 text-gray-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 8v4l3 3M3.22302 14C4.13247 18.008 7.71683 21 12 21c4.9706 0 9-4.0294 9-9 0-4.97056-4.0294-9-9-9-3.72916 0-6.92858 2.26806-8.29409 5.5M7 9H3V5"
                                />
                            </svg>

                            <span className="text-sm">History</span>
                        </div></a>
                        {/* Wrap Tab */}
                        <a href="/wrap"><div className="hover:bg-opacity-40 flex cursor-pointer items-center space-x-2 rounded-lg px-3 py-2 hover:bg-gray-500">
                            <svg
                                className="h-6 w-6 text-gray-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"
                                />
                            </svg>

                            <span className="text-sm">Wrap</span>
                        </div></a>
                    </div>

                    {/* Main Content */}
                    <div className="w-2/3 flex-1">
                        <h2 className="mb-12 text-center text-2xl font-bold">Account Information</h2>
                        <form className="space-y-6">
                            {['Username', 'Name', 'Email', 'Telephone'].map((label) => (
                                <div key={label}>
                                    <label className="mb-1 block text-sm font-semibold">{label}</label>
                                    <input
                                        type="text"
                                        className="bg-opacity-30 w-full rounded-md bg-gray-600 px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    />
                                </div>
                            ))}
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
