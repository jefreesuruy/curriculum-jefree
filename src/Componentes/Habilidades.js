import React from 'react'

export default function Habilidades() {
    return (
        <section className='sectionHabilidades'>

            <h2 id='habilidades'>Habilidades</h2>

            <article className='habilidades'>
                <div className='habilidad'>
                    <p>HTML</p>
                    <img className='imgHabilidad' src='imagenes/html.png' alt='logo HTML'></img>
                </div>
                <div className='habilidad'>
                    <p>CSS</p>
                    <img className='imgHabilidad' src='imagenes/css-3.png' alt='logo CSS'></img>
                </div>
                <div className='habilidad'>
                    <p>JAVASCRIPT</p>
                    <img className='imgHabilidad' src='imagenes/js.png' alt='logo JAVASCRIPT'></img>
                </div>
                <div className='habilidad'>
                    <p>REACT</p>
                    <img className='imgHabilidad' src='imagenes/react.png' alt='logo REACT'></img>
                </div>
                <div className='habilidad'>
                    <p>GITHUB</p>
                    <img className='imgHabilidad' src='imagenes/github.png' alt='logo GITHUB'></img>
                </div>
                <div className='habilidad'>
                    <p>PHP</p>
                    <img className='imgHabilidad' src='imagenes/php.png' alt='logo PHP'></img>
                </div>
                <div className='habilidad'>
                    <p>MYSQL</p>
                    <img className='imgHabilidad' src='imagenes/mysql.png' alt='logo MYSQL'></img>
                </div>
            </article>

        </section>
    )
}