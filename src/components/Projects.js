import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <div className='projects' id='projects'>
            <div className='container'>
                <h2>Proyectos</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <div className='card-content'>
                            <p><span>Landing SAIA</span></p>
                            <p>Estoy en un voluntariado en el cual formo parte del equipo que se encarga de la landing de la Sociedad Argentina de Inteligencia Artificial.</p>
                        </div>
                        <div className='button-container'>
                            <button className='button'><a href="https://saia.ar/" target="_blank" rel="noopener noreferrer"><i className="bi bi-window"></i>&nbsp; Ir al sitio</a></button>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-content'>
                            <p><span>Sitio Bienestar</span></p>
                            <p>Sitio realizado en el curso para poner en práctica el uso de ReactJS, uso de API rest, y aplicar lo aprendido en Frontend.</p>
                        </div>
                        <div className='button-container'>
                            <button className='button'><a href="https://masajes-react.netlify.app" target="_blank" rel="noopener noreferrer"><i className="bi bi-window"></i>&nbsp; Ir al sitio</a></button>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-content'>
                            <p><span>Sitio Pastelería</span></p>
                            <p>Sitio realizado en el curso para finalizar desarrollo Frontend, con el uso de HTML, JavaScript, CSS y Bootstrap.</p>
                        </div>
                        <div className='button-container'>
                            <button className='button'><a href="https://pasteleria-front.netlify.app" target="_blank" rel="noopener noreferrer"><i className="bi bi-window"></i>&nbsp; Ir al sitio</a></button>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-content'>
                            <p><span>Sitio Prueba</span></p>
                            <p>Sitio base realizado en Qwik, para tener un primer acercamiento con este framework.</p>
                        </div>
                        <div className='button-container'>
                            <button className='button'><a href="https://sitio-pruebaqwik.netlify.app" target="_blank" rel="noopener noreferrer"><i className="bi bi-window"></i>&nbsp; Ir al sitio</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;


/*
import React from 'react'
import './Projects.css'

const Projects = () => {
    return (
        <div className='projects' id='projects'>
            <div className='container'>
                <h2>Proyectos</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <p><span>Landing SAIA</span></p>
                        <p>Estoy en un voluntariado en el cual formo parte del equipo que se encarga de la landing de la Sociedad Argentina de Inteligencia Artificial.</p>
                        <button className='button'><a href="https://saia.ar/" target="_blank" rel="noopener noreferrer"><i className="bi bi-window"></i>&nbsp; Ir al sitio</a></button>
                    </div>
                    <div className='card'>
                        <p><span>Sitio bienestar</span></p>
                        <p>Sitio realizado en el curso para poner en práctica el uso de ReactJS, uso de API rest, y aplicar lo aprendido en Frontend.</p>
                        <button className='button'><a href="https://masajes-react.netlify.app" target="_blank" rel="noopener noreferrer"><i className="bi bi-window"></i>&nbsp; Ir al sitio</a></button>
                    </div>
                    <div className='card'>
                        <p><span>Sitio pastelería</span></p>
                        <p>Sitio realizado en el curso para finalizar desarrollo Frontend, con el uso de HTML, JavaScript, CSS y Bootstrap.</p>
                        <button className='button'><a href="https://pasteleria-front.netlify.app" target="_blank" rel="noopener noreferrer"><i className="bi bi-window"></i>&nbsp; Ir al sitio</a></button>
                    </div>
                    <div className='card'>
                        <p><span>Sitio prueba</span></p>
                        <p>Sitio base realizado en Qwik, para tener un primer acercamiento con este framework.</p>
                        <button className='button'><a href="https://sitio-pruebaqwik.netlify.app" target="_blank" rel="noopener noreferrer"><i className="bi bi-window"></i>&nbsp; Ir al sitio</a></button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects
*/