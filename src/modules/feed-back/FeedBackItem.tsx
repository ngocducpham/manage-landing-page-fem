import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

import { Text } from "@/components/Text";

interface FeedBackItemProps {
    id: number;
    name: string;
    quote: string;
}

function FeedBackItem(props: FeedBackItemProps) {
    return (
        <div className="bg-gray-300 relative py-12 md:w-[538px]">
            <Image
                className="rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                width={72}
                height={72}
                src={`https://i.pravatar.cc/300?img=${props.id}`}
                alt="hero"
            />
            <div className="text-black text-sm text-center font-bold mb-5 md:text-base">
                {props.name}
            </div>
            <Text className="text-center text-sm leading-7 px-10 md:px-6 md:text-base">
                “{props.quote}”
            </Text>
        </div>
    );
}

export default FeedBackItem;
