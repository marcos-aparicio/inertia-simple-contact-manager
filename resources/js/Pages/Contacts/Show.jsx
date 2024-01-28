import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useMemo } from "react";
const Show = ({ auth, contact }) => {
    console.log(contact);

    const age = useMemo(() => {
        const timeDiff = Math.abs(Date.now() - new Date(contact.dob).getTime());
        // year difference
        return Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));
    }, [contact.dob]);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-center text-2xl font-semibold leading-tight text-gray-800">
                    Contact Information
                </h2>
            }
        >
            <Head title="Contact" />
            <div className="mx-auto mt-12 flex w-80 flex-col gap-3 self-center rounded-xl border-4 border-stone-500 bg-stone-100 p-4 text-lg shadow-2xl sm:w-96 sm:p-3">
                <p className=" py-2 text-center text-4xl font-extrabold capitalize">
                    {contact.name}
                </p>
                <p>Phone: {contact.phone_number}</p>
                <p>Email: {contact.email}</p>
                <p>Age: {age} year(s)</p>
                <p>
                    Date of Birth:{" "}
                    {contact.dob === undefined ? "-" : contact.dob}
                </p>
                <div className="flex w-full justify-around">
                    <a
                        className="rounded bg-slate-500 p-1 px-2 text-white hover:bg-slate-800"
                        href={route("contacts.edit", { contact })}
                    >
                        Edit
                    </a>
                    <a
                        className="rounded bg-red-500 p-1 px-2 text-white hover:bg-red-800"
                        href={route("contacts.destroy", { contact })}
                    >
                        Remove
                    </a>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};
export default Show;
