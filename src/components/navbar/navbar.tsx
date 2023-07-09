import Menu from "./menu";
import { ReactElement } from "react";
import styles from './navbar.module.css'
import MenuMobile from "./menuMobile";
export default function Navbar({animationEnd}:{animationEnd:boolean}):ReactElement {
    return (
        <nav className={styles.navbar} style={{opacity:animationEnd? '1': '0'}}>
            <div>
                <Menu/>
                <MenuMobile/>
            </div>
        </nav>
    )
}