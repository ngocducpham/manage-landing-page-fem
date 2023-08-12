import Head from "next/head";
import Image from "next/image";

import hero from "@/assets/images/illustration-intro.svg";
import { Button } from "@/components/Button";
import { Carousel } from "@/components/Carousel";
import { Container } from "@/components/Container";
import { Flex } from "@/components/Flex";
import { OrderNumber, Text } from "@/components/Text";
import { FeedBack } from "@/modules/feed-back";

export default function Home() {
    return (
        <>
            <Head>
                <title>Manage Landing Page</title>
                <meta name="description" content="Manage Landing Page" />
            </Head>

            <section className="mt-11 md:mt-28">
                <Container>
                    <Flex className="items-center">
                        <div className="md:col-start-2 flex md:block justify-center">
                            <Image priority src={hero} alt="hero" />
                        </div>
                        <div className="md:col-start-1 mt-6 md:mt-0 flex flex-col items-center md:block">
                            <Text
                                size="xl"
                                variant="header"
                                className="text-center md:text-left"
                            >
                                Bring everyone together to build better
                                products.
                            </Text>
                            <Text className="text-center md:text-left py-2 leading-8 px-4 md:px-0 md:w-96">
                                Manage makes it simple for software teams to
                                plan day-to-day tasks while keeping the larger
                                team goals in view.
                            </Text>
                            <Button className="mt-5">Get Started</Button>
                        </div>
                    </Flex>
                </Container>
            </section>

            <section className="mt-24 md:mt-28">
                <Container>
                    <Flex>
                        <div>
                            <Text
                                size="lg"
                                variant="header"
                                className="text-center md:text-left"
                            >
                                What&rsquo;s different about Manage?
                            </Text>
                            <Text className="mt-7 md:w-80 leading-7 text-center md:text-left">
                                Manage provides all the functionality your team
                                needs, without the complexity. Our software is
                                tailor-made for modern digital product teams.
                            </Text>
                        </div>
                        <div className="md:ml-5 feature-list mt-16 md:mt-0">
                            <ul role="list">
                                <li className="mb-9">
                                    <div className="">
                                        <div className="bg-red-300 md:bg-transparent flex items-center md:gap-x-6 gap-x-4 rounded-l-full">
                                            <OrderNumber number="01" />
                                            <Text variant="header">
                                                Track company-wide progress
                                            </Text>
                                        </div>

                                        <Text className="md:col-start-2 col-span-2 leading-7 mt-3 pr-1 md:ml-24">
                                            See how your day-to-day tasks fit
                                            into the wider vision. Go from
                                            tracking progress at the milestone
                                            level all the way done to the
                                            smallest of details. Never lose
                                            sight of the bigger picture again.
                                        </Text>
                                    </div>
                                </li>
                                <li className="mb-9">
                                    <div className="">
                                        <div className="bg-red-300 md:bg-transparent flex items-center md:gap-x-6 gap-x-4 rounded-l-full">
                                            <OrderNumber number="02" />
                                            <Text variant="header">
                                                Advanced built-in reports
                                            </Text>
                                        </div>

                                        <Text className="md:col-start-2 col-span-2 leading-7 mt-3 pr-1 md:ml-24">
                                            Set internal delivery estimates and
                                            track progress toward company goals.
                                            Our customizable dashboard helps you
                                            build out the reports you need to
                                            keep key stakeholders informed.
                                        </Text>
                                    </div>
                                </li>
                                <li className="mb-9">
                                    <div className="">
                                        <div className="bg-red-300 md:bg-transparent flex items-center md:gap-x-6 gap-x-4 rounded-l-full">
                                            <OrderNumber number="03" />
                                            <Text variant="header">
                                                Everything you need in one place
                                            </Text>
                                        </div>
                                        <Text className="md:col-start-2 col-span-2 leading-7 mt-3 pr-1 md:ml-24">
                                            Stop jumping from one service to
                                            another to communicate, store files,
                                            track tasks and share documents.
                                            Manage offers an all-in-one team
                                            productivity solution.
                                        </Text>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Flex>
                </Container>
            </section>

            <section className="mt-16 md:mt-32">
                <Text size="lg" variant="header" className="text-center">
                    What they&rsquo;ve said
                </Text>
                <FeedBack className="md:mt-20 mt-10" />
                <div className="text-center mt-14 md:mt-10">
                    <Button>Get Started</Button>
                </div>
            </section>

            <section className="bg-red-500 py-[90px] md:py-14 mt-48">
                <Container>
                    <Flex>
                        <Text
                            variant="default"
                            className="font-bold text-center text-[39px] leading-[50px] md:text-left"
                        >
                            Simplify how your team works today.
                        </Text>
                        <div className="flex justify-center mt-7 md:justify-end">
                            <Button variant="secondary">Get Started</Button>
                        </div>
                    </Flex>
                </Container>
            </section>
        </>
    );
}
