import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Home({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Home
                </h2>
            }
        >
            <Head title="Home" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl text-center text-xl sm:px-6 lg:px-8">
                    <p> You don't have any contacts.</p>
                    <a
                        href={route("contacts.create")}
                        className="text-blue-500 underline"
                    >
                        Add one!
                    </a>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
