import React from 'react'

export default function Footer() {
    return (
    <footer className='footer'>
        <div>
            <p>Desarrollado por: Jefree Aroldo Suruy Salguero®</p>
        </div>
        <div>
            <nav className='nav'>
            Redes Sociales:
            <a className='enlaceRedes' href='https://www.facebook.com/aroldo97' target='_blank' rel="noopener noreferrer"><img src='../assets/facebook.png' alt='face'/></a>
            <a className='enlaceRedes' href='https://x.com/JefreeSuruy' target='_blank' rel="noopener noreferrer"><img src='../assets/x.png' alt='x'/></a>
            <a className='enlaceRedes' href='https://www.instagram.com/jefreesuruy/' target='_blank' rel="noopener noreferrer"><img src='../assets/ig.png' alt='ig'/></a>
            </nav>
        </div>
    </footer>
    )
}