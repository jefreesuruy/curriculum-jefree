import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css-3.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import php from '../assets/php.png'
import github from '../assets/github.png'
import mysql from '../assets/mysql.png'

export default function Habilidades() {
    return (
        <section className='sectionHabilidades'>

            <h2 id='habilidades'>Habilidades</h2>

            <article className='habilidades'>
                <div className='habilidad'>
                    <p>HTML</p>
                    <img className='imgHabilidad' src={html} alt='logo HTML'></img>
                </div>
                <div className='habilidad'>
                    <p>CSS</p>
                    <img className='imgHabilidad' src={css} alt='logo CSS'></img>
                </div>
                <div className='habilidad'>
                    <p>JAVASCRIPT</p>
                    <img className='imgHabilidad' src={js} alt='logo JAVASCRIPT'></img>
                </div>
                <div className='habilidad'>
                    <p>REACT</p>
                    <img className='imgHabilidad' src={react} alt='logo REACT'></img>
                </div>
                <div className='habilidad'>
                    <p>GITHUB</p>
                    <img className='imgHabilidad' src={github} alt='logo GITHUB'></img>
                </div>
                <div className='habilidad'>
                    <p>PHP</p>
                    <img className='imgHabilidad' src={php} alt='logo PHP'></img>
                </div>
                <div className='habilidad'>
                    <p>MYSQL</p>
                    <img className='imgHabilidad' src={mysql} alt='logo MYSQL'></img>
                </div>
            </article>

        </section>
    )
}