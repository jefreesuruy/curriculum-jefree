import React from 'react'

export default function Main() {
    return (
        <main id="quienSoy">
            <section className='main'>
                <article className='infoPersonal main1'>
                    <div className='saludo'>
                        <img className='gifSaludo' src='/imagenes/saludo.gif' alt='gif saludo'/>
                        <p className='textSaludo'>¡Buenas! Un gusto para mi tenerte aqui, Mi nombre es Jefree Suruy.</p>
                    </div>
                    <h2 className='profesion'>Ingeniero en sistemas</h2>
                    <h3 className='textMaestria'>MASTER EN REDES Y TELECOMUNICACIONES</h3>
                    <nav className='nav'>
                        <a className='btnContacto' href="https://www.linkedin.com/in/jefree-suruy-783576274/?originalSubdomain=gt" target='_blank' rel="noopener noreferrer"><img className='logoContacto' src='/imagenes/LinkedIn.png' alt='logo Linkedin'/> LinkedIn</a>
                        <a className='btnContacto' href="https://github.com/jefreesuruy" target='_blank' rel="noopener noreferrer"><img className='logoContacto' src='/imagenes/github.png' alt='logo Github'/> GitHub</a>
                        <a className='btnContacto' href="mailto:jefreesuruy@gmail.com" target='_blank' rel="noopener noreferrer"><img className='logoContacto' src='/imagenes/correo.png' alt='logo Correo'/> jefreesuruy@gmail.com</a>
                    </nav>
                </article>
                <article className='sectionFoto main2'>
                    <img className='fotoFormal' src="/imagenes/Jefree-formal.png" alt='Foto Formal'/>
                </article>
            </section>
        </main>
    )
}