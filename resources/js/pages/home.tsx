import React from 'react';
import Layout from '@/layouts/layout';

const games = [
    { img: '/images/mobile-legends.jpg', title: 'Mobile Legends' },
    { img: '/images/free-fire.jpg', title: 'Free Fire' },
    { img: '/images/genshin.jpg', title: 'Genshin Impact' },
    { img: '/images/pubg.jpg', title: 'PUBG Mobile' },
    { img: '/images/valorant.jpg', title: 'Valorant' },
    { img: '/images/honor-of-kings.jpg', title: 'Honor of Kings' },
    { img: '/images/cod.jpg', title: 'Call of Duty Mobile' },
    { img: '/images/fc.jpg', title: 'EA sports FC Mobile' },
];

export default function Home() {
    return (
        <Layout title="Arcode">
            <div className="w-full min-h-screen overflow-y-auto px-6 py-8 mx-auto">
                <div className="max-w-3xl mx-auto">

                    {/* Search box (dummy placeholder) */}
                    <div className="bg-white h-32 rounded-xl mb-24 shadow-md"></div>

                    {/* Section: Popular */}
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="text-white text-xl font-bold">Popular</h2>
                        <a href="#" className="text-white text-sm font-semibold opacity-70 hover:underline">View more</a>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-24">
                        {games.map((game, index) => (
                            <div key={`popular-${index}`} className="flex flex-col items-center space-y-2">
                                <div className="w-24 h-24 rounded-lg overflow-hidden shadow-md bg-gray-800">
                                    <a href="/detail"> <img src={game.img} alt={game.title} className="w-full h-full object-cover" /> </a>
                                </div>
                                <p className="text-white text-xs text-center font-medium">{game.title}</p>
                            </div>
                        ))}
                    </div>

                    {/* Section: New Game */}
                    <div className="mb-10">
                        <h2 className="text-white text-xl font-bold">New Game</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {games.map((game, index) => (
                            <div key={`new-${index}`} className="flex flex-col items-center space-y-2">
                                <div className="w-24 h-24 rounded-lg overflow-hidden shadow-md bg-gray-800">
                                    <img src={game.img} alt={game.title} className="w-full h-full object-cover" />
                                </div>
                                <p className="text-white text-xs text-center font-medium">{game.title}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </Layout>
    );
}
