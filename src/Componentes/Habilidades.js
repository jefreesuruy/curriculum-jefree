import React from 'react'

export default function Habilidades() {
    return (
        <section className='sectionHabilidades'>

            <h2 id='habilidades'>Habilidades</h2>

            <article className='habilidades'>
                <div className='habilidad'>
                    <p>HTML</p>
                    <img className='imgHabilidad' src='../assets/html.png' alt='logo HTML'></img>
                </div>
                <div className='habilidad'>
                    <p>CSS</p>
                    <img className='imgHabilidad' src='../assets/css-3.png' alt='logo CSS'></img>
                </div>
                <div className='habilidad'>
                    <p>JAVASCRIPT</p>
                    <img className='imgHabilidad' src='../assets/js.png' alt='logo JAVASCRIPT'></img>
                </div>
                <div className='habilidad'>
                    <p>REACT</p>
                    <img className='imgHabilidad' src='../assets/react.png' alt='logo REACT'></img>
                </div>
                <div className='habilidad'>
                    <p>GITHUB</p>
                    <img className='imgHabilidad' src='../assets/github.png' alt='logo GITHUB'></img>
                </div>
                <div className='habilidad'>
                    <p>PHP</p>
                    <img className='imgHabilidad' src='../assets/php.png' alt='logo PHP'></img>
                </div>
                <div className='habilidad'>
                    <p>MYSQL</p>
                    <img className='imgHabilidad' src='../assets/mysql.png' alt='logo MYSQL'></img>
                </div>
            </article>

        </section>
    )
}