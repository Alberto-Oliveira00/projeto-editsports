import React from 'react';
import '../styles/ClientCard.css';

interface ClientCardProps {
  name: string;
  image: string;
}

const ClientCard: React.FC<ClientCardProps> = ({ name, image }) => {
  return (
    <div className="client-card">
      <img src={image} alt={name} className="client-image" />
      <div className="client-content">
        <h3 className="client-name">{name}</h3>
      </div>
    </div>
  );
};

export default ClientCard;