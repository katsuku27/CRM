import Layout from '@/layouts/layout';

export default function MLTopupPage() {
    return (
        <Layout title="Mobile Legends Top Up">
            <div className="min-h-screen px-4 py-10 text-white">
                <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row">
                    {/* KIRI: Gambar + Info */}
                    <div className="space-y-6 md:w-1/3">
                        <img src="/images/ml-banner.png" alt="Mobile Legends" className="h-60 w-full rounded-xl object-cover shadow-lg" />
                        <div className="space-y-3 text-sm md:text-base">
                            <h2 className="text-2xl font-bold">Mobile Legends</h2>
                            <p>
                                Arcade offers easy, secure and practical ML top up. Pay conveniently with Gopay, OVO, DANA, Bank Transfer, Shopeepay,
                                Paypal.
                            </p>
                            <p>
                                Buy Mobile Legends Diamonds and Weekly Diamond Pass in seconds! Simply enter your Mobile Legends user ID and zone ID,
                                select the items you wish to purchase, complete the payment, and the items will be sent directly to your Mobile
                                Legends account.
                            </p>
                        </div>
                    </div>

                    {/* KANAN: Langkah Top Up */}
                    <div className="space-y-6 md:w-2/3">
                        {/* Step 1 */}
                        <div className="space-y-4 rounded-xl bg-gradient-to-b from-[#0B1FCD] to-[#8C7CF3] p-6 shadow-md">
                            <p className="text-3xl font-bold">① Enter User ID</p>
                            <div className="flex flex-col gap-4 md:flex-row">
                                <input
                                    type="text"
                                    placeholder="Enter User ID"
                                    className="w-full border border-white px-4 py-2 text-center font-bold text-white"
                                />
                                <input
                                    type="text"
                                    placeholder="Zone ID"
                                    className="w-full border border-white px-4 py-2 text-center font-bold text-white"
                                />
                            </div>
                            <p className="text-sm font-bold">
                                Untuk mengetahui User ID Anda, silakan klik menu profile dibagian kiri atas pada menu utama game. User ID akan
                                terlihat dibagian bawah Nama Karakter Game Anda. Silakan masukkan User ID Anda untuk menyelesaikan transaksi. Contoh :
                                12345678(1234).
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="space-y-4 rounded-xl bg-gradient-to-b from-[#0B1FCD] to-[#8C7CF3] p-6 shadow-md">
                            <p className="text-3xl font-bold">② Choose Nominal Top Up</p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: '5 Diamonds', price: 'Rp1.500' },
                                    { label: '19 Diamonds', price: 'Rp4.800' },
                                    { label: '53 Diamonds', price: 'Rp13.000' },
                                    { label: '77 Diamonds', price: 'Rp18.000' },
                                    { label: '154 Diamonds', price: 'Rp36.000' },
                                    { label: '218 Diamonds', price: 'Rp51.000' },
                                    { label: '366 Diamonds', price: 'Rp85.000' },
                                    { label: '568 Diamonds', price: 'Rp125.000' },
                                    { label: 'Weekly Diamond Pass', price: 'Rp27.000' },
                                ].map((item, i) => (
                                    <div key={i} className="rounded-lg bg-white p-4 text-center text-black shadow transition hover:scale-105 hover:cursor-pointer">
                                        <p className="font-bold">{item.label}</p>
                                        <p className="text-sm text-gray-700">{item.price}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="space-y-4 rounded-xl bg-gradient-to-b from-[#0B1FCD] to-[#8C7CF3] p-6 shadow-md">
                            <p className="text-3xl font-bold">③ Choose Payment Method</p>
                            <div className="space-y-2">
                                {[
                                    { id: 'dana', img: '/images/dana.png' },
                                    { id: 'ovo', img: '/images/ovo.png' },
                                    { id: 'gopay', img: '/images/gopay.png' },
                                    { id: 'spay', img: '/images/spay.png' },
                                    { id: 'paypal', img: '/images/paypal.png' },
                                    { id: 'tf', img: '/images/tf.png' },
                                ].map((method, i) => (
                                    <label
                                        key={i}
                                        htmlFor={method.id}
                                        className="flex cursor-pointer items-center gap-3 rounded-lg bg-white px-4 py-2 text-black shadow transition hover:scale-[1.01]"
                                    >
                                        <input type="radio" name="payment" id={method.id} className="accent-blue-600" />
                                        <img src={method.img} alt={method.id} className="h-12" />
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="space-y-4 rounded-xl bg-gradient-to-b from-[#0B1FCD] to-[#8C7CF3] p-6 shadow-md">
                            <p className="text-3xl font-bold">④ Detail</p>
                            <p className="text-sm font-bold"> Proof of payment for your purchase will be sent to your email address </p>
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="w-full border border-white px-4 py-2 text-center font-bold text-white"
                            />
                            <input type="checkbox" className='hover:cursor-pointer'/>
                            {' Yes, I would like to receive news and promotions via Email '}
                            <button className="w-full rounded-xl bg-[#D5F7DB] hover:bg-[#08AD36] hover:cursor-pointer py-3 font-bold text-black transition hover:brightness-110">
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
