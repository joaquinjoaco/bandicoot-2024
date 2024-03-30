import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import ContactButton from "@/components/ui/contact-button";
import Heading from "@/components/ui/heading";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="py-48 mx-6">
      <div className="flex flex-col gap-y-8">
        <Heading
          title={"Soluciones de calidad hechas a tu medida."}
          description={"Somos un grupo de dos apasionados desarrolladores. Buscamos brindarte soluciones de calidad, moldeadas a tus necesidades."}
          className=""
        />
        <div className="flex items-center justify-between landscape:justify-center gap-x-2">
          <ContactButton className="py-6 px-8" />
          <Link
            href={'/'}
            className={cn((buttonVariants({ variant: 'ghost' })), "group py-6 px-8 text-lg lg:font-medium lg:text-sm  transition-all")}
          >
            Proyectos
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </div>
    </main>
  );
}
