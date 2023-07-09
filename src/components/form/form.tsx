import { myFont } from "@/shared/font"
import styles from './form.module.css'
export default function ContactForm() {
    return (
        <div className={styles.form}>
            <div>
                <div className={styles.title} style={{ width:'auto',marginBottom: '50px' }}>
                    <h1 style={{ color: '#FF8551', fontSize: "2em", margin: '0px' }} className={myFont.className}>Contact</h1>
                </div>
                <div className={styles.inputGroup} >
                    <label >Votre nom</label>
                    <input  type='text' placeholder="Nom" />
                </div>
                <div className={styles.inputGroup} >
                    <label>Votre email</label>
                    <input type='text' placeholder="Email" />
                </div>
                <div className={styles.inputGroup}>
                    <label >Votre Message</label>
                    <textarea placeholder="Presentez votre projet ici" />
                </div>
                <div className={styles.buttonGroup}>
                    <button style={{ marginTop: '2rem', border: '3px solid #FF8551', background: 'transparent', color: '#FF8551', fontSize: '1.3rem', fontWeight: '600', borderRadius: '5px', padding: '10px 16px', cursor: 'pointer' }}><span>Me contacter</span></button>
                </div>
            </div>
        </div>
    )
}