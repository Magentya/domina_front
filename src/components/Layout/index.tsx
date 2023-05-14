import { useNavigate } from 'react-router-dom';

import './Layout.scss';

export const Layout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <h1>Task</h1>
        {
          window.location.pathname !== '/login' &&
          <button onClick={
            () => navigate('/create')
          }>Crear</button>
        }

      </header>
        { children }
    </>
  );
};
