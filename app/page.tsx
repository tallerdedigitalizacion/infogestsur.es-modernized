const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const asset = (path: string) => `${basePath}${path}`;

const menu = [
  ["Home", "index.html"],
  ["Trámites DGT", "gestoria-en-mostoles/index.html"],
  ["Licencias de apertura", "gestoria-licencias-de-apertura-madrid/index.html"],
  ["Quienes Somos", "nosotros/index.html"],
  ["Gestoría abierta sábado", "gestoria-abierta-sabado-madrid-2/index.html"],
  ["Blog", "blog/index.html"],
  ["Contacto", "contactar-asesoria-mostoles/index.html"],
];

const services = [
  {
    title: "Cambios de titularidad en Móstoles",
    items: [
      "Bajas temporales.",
      "Contrato de compra venta de vehículos.",
      "Confección y redacción de todo tipo de escritos / alegaciones.",
      "Transferencias de fallecidos.",
      "Confección y redacción de todo tipo de contratos.",
      "Gestión de multas.",
      "Recurrencia de Multas.",
      "Vehículos Heredados.",
      "Ultimaciones de transferencias.",
      "Informes oficiales DGT por Whatsapp.",
    ],
  },
  {
    title: "Servicios de gestoría",
    items: [
      "Escrituras.",
      "Tramitaciones.",
      "Herencias.",
      "Constitución préstamo hipotecario.",
      "Proyectos y estudios de apertura de locales.",
      "Inscripción en el registro.",
      "Cancelación de hipoteca.",
      "Novación de préstamo/ crédito hipotecario.",
      "Guía para memoria-proyecto de licencia urbanística (para actividades clasificadas)",
      "Impuesto de Sucesiones en Madrid.",
    ],
  },
  {
    title: "Transferencia de Vehículos",
    items: [
      "Trámites y transferencias de vehículos, motos y furgonetas.",
      "Notificaciones de venta.",
      "Canje de permiso de conducir extranjero.",
      "Cancelación y reserva de dominio, leasing o renting.",
      "Pago de sanciones.",
      "Informes de matrícula online.",
      "Cambio de domicilio en la DGT.",
      "Transferencia vehículo en gestoría.",
      "¿Cuánto cuesta transferir un vehículo?",
    ],
  },
  {
    title: "Asesoría Fiscal",
    items: [
      "Personas físicas y jurídicas.",
      "Entidades en régimen de atribución de rentas.",
      "Gestión fiscal.",
      "Constitución de sociedades.",
      "Presentación de los modelos del Impuesto del Valor Añadido y del modelo para justificar el Impuesto de Sociedades.",
      "Asesoramiento en materia fiscal, previsiones, estimaciones y sobre bonificaciones y subvenciones.",
      "Asesoría fiscal.",
      "CNAES Consulta.",
      "Contrato prestación de servicios.",
    ],
  },
  {
    title: "Asesoría Contable",
    items: [
      "Gestión de asientos contables, apertura y cierre de ejercicio.",
      "Servicios especializados de contabilidad: Actualización de contabilidades atrasadas.",
      "Constitución de sociedades y libros oficiales de contabilidad",
      "Informes, balances trimestrales, anuales y balances para bancos",
      "Presentación cuentas anuales",
      "Representación y asistencia a las inspecciones de todos los conceptos tributarios",
      "Estudio de análisis de datos y principales ratios.",
    ],
  },
  {
    title: "Asesoría Laboral",
    items: [
      "Nóminas, contratos de trabajos, prórrogas, finiquitos y certificados de empresa, entre otros.",
      "Consultoría y representación",
      "Asesorías sobre las bonificaciones aplicables según el tipo de contrato y otras asesorías especiales",
      "Notificaciones de CRA y Tc1/Tc2",
      "Auditoría laboral.",
      "Informes estadísticos.",
      "Extranjería.",
      "Precontratos para extranjeros.",
      "Ayuda pyme.",
      "IVA soportado y repercutido.",
    ],
  },
];

const reviews = [
  {
    name: "Marcelo Ottone",
    text: "Luego de llamar a varias gestorias me decante por esta gestoría. Buena calidad y precio. Cuesta un poco aparcar, pero considero que en Móstoles es la gestoria mas economica. Abren los sabados sin cita previa. Recomendables.",
  },
  {
    name: "pablo oliva",
    text: "Esta Asesoría me ha gestionado una transferencia de vehículo de un familiar fallecido y la verdad que al principio lo veía todo muy difícil y engorroso pero una vez deposite los papeles en la oficina me gestionaron todo muy rapido y con gran profesionalidad Recomiendo esta Gestoria en Móstoles",
  },
  {
    name: "Aitor salaberria",
    text: "La mejor Gestoria de Móstoles, te soluciona todo siempre y sabe perfectamente lo que hace. Totalmente recomendado",
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="topbar">
          <a href="tel:+34916130029">916 130 029</a>
          <a href="mailto:info@infogestsur.es">info@infogestsur.es</a>
        </div>
        <div className="nav-wrap">
          <a className="brand" href="index.html" aria-label="IGS Asesoría Gestoría en Móstoles Madrid">
            <img src={asset("/assets/logo-igs.png")} alt="IGS Asesoría Gestoría en Móstoles Madrid" />
          </a>
          <nav aria-label="Navegación principal">
            {menu.map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <img src={asset("/assets/fondo-home-2025.jpg")} alt="" className="hero-bg" />
          <div className="hero-shade" />
          <div className="container hero-content">
            <p className="eyebrow">Info Gest Sur Gestión</p>
            <h1>Asesoría y gestoría en Móstoles</h1>
            <p className="lead">
              Desde 2001 ayudamos a autónomos, empresas y particulares con transferencias DGT, herencias y trámites fiscales.
              Confianza, rapidez y trato personal.
            </p>
            <p>
              En Info Gest Sur Gestión somos una asesoría y gestoría en Móstoles con más de 20 años de experiencia,
              especializada en transferencias DGT, herencias y trámites fiscales para particulares, autónomos y empresas.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="tel:+34916130029">Llamar ahora</a>
              <a className="button button-secondary" href="contactar-asesoria-mostoles/index.html">Solicitar presupuesto</a>
            </div>
          </div>
        </section>

        <section className="intro band">
          <div className="container intro-grid">
            <div>
              <p className="section-kicker">Servicios</p>
              <h2>Trámites y asesoría con el contenido de siempre, más claro y más directo.</h2>
            </div>
            <p>
              Trabajamos con un enfoque cercano y transparente, lo que nos permite ofrecer soluciones ágiles y eficaces
              a cada cliente. Cada trámite lo realizamos con rigor y compromiso, para que tu gestión esté siempre en buenas manos.
            </p>
          </div>
        </section>

        <section className="services container" aria-label="Servicios">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="feature feature-blue">
          <div className="container split">
            <div>
              <p className="section-kicker light">Gestoría administrativa</p>
              <h2>Gestoría y asesoría administrativa</h2>
              <p>En Info Gest Sur encontrarás una de las mejores Gestorías en Móstoles donde te ofrecemos servicio de:</p>
              <ul className="check-list">
                <li>Transferencias de vehículos (motos, ciclomotores, furgonetas...)</li>
                <li>Matriculaciones</li>
                <li>Bajas de vehículos</li>
                <li>Duplicados de permisos de circulación</li>
                <li>Permisos internacionales</li>
                <li>Transferencias de motos, furgonetas y ciclomotores</li>
              </ul>
            </div>
            <img src={asset("/assets/img-home-1.jpg")} alt="" />
          </div>
        </section>

        <section className="feature">
          <div className="container split reverse">
            <img src={asset("/assets/img-home-2.jpg")} alt="" />
            <div>
              <p className="section-kicker">Transferencia de vehículos</p>
              <h2>Asesoría y gestoría en Móstoles</h2>
              <p><strong>¿Cómo realizar la transferencia de un coche?</strong></p>
              <p>
                Si estás por comprar o acabas de comprar un coche de ocasión, moto... Debes tener en cuenta que realizar
                el cambio de titularidad del coche es una tarea primordial. Todos y cada uno de nuestros clientes son distintos.
                Cada caso es complejo y único.
              </p>
              <p>
                En Info Gest Sur te ayudamos durante todo el proceso y nos ocupamos de toda la gestión gracias a nuestra
                experiencia profesional y a la cualificación de nuestros trabajadores.
              </p>
            </div>
          </div>
        </section>

        <section className="feature band">
          <div className="container split">
            <div>
              <p className="section-kicker">IGS Asesoría</p>
              <h2>¿Por qué contar con los servicios de IGS?</h2>
              <p>
                En nuestra empresa de Móstoles, IGS Asesoría, llevamos a cabo desde 2001 todo tipo de servicios relacionados
                con la asesoría jurídica, gestoría administrativa y abogados, como confección y redacción de contratos de
                compra-venta de vehículos, alquiler de viviendas y locales, embargos, informes, etc. en Móstoles.
              </p>
              <p>Calcule el importe de la transferencia de su vehículo, solicite presupuesto sin compromiso y llámenos en nuestro amplio horario de atención.</p>
            </div>
            <img src={asset("/assets/img-home-3.jpg")} alt="" />
          </div>
        </section>

        <section className="demo-form-wrap">
          <div className="container demo-form-grid">
            <div>
              <p className="section-kicker">Contacto</p>
              <h2>Formulario visible como demo</h2>
              <p>
                La web original enlaza a la página de contacto. En esta versión estática se muestra el componente visual
                del formulario, deshabilitado para que el cliente vea cómo quedaría sin activar ningún envío.
              </p>
            </div>
            <form className="demo-form" aria-disabled="true">
              <div className="demo-badge">DEMO: formulario no habilitado</div>
              <label>Nombre<input disabled placeholder="Nombre" /></label>
              <label>Email<input disabled placeholder="Email" /></label>
              <label>Teléfono<input disabled placeholder="Teléfono" /></label>
              <label>Mensaje<textarea disabled placeholder="Mensaje" /></label>
              <button disabled>Enviar consulta</button>
            </form>
          </div>
        </section>

        <section className="reviews">
          <div className="container">
            <div className="reviews-head">
              <div>
                <p className="section-kicker">Google</p>
                <h2>EXCELENTE</h2>
              </div>
              <p><strong>A base de 225 reseñas</strong></p>
            </div>
            <div className="review-grid">
              {reviews.map((review) => (
                <article className="review-card" key={review.name}>
                  <div className="stars" aria-label="5 estrellas">★★★★★</div>
                  <h3>{review.name}</h3>
                  <p>{review.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <nav aria-label="Legal">
          <a href="politica-de-cookies/index.html">Política de Cookies</a>
          <a href="aviso-legal/index.html">Aviso Legal</a>
          <a href="politica-privacidad/index.html">Política de privacidad</a>
          <a href="gestoria-abierta-los-sabados-en-madrid/index.html">Gestoría abierta los sábados</a>
        </nav>
        <p>© 2024 INFO GEST SUR GESTIÓN S.L. - Todos los derechos reservados.</p>
      </footer>

      <a className="floating-whatsapp" href="https://api.whatsapp.com/send?phone=34603634685" aria-label="WhatsApp">WhatsApp</a>
      <a className="call-now" href="tel:+34916130029" aria-label="Call Now Button">☎</a>
      <div className="cookie-notice" role="dialog" aria-label="Aviso de cookies">
        <span>Utilizamos cookies para asegurar que damos la mejor experiencia al usuario en nuestra web. Si sigues utilizando este sitio asumiremos que estás de acuerdo.</span>
        <button>Vale</button>
      </div>
    </>
  );
}
