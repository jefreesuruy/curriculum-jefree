import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css-3.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import php from '../assets/php.png'
import github from '../assets/github.png'
import mysql from '../assets/mysql.png'
import ilovepets from '../assets/lovepets.png'
import poliautos from '../assets/poliautos.png'
import ventas from '../assets/ventas.png'

export default function Proyectos() {
    return (
        <section className='sectionProyectos'>

            <h2 id='Proyectos'>Proyectos</h2>

            <div className='tarjetas'>

                <article className='tarjetaProyecto'>
                    <h3>I Love Pets</h3>
                    <a href='https://ilovepetsjefree.netlify.app/' target='blank'>
                        <img className='imgProyecto' src={ilovepets} alt='ilovepets'></img>
                    </a>
                    <p className='descripcionProyecto'>Sistema para la venta de alimento y productos para mascotas, ademas de una seccion informativa, carrito y confirmación de compras.</p>
                    <div className='tecnologias_repo'>
                        <div>
                            <img className='imgTecnologiaProyecto' src={html} alt='html'></img>
                            <img className='imgTecnologiaProyecto' src={css} alt='css'></img>
                            <img className='imgTecnologiaProyecto' src={js} alt='js'></img>
                            <img className='imgTecnologiaProyecto' src={react} alt='react'></img>
                        </div>
                        <a className='btnRepo' href='https://github.com/jefreesuruy/Ilovepets' target='blank' rel='noreferrer'> Repositorio
                            <img className='imgTecnologiaProyecto' src={github} alt='github'></img>
                        </a>
                    </div>
                </article>

                <article className='tarjetaProyecto'>
                    <h3>Poliautos S.A.</h3>
                    <a href='https://jefreesuruy.github.io/Poliautos/' target='blank'>
                        <img className='imgProyecto' src={poliautos} alt='poliautos'></img>
                    </a>
                    <p className='descripcionProyecto'>Sistema para la venta y alquiler de autos, ademas de otros servicios como financiamientos, mecanica general y limpieza.</p>
                    <div className='tecnologias_repo'>
                        <div>
                            <img className='imgTecnologiaProyecto' src={html} alt='html'></img>
                            <img className='imgTecnologiaProyecto' src={css} alt='css'></img>
                        </div>
                        <a className='btnRepo' href='https://github.com/jefreesuruy/Poliautos' target='blank'>Repositorio
                            <img className='imgTecnologiaProyecto' src={github} alt='github'></img>
                        </a>
                    </div>
                </article>

                <article className='tarjetaProyecto'>
                    <h3>Gestión de Productos</h3>
                    <a href='https://jefree.infinityfreeapp.com/ventas/crudproductos.php' target='blank'>
                        <img className='imgProyecto' src={ventas} alt='ventas'></img>
                    </a>
                    <p className='descripcionProyecto'>Sistemas para la gestión de datos de productos, empleados, clientes y ventas de una tienda. "CRUD", es decir mostrar, crear, actualizar y eliminar información.</p>
                    <div className='tecnologias_repo'>
                        <div>
                            <img className='imgTecnologiaProyecto' src={php} alt='php'></img>
                            <img className='imgTecnologiaProyecto' src={mysql} alt='mysql'></img>
                            <img className='imgTecnologiaProyecto' src={css} alt='css'></img>
                        </div>
                        <a className='btnRepo' href='https://github.com/jefreesuruy/CRUD-Ventas' target='blank'>Repositorio
                            <img className='imgTecnologiaProyecto' src={github} alt='github'></img>
                        </a>
                    </div>
                </article>

            </div>

        </section>
    )
}

