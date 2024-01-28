import Modal from "@/Components/Modal";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";

export const DeleteContactModal = ({ show, setShow, contact }) => {
    const { delete: destroy, reset } = useForm();
    return (
        <Modal show={show} onClose={() => setShow(false)} closeable>
            <form
                onSubmit={async (e) => {
                    e.preventDefault();
                    await destroy(route("contacts.destroy", { contact }));
                    setShow(false);
                }}
                className="flex flex-col gap-12 p-6"
            >
                <p className="text-center">
                    Are you sure you want to remove this contact?
                </p>
                <p className="text-center text-2xl font-extrabold">
                    Name: {contact?.name ?? ""}
                    <br />
                    Phone: {contact?.phone_number ?? ""}
                </p>

                <div className="flex justify-between">
                    <button
                        className="rounded p-2 text-red-700 hover:bg-red-200"
                        type="submit"
                    >
                        Yes
                    </button>
                    <button
                        className="rounded p-2 text-slate-700 hover:bg-slate-200"
                        onClick={(e) => {
                            e.preventDefault();
                            setShow(false);
                        }}
                    >
                        No
                    </button>
                </div>
            </form>
        </Modal>
    );
};
