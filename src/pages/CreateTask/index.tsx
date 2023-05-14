import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './createtask.scss'

export const CreateTask = () => {

  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submit')

    // Send the values to the backend
    const { data } = await axios.post('http://localhost:3001/api/task/create', {
      title,
      description,
      id: Number(localStorage.getItem('user_id'))
    }, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })

    if (data.status === 201) {
      navigate('/')
    }

  }

  return (
    <form className="create_task_form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Titulo</label>
        <input type="text" name="title" id="title" onChange={(event) =>
          setTitle(event.target.value)
        } />
      </div>
      <div>
        <label htmlFor="description">Descripción</label>
        <input type="text" name="description" id="description" onChange={(event) =>
          setDescription(event.target.value)
        } />
      </div>
      <button type="submit">
        Crear
      </button>
    </form>
    )
}
