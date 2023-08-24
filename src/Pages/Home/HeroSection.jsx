export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Olá, Meu Nome é Marcos</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">
              Cientista de dados
            </span>{" "}
          </h1>
          <p className="hero--section-description">
            Com foco em desenvolvimento de software
          </p>
        </div>
        <a href="mailto:marcosviniciuseg@outlook.com">
          <button className="btn btn-primary">Contato</button>
        </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/header-img.svg" alt="Hero Section" />
      </div>
    </section>
  );
}
