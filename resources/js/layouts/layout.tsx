import React from 'react';
import Navbar from '@/layouts/navbar';

interface Props {
    children: React.ReactNode;
    title?: string;
}

export default function Layout({ children, title = 'Arcode' }: Props) {
    return (
        <div>
            <head>
                <title>{title}</title>
            </head>
            <body className="font-sans bg-gradient-to-b from-[#2F5063] via-[#172230] to-[#2F5063] min-h-screen">
                <Navbar />
                <main className="pt-24 px-6">
                    {children}
                </main>
            </body>
        </div>
    );
}
