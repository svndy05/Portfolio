import Image from 'next/image'
import ContactForm from '../../components/form/form'
import paris from '../../../public/paris.jpg'
import styles from './contact.module.css'
export default function Contact() {
  return (
    <div className={styles.page} >
      <div >
        <ContactForm />
      </div>
      <div >
        <Image className={styles.image} style={{ position: 'absolute' }} src={paris} alt=""
          fill={true} />
      </div>
    </div>
  )
}