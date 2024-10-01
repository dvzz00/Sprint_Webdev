import React from "react";
import '../Componentes/styles/solucao.css'

function Servicos() {
    return (   
        <div>
      <main className="solucao">
        <div className="secao secao1">
          <h1>Qual nossa Solução?</h1>
          <h3>
            Na nossa solução pretendemos criar um site com melhor experiências aos fãs, através de um quizz onde
            as equipes com maior apoio e pontuação ganharam um bônus de bateria. Além dos ganhos possíveis
            durante a corrida, colocaremos um ranking de pontuação e os fãs com maiores pontos vão ganhar acesso
            à comunicação da equipe que ele torce, além do direito a acessar uma câmera instalada no carro da
            equipe ao qual ele torce, podendo assistir à corrida pela visão do piloto.
          </h3>
        </div>
        
        <div className="fotos">
          <fieldset>
            <label
              style={{ '--_img': 'url(https://resources.formula-e.pulselive.com/photo-resources/2024/03/15/39f6ca81-47d4-4f58-9586-587ae07b866c/formula-e-teams-grid.jpg?width=1440&height=810)' }}
            >
              <input type="radio" name="images" />
            </label>
            <label
              style={{ '--_img': 'url(https://media.contentapi.ea.com/content/dam/eacom/common/ScreenShot_009_with_logos.jpg.adapt.crop191x100.628p.jpg)' }}
            >
              <input type="radio" name="images" />
            </label>
            <label
              style={{ '--_img': 'url(https://cdn-1.motorsport.com/images/amp/2d18Ma7Y/s1000/lucas-di-grassi-mahindra-racin.jpg)' }}
            >
              <input type="radio" name="images" />
            </label>
            <label
              style={{ '--_img': 'url(https://resources.formula-e.pulselive.com/photo-resources/2024/05/30/f46774b7-9497-47ec-826b-595b9de24c41/1020198554-LAT-20240525-EPS1011_141918DSC_2474.jpg?width=1580&height=1000)' }}
            >
              <input type="radio" name="images" />
            </label>
            <label
              style={{ '--_img': 'url(https://www.grandepremio.com.br/cdn-cgi/image/width=893,height=558,fit=contain,gravity=0.5x0.5,quality=75,format=webp/wp-content/uploads/2022/06/Mahindra.png)' }}
            >
              <input type="radio" name="images" />
            </label>
          </fieldset>
        </div>

        <div className="secao secao2">
          <h2>Público desejado:</h2>
          <ol>
            <li>
              <b>Nossa solução vai buscar um público que tenha interesse na interseção entre tecnologia e
              sustentabilidade. Frequentam eventos de tecnologia e esportes, e estão dispostos a pagar por
              experiências únicas e personalizadas, possuindo um estilo de vida moderno, conectado
              digitalmente, buscando sempre uma vida mais sustentável.</b>
            </li>
          </ol>
        </div>
        
        <div className="linha1">
          <div className="quadro1">
            <h3>Site:</h3>
            <hr />
            <p>Contará com informações sobre a fórmula E, sobre a equipe da Tech Mahindra, o quizz e um mascote que
              criaremos para apresentar as perguntas do quizz, tendo um ranking também.</p>
          </div>
          <div className="quadro2">
            <h3>Prêmio:</h3>
            <hr />
            <p>Sistema de câmera e áudio em tempo real para aqueles que ganharam o prêmio, no quizz podendo assim
              acompanhar seu time de perto.</p>
          </div>
        </div>

        <div className="linha2">
          <div className="quadro3">
            <h3>Quizz:</h3>
            <hr />
            <p>Terá diversas perguntas vinculadas a um sistema de pontos que será reiniciado por corrida, esses
              pontos também irão ser contabilizados no ranking da temporada da equipe.</p>
          </div>
          <div className="quadro4">
            <h3>Criação de um mascote:</h3>
            <hr />
            <p>Criaremos um mascote/persona animada para a Fórmula E.</p>
          </div>
        </div>
      </main>
    </div>
     );
}

export default Servicos   