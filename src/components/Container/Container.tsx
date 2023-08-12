import clsx from "clsx";

import styles from "./Container.module.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

function Container(props: Props) {
    return <div {...props} className={clsx(props.className, styles.container)} />;
}

export default Container;
