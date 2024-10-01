import React from "react";
import'../Componentes/styles/sobre.css';

function Sobre() {
    return (
        <>
            <main className="problema">
                <div className="apresentar">
                    <section id="problema">
                        <h1>Problema:</h1>
                        <h2>Popularizar a Formula E, trazendo maior visibilidade ao público</h2>
                        <p>A Fórmula E entende que deve buscar maior interação, incentivando novos públicos a consumir o
                            esporte, através de interações gamificadas dedicadas às corridas e de um site com experiências
                            imersivas, porém como isso deve ser realizado?</p>
                    </section>
                </div>
            </main>
            <div className="quadro">
                <div className="items">
                    {[
                        'https://racingonline.com.br/wp-content/uploads/2023/02/Image-13.jpg',
                        'https://resources.formula-e.pulselive.com/photo-resources/2024/05/16/ba8017be-de50-4205-89b2-fcd569fc3ac8/Rowland-Berlin-Season-10.jpg?width=1440&height=810',
                        'https://www.smallcase.com/wp-content/uploads/2023/02/image-1-mexico-press-release.png',
                        'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/03/formula.jpeg?w=1220&h=674&crop=1',
                        'https://racingonline.com.br/wp-content/uploads/2019/03/A_trio_of_fully-electric_cars_lined-up_in_formation_outside_ExCeL_London_-_the_scene_of_Formula_E_s_racing_return_to_the_UK_capital_in_season_six.jpg',
                        'https://resources.formula-e.pulselive.com/photo-resources/2024/05/27/04cd8b77-29a9-4926-8de6-2fd9939bb6a2/HANKOOK_SLIDE_WEB_02.jpg?width=1580&height=1000',
                        'https://www.adobomagazine.com/wp-content/uploads/2022/08/Mahindra-Gets-London-To-Dance-For-Good-New-Activation-by-BBH-India-HERO.jpg',
                        'https://resources.formula-e.pulselive.com/photo-resources/2024/05/07/fe87731a-a086-4177-8350-c930d0038303/Porsche-safety-car-7.jpg?width=1440&height=810',
                        'https://resources.formula-e.pulselive.com/photo-resources/2023/03/23/a335db6d-3b4a-4d08-a232-cd14ce5afb6e/Ayrton-Senna-celebrates-F1-win.jpg?width=1440&height=810'
                    ].map((url, index) => (
                        <div
                            className="item"
                            tabIndex="0"
                            key={index}
                            style={{ backgroundImage: `url(${url})` }}
                        ></div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Sobre;
