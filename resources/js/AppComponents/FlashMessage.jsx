import { Icon } from "@/Components/Icon";
import { useMemo, useState } from "react";

const typeBG = {
    success: "bg-emerald-300",
    error: "bg-red-300",
    warning: "bg-yellow-200",
    info: "bg-blue-200",
};

const typeIcon = {
    success: (
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
    ),

    error: (
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
    ),

    warning: (
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
        />
    ),
    info: (
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
        />
    ),
    close: (
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
        />
    ),
};

export const FlashMessage = ({ message, type }) => {
    const [dNone, setDNone] = useState("");
    const args = useMemo(() => {
        return {
            bg: typeBG[type] ?? typeBG["success"],
            icon: typeIcon[type] ?? typeIcon["success"],
        };
    }, [type]);

    return (
        <div
            className={`${args.bg} py-4 rounded-lg  px-12 w-fit flex justify-evenly  font-bold gap-4 mx-auto items-center text-gray-700 relative ${dNone}`}
        >
            <Icon
                className="absolute right-1 top-1 h-5 w-5 cursor-pointer hover:text-gray-400"
                onClick={() => setDNone("hidden")}
            >
                {typeIcon["close"]}
            </Icon>

            <Icon className="h-8 w-8">{args.icon}</Icon>
            <h1>{message}</h1>
        </div>
    );
};
