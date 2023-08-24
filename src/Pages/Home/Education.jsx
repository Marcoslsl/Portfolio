export default function Education() {
  return (
    <section id="Education" className="education--section">
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title"></p>
          <h1 className="skills-section--heading">Educação</h1>
          <h2>Universidade Federal de Pernambuco</h2>
          <p className="education--section-description">
            Engenharia de Produção - Cursando
            <br />
            <br />
            <h4>Iniciação científica - PIBIC</h4>
            <br />
            <p>
              PIBIC 2019 - 2020: ESTUDO DE MODELOS PARA ANÁLISE DE EFICIÊNCIA
              AMBIENTAL COM BASE NA GESTÃO DE RESÍDUOS ELETROELETRÔNICOS.
            </p>
            <p>
              PIBIC 2020 - 2021: ESTUDOS AVANÇADOS DOS MODELOS DE EFICIÊNCIA
              PARA SUPORTE AO GERENCIAMENTO DE RESÍDUOS ELETROELETRÔNICOS
            </p>
            <br />
            <h4>Publicações</h4>
            <ul>
              <li>
                <a
                  href="https://proceedings.science/sbpo/sbpo-2020/trabalhos/uso-da-analise-por-envoltoria-de-dados-dea-para-avaliacao-da-eficiencia-na-gesta?lang=pt-br"
                  className="button-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    {" "}
                    <strong>Artigo Publicado no SBPO</strong>{" "}
                  </span>
                </a>
                <p>
                  USO DA ANÁLISE POR ENVOLTÓRIA DE DADOS (DEA) PARA AVALIAÇÃO DA
                  EFICIÊNCIA NA GESTÃO DE RESÍDUOS ELETROELETRÔNICOS, Nyedja
                  Nayanne Bezerra de Oliveira Santos, Marcos Vinicius Lira
                  Santana, Patrícia Guarnieri, Lucio Silva.
                </p>
              </li>
              <br />
              <li>
                {" "}
                <a
                  href="https://books.google.com.br/books?id=fdOgEAAAQBAJ&printsec=frontcover&sourc#v=onepage&q&f=false"
                  className="button-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    <strong>Capitulo de Livro</strong>
                  </span>
                </a>
                <p>
                  Capitulo (Avanço na análise de séries temporais, pág 144) de
                  um livro com os melhores trabalhos da disciplina de Análise de
                  séries temporais em R.
                </p>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
}
