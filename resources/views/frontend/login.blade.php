<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Arcode Login</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-[#172230] flex items-center justify-center h-screen font-sans">
    <div class="w-[300px]">
        <!-- Logo -->
        <div class="flex justify-center mb-6 text-white text-5xl font-bold">
            <span class="flex items-center">
                <img src="{{ asset('images/logo.png') }}" alt="logo" class="w-14 h-14 mt-3">
                <span>rcode</span>
            </span>
        </div>

        <!-- Username -->
        <div class="flex items-center bg-gray-700 rounded-full px-4 py-2 mb-6">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd"
                    d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z"
                    clip-rule="evenodd" />
            </svg>
            <input type="text" placeholder="Username"
                class="bg-transparent ml-2 text-white placeholder-white outline-none w-full" />
        </div>

        <!-- Password -->
        <div class="flex items-center bg-gray-700 rounded-full px-4 py-2 mb-6">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd"
                    d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
                    clip-rule="evenodd" />
            </svg>
            <input type="password" placeholder="Password"
                class="bg-transparent text-white placeholder-white outline-none w-full ml-2" />
            <button type="button" onclick="togglePassword()" class="focus:outline-none">
                <svg id="eyeIcon" class="w-6 h-6 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-width="2" d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z"/>
                    <circle id="eyeCircle" cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
                </svg>
            </button>
            <script>
                function togglePassword() {
                    const pwdInput = document.querySelector('input[type="password"], input[type="text"][placeholder="Password"]');
                    const eyeIcon = document.getElementById('eyeIcon');
                    if (pwdInput.type === "password") {
                        pwdInput.type = "text";
                        eyeIcon.classList.remove('text-gray-400');
                        eyeIcon.classList.add('text-blue-400');
                    } else {
                        pwdInput.type = "password";
                        eyeIcon.classList.remove('text-blue-400');
                        eyeIcon.classList.add('text-gray-400');
                    }
                }
            </script>

        </div>

        <!-- Sign in Button -->
        <button class="bg-transparent border border-white text-white w-full py-2 rounded-full font-semibold mb-6 transition-colors duration-200 hover:bg-white hover:text-[#0f172a]">Sign in</button>

        <!-- Sign up link -->
        <p class="text-center text-gray-400 text-sm">
            Don’t have an account yet? <a href="/frontend/register" class="text-white underline">Sign up now!</a>
        </p>
    </div>
</body>

</html>
