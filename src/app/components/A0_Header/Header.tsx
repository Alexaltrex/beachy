import style from "./Header.module.scss"
import Link from "next/link";
import {svgIcons} from "../../../assets/svgIcons";

export const Header = () => {
    return (
        <header className={style.header}>
            <Link href="/"
                className={style.logo}
            >
                <div className={style.icon}>{svgIcons.logo}</div>
            </Link>
        </header>
    )
}