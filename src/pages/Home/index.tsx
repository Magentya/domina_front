import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './home.scss'
import { Task } from '../../components/Task';
import { ITask } from '../../types/task';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [data, setData] = useState([])

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/api/task/' + localStorage.getItem('user_id'), {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }).then((response) => {
      setData(response.data.data)
    }
    ).catch((error) => {
      console.log(error)
    }
    )
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/login')
    }
  }, [navigate])

  return (
    <section>
      {
        data &&
        data.map((task: ITask) => (
          <Task key={task.id} {...task} />
        ))
      }
      {
        data.length === 0 &&
        <h1>No hay tareas</h1>
      }
    </section>
  )
}
