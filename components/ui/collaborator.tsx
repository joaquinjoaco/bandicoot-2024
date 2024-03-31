import { LinkedinIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./button";

const Collaborator = ({
    name,
    role,
    avatarUrl,
    avatarAlt,
    avatarFallback,
    linkedinUrl,
}: {
    name: string;
    role: string;
    avatarUrl: string;
    avatarAlt: string;
    avatarFallback: React.ReactNode;
    linkedinUrl: string;
}) => {
    return (
        <div className="flex flex-col items-center py-4 px-4 bg-background shadow-lg shadow-orange-500/20 rounded-xl w-full">
            <Avatar className="w-24 h-24">
                <AvatarImage
                    src={avatarUrl}
                    alt={avatarAlt}
                />
                <AvatarFallback>{avatarFallback}</AvatarFallback>
            </Avatar>
            <p className="text-lg font-bold">{name}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
            <Link
                href={linkedinUrl}
                className={cn((buttonVariants({ variant: 'ghost', size: 'icon' })), "hover:text-orange-500 my-2")}
                target="_blank"
            >
                <LinkedinIcon className="h-6 w-6" />
            </Link>
        </div>
    );
}

export default Collaborator;