import Image from "next/image";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, X } from "lucide-react";
import MainNav from "./main-nav";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="fixed flex flex-row items-center justify-center w-full z-50">
            <div className="flex flex-1 m-6 px-6 py-4 rounded-xl bg-orange-500/5 backdrop-blur-lg lg:max-w-[1000px]">

                <div className="flex justify-between items-center w-full">
                    <Link href={'/'}>
                        <Image
                            src={'/bandicoot-software.svg'}
                            alt="bandicoot logo"
                            width={100}
                            height={100}
                            className="w-36"
                        />
                    </Link>

                    <Sheet>
                        <SheetTrigger asChild className="cursor-pointer lg:hidden">
                            <Menu className="h-8 w-8" />
                        </SheetTrigger>
                        <SheetContent side="right" className="flex flex-col">
                            <SheetClose asChild>
                                <Button size="icon" variant="ghost" className="ml-auto">
                                    <X className="h-8 w-8 text-orange-500" />
                                    <span className="sr-only">Cerrar</span>
                                </Button>
                            </SheetClose>
                            <MainNav
                                className="flex flex-col gap-y-2 h-full justify-center items-end"
                                withSheetClose
                            />
                        </SheetContent>
                    </Sheet>

                    <MainNav className="hidden lg:flex" />
                </div>

            </div>
        </div >
    );
}

export default Navbar;