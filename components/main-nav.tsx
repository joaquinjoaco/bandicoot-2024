"use client"

import Link from "next/link";
import React from "react";

import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { SheetClose } from "./ui/sheet";
import ContactButton from "./ui/contact-button";
import { navLinks } from "@/lib/nav-links";
// import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
// import { ListItemBig } from "./ui/list-item-big";

const MainNav = (props: { withSheetClose?: any, className?: string }) => {

    const [SheetCloseWrapper, sheetCloseWrapperProps] = props.withSheetClose
        ? [SheetClose, { asChild: true }]
        : [React.Fragment, {}];

    const primary = navLinks;

    return (
        <nav className={cn("flex gap-x-4", props.className)}>
            {primary.map((item, idx) => (
                <SheetCloseWrapper {...sheetCloseWrapperProps} key={idx}>
                    <Link
                        key={idx}
                        href={item.href}
                        className={cn((buttonVariants({ variant: 'ghost' })), "select-none text-lg lg:text-sm gap-x-2 hover:text-orange-500 hover:bg-transparent")}
                    >
                        {/* {item.icon} */}
                        {item.label}
                    </Link>
                </SheetCloseWrapper>
            ))}
            <SheetCloseWrapper {...sheetCloseWrapperProps}>
                <ContactButton className="py-6 px-8 my-2 lg:my-0 lg:px-4 lg:py-2" />
            </SheetCloseWrapper>
        </nav>
    );
}

export default MainNav;