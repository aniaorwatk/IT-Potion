import Image from "next/image";
import Link from "next/link";
import logo from "./../../assets/Logo.svg";
import Navigation from "../navigation/navigation";
import style from "./header.module.css";


const Header = () => {
    return (
        <header className={style.header}>
            <Link href={"/"}>
                <Image
                    priority
                    src={logo}
                    alt={"logo"}
                    width={29.1}
                    height={29.07}
                />
            </Link>
            <Navigation />
        </header>
    )
}

export default Header