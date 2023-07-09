'use client';
import Navbar from '../components/navbar/navbar';
import { useEffect, useState, useRef } from 'react';
import { usePathname, useSearchParams} from 'next/navigation'
import Link from 'next/link';
import { myFont } from '@/shared/font';
import './global.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()
    const animated = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const url = pathname + searchParams.toString()
  }, [pathname, searchParams])
useEffect(()=>{
setTimeout(handleAnimation,250)
},[])
const handleAnimation = () =>{
  setLoading(true)
}
  return (
    <html lang="en">
      <body>
        <Navbar animationEnd={loading}/>
        <div className='title'><Link href="/" style={{textDecoration:'none',color:'inherit'}} className={myFont.className} >Sandy<br></br>Vingataramin</Link></div>
        <div className='children' style={{opacity:loading? '1': '0'}}>
          {children}
        </div>
      </body>
    </html>
  )
}
