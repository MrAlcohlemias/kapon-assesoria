import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Menu,
  X,
  Search,
  ShieldCheck,
  BadgeEuro,
  CarFront,
  FileCheck2,
  Handshake,
  MessageCircle,
  // Instagram,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Search,
    title: "Búsqueda",
    price: "40 €",
    description:
      "Encontramos y filtramos vehículos que encajen con tus necesidades y presupuesto.",
    includes: [
      "Análisis de tus necesidades",
      "Selección de modelos adecuados",
      "Búsqueda de vehículos",
      "Comparación de precios",
      "Filtrado de anuncios",
      "Selección final de vehículos",
    ],
    note: "No incluye inspección física del vehículo.",
  },
  {
    number: "02",
    icon: CarFront,
    title: "Búsqueda + análisis",
    price: "120 €",
    description:
      "Nos encargamos de buscar, analizar e inspeccionar los vehículos candidatos.",
    includes: [
      "Todo lo incluido en Búsqueda",
      "Análisis del historial disponible",
      "Contacto con el vendedor",
      "Desplazamiento",
      "Inspección visual y mecánica básica",
      "Prueba del vehículo",
      "Reportaje fotográfico",
      "Informe completo",
      "Valoración final",
    ],
    note: "Hasta 3 vehículos inspeccionados. Vehículos adicionales con suplemento.",
    featured: true,
  },
  {
    number: "03",
    icon: Handshake,
    title: "Compra asistida",
    price: "250 €",
    description:
      "Nuestro servicio más completo para acompañarte hasta el momento de la compra.",
    includes: [
      "Todo lo incluido en Búsqueda + análisis",
      "Negociación con el vendedor",
      "Acompañamiento durante la compra",
      "Ayuda con la documentación",
      "Revisión final del vehículo",
      "Asistencia durante el proceso de compra",
    ],
    note: "Hasta 3 vehículos inspeccionados. Vehículos adicionales con suplemento.",
  },
];

const process = [
  {
    number: "01",
    title: "Nos cuentas qué buscas",
    text: "Hablamos contigo para entender qué coche necesitas, tu presupuesto y tus prioridades.",
  },
  {
    number: "02",
    title: "Definimos el objetivo",
    text: "Filtramos las características realmente importantes para encontrar el vehículo adecuado.",
  },
  {
    number: "03",
    title: "Buscamos y analizamos",
    text: "Seleccionamos opciones y analizamos cada una antes de que tomes una decisión.",
  },
  {
    number: "04",
    title: "Decides con información",
    text: "Te presentamos las opciones y te acompañamos durante el proceso de compra.",
  },
];

const faqs = [
  {
    question: "¿Qué tipo de coches podéis buscar?",
    answer:
      "Trabajamos con vehículos nuevos y de ocasión, adaptándonos al presupuesto, necesidades y preferencias de cada cliente.",
  },
  {
    question: "¿Tengo que comprar el coche que encontréis?",
    answer:
      "No. La decisión final siempre es del cliente. Nuestro trabajo consiste en aportar información y asesoramiento para que pueda decidir con mayor seguridad.",
  },
  {
    question: "¿Podéis analizar un coche que ya he encontrado?",
    answer:
      "Sí. También podemos estudiar un vehículo concreto que hayas encontrado por tu cuenta y ayudarte a valorar si merece la pena.",
  },
  {
    question: "¿Trabajáis con concesionarios?",
    answer:
      "Podemos analizar opciones procedentes tanto de concesionarios como de vendedores particulares, dependiendo del servicio contratado.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [formStatus, setFormStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="container nav-inner">
          <button className="logo" onClick={() => scrollTo("inicio")}>
            <span className="logo-mark">K</span>
            <span>
              KAPON<span>ASSESORIA</span>
            </span>
          </button>

          <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            <button onClick={() => scrollTo("servicios")}>Servicios</button>
            <button onClick={() => scrollTo("proceso")}>Proceso</button>
            <button onClick={() => scrollTo("nosotros")}>Nosotros</button>
            <button onClick={() => scrollTo("faq")}>FAQ</button>
            <button
              className="nav-contact"
              onClick={() => scrollTo("contacto")}
            >
              Contactar <ArrowUpRight size={16} />
            </button>
          </nav>

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="inicio">
          <div className="hero-background" />

          <div className="container hero-content">
            <motion.div
              className="hero-copy"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="eyebrow">
                <span className="eyebrow-line" />
                ASESORÍA AUTOMOVILÍSTICA
              </div>

              <h1>
                Tu próximo coche.
                <br />
                <span>Una decisión bien asesorada.</span>
              </h1>

              <p>
                Te ayudamos a encontrar, analizar y comprar el coche que
                realmente necesitas. Sin perder tiempo. Sin decisiones a ciegas.
              </p>

              <div className="hero-actions">
                <button
                  className="button button-primary"
                  onClick={() => scrollTo("contacto")}
                >
                  Empezar asesoría
                  <ArrowUpRight size={18} />
                </button>

                <button
                  className="button button-secondary"
                  onClick={() => scrollTo("proceso")}
                >
                  Cómo funciona
                </button>
              </div>
            </motion.div>

            <motion.div
              className="hero-stat"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <span>01</span>
              <div />
              <p>
                Compramos coches
                <br />
                con información.
              </p>
            </motion.div>
          </div>

          <div className="hero-bottom">
            <div className="container hero-bottom-inner">
              <span>Scroll para descubrir</span>
              <div className="scroll-line" />
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="intro section">
          <div className="container">
            <div className="section-label">01 — EL PROBLEMA</div>

            <div className="intro-grid">
              <h2>
                Comprar un coche
                <br />
                no debería ser
                <br />
                <span>una apuesta.</span>
              </h2>

              <div className="intro-text">
                <p className="large-text">
                  Hay cientos de coches disponibles. Diferentes precios,
                  kilómetros, equipamientos, motores y vendedores.
                </p>

                <p>
                  Nosotros filtramos todo ese ruido para que puedas centrarte en
                  lo realmente importante: encontrar un coche que tenga sentido
                  para ti.
                </p>

                <button
                  className="text-link"
                  onClick={() => scrollTo("servicios")}
                >
                  Descubre cómo podemos ayudarte
                  <ArrowUpRight size={17} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services section" id="servicios">
          <div className="container">
            <div className="section-heading services-heading">
              <div className="section-label">02 — SERVICIOS</div>

              <div>
                <h2>
                  Elige cuánto
                  <br />
                  <span>quieres que hagamos.</span>
                </h2>

                <p>
                  Tres niveles de asesoramiento para acompañarte desde la
                  búsqueda hasta la compra de tu próximo coche.
                </p>
              </div>
            </div>

            <div className="services-list">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.article
                    className={`service-card-large ${service.featured ? "featured" : ""
                      }`}
                    key={service.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                  >
                    <div className="service-card-header">
                      <div className="service-number">
                        <span>{service.number}</span>

                        <Icon size={22} strokeWidth={1.3} />
                      </div>

                      {service.featured && (
                        <span className="service-badge">MÁS ELEGIDO</span>
                      )}
                    </div>

                    <div className="service-card-main">
                      <div className="service-title">
                        <h3>{service.title}</h3>

                        <div className="service-price">
                          <span>Desde</span>
                          <strong>{service.price}</strong>
                        </div>
                      </div>

                      <p className="service-description">
                        {service.description}
                      </p>

                      <div className="service-divider" />

                      <div className="service-includes">
                        <span className="includes-title">INCLUYE</span>

                        <div className="includes-grid">
                          {service.includes.map((item) => (
                            <div className="include-item" key={item}>
                              <Check size={15} />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="service-note">
                        <span>※</span>
                        <p>{service.note}</p>
                      </div>
                    </div>

                    <button
                      className="service-cta"
                      onClick={() => scrollTo("contacto")}
                    >
                      Solicitar este servicio
                      <ArrowUpRight size={18} />
                    </button>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* FEATURE */}
        <section className="feature">
          <div className="feature-image">
            <div className="feature-overlay" />
          </div>

          <div className="feature-content container">
            <div className="feature-box">
              <div className="section-label">ASESORAMIENTO REAL</div>

              <h2>
                Menos dudas.
                <br />
                <span>Más seguridad.</span>
              </h2>

              <p>
                No se trata de decirte qué coche comprar. Se trata de ayudarte a
                tomar una decisión informada y adaptada a ti.
              </p>

              <div className="feature-points">
                <div>
                  <Check size={17} />
                  <span>Asesoramiento personalizado</span>
                </div>
                <div>
                  <Check size={17} />
                  <span>Información clara y objetiva</span>
                </div>
                <div>
                  <Check size={17} />
                  <span>Acompañamiento durante el proceso</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="process section" id="proceso">
          <div className="container">
            <div className="section-label">03 — EL PROCESO</div>

            <div className="process-heading">
              <h2>
                Así de sencillo.
                <br />
                <span>Así de claro.</span>
              </h2>

              <p>
                Hemos diseñado nuestro proceso para que comprar un coche sea
                mucho más fácil.
              </p>
            </div>

            <div className="process-list">
              {process.map((item, index) => (
                <motion.div
                  className="process-item"
                  key={item.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <span className="process-number">{item.number}</span>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <ArrowUpRight size={21} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="trust">
          <div className="container trust-grid">
            <div className="trust-title">
              <div className="section-label">04 — NUESTRA FILOSOFÍA</div>
              <h2>
                Tu interés.
                <br />
                <span>Primero.</span>
              </h2>
            </div>

            <div className="trust-items">
              <div className="trust-item">
                <ShieldCheck size={30} strokeWidth={1.2} />
                <div>
                  <h3>Independencia</h3>
                  <p>
                    Nuestro objetivo es asesorarte, no venderte un vehículo.
                  </p>
                </div>
              </div>

              <div className="trust-item">
                <BadgeEuro size={30} strokeWidth={1.2} />
                <div>
                  <h3>Tu presupuesto</h3>
                  <p>
                    Buscamos opciones que tengan sentido dentro de tus
                    posibilidades.
                  </p>
                </div>
              </div>

              <div className="trust-item">
                <MessageCircle size={30} strokeWidth={1.2} />
                <div>
                  <h3>Comunicación</h3>
                  <p>
                    Te explicamos las cosas de forma clara, directa y sin
                    tecnicismos innecesarios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about section" id="nosotros">
          <div className="container about-grid">
            <div className="about-image">
              <div className="about-image-inner">
                <span>YOUR CAR</span>
                <strong>YOUR DECISION</strong>
              </div>
            </div>

            <div className="about-content">
              <div className="section-label">05 — NOSOTROS</div>

              <h2>
                Conocemos los coches.
                <br />
                <span>Entendemos a las personas.</span>
              </h2>

              <p>
                Comprar un coche es una decisión importante. Por eso creemos que
                el asesoramiento debe ir mucho más allá de enseñarte anuncios.
              </p>

              <p>
                Analizamos cada caso de manera individual para ayudarte a
                encontrar una opción que encaje realmente contigo.
              </p>

              <button
                className="button button-secondary"
                onClick={() => scrollTo("contacto")}
              >
                Hablar con nosotros
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq section" id="faq">
          <div className="container faq-grid">
            <div>
              <div className="section-label">06 — FAQ</div>
              <h2>
                Preguntas
                <br />
                <span>frecuentes.</span>
              </h2>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    className={`faq-item ${isOpen ? "open" : ""}`}
                    key={faq.question}
                  >
                    <button
                      className="faq-question"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        size={20}
                        className={isOpen ? "rotate" : ""}
                      />
                    </button>

                    <motion.div
                      className="faq-answer"
                      initial={false}
                      animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact section" id="contacto">
          <div className="container">
            <div className="contact-card">
              <div className="contact-content">
                <div className="section-label">07 — CONTACTO</div>

                <h2>
                  ¿Hablamos de tu
                  <br />
                  <span>próximo coche?</span>
                </h2>

                <p>
                  Cuéntanos qué estás buscando y veremos cómo podemos ayudarte.
                </p>
              </div>

              <form
                className="contact-form"
                onSubmit={async (e) => {
                  e.preventDefault();

                  setIsSending(true);
                  setFormStatus("");

                  const form = e.currentTarget;
                  const formData = new FormData(form);

                  try {
                    const response = await fetch("https://formspree.io/f/mwlpgyrp", {
                      method: "POST",
                      body: formData,
                      headers: {
                        Accept: "application/json",
                      },
                    });

                    if (response.ok) {
                      setFormStatus(
                        "Solicitud enviada correctamente. Nos pondremos en contacto contigo."
                      );

                      form.reset();
                    } else {
                      setFormStatus(
                        "No hemos podido enviar la solicitud. Inténtalo de nuevo."
                      );
                    }
                  } catch (error) {
                    setFormStatus(
                      "Ha ocurrido un error. Comprueba tu conexión e inténtalo de nuevo."
                    );
                  } finally {
                    setIsSending(false);
                  }
                }}
              >
                <div className="form-row">
                  <label>
                    Nombre
                    <input
                      type="text"
                      name="nombre"
                      placeholder="Tu nombre"
                      required
                    />
                  </label>

                  <label>
                    Teléfono
                    <input
                      type="tel"
                      name="telefono"
                      placeholder="+34 600 000 000"
                      required
                    />
                  </label>
                </div>

                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="tu@email.com"
                    required
                  />
                </label>

                <label>
                  Servicio
                  <select name="servicio" required>
                    <option value="">Selecciona un servicio</option>
                    <option value="Búsqueda - 40 €">
                      Búsqueda — 40 €
                    </option>
                    <option value="Búsqueda + análisis - 120 €">
                      Búsqueda + análisis — 120 €
                    </option>
                    <option value="Compra asistida - 250 €">
                      Compra asistida — 250 €
                    </option>
                  </select>
                </label>

                <label>
                  Presupuesto aproximado
                  <input
                    type="text"
                    name="presupuesto"
                    placeholder="Ej. 15.000 €"
                  />
                </label>

                <label>
                  ¿Qué coche estás buscando?
                  <textarea
                    name="mensaje"
                    placeholder="Cuéntanos qué estás buscando, presupuesto, tipo de coche, preferencias..."
                    rows="5"
                    required
                  />
                </label>

                <input
                  type="hidden"
                  name="_subject"
                  value="Nueva solicitud — KAPON ASSESORIA"
                />

                <button
                  type="submit"
                  className="button button-primary submit-button"
                  disabled={isSending}
                >
                  {isSending ? "Enviando..." : "Solicitar asesoría"}
                  {!isSending && <ArrowUpRight size={18} />}
                </button>

                {formStatus && (
                  <p
                    className={`form-status ${formStatus.includes("correctamente") ? "success" : "error"
                      }`}
                  >
                    {formStatus}
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <button
                className="logo footer-logo"
                onClick={() => scrollTo("inicio")}
              >
                <span className="logo-mark">K</span>
                <span>
                  KAPON<span>ASSESORIA</span>
                </span>
              </button>

              <p>
                Asesoría automovilística
                <br />
                independiente y personalizada.
              </p>
            </div>

            <div className="footer-links">
              <div>
                <span>MENÚ</span>
                <button onClick={() => scrollTo("servicios")}>Servicios</button>
                <button onClick={() => scrollTo("proceso")}>Proceso</button>
                <button onClick={() => scrollTo("nosotros")}>Nosotros</button>
              </div>

              <div>
                <span>CONTACTO</span>
                <a href="mailto:marccapongali@gmail.com">
                  marccapongali@gmail.com
                </a>
                <a href="tel:++34 644 70 24 99">+34 644 70 24 99</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 KAPONASSESORIA</span>

            <div>
              {/* <a href="#instagram" aria-label="Instagram">
                <Instagram size={18} />
              </a> */}
              <a href="#contacto" aria-label="Contacto">
                <MessageCircle size={18} />
              </a>
            </div>

            <span>Todos los derechos reservados.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
