import { SyntheticEvent, useCallback, useEffect, useRef } from "react";

import styles from "./ResizeAnimationStop.module.scss";

interface ResizeAnimationStopProps {
    children?: React.ReactNode;
}

export function ResizeAnimationStop(props: ResizeAnimationStopProps) {
    const resizeTimer = useRef<string | undefined>(undefined);

    const handleStopAnimationOnResize = useCallback(() => {
        const classList = document.body.classList;
        const className = styles.stopAnimation as string;

        classList.add(className);
        clearTimeout(resizeTimer.current);
        setTimeout(() => {
            classList.remove(className);
        }, 400);
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleStopAnimationOnResize);

        return () => {
            window.removeEventListener("resize", handleStopAnimationOnResize);
        };
    }, [handleStopAnimationOnResize]);

    return props.children;
}
