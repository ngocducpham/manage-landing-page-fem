import { usePreventScroll } from "@react-aria/overlays";
import clsx from "clsx";
import Link from "next/link";

import useDisclosure from "@/hooks/useDisclosure";

import { Burger } from "../Burger";
import { ResizeAnimationStop } from "../ResizeAnimationStop";
import { Text } from "../Text";
import styles from "./Navigate.module.scss";

function Navigate() {
    const [openedMenu, { toggle: toggleMenu }] = useDisclosure();
    usePreventScroll({isDisabled: !openedMenu});

    return (
        <ResizeAnimationStop>
            <Burger
                opened={openedMenu}
                toggle={toggleMenu}
                className="md:hidden z-30"
            />
            <nav
                className={clsx(
                    "fixed md:static bg-white md:bg-none py-10 md:p-0 rounded-xl top-24 left-4 right-4 z-20 scale-0 md:scale-100 origin-top-right transition-all duration-200 ease-in-out",
                    { "scale-100": openedMenu }
                )}
            >
                <ul
                    role="list"
                    className="flex flex-col gap-y-5 md:flex-row md:justify-between gap-8 items-center"
                >
                    <NavLink text="Pricing" />
                    <NavLink text="Product" />
                    <NavLink text="About Us" />
                    <NavLink text="Careers" />
                    <NavLink text="Community" />
                </ul>
            </nav>
            <div
                onClick={toggleMenu}
                className={clsx(
                    styles.overlay,
                    "md:hidden",
                    { "absolute opacity-0": !openedMenu },
                    { "z-10 fixed w-full opacity-100 h-screen": openedMenu }
                )}
            />
        </ResizeAnimationStop>
    );
}

function NavLink({ text }: { text: string }) {
    return (
        <li>
            <Text
                link
                className="text-blue-400 text-lg font-bold text-center md:text-[13px] md:font-normal"
            >
                <Link href="#">{text}</Link>
            </Text>
        </li>
    );
}

export default Navigate;
