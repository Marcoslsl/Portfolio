export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/contact-img.svg" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title"></p>
          <h1 className="skills-section--heading">Sobre Mim</h1>
          <p className="hero--section-description">
            Sempre fui o tipo de pessoa que se questiona o porquê das coisas e
            que gosta de aprender coisas novas. Tive experiência com projetos
            multidisciplinares e de ponta a ponta que englobam atividades de
            Engenharia de dados, Análise de dados, Ciência de dados e
            desenvolvimento de software/MLOPS
          </p>
          <br />
          <p className="hero--section-description">
            Onde mais gosto de atuar é com o desenvolvimento de software para
            área de dados, como Data Pipelines, ETL's e MLOps. Gosto bastante da
            área de desenvolvimento backend, arquitetura de software, Devops e
            cloud. No frontend gosto de brincar com React!
          </p>
        </div>
      </div>
    </section>
  );
}
