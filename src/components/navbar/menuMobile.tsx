'use client'
import Image from "next/image"
import IconMenu from '../../../public/burgerIcon.svg'
import styles from './menuMobile.module.css'
import Link from "next/link"
import styled,{keyframes} from "styled-components"
import { useEffect, useState } from "react"
import { usePathname } from 'next/navigation';
import { myFont } from "@/shared/font"
import cross from '../../../public/exit.svg'
interface StyledLinkType {
    selected?:boolean
}
interface StyledListType{
    active: boolean
}
const animDiv = keyframes`
0%{
   transform:scaleX(0),scaleY(0)

}
50%{
    transform:scaleX(1)
}
100%{
   transform:scaleY(1)
}`;
const StyledLink = styled.span<StyledLinkType>`
color:${props => props.selected ? '#FF8551':'grey'};
font-weight:${props => props.selected ? '700':'400'};
`
const StyledList = styled.div<StyledListType>`
position: fixed;
top:80px;
left:0px;
width:100%;
height:${props => props.active ? '150px': '0px'};
transition:height 0.3s ease-out;
background: #FAF0E4;
z-index:10;
`
export default function MenuMobile(){
    const pathname = usePathname();  
    const [currentPage,setCurrentPage] = useState('acceuil')
    const [down,setDown] = useState(false)
    const [delayed,setDelayed] = useState(false)
    const handleDropdown = () =>{
        setDown(prev =>  prev ? false: true)
    }
    useEffect(()=>{
        setDelayed(down)
    },[down])
    return(
        <div className={styles.menuMobile}>
            <div>
                <Image  onClick={handleDropdown} className={styles.burger} style={{transform:down ? 'rotate(-180deg)':'rotate(0deg)',transition: down ? 'transform 0.3s ease-out' : 'none'}} width={40} height={40} src={down ? cross :IconMenu} alt=""/>
            </div>
            <StyledList active={delayed} style={{display:down ? 'block':'none'}} className={styles.dropdown}>
                <ul style={{visibility: delayed ? 'visible' :'hidden', opacity:delayed? '1':'0',transition:'opacity 0.5s ease-in 0.25s'}} className={myFont.className}>
                <li><Link onClick={()=> {setCurrentPage('acceuil'),setDown(false)}} href="/" style={{textDecoration:'none'}}><StyledLink selected={pathname === '/' ? true :false}>Acceuil</StyledLink></Link></li>
                <li><Link onClick={()=> {setCurrentPage('realisation'),setDown(false)} } href="/realisation" style={{textDecoration:'none'}}><StyledLink selected={pathname.split('/')[1] === 'realisation' ? true :false}>Realisation</StyledLink></Link></li>
                <li> <Link onClick={()=> {setCurrentPage('contact'),setDown(false) }} href="/contact" style={{textDecoration:'none'}}><StyledLink selected={ pathname.split('/')[1] === 'contact'? true: false}>Contact</StyledLink></Link></li>
                </ul>
            </StyledList>
        </div>
    )
}