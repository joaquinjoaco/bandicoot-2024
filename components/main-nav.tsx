"use client"

import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { SheetClose } from "./ui/sheet";
// import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
// import { ListItemBig } from "./ui/list-item-big";

const MainNav = (props: { withSheetClose?: any, className?: string }) => {

    const [SheetCloseWrapper, sheetCloseWrapperProps] = props.withSheetClose
        ? [SheetClose, { asChild: true }]
        : [React.Fragment, {}];

    const primary = [
        {
            href: '/',
            label: 'Servicios',
            // icon: <GanttChart className="h-4 w-4" />,
        },
        {
            href: '/',
            label: 'Nosotros',
            // icon: <Bike className="h-4 w-4" />,
        },
        {
            href: '/',
            label: 'Nuestro trabajo',
            // icon: <Wrench className="h-4 w-4" />,
        },
    ];

    return (
        <nav className={cn("flex gap-x-4", props.className)}>
            {primary.map((item, idx) => (
                <SheetCloseWrapper {...sheetCloseWrapperProps} key={idx}>
                    <Link
                        key={idx}
                        href={item.href}
                        className={cn((buttonVariants({ variant: 'ghost' })), "text-lg lg:text-sm gap-x-2 hover:text-orange-500")}
                    >
                        {/* {item.icon} */}
                        {item.label}
                    </Link>
                </SheetCloseWrapper>
            ))}
            <SheetCloseWrapper {...sheetCloseWrapperProps}>
                <Link
                    href='mailto:aguslblumenfeld@gmail.com'
                    className={cn((buttonVariants({ variant: 'default' })), "group text-lg lg:text-sm lg:hover:font-bold bg-orange-500 hover:bg-orange-500/90 transition-all")}
                >
                    <Mail className="h-4 w-4 mr-2 lg:group-hover:w-0 lg:group-hover:mr-0 transition-all" />
                    ¡Hablemos!
                </Link>
            </SheetCloseWrapper>
        </nav>
    );
}

export default MainNav;