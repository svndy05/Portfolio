'use client'
import Image from 'next/image'
import ContactForm from '../../components/form/form'
import paris from '../../../public/paris.jpg'

export default function Contact() {
  return (
    <div style={{ display: 'flex', height: '100%', overflow: 'hidden' }}>
      <div style={{ width: '40%', height: '100%', position: 'relative' }}>
        <ContactForm />
      </div>
      <div style={{ width: '60%', height: '100%', position: 'relative' }}>
        <Image style={{ position: 'absolute' }} src={paris} alt=""
          fill={true} />
      </div>
    </div>
  )
}