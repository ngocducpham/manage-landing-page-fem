import { Footer } from "../Footer";
import { Header } from "../Header";

interface Props {
    children?: React.ReactNode;
}

function Layout(props: Props) {
    return (
        <>
            <Header />
            <main>{props.children}</main>
            <Footer />
        </>
    );
}

export default Layout;
