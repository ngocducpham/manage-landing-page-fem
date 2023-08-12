import Image from "next/image";
import Link from "next/link";

import facebook from "@/assets/images/icon-facebook.svg";
import instagram from "@/assets/images/icon-instagram.svg";
import pinterest from "@/assets/images/icon-pinterest.svg";
import twitter from "@/assets/images/icon-twitter.svg";
import youtube from "@/assets/images/icon-youtube.svg";

import { Button } from "../Button";
import { Container } from "../Container";
import { Icons } from "../Icons";
import { Text } from "../Text";

export function Footer() {
    return (
        <footer className="bg-blue-400 py-12">
            <Container className="flex flex-col items-center gap-12 lg:gap-y-14 lg:grid lg:grid-cols-[150px_1fr_300px] lg:grid-rows-[1fr_50px]">
                <div className="w-full max-w-xl">
                    <form>
                        <div className="grid grid-cols-[1fr_auto] gap-2">
                            <input
                                className="rounded-full bg-white  text-[13px] focus:outline-none text-gray-400 py-3 px-6"
                                type="email"
                                placeholder="Updates in your inbox…"
                            />
                            <Button noShadow small type="submit">
                                Go
                            </Button>
                        </div>
                    </form>
                </div>
                <div className="w-full max-w-xl lg:col-start-2 lg:row-start-1 lg:row-span-2">
                    <nav className="flex justify-around">
                        <ul role="list" className="flex flex-col gap-3">
                            <li>
                                <Text link variant="default">
                                    <Link href="#">Home</Link>
                                </Text>
                            </li>
                            <li>
                                <Text link variant="default">
                                    <Link href="#">Pricing</Link>
                                </Text>
                            </li>
                            <li>
                                <Text link variant="default">
                                    <Link href="#">Products</Link>
                                </Text>
                            </li>
                            <li>
                                <Text link variant="default">
                                    <Link href="#">About Us</Link>
                                </Text>
                            </li>
                        </ul>
                        <ul role="list" className="flex flex-col gap-3">
                            <li>
                                <Text link variant="default">
                                    <Link href="#">Careers</Link>
                                </Text>
                            </li>
                            <li>
                                <Text link variant="default">
                                    <Link href="#">Community</Link>
                                </Text>
                            </li>
                            <li>
                                <Text link variant="default">
                                    <Link href="#">Privacy Policy</Link>
                                </Text>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="w-full max-w-xl lg:row-start-2 lg:col-start-1">
                    <ul role="list" className="flex justify-around">
                        <li>
                            <Link aria-label="facebook" href="#">
                                <Image
                                    className="w-8 lg:w-5"
                                    src={facebook}
                                    alt="social icon"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link aria-label="youtube" href="#">
                                <Image
                                    className="w-8 lg:w-5"
                                    src={youtube}
                                    alt="social icon"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link aria-label="twitter" href="#">
                                <Image
                                    className="w-8 lg:w-5"
                                    src={twitter}
                                    alt="social icon"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link aria-label="pinterest" href="#">
                                <Image
                                    className="w-8 lg:w-5"
                                    src={pinterest}
                                    alt="social icon"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link aria-label="instagram" href="#">
                                <Image
                                    className="w-8 lg:w-5"
                                    src={instagram}
                                    alt="social icon"
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="lg:row-start-1 lg:col-start-1">
                    <Icons.Logo />
                </div>
                <div>
                    <Text size="sm" className="text-gray-400 lg:text-right">
                        Copyright {new Date().getFullYear()}. All Rights Reserved
                    </Text>
                </div>
            </Container>
        </footer>
    );
}
