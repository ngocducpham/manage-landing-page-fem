import { Carousel } from "@/components/Carousel";

import FeedBackItem from "./FeedBackItem";

interface FeedBackProps {
    className?: string;
}

export function FeedBack(props: FeedBackProps) {
    return (
        <Carousel
            className={props.className}
            items={[
                <FeedBackItem
                    key={1}
                    id={28}
                    name="Shanai Gough"
                    quote="Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive."
                />,
                <FeedBackItem
                    key={2}
                    id={8}
                    name="Richard Watts"
                    quote="Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!"
                />,
                <FeedBackItem
                    key={3}
                    id={21}
                    name="Ali Bravo"
                    quote="We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."
                />
            ]}
        />
    );
}
