import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import ContactButton from "@/components/ui/contact-button";
import Heading from "@/components/ui/heading";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowUp } from "lucide-react";
import Image from "next/image";
import ProjectLink from "@/components/ui/project-link";

export default function Home() {
  return (
    <main className="mx-auto py-48 px-6 max-w-[1000px]">
      <div className="flex flex-col gap-y-24">

        {/* Hero */}
        <div className="space-y-8">
          <Heading
            title={"Soluciones de calidad hechas a tu medida."}
            description={"Somos un grupo de dos apasionados desarrolladores. Buscamos brindarte soluciones de calidad, moldeadas a tus necesidades."}
          />

          <div className="flex items-center justify-center gap-x-2">
            <ContactButton className="py-6 px-8" />
            <Link
              href={'/'}
              className={cn((buttonVariants({ variant: 'ghost' })), "group py-6 px-8 text-lg lg:font-medium lg:text-sm transition-all")}
            >
              Proyectos
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* Most recent project */}

        <div className="">
          <ProjectLink
            href="/"
            title="Nuestro más reciente trabajo"
            description="XLVI International Congress of Theoretical Chemists of Latin Expression"
            imageUrl="/quitel.png"
            imageAlt="XLVI International Congress of Theoretical Chemists of Latin Expression"
          />
        </div>
      </div>
    </main>
  );
}
