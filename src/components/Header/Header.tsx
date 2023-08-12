import Link from "next/link";

import { Button } from "../Button";
import { Container } from "../Container";
import { Icons } from "../Icons";
import Navigate from "./Navigate";

function Header() {
    return (
        <header className="mt-[40px]">
            <Container className="flex items-center justify-between">
                <div className="mt-2">
                    <Link href="/">
                        <Icons.Logo dark />
                    </Link>
                </div>
                <Navigate />
                <Button className="hidden md:block">Get Started</Button>
            </Container>
        </header>
    );
}

export default Header;
