import { cva } from "class-variance-authority";

export const buttonVariants = cva(
    "rounded-full px-[30px] shadow-[0_12px_13px_-10px_#F25F3A] font-bold border-[1px] border-red-500 text-xs w-auto h-11",
    {
        variants: {
            variant: {
                primary: "bg-red-500 text-white",
                secondary: "bg-red-300 text-red-500",
            },
            noShadow: {
                true: "shadow-none",
            },
            small: {
                true: "px-[23px]",
            },
            hoverable: {
                true: "hover:bg-red-400 hover:border-red-400 hover-color-transition hover:text-gray-300",
            }
        },
        defaultVariants: {
            variant: "primary",
            hoverable: true,
        },
    }
);
