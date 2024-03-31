import Collaborator from "@/components/ui/collaborator";
import Heading from "@/components/ui/heading";
import Image from "next/image";

const NosotrosPage = () => {
    return (
        <main className="mx-auto py-48 px-6 min-h-[100vh] max-w-[1000px]">
            <div className="flex flex-col gap-y-24">
                <Heading
                    title="Nosotros"
                    description="Somos un grupo de dos apasionados desarrolladores. Buscamos brindarte soluciones de calidad, moldeadas a tus necesidades."
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

export default NosotrosPage;