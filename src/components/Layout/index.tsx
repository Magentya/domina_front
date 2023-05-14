import { useNavigate } from 'react-router-dom';

import './Layout.scss';

export const Layout = ({ children }: { children: never }) => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <h1>Task</h1>
        {
          window.location.pathname === '/' &&
          <button onClick={
            () => navigate('/create')
          }>Crear</button>
        }

        {
          window.location.pathname === '/login' &&
          <button style={{ width: 200 }} onClick={
            () => navigate('/signup')
          }>Crear usuario</button>
        }

        {
          window.location.pathname === '/signup' &&
          <button style={{ width: 220 }} onClick={
              () => navigate('/login')
          }>Iniciar sesion</button>
        }

      </header>
        { children }
    </>
  );
};
