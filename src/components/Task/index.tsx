import { RiDeleteBin7Line, RiEdit2Line } from "react-icons/ri"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

import { ITask } from "../../types/task"

export const Task = (props: ITask) => {

  const navigate = useNavigate();

  const deleteTask = async () => {
    const { data } = await axios.delete(`http://localhost:3001/api/task/${props.id}`, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
    if (data.status === 200) {
      navigate(0)
    }
  }

  return (
    <div>
      <button className="delete" onClick={deleteTask}><RiDeleteBin7Line /></button>
      <button className="update" onClick={() => navigate('/update', {
        state: {
          id: props.id,
          title: props.title,
          description: props.description
        }
      } )}><RiEdit2Line /></button>
      <h2>{ props.title }</h2>
      <p>{ props.description }</p>
    </div>
  )
}
