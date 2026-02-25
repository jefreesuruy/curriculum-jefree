import React from 'react'

export default function Header() {
    return (
        <header className="header">

            <h1>Jefree Suruy</h1>
            <nav className='nav'>
                <input type='checkbox' id='check'/>
                
                <label htmlFor='check' className='checkbtn'>
                    <i className='fas fa-bars'/>
                </label>
                
                <ul>
                    <li>
                        <a className='btnEnlace' href='#quienSoy'>Quien Soy?</a>
                    </li>
                    <li>
                        <a className='btnEnlace' href='#habilidades'>Habilidades</a>
                    </li>
                    <li>
                        <a className='btnEnlace' href='#Proyectos'>Proyectos</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}