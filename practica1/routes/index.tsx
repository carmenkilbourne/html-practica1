export default function Home() {
    return (
        <div className="max-w-screen-md mx-auto flex flex-col  justify-center">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <h1>Carmen Elizabeth Kilbourne</h1>
                            <h2>
                                Estudiante de Ingeniería Informática, apasionada
                                de la programación
                            </h2>
                            <div className="flex items-center ">
                                <img
                                    id="mundo"
                                    src="/mundo.png"
                                    width="20"
                                    height="20"
                                />
                                <span>Madrid, España</span>
                            </div>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <a
                                                href="https://www.facebook.com"
                                                class="button"
                                            >
                                                <img
                                                    id="facebook"
                                                    src="/facebook.png"
                                                    width="20"
                                                    height="20"
                                                />
                                            </a>
                                        </td>

                                        <td>
                                            <a
                                                href="https://www.instagram.com/"
                                                class="button"
                                            >
                                                <img
                                                    id="instagram"
                                                    src="/instagram.png"
                                                    width="20"
                                                    height="20"
                                                />
                                            </a>
                                        </td>
                                        <td>
                                            <a
                                                href="https://www.github.com/"
                                                class="button"
                                            >
                                                <img
                                                    id="github"
                                                    src="/github.png"
                                                    width="20"
                                                    height="20"
                                                />
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td>
                            <img
                                id="chica"
                                src="/chica.png"
                                width="150"
                                height="150"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>

            <h1>Sobre mí</h1>
            <span class="max-w-screen-md mx-auto flex flex-col items-center justify-center" style="font-family:'Courier New'">
                +15 años de experiencia como Desarrollador Web. Actualmente
                estudiante de Ingeniería Informatica. Vivo en Madrid, España. He
                trabajado en diferentes entornos: java,c,c++,etc
            </span>
                <h1>Experiencia laboral</h1>
                <h5 >Cajera</h5>
                <p style="font-family:'Courier New';font-size:  0.875em;">
                Colocar y reponer productos en la zona de ventas de hipermercados bajo la supervisión del personal 
                encargado de la sección donde se ubique. - Cargar y descargar los productos para transportarlos del almacén hasta el lugar de colocación, manual o mecánicamente.
                </p>
                <h5>Recepcionista</h5>
                <p style="font-family:'Courier New';font-size:  0.875em;">
                    Recepcionista en el four seasons.
                </p>
                <h5>Tutora</h5>
                <p style="font-family:'Courier New';font-size:  0.875em;" >
                    Tutora de idiomas, como el Inglés, italiano, aleman,
                    portugues, etc.
                </p>
                <table className="max-w-screen-md  w-full">
                    <tbody>
                        <tr>
                            <td>
                                <h2>Formación</h2>
                                <h5>Universidad Antonio Nebrija</h5>
                                <h6 style="color:gray;">
                                    Ingenieria Informática
                                </h6>
                            </td>
                            <td>
                                <h5 className="text-right">2023-Actualidad</h5>
                            </td>
                        </tr>
                    </tbody>
                </table>
        </div>
    );
}
