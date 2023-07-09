import Link from "next/link";
import { myFont } from "@/shared/font";
import styles from './home.module.css';
export default function Home() {

  return (
    <div className={styles.container} >
      <p className={myFont.className}>Developpeur Web & Mobile | Integrateur</p>
      <p>Bienvenue dans mon portfolio en tant que développeur web ! Découvrez ici mon parcours, mes compétences et mes réalisations dans le domaine du développement web. Je suis un développeur web passionné
        Spécialiser dans la création du site web moderne et fonctionnel.
        Passionné par la création d'interfaces utilisatrices attrayantes et conviviales</p>
      <button><Link style={{ color: 'inherit', textDecoration: 'none' }} href="/contact">Me contacter</Link></button>
      <svg  className={styles.circle} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle fill='#9BCDD2' cx="50%" cy="50%" r="50" />
      </svg>
      <svg className={styles.circle} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle fill='#9BCDD2' cx="50%" cy="50%" r="50" />
      </svg>
      <svg className={styles.circle} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle fill='#9BCDD2' cx="50%" cy="50%" r="50" />
      </svg>
    </div>
  )
}
