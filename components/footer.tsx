import Image from "next/image";
import Link from "next/link";

import { navLinks } from "@/lib/nav-links";
import ContactButton from "./ui/contact-button";

const Footer = () => {

    const primary = navLinks;

    return (
        <footer className="flex flex-col items-center mx-auto mt-auto px-6 w-full">
            <div className="w-full px-14 py-16 bg-secondary-foreground text-white rounded-t-xl lg:max-w-[1000px]">
                <div className="grid grid-cols-2 gap-y-16 lg:grid-cols-3">
                    <Image
                        src={'/bandicoot-software-white.svg'}
                        alt="bandicoot logo"
                        width={100}
                        height={100}
                        className="w-36 col-span-2 lg:col-span-1"
                    />
                    <div className="flex flex-col gap-y-4 max-w-fit">
                        <p className="font-bold">Bandicoot</p>
                        {primary.map((item, idx) => (
                            <Link
                                key={idx}
                                href={item.href}
                                className={"text-sm gap-x-2 hover:text-orange-500 hover:bg-transparent"}
                            >
                                {/* {item.icon} */}
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-col gap-y-4 max-w-fit" >
                        <p className="font-bold">Contacto</p>
                        <ContactButton className="text-sm" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;