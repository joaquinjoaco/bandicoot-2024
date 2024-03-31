import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import ContactButton from "@/components/ui/contact-button";
import Heading from "@/components/ui/heading";
import { cn } from "@/lib/utils";
import ProjectLink from "@/components/ui/project-link";
import Collaborator from "@/components/ui/collaborator-card";

export default function Home() {
  return (
    <main className="mx-auto py-48 px-6 min-h-[100vh] max-w-[1000px]">
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
              href={'/proyectos'}
              className={cn((buttonVariants({ variant: 'ghost' })), "group py-6 px-8 text-lg lg:font-medium lg:text-sm transition-all")}
            >
              Proyectos
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* Most recent project */}
        <ProjectLink
          href="/proyectos/quitel-23"
          title="Nuestro más reciente trabajo"
          description="XLVI International Congress of Theoretical Chemists of Latin Expression"
          imageUrl="/quitel.png"
          imageAlt="XLVI International Congress of Theoretical Chemists of Latin Expression"
        />

        {/* Profiles */}
        <div className="relative flex flex-col items-center gap-y-8">
          <Image
            src={'/planet.svg'}
            alt="bandicoot planet"
            width={100}
            height={100}
            className="absolute -right-2 top-4 -z-10 w-24 lg:w-32 lg:-right-6 lg:top-0 "
          />
          <Image
            src={'/rocket-svgrepo.svg'}
            alt="rocket-svgrepo"
            width={100}
            height={100}
            className="absolute w-12 left-0 -bottom-6 rotate-12"
          />
          <h1 className="font-bold text-4xl border-b-2 border-orange-500">
            Bandicoot
          </h1>
          <div className="flex gap-x-2 w-full">
            <Collaborator
              name="Agustín"
              role="Fundador"
              avatarUrl="https://media.licdn.com/dms/image/D4D35AQFIZ0_TKnX4xg/profile-framedphoto-shrink_800_800/0/1689806914785?e=1712440800&v=beta&t=Awdmsx288l8EkMEfnitT3VE2ywwCcgpSB2xagZfp5UQ"
              avatarAlt="@agustin-lasalvia"
              avatarFallback="AS"
              linkedinUrl="https://www.linkedin.com/in/agustin-lasalvia/"
            />
            <Collaborator
              name="Joaquín"
              role="Fundador"
              avatarUrl="https://media.licdn.com/dms/image/C4D03AQFDd2VKmtq0fw/profile-displayphoto-shrink_800_800/0/1625511672026?e=1717027200&v=beta&t=8V3K7NX-HRhjui9-vLBmDEziZdDH0WHtoFcCgGqGgkM"
              avatarAlt="@joaquingomezleites"
              avatarFallback="JG"
              linkedinUrl="https://www.linkedin.com/in/joaquingomezleites/"
            />
          </div>
        </div>

      </div>
    </main>
  );
}
