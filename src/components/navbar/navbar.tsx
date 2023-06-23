import Menu from "./menu";
import Link from "next/link";
import { ReactElement } from "react";
export default function Navbar({animationEnd}:{animationEnd:boolean}):ReactElement {
    return (
        <nav style={{ width: '100%', height: '80px', display: 'flex',opacity:animationEnd? '1': '0',transition:'opacity 0.5s linear', position: 'absolute', zIndex: '2' }}>
            <div style={{ width: '60%', display: 'flex', alignItems: 'center', fontSize: '24px' }}>
            </div>
            <div style={{display:'flex',width:'40%',justifyContent:"flex-end"}}>
                <Menu />
            </div>
        </nav>
    )
}