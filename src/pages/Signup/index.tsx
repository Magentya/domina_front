import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../CreateTask/createTask.scss'
import { toast } from 'react-toastify';

export const Signup = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      // Send the values to the backend
      const { data } = await axios.post('http://localhost:3000/api/user/create', {
        username,
        mail,
        password,
      })

      if (data.status === 201) {
        navigate('/login')
      }
    } catch (error) {
      console.log(error);
      toast.error('Correo o usuario ya existente')
    }


  }

  return (
    <form className="create_task_form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Usuario</label>
        <input type="text" name="username" required id="username" onChange={(event) =>
          setUsername(event.target.value)
        } />
      </div>
      <div>
        <label htmlFor="mail">Correo</label>
        <input type="email" name="mail" required id="mail" onChange={(event) =>
          setMail(event.target.value)
        } />
      </div>
      <div>
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" required id="password" onChange={(event) =>
          setPassword(event.target.value)
        } />
      </div>
      <button type="submit" style={{
        height: '60px',
      }}>
        Iniciar sesión
      </button>
    </form>
    )
}
