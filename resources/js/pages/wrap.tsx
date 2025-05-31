// pages/highlighted-purchases.tsx (Next.js) or src/pages/Wrap.jsx

import React from 'react';
import Layout from '@/layouts/layout';

const purchases = [
  { game: 'Mobile Legend', amount: 1000, unit: 'diamonds purchased', order: 1 },
  { game: 'Free Fire', amount: 250, unit: 'diamonds purchased', order: 2 },
  { game: 'Genshin Impact', amount: 100, unit: 'Genesis Crystals purchased', order: 3 },
];

export default function Wrap() {
  return (
    <Layout title="Wrap">
      <div className="w-full min-h-screen px-6 py-10 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-lg font-semibold mb-10">Your highlighted purchase this year</h2>

          {/* Purchase Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {purchases.map((item, index) => (
              <React.Fragment key={index}>
                <div className="bg-gradient-to-r from-[#4D3DFF] to-[#A167FF] rounded-xl p-4 shadow-md flex flex-col justify-between">
                  <div className="text-left">
                    <p className="text-sm font-semibold mb-1">{item.game}</p>
                    <p className="text-2xl font-bold">{item.amount}</p>
                    <p className="text-xs mt-1 text-white/80">{item.unit}</p>
                  </div>
                  <img
                    src="/images/diamond.png" // Replace with actual image path
                    alt="diamond"
                    className="w-10 h-10 mt-4 ml-auto"
                  />
                </div>

                <div className="bg-gradient-to-r from-[#2D49FF] to-[#8C5CFF] rounded-xl flex items-center justify-center text-3xl font-bold shadow-md">
                  {item.order}
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* Total Spending */}
          <div className="text-center mb-4 text-white font-semibold">
            <p className="text-sm mb-4">How much 💰💰💰 you’ve spent</p>
            <div className="bg-gradient-to-r from-[#2D49FF] to-[#8C5CFF] rounded-xl py-6 text-2xl font-bold shadow-md">
              Rp<em className="not-italic">xx.xxx.xxx,00</em>
              <p className="text-sm font-normal mt-1">in a year</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
