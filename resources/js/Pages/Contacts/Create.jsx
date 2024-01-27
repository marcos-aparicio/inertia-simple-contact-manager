import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Create({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-center text-xl font-semibold leading-tight text-gray-800">
                    Add a Contact
                </h2>
            }
        >
            <Head title="Add a contact" />

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
                            type="email"
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

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
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
