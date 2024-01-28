<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>@yield('title')</title>
    @vite(['resources/css/app.css'])
</head>

<body class="antialiased">
    <div
        class="items-top relative flex min-h-screen justify-center bg-gray-100 text-white dark:bg-gray-800 dark:text-white sm:items-center sm:pt-0">
        <div class="mx-auto max-w-xl sm:px-6 lg:px-8">
            <div class="flex flex-col items-center gap-2 pt-8 sm:justify-start sm:pt-0">
                <div class="border-gray-400  text-8xl tracking-wider">
                    @yield('code')
                </div>

                <div class="px-4  text-2xl uppercase tracking-wider">
                    @yield('message')
                </div>
            </div>
        </div>
    </div>
</body>

</html>
