'use client';
import Navbar from '../components/navbar/navbar';
import styled, { keyframes } from "styled-components";
import { useEffect, useState, Suspense, useRef } from 'react';
import { usePathname, useSearchParams} from 'next/navigation'
import Link from 'next/link';
import { myFont } from '@/shared/font';
const animationTitle = keyframes`
from{
  font-size:8vw;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
}
to{
font-size:24px;
left:100px;
transform:translate(0%,0%);
top:10px;
}`

const Title = styled.div`
position:absolute;
animation: ${animationTitle} 1s ease-out forwards;
z-index:10;
animation-delay:2s;
font-size:8vw;
top:50%;
left:50%;
transform:translate(-50%,-50%);
`
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const titleRef = useRef(null)
  useEffect(() => {
    const url = pathname + searchParams.toString()
  }, [pathname, searchParams])
  const handleAnimation = () =>{
      setLoading(true)
    }
  return (
    <html lang="en" style={{ width: '100vw', minHeight: '100vh', height: '100%' }}>
      <body style={{ width: '100%', background: '#FAF0E4', height: '100%', margin: '0px', color: '#FF8551', position: 'relative' }} >
        <Navbar animationEnd={loading}/>
        <Title  onAnimationStart={handleAnimation} ref={titleRef}><Link href="/" style={{textDecoration:'none',color:'inherit'}} className={myFont.className} >Sandy<br></br>Vingataramin</Link></Title>
        <div style={{ height: 'calc(100% - 80px)', position: 'absolute', width: '100%', top: '80px', opacity:loading? '1': '0',transition:'opacity 0.5s linear 1s'}}>
          {children}
        </div>
      </body>
    </html>
  )
}
