import { myFont } from "@/shared/font"
export default function ContactForm() {
    return (
        <div style={{ color: '#222831', width: '100%', height: '100%' }}>
            <div style={{ width: '500px', position: 'relative', left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }}>
                <div style={{ marginBottom: '50px' }}>
                    <h1 style={{ color: '#FF8551', fontSize: "2em", margin: '0px' }} className={myFont.className}>Contact</h1>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '500px' }}>
                    <label style={{ marginBottom: '12px',color:'grey' }}>Votre nom</label>
                    <input style={{ background: 'transparent', border: '2px solid rgba(57, 62, 70, 0.2)', borderRadius: '5px', padding: '10px 12px', color: '#222831', fontSize: '18px' }} type='text' placeholder="Nom" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '500px', marginTop: '32px' }}>
                    <label style={{ marginBottom: '12px' ,color:'grey'}}>Votre email</label>
                    <input style={{ background: 'transparent', border: '2px solid rgba(57, 62, 70, 0.2)', borderRadius: '5px', padding: '10px 12px', color: '#222831', fontSize: '18px' }} type='text' placeholder="Email" />
                </div>
                {/* <div style={{ display: 'flex', flexDirection: 'column', width: '500px', marginTop: '32px' }}>
                    <label style={{ marginBottom: '12px' }}>Votre sujet</label>
                    <input style={{ background: 'transparent', border: '2px solid rgba(57, 62, 70, 0.2)', borderRadius: '5px', padding: '10px 12px', color: '#222831', fontSize: '18px' }} type='text' placeholder="Sujet" />
                </div> */}
                <div style={{ display: 'flex', flexDirection: 'column', width: '500px', marginTop: '32px' }}>
                    <label style={{ marginBottom: '12px',color:'grey' }}>Votre Message</label>
                    <textarea style={{ height: '200px', background: 'transparent', border: '2px solid rgba(57, 62, 70, 0.2)', borderRadius: '5px', padding: '10px 12px', color: '#222831', fontSize: '18px' }} placeholder="Presentez votre projet ici" />
                </div>
                <div style={{ marginTop: '30px' }}>
                    <button style={{ marginTop: '2rem', border: '3px solid #FF8551', background: 'transparent', color: '#FF8551', fontSize: '1.3rem', fontWeight: '600', borderRadius: '5px', padding: '10px 16px', cursor: 'pointer' }}><span>Me contacter</span></button>
                </div>
            </div>
        </div>
    )
}