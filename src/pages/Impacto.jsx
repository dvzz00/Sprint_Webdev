import React from "react";
import '../Componentes/styles/impacto.css';

function Contato() {
    return (
        <section className="titulo">
            <b>Possíveis impactos negativos:</b>
            <div className="linha1">
                <div className="quadro1">
                    <h3>Manipulação de Resultados:</h3>
                    <br />
                    <p>
                        <b>Problema:</b> O uso de quizzes para conceder bônus de bateria pode ser visto como manipulação do
                        resultado das corridas, comprometendo a integridade esportiva.
                        <br />
                        <br />
                        <b>Impacto:</b> Fãs e equipes podem sentir que os resultados não são inteiramente baseados nas
                        habilidades e estratégias dos pilotos, mas sim na popularidade das equipes.
                    </p>
                </div>
                <div className="quadro2">
                    <h3>Desigualdade Competitiva:</h3>
                    <br />
                    <p>
                        <b>Problema:</b> As equipes mais populares podem receber mais benefícios, criando uma disparidade
                        entre equipes grandes e pequenas.
                        <br />
                        <br />
                        <b>Impacto:</b> Isso pode desmotivar equipes menores e seus fãs, já que elas podem se sentir em
                        desvantagem injusta, prejudicando a competição justa.
                    </p>
                </div>
            </div>
            <div className="linha2">
                <div className="quadro3">
                    <h3>Superficialidade da Experiência:</h3>
                    <br />
                    <p>
                        <b>Problema:</b> A experiência gamificada pode ser vista como uma tentativa superficial de engajar o
                        público, sem abordar as necessidades profundas dos fãs de esportes automobilísticos.
                        <br />
                        <br />
                        <b>Impacto:</b> Pode afastar fãs hardcore que preferem conteúdo mais técnico e focado no desempenho
                        real das corridas.
                    </p>
                </div>
                <div className="quadro4">
                    <h3>Privacidade e Segurança:</h3>
                    <br />
                    <p>
                        <b>Problema:</b> Acesso à comunicação da equipe e câmeras dentro do carro pode levantar preocupações
                        de privacidade e segurança.
                        <br />
                        <br />
                        <b>Impacto:</b> Equipes podem se preocupar com a confidencialidade de suas estratégias, e a
                        transmissão ao vivo das câmeras pode expor informações sensíveis.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Contato;
