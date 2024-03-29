import Image from "next/image";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, X } from "lucide-react";
import MainNav from "./main-nav";
import { Button } from "./ui/button";

const Navbar = () => {
    return (
        <div className="fixed flex flex-row items-center justify-center w-full">
            <div className="flex flex-1 m-6 px-6 py-4 rounded-xl bg-red-200/10 backdrop-blur">
                <Sheet>
                    <div className="flex justify-between items-center w-full">
                        <Image
                            src={'/bandicoot-software.svg'}
                            alt="bandicoot logo"
                            width={100}
                            height={100}
                            className="w-36"
                        />
                        <SheetTrigger asChild className="cursor-pointer">
                            <Menu className="h-8 w-8" />
                        </SheetTrigger>
                    </div>

                    <SheetContent side="right" className="flex flex-col focus-visible:ring-0">
                        <SheetClose asChild>
                            <Button size="icon" variant="ghost" className="ml-auto">
                                <X className="h-8 w-8 text-orange-500" />
                                <span className="sr-only">Cerrar</span>
                            </Button>
                        </SheetClose>
                        <MainNav
                            className="flex flex-col h-full justify-center items-end"
                            withSheetClose
                        />
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
}

export default Navbar;