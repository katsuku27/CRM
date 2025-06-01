import React from 'react';
import Layout from '@/layouts/layout';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

export default function Users() {
    const users = [
        { id: 1, name: 'Jane Doe', email: 'jane.doe@gmail.com', phone: '+62 827 4558 3751' },
        { id: 2, name: 'John Doe', email: 'john.doe@gmail.com', phone: '+62 827 4558 3751' },
        { id: 3, name: 'Doe James', email: 'doe.james@gmail.com', phone: '+62 827 4558 3751' },
        { id: 4, name: 'Janice Holy', email: 'janice.holy@gmail.com', phone: '+62 827 4558 3751' },
        { id: 5, name: 'Calvin Morris', email: 'calvin.morris@gmail.com', phone: '+62 827 4558 3751' },
        { id: 6, name: 'Carrolina Herrera', email: 'carrolina.hera@gmail.com', phone: '+62 827 4558 3751' },
        { id: 7, name: 'Caitlin M', email: 'caitlin.michi@gmail.com', phone: '+62 827 4558 3751' },
        { id: 8, name: 'Evelyn Wijaya', email: 'evelyn.wijya@gmail.com', phone: '+62 827 4558 3751' },
    ];

    return (
        <Layout title="Admin Dashboard - Users">
            <div className="flex w-full min-h-screen bg-[#172230] text-white">
                {/* Sidebar */}
                <aside className="w-84 border-r border-gray-700 bg-[#0f172a] px-4 py-8">
                    <button className="mb-8 w-full rounded-full border border-white py-2">Admin Dashboard</button>
                    <nav className="space-y-2 text-sm ">
                        <a href="/admin/statistic"><button className="mb-2 cursor-pointer w-76 text-left rounded-md px-4 py-2 hover:bg-gray-700">Statistic</button></a>
                        <a href="/admin/users"><button className="mb-2 rounded-md w-76 text-left bg-gray-600 px-4 py-2 font-semibold text-white">Users</button></a>
                        <a href="/admin/items"><button className="cursor-pointer w-76 text-left rounded-md px-4 py-2 hover:bg-gray-700">Items</button></a>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 bg-gradient-to-b from-[#487D96] to-[#172230] px-10 py-8 overflow-auto">
                    <h1 className="mb-6 text-3xl font-bold">User Management Dashboard</h1>

                    {/* User Count */}
                    <div className="mb-6">
                        <div className="flex w-48 flex-col items-center justify-center rounded-xl bg-gradient-to-r from-[#0B1FCD] to-[#8C7CF3] px-6 py-4 text-white shadow-lg">
                            <p className="text-sm font-semibold mb-2">Arcode’s Users</p>
                            <p className="text-3xl font-bold">103</p>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="mb-4 flex gap-4">
                        <button className="flex items-center gap-2 rounded-md border border-white px-4 py-2 text-sm font-semibold hover:bg-blue-500">
                            + Add User
                        </button>
                        <input
                            type="text"
                            placeholder="Search ID, Name"
                            className="rounded-md border border-gray-400 bg-transparent px-4 py-2 text-sm text-white placeholder-gray-300"
                        />
                    </div>

                    {/* Table */}
                    <div className="overflow-auto rounded-md border border-gray-300 text-sm">
                        <table className="min-w-full table-auto text-left">
                            <thead className="bg-gray-500 text-white">
                                <tr>
                                    <th className="px-4 py-2">ID</th>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">Email</th>
                                    <th className="px-4 py-2">Phone</th>
                                    <th className="px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-[#1f2b3a]">
                                {users.map((user) => (
                                    <tr key={user.id} className="border-b border-gray-600 hover:bg-gray-700">
                                        <td className="px-4 py-2">{user.id}</td>
                                        <td className="px-4 py-2">{user.name}</td>
                                        <td className="px-4 py-2 text-blue-300 underline">{user.email}</td>
                                        <td className="px-4 py-2">{user.phone}</td>
                                        <td className="px-4 py-2 flex gap-2">
                                            <button className="hover:text-red-400"><FiTrash2 /></button>
                                            <button className="hover:text-blue-400"><FiEdit2 /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </Layout>
    );
}
