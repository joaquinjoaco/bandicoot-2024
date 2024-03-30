import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProjectLink = ({
    href,
    imageUrl,
    imageAlt,
    title,
    description
}: {
    href: string;
    imageUrl: string;
    imageAlt?: string;
    title: string;
    description: string;
}) => {
    return (
        <Link
            className="group flex flex-col relative"
            href={href}
        >
            <Image
                src={imageUrl}
                alt={imageAlt || ""}
                width={800}
                height={100}
                quality={100}
                className="w-full rounded-xl lg:group-hover:brightness-50 transition-all"
            />
            <div className="absolute flex flex-col items-center p-8 rounded-xl text-center text-white bg-white/10 font-bold text-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 lg:group-hover:opacity-100 lg:group-hover:backdrop-blur transition-all">
                {description}
                <div className="flex items-center text-sm">
                    Ver más
                    <ArrowRight className="h-4 w-4 ml-2 my-4" />
                </div>
            </div>
            <div className="bg-orange-500 text-white font-normal rounded-b-xl rounded-ss-xl my-2 py-2 px-4 lg:group-hover:rounded-t-none lg:group-hover:my-0 lg:group-hover:opacity-0 transition-all">
                {title}
            </div>
        </Link>
    );
}

export default ProjectLink;