import { DeleteContactModal } from "@/AppComponents/DeleteContactModal";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useMemo, useState } from "react";

export default function Edit({ auth, contact }) {
    const { data, setData, put, patch, processing, errors, reset } = useForm({
        name: contact.name,
        email: contact.email,
        dob: contact.dob,
        phone_number: contact.phone_number,
        remember: true,
    });

    const submit = (e) => {
        e.preventDefault();
        put(route("contacts.update", { contact }));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-center text-xl font-semibold leading-tight text-gray-800">
                    Edit a Contact
                </h2>
            }
        >
            <Head title="Edit Contact" />

            <div className="mx-auto mt-12 w-96 rounded bg-white p-6">
                <form onSubmit={submit}>
                    <div className="mt-4">
                        <InputLabel htmlFor="name" value="Name" />

                        <TextInput
                            id="name"
                            type="text"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="current-email"
                            onChange={(e) => setData("name", e.target.value)}
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="text"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="current-name"
                            onChange={(e) => setData("email", e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="dob" value="Date of Birth" />

                        <TextInput
                            id="dob"
                            type="date"
                            name="dob"
                            value={data.dob}
                            className="mt-1 block w-full"
                            autoComplete="current-dob"
                            onChange={(e) => setData("dob", e.target.value)}
                        />

                        <InputError message={errors.dob} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="phone_number"
                            value="Phone Number"
                        />

                        <TextInput
                            id="phone_number"
                            type="text"
                            name="phone_number"
                            value={data.phone_number}
                            className="mt-1 block w-full"
                            autoComplete="current-phone_number"
                            onChange={(e) =>
                                setData("phone_number", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.phone_number}
                            className="mt-2"
                        />
                    </div>
                    <div className="mt-4 flex justify-center">
                        <button className="rounded bg-blue-800 p-1 px-2 font-bold text-white">
                            Add contact
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
