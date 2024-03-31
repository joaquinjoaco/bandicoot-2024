import Heading from "@/components/ui/heading";
import ProjectLink from "@/components/ui/project-link"
import { ExternalLink } from "lucide-react";

const Quitel23Page = () => {
    return (
        <main className="mx-auto py-48 px-6 min-h-[100vh] max-w-[1000px]">
            <div className="flex flex-col items-center gap-y-24">
                <Heading
                    title="QUITEL 2023"
                    description="XLVI International Congress of Theoretical Chemists of Latin Expression"
                />
                <ProjectLink
                    href="https://quitel23.site/"
                    title="Visita el sitio"
                    titleIcon={<ExternalLink className="h-4 w-4 mr-2" />}
                    description="XLVI International Congress of Theoretical Chemists of Latin Expression"
                    imageUrl="/quitel.png"
                    imageAlt="XLVI International Congress of Theoretical Chemists of Latin Expression"
                    toDemo
                />
                <div className="flex flex-col gap-y-2">
                    <p>
                        QUITEL/CHITEL tiene como objetivo reunir a científicos de todos los países de expresión latina
                        para compartir su interés en el campo de la química teórica y las ciencias relacionadas.
                    </p>
                    <p>
                        Nos encargamos de realizar el sitio web del congreso donde los usuarios pueden inscribirse, subir sus abstracts
                        y acceder a toda la información sobre fechas, horarios, comité organizador, speakers, métodos de pago y hoteles.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Quitel23Page;