import Link from "next/link";
import Image from "next/legacy/image";
import illustration from '../../public/illustration.svg'
import { myFont } from "@/shared/font"
export default function Home() {
  // <a href="https://storyset.com/web">Web illustrations by Storyset</a>
  return (
    <div style={{ width: '100%', height: 'calc(100vh - 80px)', minHeight: '800px', display: 'flex', alignItems: 'center' }}>
      <div style={{ width: '50%', height: '100%', paddingLeft: '100px' }}>
        <div style={{ width: '80%', position: 'relative', top: '50%', transform: 'translateY(-50%)' }}>
          <p style={{ fontSize: '46px', marginTop: '0px', marginBottom: '0px' }} className={myFont.className}>Developpeur Web & Mobile</p>
          <p style={{ fontSize: '46px', marginTop: '0px'}} className={myFont.className}>Integrateur</p>
          <p style={{ fontSize: '24px' }}>Bienvenue dans mon portfolio en tant que développeur web ! Découvrez ici mon parcours, mes compétences et mes réalisations dans le domaine du développement web.</p>
          <p style={{ fontSize: '24px' }}>Je suis un développeur web passionné
            Spécialiser dans la création du site web moderne et fonctionnel.
            Passionné par la création d'interfaces utilisatrices attrayantes et conviviales</p>
          <div style={{ marginTop: '48px' }}>
            <button style={{ border: '1px solid #00ADB5', background: 'transparent', color: '#00ADB5', fontSize: '18px', borderRadius: '5px', padding: '10px 16px', cursor: 'pointer' }}><Link style={{ color: 'inherit', textDecoration: 'none' }} href="/contact">Me contacter</Link></button>
          </div>
        </div>
      </div>
      <div style={{ width: '50%', height: '100%' }}>
        <Image
          src={illustration}
          width={800}
          height={800}
          layout="responsive"
          alt=""
        />
      </div>
    </div>
  )
}
