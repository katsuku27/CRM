import React, { useState } from 'react';
import Layout from '@/layouts/layout';

export default function PurchaseHistory() {
    const purchases = Array(20).fill({
        item: '50 Diamonds - Mobile Legend',
        date: '3 Dec 2024',
        price: 'Rp61.900,00',
    });

    const itemsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(purchases.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentPurchases = purchases.slice(startIndex, startIndex + itemsPerPage);

    const handlePrev = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNext = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    return (
        <Layout title="Account History">
            <div className="flex min-h-screen items-start justify-center bg-[#141C2C] px-4 py-12 text-white">
                <div className="flex w-full max-w-3xl gap-12 min-h-screen">
                     {/* Sidebar */}
                    <div className="mt-16 h-50 bg-opacity-30 w-64 space-y-4 rounded-xl bg-gray-600 p-6">
                        {/* Account Information Tab */}
                        <a href="/account/information"><div className="mb-4 hover:bg-opacity-40 flex cursor-pointer items-center space-x-2 rounded-lg px-3 py-2 hover:bg-gray-500">
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
                        <a href="/account/history"><div className="bg-opacity-50 mb-4 flex items-center space-x-2 rounded-lg bg-gray-500 px-3 py-2">
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
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-8">Purchase History</h2>
                        <div className="bg-gray-600 bg-opacity-30 rounded-xl p-6 space-y-4">
                            {currentPurchases.map((purchase, index) => (
                                <div key={index} className="border border-gray-400 rounded-lg p-4">
                                    <div className="font-medium">{purchase.item}</div>
                                    <div className="text-sm text-gray-300">{purchase.date}</div>
                                    <div className="text-sm text-gray-100">{purchase.price}</div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination Controls */}
                        <div className="flex justify-between items-center mt-6">
                            <button
                                onClick={handlePrev}
                                disabled={currentPage === 1}
                                className={`px-4 py-2 rounded-md ${
                                    currentPage === 1
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-gray-700 hover:bg-gray-500'
                                }`}
                            >
                                Previous
                            </button>
                            <span className="text-sm">
                                Page {currentPage} of {totalPages}
                            </span>
                            <button
                                onClick={handleNext}
                                disabled={currentPage === totalPages}
                                className={`px-4 py-2 rounded-md ${
                                    currentPage === totalPages
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-gray-700 hover:bg-gray-500'
                                }`}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
