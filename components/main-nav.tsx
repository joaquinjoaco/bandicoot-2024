"use client"

import Link from "next/link";
import React from "react";

import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { SheetClose } from "./ui/sheet";
import ContactButton from "./ui/contact-button";
// import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
// import { ListItemBig } from "./ui/list-item-big";

const MainNav = (props: { withSheetClose?: any, className?: string }) => {

    const [SheetCloseWrapper, sheetCloseWrapperProps] = props.withSheetClose
        ? [SheetClose, { asChild: true }]
        : [React.Fragment, {}];

    const primary = [
        // {
        //     href: '/',
        //     label: 'Servicios',
        //     // icon: <ArrowRight className="h-4 w-4" />,
        // },
        {
            href: '/',
            label: 'Nosotros',
            // icon: <ArrowRight className="h-4 w-4" />,
        },
        {
            href: '/',
            label: 'Nuestro trabajo',
            // icon: <ArrowRight className="h-4 w-4" />,
        },
    ];

    return (
        <nav className={cn("flex gap-x-4", props.className)}>
            {primary.map((item, idx) => (
                <SheetCloseWrapper {...sheetCloseWrapperProps} key={idx}>
                    <Link
                        key={idx}
                        href={item.href}
                        className={cn((buttonVariants({ variant: 'ghost' })), " select-none text-lg lg:text-sm gap-x-2 hover:text-orange-500")}
                    >
                        {/* {item.icon} */}
                        {item.label}
                    </Link>
                </SheetCloseWrapper>
            ))}
            <SheetCloseWrapper {...sheetCloseWrapperProps} >
                <ContactButton className="py-6 px-8 lg:px-4 lg:py-2" />
            </SheetCloseWrapper>
        </nav>
    );
}

export default MainNav;