export const ContactCard = ({ contact }) => {
    return (
        <div className="flex w-full flex-col items-center justify-center gap-2 rounded-lg bg-white p-2 py-3 shadow-lg">
            <h1 className="text-2xl font-bold capitalize">{contact.name}</h1>
            <a
                href={`tel:${contact.phone_number}`}
                className="text-sky-400 underline"
            >
                {contact.phone_number}
            </a>

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
    );
};
