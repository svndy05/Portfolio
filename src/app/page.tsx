'use client'
import Link from "next/link";
// import Image from "next/legacy/image";
// import illustration from '../../public/illustration.svg'
import { myFont } from "@/shared/font";
import { useEffect, useRef } from "react";
import { text } from "stream/consumers";
export default function Home() {
  const textRef = useRef<HTMLParagraphElement>(null)
  return (
    <div style={{ width: '100%', height: 'calc(100vh - 80px)', minHeight: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <p style={{ fontSize: '2.5vw', textAlign: 'center', marginBottom: '0', marginTop: '0' }} ref={textRef} className={myFont.className}>Developpeur Web & Mobile | Integrateur</p>
      <p style={{ marginTop: '4rem', width: textRef && textRef.current ? textRef.current.getBoundingClientRect().width : '80%', fontSize: '1.5vw', color: 'grey', textAlign: 'center' }}>Bienvenue dans mon portfolio en tant que développeur web ! Découvrez ici mon parcours, mes compétences et mes réalisations dans le domaine du développement web. Je suis un développeur web passionné
        Spécialiser dans la création du site web moderne et fonctionnel.
        Passionné par la création d'interfaces utilisatrices attrayantes et conviviales</p>
      <button style={{ marginTop: '2rem', border: '3px solid #FF8551', background: 'transparent', color: '#FF8551', fontSize: '1.3rem', fontWeight: '600', borderRadius: '5px', padding: '10px 16px', cursor: 'pointer' }}><Link style={{ color: 'inherit', textDecoration: 'none' }} href="/contact">Me contacter</Link></button>
      <svg style={{ position: 'absolute', top: '10%', left: '10%',width:'200px',zIndex:'-1' }} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle fill='#9BCDD2' cx="50%" cy="50%" r="50" />
      </svg>
      <svg style={{ position: 'absolute', top: '25%', left: '50%',width:'600px',zIndex:'-1' }} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle fill='#9BCDD2' cx="50%" cy="50%" r="50" />
      </svg>
      <svg style={{ position: 'absolute', top: '20%', left: '40%',width:'400px',zIndex:'-1' }} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle fill='#9BCDD2' cx="50%" cy="50%" r="50" />
      </svg>
    </div>
  )
}
