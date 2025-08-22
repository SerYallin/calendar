import React from 'react';
import { HomeUi } from './home-ui';
import { useLocation, useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/contact', {
      state: {
        background: location,
      },
    });
  };
  return <HomeUi requestClick={onClick} />;
};
