import { useLayoutEffect } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import ClientCard from './components/ClientCard';
import './styles/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

function App() {
  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    gsap.to(".container-criacao", {
      y: 0,
      opacity: 1, 
      scrollTrigger: {
        trigger: ".container-criacao",
        // markers: true,
        start: "top 1200px",
        end: "bottom 1000px",
        scrub: true
      }
    })
    
  // Animação para Desktop
  mm.add("(min-width: 769px)", () => {
    gsap.to("#produtos", {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#produtos",
        // markers: true,
        start: "top 740px",
        end: "bottom 1950px",
        scrub: true
      }
    });
  });

  // Animação para Mobile
  mm.add("(max-width: 768px)", () => {
    gsap.to("#produtos", {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#produtos",
        // markers: true,
        start: "top 90%",
        end: "bottom 580%",
        scrub: true
      }
    });
  });
  // Desktop 
  mm.add("(min-width: 769px)", () => {
    gsap.to("#clientes", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#clientes",
        // markers: true,
        start: "top 80%",
        end: "bottom 110%",
        scrub: true
      }
    });
  });

  // Animação para Mobile
  mm.add("(max-width: 768px)", () => {
    gsap.to("#clientes", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#clientes",
        // markers: true,
        start: "top 90%", 
        end: "bottom 120%",
        scrub: true
      }
    });
  });
  // Desktop
  mm.add("(min-width: 769px)", () => {
    gsap.to("#contato", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#contato",
        // markers: true,
        start: "top 80%",
        end: "bottom 90%",
        scrub: true
      }
    });
  });

  // Animação para Mobile
  mm.add("(max-width: 768px)", () => {
    gsap.to("#contato", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#contato",
        // markers: true,
        start: "top 90%", 
        end: "bottom 100%",
        scrub: true
      }
    });
  });
  }, [])

  const products = [
    {
      title: 'Camisetas Personalizadas',
      image: '/assets/img/camiseta.jpg',
      description: 'Camisetas esportivas com sua identidade visual'
    },
    {
      title: 'Fardamentos',
      image: '/assets/img/clientes/cliente13.jpg',
      description: 'Uniformes completos para sua equipe'
    },
    {
      title: 'Femininos ',
      image: '/assets/img/feminina.jpg',
      description: 'Uniformes completos para sua equipe'
    },
    {
      title: 'Regatas',
      image: '/assets/img/regata-mlk2.jpg',
      description: 'Regatas para sua equipe'
    },
    {
      title: 'Kit Atleta',
      image: '/assets/img/clientes/clientes3.jpg',
      description: 'Kit completo para atletas profissionais'
    },
    {
      title: 'Bolsas Esportivas',
      image: '/assets/img/bolsas.jpg',
      description: 'Bolsas personalizadas para atletas'
    },
    {
      title: 'Bonés Personalizados',
      image: '/assets/img/bones.jpg',
      description: 'Bonés com design exclusivo'
    },
    
    {
      title: 'Kit Inverno',
      image: '/assets/img/kit-inverno.jpg',
      description: 'Roupas de inverno para sua equipe'
    },
    {
      title: 'Bandeiras',
      image: '/assets/img/bandeira.jpg',
      description: 'Bandeiras para sua equipe'
    }
  ];

  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero">
        <img
          src="/assets/img/hero-novo.jpg"
          alt="Hero"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Edit Sports</h1>
            <p className="hero-description">Transformamos suas ideias em produtos esportivos de alta qualidade. Design personalizado para sua equipe brilhar dentro e fora de campo.</p>
            <a
              href="https://wa.me/5511947814551"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <FontAwesomeIcon icon= {faWhatsapp} className="icon"/>
              Fale com um Vendedor
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section container-criacao">
        <div className="container container-criacao">
          <h2 className="section-title">Processo de Criação</h2>
          <div className="grid grid-4">
            <div className="process-item">
              <div className="process-number">1</div>
              <h3 className="process-title">Contato Inicial</h3>
              <p className="process-description">Entre em contato com nossos vendedores para iniciar seu projeto</p>
            </div>
            <div className="process-item">
              <div className="process-number">2</div>
              <h3 className="process-title">Design</h3>
              <p className="process-description">Compartilhe suas ideias e iremos transforma-lá em produtos de alta qualidade.</p>
            </div>
            <div className="process-item">
              <div className="process-number">3</div>
              <h3 className="process-title">Produção</h3>
              <p className="process-description">Fabricação com materiais de alta qualidade e acabamento premium</p>
            </div>
            <div className="process-item">
              <div className="process-number">4</div>
              <h3 className="process-title">Finalize seu pedido</h3>
              <p className="process-description">Faça o pagamento e receba seu produto em tempo recorde.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="section" >
        <div className="container">
          <h2 className="section-title">Nossos Produtos</h2>
          <div className="grid grid-3">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <ClientCard />

      {/* Contact Section */}
      <section id="contato" className="section" /*style={{ backgroundColor: 'var(--bg-light)' }}*/ >
        <div className="container">
          <h2 className="section-title">Entre em Contato</h2>
          <div className="grid grid-2">
            <div className="contact-card">
              <h3 className="contact-title">Fale Conosco</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <Phone className="contact-icon" style={{ color: 'var(--primary-color)' }} />
                  <span>(11) 94781-4551</span>
                </div>
                <div className="contact-item">
                  <FontAwesomeIcon icon= {faWhatsapp} className="contact-icon" style={{ color: 'var(--success-color)' }} />
                  <span>(11) 94781-4551</span>
                </div>
                <div className="contact-item">
                  <Mail className="contact-icon" style={{ color: '#ef4444' }} />
                  <span>editsports9315@gmail.com</span>
                </div>
                <div className="contact-item">
                  <MapPin className="contact-icon" style={{ color: '#8b5cf6' }} />
                  <span>Manuel Quirino de Mattos, 87 - Sapopemba, São Paulo-SP</span>
                </div>
              </div>
              <div className="social-links">
                <a href="#" className="social-link" style={{ color: '#1d4ed8' }}>
                  <Facebook />
                </a>
                <a href="https://www.instagram.com/editsportsoficial/" className="social-link" style={{ color: '#db2777' }}>
                  <Instagram />
                </a>
                <a href="#" className="social-link" style={{ color: 'var(--success-color)' }}>
                  <FontAwesomeIcon icon= {faWhatsapp} className='wpp-abaixo'/>
                </a>
              </div>
            </div>
            <div className="contact-card">
              <h3 className="contact-title">Horário de Atendimento</h3>
              <div className="hours-row">
                <span className="font-medium">Segunda a Sexta</span>
                <span>08:00 - 18:00</span>
              </div>
              <div className="hours-row">
                <span className="font-medium">Sábado</span>
                <span>08:00 - 13:00</span>
              </div>
              <div className="hours-note">
                <p>Para melhor atendimento, agende uma visita com nossos vendedores através do WhatsApp.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <img className='logo-footer' src="./assets/img/edit-logo-lateral-branco.png" alt="" />
              {/* <h3 className="footer-title">Edit Sports</h3> */}
              <p className="footer-subtitle">Qualidade e design para seu esporte</p>
            </div>
            <div className="footer-links">
              <a href="#produtos" className="footer-link">Produtos</a>
              <a href="#clientes" className="footer-link">Clientes</a>
              <a href="#contato" className="footer-link">Contato</a>
            </div>
          </div>
          <div className="footer-copyright">
            © {new Date().getFullYear()} Edit Sports. Todos os direitos reservados.
          </div>
          <div className="dev">Desenvolvido por <a href="https://portifolio-alberto.vercel.app/" target='blank'>Alberto Oliveira</a></div>
        </div>
      </footer>
    </div>
  );
}

export default App;