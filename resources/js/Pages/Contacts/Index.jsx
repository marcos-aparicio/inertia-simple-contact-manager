import { ContactCard } from "@/AppComponents/ContactCard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index({ auth, contacts }) {
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

            <h1 className="py-12 text-center text-4xl font-bold">
                Your Contacts
            </h1>
            <div className="grid-flow-rows mx-auto grid w-3/4 grid-cols-1 justify-between justify-items-center gap-14 pb-6 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-5">
                {contacts.length < 1 ? (
                    <div className="mx-auto max-w-7xl text-center text-xl sm:px-6 lg:px-8">
                        <p> You don't have any contacts.</p>
                        <a
                            href={route("contacts.create")}
                            className="text-blue-500 underline"
                        >
                            Add one!
                        </a>
                    </div>
                ) : (
                    <>
                        {contacts.map((contact) => (
                            <>
                                <ContactCard contact={contact} />
                                <ContactCard contact={contact} />
                                <ContactCard contact={contact} />
                                <ContactCard contact={contact} />
                                <ContactCard contact={contact} />
                                <ContactCard contact={contact} />
                                <ContactCard contact={contact} />
                                <ContactCard contact={contact} />
                                <ContactCard contact={contact} />
                                <ContactCard contact={contact} />
                                <ContactCard contact={contact} />
                                <ContactCard contact={contact} />
                                <ContactCard contact={contact} />
                                <ContactCard contact={contact} />
                                <ContactCard contact={contact} />
                                <ContactCard contact={contact} />
                            </>
                        ))}
                    </>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
