<x-layout :title="'Home Page'" :navbar="true">

<div class="w-full h-screen overflow-y-auto px-6 py-8 pt-24 mx-auto">

    <div class="max-w-3xl mx-auto">

    <!-- Search box (dummy placeholder) -->
    <div class="bg-white h-32 rounded-xl mb-24 shadow-md"></div>

    <!-- Section: Popular -->
    <div class="flex justify-between items-center mb-4">
        <h2 class="text-white text-xl font-bold">Popular</h2>
        <a href="#" class="text-white text-sm font-semibold opacity-70 hover:underline">View more</a>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-10">
        @foreach ([
            ['img' => '/images/mobile-legends.jpg', 'title' => 'Mobile Legends'],
            ['img' => '/images/free-fire.jpg', 'title' => 'Free Fire'],
            ['img' => '/images/genshin.jpg', 'title' => 'Genshin Impact'],
            ['img' => '/images/pubg.jpg', 'title' => 'PUBG Mobile'],
            ['img' => '/images/valorant.jpg', 'title' => 'Valorant'],
            ['img' => '/images/honor-of-kings.jpg', 'title' => 'Honor of Kings'],
            ['img' => '/images/cod.jpg', 'title' => 'Call of Duty Mobile'],
            ['img' => '/images/fc.jpg', 'title' => 'EA sports FC Mobile'],
        ] as $game)
            <div class="flex flex-col items-center space-y-2">
                <div class="w-24 h-24 rounded-lg overflow-hidden shadow-md bg-gray-800">
                    <img src="{{ $game['img'] }}" alt="{{ $game['title'] }}" class="w-full h-full object-cover">
                </div>
                <p class="text-white text-xs text-center font-medium">{{ $game['title'] }}</p>
            </div>
        @endforeach
    </div>

    <!-- Section: New Game -->
    <div class="mb-4">
        <h2 class="text-white text-xl font-bold">New Game</h2>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        @foreach ([
            ['img' => '/images/mobile-legends.jpg', 'title' => 'Mobile Legends'],
            ['img' => '/images/free-fire.jpg', 'title' => 'Free Fire'],
            ['img' => '/images/genshin.jpg', 'title' => 'Genshin Impact'],
            ['img' => '/images/pubg.jpg', 'title' => 'PUBG Mobile'],
            ['img' => '/images/valorant.jpg', 'title' => 'Valorant'],
            ['img' => '/images/honor-of-kings.jpg', 'title' => 'Honor of Kings'],
            ['img' => '/images/cod.jpg', 'title' => 'Call of Duty Mobile'],
            ['img' => '/images/fc.jpg', 'title' => 'EA sports FC Mobile'],
        ] as $game)
            <div class="flex flex-col items-center space-y-2">
                <div class="w-24 h-24 rounded-lg overflow-hidden shadow-md bg-gray-800">
                    <img src="{{ $game['img'] }}" alt="{{ $game['title'] }}" class="w-full h-full object-cover">
                </div>
                <p class="text-white text-xs text-center font-medium">{{ $game['title'] }}</p>
            </div>
        @endforeach
    </div>

    </div>

</div>

</x-layout>
