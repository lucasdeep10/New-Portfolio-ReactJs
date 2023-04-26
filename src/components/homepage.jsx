
import './PortfolioPage.css';

const PortfolioPage = () => {
  return (
  
    <div className="portfolio-page">
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Lucas Ferreyra</h1>
              <h2>Desarrollador Full Stack</h2>
              <p>Breve descripción sobre ti y tus habilidades principales.</p>
              <a href="#contacto" className="btn btn-primary">Contactar</a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section id="conocimientos">
          <div className="container">
            <h2>Conocimientos</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h3>Frontend</h3>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>React</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h3>Backend</h3>
                    <ul>
                      <li>Node.js</li>
                      <li>Express</li>
                      <li>MySQL</li>
                      <li>MongoDB</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h3>Otros</h3>
                    <ul>
                      <li>Git</li>
                      <li>Linux</li>
                      <li>SEO</li>
                      <li>UI/UX Design</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="experiencia">
          <div className="container">
            <h2>Experiencia y Educación</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h3>Título de tu experiencia</h3>
                    <h4>Nombre de la empresa o institución</h4>
                    <p>Descripción breve de tus responsabilidades y logros.</p>
                    <p>Fecha de inicio - Fecha de finalización</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h3>Estudios</h3>
                    <h4>Título obtenido</h4>
                    <p>Nombre de la institución</p>
                    <p>Fecha de inicio - Fecha de finalización</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contacto">
        <div className="container">
          <h2>Contacto</h2>
          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Correo Electrónico</label>
                  <input type="email" className="form-control" id="email" />
                </div>
              <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input type="text" className="form-control" id="phone" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea className="form-control" id="message" rows="5"></textarea>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
        </div>
      </section>
    </main>
  <footer>
    <p>Todos los derechos reservados © Web Agency</p>
  </footer>
  
</div>
  );
 }
export default PortfolioPage;
