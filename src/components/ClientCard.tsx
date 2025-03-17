import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/ClientCard.css'; 

const clients = [
  {
    image: '/assets/img/clientes/cliente16.jpg',
  },
  {
    image: '/assets/img/clientes/cliente5.jpg',
  },
  {
    image: '/assets/img/clientes/cliente10.jpg',
  },
  {
    image: '/assets/img/clientes/clientes8.jpg',
  },
  {
    image: '/assets/img/clientes/cliente19.jpg',
  },
  {
    image: '/assets/img/clientes/cliente13.jpg',
  },
  {
    image: '/assets/img/clientes/cliente14.jpg',
  },
  {
    image: '/assets/img/clientes/cliente15.jpg',
  },
  {
    image: '/assets/img/clientes/cliente17.jpg',
  },
  {
    image: '/assets/img/clientes/clientes7.jpg',
  },
  {
    image: '/assets/img/fardamento.jpg',
  },
  {
    image: '/assets/img/clientes/clientes3.jpg',
  }
];

const ClientCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === clients.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? clients.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = -2; i <= 2; i++) {
      let index = currentIndex + i;
      if (index < 0) index = clients.length + index;
      if (index >= clients.length) index = index - clients.length;
      visibleImages.push({ index, image: clients[index] });
    }
    return visibleImages;
  };

  return (
    <section id="clientes" className="section">
      <div className="container">
        <h2 className="section-title section-title__cliente">Nossos Clientes</h2>
        <div className='container-clientes'>
          <img src="../assets/img/clientes/clientes2.png" alt="Principais clientes" />
        </div>
        
        <div className="carousel-container">
          <div className="carousel-wrapper">
            <div className="carousel-content">
              {getVisibleImages().map(({ index, image }, i) => (
                <div
                  key={index}
                  className="slide"
                  style={{
                    transform: `translateX(${(i - 2) * 400}px) scale(${i === 2 ? 1 : 0.8})`,
                    opacity: i === 2 ? 1 : 0.5,
                    zIndex: i === 2 ? 10 : 5,
                  }}
                >
                  <img src={image.image} alt={`Slide ${index}`} />
                </div>
              ))}
            </div>
            <button onClick={prevSlide} className="nav-button prev-button">
              <ChevronLeft />
            </button>
            <button onClick={nextSlide} className="nav-button next-button">
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientCard;
