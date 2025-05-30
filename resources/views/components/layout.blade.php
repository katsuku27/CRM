<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{{ $title ?? 'Arcode' }}</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="flex items-center justify-center h-screen font-sans" style="background: linear-gradient(to bottom, #2F5063, #172230, #2F5063, #172230);">

    {{-- Navbar --}}
        <x-navbar />

    {{ $slot }} {{-- Tempat konten halaman dimasukkan --}}
</body>
</html>
