import { Mail } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./button";

const ContactButton = ({
    className,
}: {
    className?: string;
}) => {
    return (
        <a
            href='mailto:bandicoot.solutions@gmail.com'
            className={cn((buttonVariants({ variant: 'default' })), "group text-lg font-normal lg:font-medium lg:text-sm lg:hover:font-bold bg-orange-500 hover:bg-orange-500/90 transition-all", className)}
        >
            <Mail className="h-4 w-4 mr-2 lg:group-hover:w-0 lg:group-hover:mr-0 transition-all" />
            ¡Hablemos!
        </a>
    );
}

export default ContactButton;