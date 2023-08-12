import Image from "next/image";

import close from "@/assets/images/icon-close.svg";
import menu from "@/assets/images/icon-hamburger.svg";
import useDisclosure from "@/hooks/useDisclosure";

interface BurgerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    opened?: boolean;
    toggle?: () => void;
}

export function Burger({ opened = false, toggle, ...props }: BurgerProps) {
    return (
        <button
            {...props}
            onClick={(e) => {
                props.onClick?.(e);
                toggle?.();
            }}
        >
            <Image hidden={opened} src={menu} alt="menu" />
            <Image hidden={!opened} src={close} alt="close" />
        </button>
    );
}
