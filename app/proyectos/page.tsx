import Heading from "@/components/ui/heading";
import ProjectLink from "@/components/ui/project-link"

const ProyectosPage = () => {
    return (
        <main className="mx-auto py-48 px-6 min-h-[100vh] max-w-[1000px]">
            <div className="flex flex-col items-center gap-y-24">
                <Heading
                    title="Nuestro trabajo"
                    className="border-b-2 border-orange-500"
                />
                <ProjectLink
                    href="/proyectos/quitel-23"
                    title="Nuestro más reciente trabajo"
                    description="XLVI International Congress of Theoretical Chemists of Latin Expression"
                    imageUrl="/quitel.png"
                    imageAlt="XLVI International Congress of Theoretical Chemists of Latin Expression"
                />
            </div>
        </main>
    );
}

export default ProyectosPage;