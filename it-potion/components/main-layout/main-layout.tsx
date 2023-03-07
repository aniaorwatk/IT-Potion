import Footer from "../footer/footer";
import Header from "../header/header";

type IMainLayoutType={
    children:   React.ReactNode;
}

export const MainLayout = ({ children }:IMainLayoutType) => {
    return (
        <div>
            <Header />
            <main >
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout