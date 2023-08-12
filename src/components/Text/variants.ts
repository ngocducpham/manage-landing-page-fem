import { cva } from "class-variance-authority";

import styles from "./Text.module.scss";

export const textVariants = cva("hover-color-transition", {
    variants: {
        variant: {
            default: "text-gray-300",
            paragraph: "text-gray-400",
            header: "text-blue-500 font-bold",
        },
        link: {
            true: "hover:text-gray-400",
        },
        size: {
            sm: styles.sm,
            base: 'text-base',
            lg: styles.lg,
            xl: styles.xl,
        },
    },
    defaultVariants: {
        variant: "paragraph",
        size: "base",
    }
});
