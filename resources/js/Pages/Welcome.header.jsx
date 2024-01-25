import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function WelcomeHeader({ auth }) {
    return (
        <div className="flex w-full items-center justify-between bg-slate-800 p-4 text-end sm:fixed sm:right-0 sm:top-0">
            <ApplicationLogo className="h-12 fill-none stroke-cyan-800" />
            <div>
                {auth.user ? (
                    <Link
                        href={route("dashboard")}
                        className="font-semibold text-gray-600 hover:text-gray-900 focus:rounded-sm focus:outline focus:outline-2 focus:outline-red-500 dark:text-gray-400 dark:hover:text-white"
                    >
                        Dashboard
                    </Link>
                ) : (
                    <>
                        <Link
                            href={route("login")}
                            className="font-semibold text-gray-600 hover:text-gray-900 focus:rounded-sm focus:outline focus:outline-2 focus:outline-red-500 dark:text-gray-400 dark:hover:text-white"
                        >
                            Log in
                        </Link>

                        <Link
                            href={route("register")}
                            className="ms-4 font-semibold text-gray-600 hover:text-gray-900 focus:rounded-sm focus:outline focus:outline-2 focus:outline-red-500 dark:text-gray-400 dark:hover:text-white"
                        >
                            Register
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}
