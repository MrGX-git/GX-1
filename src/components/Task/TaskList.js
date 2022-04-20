
import PropTypes from 'prop-types'
import { Button } from "../../atoms"

export const TaskList =({ tasks, onTaskRemove, onTaskUpdate }) => {
    return (
        <div className="row">
          <ul className="list-group p-2">
            {tasks.map((task) => {
                return (
                  <li 
                      className="list-group-item d-flex justify-content-between align-items-center" 
                      key={task.id}
                  >
                    <div>
                      <input type='checkbox' className="checkbox m-3" />
                      <span>{task.text}</span>
                    </div>
                    <div>
                      <Button className='btn btn-outline-secondary'>Edit</Button>
                      <Button 
                        className='btn btn-outline-danger m-2'
                        onClick={()=> onTaskRemove(task.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </li>
                )
            })}
          </ul>
        </div>
    )
}

TaskList.protoTypes = {
    tasks: PropTypes.array.isRequired,
    onTaskUpdate: PropTypes.func.isRequired,
    onTaskRemove: PropTypes.func.isRequired
}