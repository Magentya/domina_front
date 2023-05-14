import { useState } from 'react'
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

import '../CreateTask/createTask.scss'

export const UpdateTask = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Send the values to the backend
    const { data } = await axios.put('http://localhost:3001/api/task/'+location.state.id, {
      title: title || location.state.title,
      description: description || location.state.description,
    }, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })

    if (data.status === 200) {
      navigate('/')
    }

  }

  return (
    <form className="create_task_form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Titulo</label>
        <input type="text" name="title" id="title" placeholder={location.state.title} onChange={(event) =>
          setTitle(event.target.value)
        } />
      </div>
      <div>
        <label htmlFor="description">Descripción</label>
        <input type="text" name="description" placeholder={location.state.description} id="description" onChange={(event) =>
          setDescription(event.target.value)
        } />
      </div>
      <button type="submit">
        Actualizar
      </button>
    </form>
    )
}
