import { Link, Head } from "@inertiajs/react";
import WelcomeHeader from "./Welcome.header";
import { appName } from "@/app";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="flex h-screen flex-col bg-gray-100 bg-center selection:bg-red-500 selection:text-white dark:bg-gray-900 dark:text-white sm:flex sm:items-center sm:justify-center">
                <WelcomeHeader auth={auth} />
                <div className="flex w-full grow flex-col items-center justify-center gap-5 bg-[url('../img/light_background.jpg')] px-2 text-center sm:gap-3 bg-cover">
                    <h1 className="text-4xl font-bold sm:text-6xl">
                        {appName ?? "Contact Manager"}
                    </h1>
                    <h1 className="text-2xl font-bold sm:text-4xl">
                        Store your Contacts Now
                    </h1>

                    <Link
                        className="mt-5 inline-block rounded bg-white px-4 py-2 font-bold dark:bg-slate-700"
                        href={route("register")}
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </>
    );
}
