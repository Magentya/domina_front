import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import '../CreateTask/createTask.scss'

export const Auth = () => {

  const navigate = useNavigate();

  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      // Send the values to the backend
      const { data } = await axios.post('http://localhost:3000/api/auth/login', {
        mail,
        password,
      })

      if (data.status === 200) {
        localStorage.setItem('token', data.data.access_token)
        localStorage.setItem('user_id', data.data.user.id)
        navigate('/')
      }
    } catch (error) {
      toast.error('Usuario o contraseña incorrectos')
    }


  }


  return (
    <form className="create_task_form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="mail">Correo</label>
        <input type="text" name="mail" required id="mail" onChange={(event) =>
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
