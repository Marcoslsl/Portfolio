export default function Experience() {
  return (
    <section id="Experience" className="about--section">
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title"></p>
          <h1 className="skills-section--heading">Experiências</h1>
          <h2>Neurotech</h2>
          <p className="experience--section-info">
            Cientista de dados estagiário - 2022/2023
          </p>
          <p className="experience--section-description">
            Auxiliar na contribuição com a construção, aperfeiçoamento e
            aplicação das ferramentas de engenharia de machine learning na
            plataforma Neurolake sob supervisão.
            <br />
            <br />
            <h4>Principais Projetos</h4>
            <ul>
              <li>
                <span>
                  {" "}
                  <strong>Projeto de sistemas de recomendação</strong>{" "}
                </span>
                <p>
                  Construção de uma biblioteca em python para construção de
                  modelos de sistema de recomendação.
                </p>
                <p className="experience--section-fer-description">
                  <strong>Ferramentas:</strong> Python, POO, AWS (Personalize),
                  LightFm, Git, Github
                </p>
              </li>
              <br />
              <li>
                {" "}
                <strong>Projeto de monitoramento de modelos</strong>
                <span>
                  <strong></strong>
                </span>
                <p>Construção de uma API para monitoramento de modelos.</p>
                <p className="experience--section-fer-description">
                  <strong>Ferramentas:</strong> Python, POO, FastAPI, AWS(SQS,
                  Lambda, CloudWatch, S3), Git, Github
                </p>
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/header-img.svg" alt="Hero Section" />
      </div>
    </section>
  );
}
