import { cn } from "@/lib/utils";

interface Props {
    children?: React.ReactNode;
    className?: string;
}

export function Flex(props: Props) {
    return <div className={cn('md:grid md:grid-flow-col md:auto-cols-fr lg:gap-x-0 gap-x-4', props.className)}>{props.children}</div>;
}
