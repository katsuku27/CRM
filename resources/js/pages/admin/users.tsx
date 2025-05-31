import React from 'react';
import Layout from '@/layouts/layout';

export default function Users() {
    return (
        <Layout title="Admin Dashboard - Users">
            <div className="flex w-full min-h-screen bg-[#172230] text-white">
                {/* Sidebar */}
                <aside className="w-84 border-r border-gray-700 bg-[#0f172a] px-4 py-8">
                    <button className="mb-8 w-full rounded-full border border-white py-2">Admin Dashboard</button>
                    <nav className="space-y-2 text-sm">
                        <a href="/admin/statistic"><button className="mb-2 cursor-pointer w-76 text-left rounded-md px-4 py-2 hover:bg-gray-700">Statistic</button></a>
                        <a href="/admin/users"><button className="mb-2 rounded-md w-76 text-left bg-gray-600 px-4 py-2 font-semibold text-white">Users</button></a>
                        <a href="/admin/items"><button className="cursor-pointer w-76 text-left rounded-md px-4 py-2 hover:bg-gray-700">Items</button></a>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 bg-gradient-to-b from-[#487D96] to-[#172230] px-10 py-8">
                    <h1 className="mb-6 text-3xl font-bold">Statistic</h1>

                    {/* Statistic Cards */}
                    <div className="flex gap-6">
                        {[
                            { label: "Arcode's Users", value: 103 },
                            { label: 'Total Products', value: 93 },
                            { label: 'Total Purchases', value: 93 },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="flex w-40 flex-col items-center justify-center rounded-xl bg-gradient-to-r from-[#0B1FCD] to-[#8C7CF3] px-6 py-4 text-white shadow-lg"
                            >
                                <p className="text-sm font-semibold mb-2">{stat.label}</p>
                                <p className="text-3xl font-bold">{stat.value}</p>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </Layout>
    );
}
