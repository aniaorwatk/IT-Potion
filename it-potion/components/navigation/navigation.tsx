import Link from "next/link";
import style from "./navigation.module.css";

const Navigation = () => {

    const navigation = {
        aboutUs: "O nas",
        ourTeam: "Nasz team",
        contact: "Kontakt",
        aboutCompany: "O firmie"
    }

    return (
        <nav className={style.navigation}>
            <ul>
                <li>
                    <Link href='/about-us' rel="preload">
                        {navigation.aboutUs}
                    </Link>
                </li>
                <li>
                    <Link href='/our-team' rel="preload">
                        {navigation.ourTeam}
                    </Link>
                </li>
                <li>
                    <Link href='/contact' rel="preload">
                        {navigation.contact}
                    </Link>
                </li>
                <li>
                    <Link href='/about-company' rel="preload">
                        {navigation.aboutCompany}
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation