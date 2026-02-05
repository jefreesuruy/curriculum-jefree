import React from 'react'

export default function Proyectos() {
    return (
        <section className='sectionProyectos'>

            <h2 id='Proyectos'>Proyectos</h2>

            <div className='tarjetas'>

                <article className='tarjetaProyecto'>
                    <h3>I Love Pets</h3>
                    <a href='https://ilovepetsjefree.netlify.app/' target='blank'>
                        <img className='imgProyecto' src='../assets/lovepets.png'></img>
                    </a>
                    <p className='descripcionProyecto'>Sistema para la venta de alimento y productos para mascotas, ademas de una seccion informativa, carrito y confirmación de compras.</p>
                    <div>
                        <img className='imgTecnologiaProyecto' src='../assets/html.png'></img>
                        <img className='imgTecnologiaProyecto' src='../assets/css-3.png'></img>
                        <img className='imgTecnologiaProyecto' src='../assets/js.png'></img>
                        <img className='imgTecnologiaProyecto' src='../assets/react.png'></img>
                        <a href='#' target='blank'>
                            <img className='imgTecnologiaProyecto' src='../assets/github.png'></img>
                        </a>
                    </div>
                </article>

                <article className='tarjetaProyecto'>
                    <h3>Poliautos S.A.</h3>
                    <a href='https://jefreesuruy.github.io/Poliautos/' target='blank'>
                        <img className='imgProyecto' src='../assets/poliautos.png'></img>
                    </a>
                    <p className='descripcionProyecto'>Sistema para la venta y alquiler de autos, ademas de otros servicios como financiamientos, mecanica general y limpieza.</p>
                    <div>
                        <img className='imgTecnologiaProyecto' src='../assets/html.png'></img>
                        <img className='imgTecnologiaProyecto' src='../assets/css-3.png'></img>
                        <a href='https://github.com/jefreesuruy/Poliautos' target='blank'>
                            <img className='imgTecnologiaProyecto' src='../assets/github.png'></img>
                        </a>
                    </div>
                </article>

                <article className='tarjetaProyecto'>
                    <h3>Gestión de Productos</h3>
                    <a href='https://jefree.infinityfreeapp.com/ventas/crudproductos.php' target='blank'>
                        <img className='imgProyecto' src='../assets/ventas.png'></img>
                    </a>
                    <p className='descripcionProyecto'>Sistemas para la gestión de datos de productos, empleados, clientes y ventas de una tienda. "CRUD", es decir mostrar, crear, actualizar y eliminar información.</p>
                    <div>
                        <img className='imgTecnologiaProyecto' src='../assets/php.png'></img>
                        <img className='imgTecnologiaProyecto' src='../assets/mysql.png'></img>
                        <img className='imgTecnologiaProyecto' src='../assets/css-3.png'></img>
                        <a href='https://github.com/jefreesuruy/CRUD-Ventas' target='blank'>
                            <img className='imgTecnologiaProyecto' src='../assets/github.png'></img>
                        </a>
                    </div>
                </article>

            </div>

        </section>
    )
}

