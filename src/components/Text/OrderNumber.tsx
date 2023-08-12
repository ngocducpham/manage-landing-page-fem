import clsx from "clsx";

import { cn } from "@/lib/utils";

import { buttonVariants } from "../Button";

interface Props {
    number: number | string;
    className?: string;
}

export function OrderNumber(props: Props) {
    return (
        <div
            className={cn(
                buttonVariants({
                    variant: "primary",
                    small: true,
                    noShadow: true,
                    hoverable: false,
                    className: clsx(
                        "flex justify-center items-center text-base px-6 h-9 font-normal",
                        props.className
                    )
                })
            )}
        >
            {props.number}
        </div>
    );
}
