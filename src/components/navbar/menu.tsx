'use client'
import Link from "next/link"
import styled from "styled-components"
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import { myFont } from '@/shared/font';

interface StyledLinkType {
    selected?:boolean
}
const StyledLink = styled.span<StyledLinkType>`
color:${props => props.selected ? '#FF8551':'grey'};
font-weight:${props => props.selected ? '700':'400'}
`
export default function Menu(){
    const pathname = usePathname();  
    const [currentPage,setCurrentPage] = useState('acceuil')
    return(
        <ul style={{margin:'0px',display:'flex',listStyle:'none',paddingLeft:'0px',width:'100%',justifyContent:'space-around',alignItems:'center',fontSize:'1.3rem',height:'inherit'}} className={myFont.className}>
          <li><Link onClick={()=> setCurrentPage('acceuil')} href="/" style={{textDecoration:'none'}}><StyledLink selected={pathname === '/' ? true :false}>Acceuil</StyledLink></Link></li>
          <li><Link onClick={()=> setCurrentPage('realisation') } href="/realisation" style={{textDecoration:'none'}}><StyledLink selected={pathname.split('/')[1] === 'realisation' ? true :false}>Realisation</StyledLink></Link></li>
          <li> <Link onClick={()=> setCurrentPage('contact') } href="/contact" style={{textDecoration:'none'}}><StyledLink selected={ pathname.split('/')[1] === 'contact'? true: false}>Contact</StyledLink></Link></li>
        </ul>
    )
}