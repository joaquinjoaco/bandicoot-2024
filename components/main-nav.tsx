"use client"

import { Bike, GanttChart, Package, Store, Wrench } from "lucide-react";
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
                        className={cn((buttonVariants({ variant: 'ghost' })), "text-lg gap-x-2")}
                    >
                        {/* {item.icon} */}
                        {item.label}
                    </Link>
                </SheetCloseWrapper>
            ))}
        </nav>
    );
}

export default MainNav;