import { cn } from "@/lib/utils";

const Heading = ({
    title,
    description,
    className,
}: {
    title: string;
    description: string;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col gap-y-4", className)}>
            <h1 className="text-5xl font-black text-center tracking-tight lg:tracking-normal">
                {title}
            </h1>
            <p className="text-center tracking-tight lg:tracking-normal">
                {description}
            </p>
        </div>
    );
}

export default Heading;