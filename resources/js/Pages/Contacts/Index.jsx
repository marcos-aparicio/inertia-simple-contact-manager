import { ContactCard } from "@/AppComponents/ContactCard";
import { FlashMessage } from "@/AppComponents/FlashMessage";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";

export default function Index({ auth, contacts }) {
    const { flash } = usePage().props;
    console.log("flash: ", flash);

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

            <div className="py-10 ">
                <h1 className="my-3 text-center text-4xl font-bold">
                    Your Contacts
                </h1>

                {flash.message ? (
                    <FlashMessage
                        message={flash?.message}
                        type={flash?.type}
                        key={flash?.id}
                    />
                ) : null}
            </div>

            <div className="grid-flow-rows mx-auto grid w-3/4 grid-cols-1 justify-between justify-items-center gap-14 pb-6 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-5">
                {contacts.length < 1 ? (
                    <div className="col-span-full flex flex-col justify-center self-center justify-self-center text-center">
                        <p> You don't have any contacts.</p>
                        <a
                            href={route("contacts.create")}
                            className="text-blue-500 underline"
                        >
                            Add one!
                        </a>
                    </div>
                ) : (
                    contacts.map((contact) => (
                        <ContactCard key={contact.id} contact={contact} />
                    ))
                )}
            </div>
        </AuthenticatedLayout>
    );
}
