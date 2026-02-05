import React from 'react'
import face from '../assets/facebook.png'
import x from '../assets/x.png'
import insta from '../assets/ig.png'

export default function Footer() {
    return (
    <footer className='footer'>
        <div>
            <p>Desarrollado por: Jefree Aroldo Suruy Salguero®</p>
        </div>
        <div>
            <nav className='nav'>
            Redes Sociales:
            <a className='enlaceRedes' href='https://www.facebook.com/aroldo97' target='_blank' rel="noopener noreferrer"><img src={face} alt='face'/></a>
            <a className='enlaceRedes' href='https://x.com/JefreeSuruy' target='_blank' rel="noopener noreferrer"><img src={x} alt='x'/></a>
            <a className='enlaceRedes' href='https://www.instagram.com/jefreesuruy/' target='_blank' rel="noopener noreferrer"><img src={insta} alt='ig'/></a>
            </nav>
        </div>
    </footer>
    )
}