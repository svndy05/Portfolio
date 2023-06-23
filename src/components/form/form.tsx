export default function ContactForm() {
    return (
        <div style={{ color: '#222831', width: '100%', height: '100%'}}>           
            <div style={{ width:'500px',position:'relative' ,left:'50%',top:'50%',transform:'translate(-65%,-55%)'}}>
            <div >
                <h1>Contact</h1>
            </div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '500px' }}>
                    <label style={{ marginBottom: '6px' }}>Votre nom</label>
                    <input style={{ background: 'transparent', border: '2px solid rgba(57, 62, 70, 0.2)', borderRadius: '5px', padding: '10px 12px', color: '#222831', fontSize: '18px' }} type='text' placeholder="Nom" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '500px', marginTop: '30px' }}>
                    <label style={{ marginBottom: '6px' }}>Votre email</label>
                    <input style={{ background: 'transparent', border: '2px solid rgba(57, 62, 70, 0.2)', borderRadius: '5px', padding: '10px 12px', color: '#222831', fontSize: '18px' }} type='text' placeholder="Nom" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '500px', marginTop: '30px' }}>
                    <label style={{ marginBottom: '6px' }}>Votre sujet</label>
                    <input style={{ background: 'transparent', border: '2px solid rgba(57, 62, 70, 0.2)', borderRadius: '5px', padding: '10px 12px', color: '#222831', fontSize: '18px' }} type='text' placeholder="Nom" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '500px', marginTop: '30px' }}>
                    <label style={{ marginBottom: '6px' }}>Votre Message</label>
                    <textarea style={{ height:'200px',background: 'transparent', border: '2px solid rgba(57, 62, 70, 0.2)', borderRadius: '5px', padding: '10px 12px', color: '#222831', fontSize: '18px' }} placeholder="Presentez votre projet ici" />
                </div>
                <div style={{marginTop:'30px'}}>
                <button style={{background:'#00ADB5',border:'none', color:'#393E46',fontSize:'18px',borderRadius:'5px',padding:'10px 16px',cursor:'pointer'}}><span>Me contacter</span></button>
            </div>
            </div>
        </div>
    )
}