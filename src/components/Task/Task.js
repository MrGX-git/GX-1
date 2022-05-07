
import { useReducer } from "react"

import { AddTask } from "./AddTask"
import { TaskList } from "./TaskList"

// Reducer => newState // State
// actionTypes => excute reducer logic
// dispatch => triger action type => reducer => newState

const ACTION_TASK_CREATED = 'ACTION_TASK_CREATED'
const ACTION_TASK_UPDATED = 'ACTION_TASK_UPDATED'
const ACTION_TASK_REMOVED = 'ACTION_TASK_REMOVED'

function reducer( state, action ) {
  switch(action.type) {
    case ACTION_TASK_REMOVED:
      return state.filter((t) => t.id !== action.payload.taskId)

    case ACTION_TASK_CREATED:
      return [
        ...state, action.payload.task
      ]
    
    case ACTION_TASK_UPDATED:
      return state.map((t) => {
        if(t.id === action.payload.task.id) {
          return action.payload.task
        }else {
          return t
        }
      })

      default: 
        throw Error('unknown action: ', action.type)
  }
}

const initialState = [
    {id: 0, text: 'myPlan 1', done: false },
    {id: 1, text: 'myPlan 2', done: true }
]

export const Task =()=> {
    const [ tasks, dispatch ] = useReducer( reducer, initialState )

    // ACTION CREATOR
    const onTaskRemove =(taskId)=> {
        console.log("__TASK_ID__", taskId)
        dispatch({
            type: ACTION_TASK_REMOVED,
            payload: {
                taskId
            },
        })
    }
    const onTaskUpdate = (updatedTask) => {
      dispatch ({
        type: ACTION_TASK_UPDATED,
        payload: {
          task: updatedTask
        }
      })
    }

    const onTaskCreate =(newTask)=> {
      console.log(tasks)
      console.log('onTaskCreate', newTask)
      dispatch ({
        type: ACTION_TASK_CREATED,
        payload: {
          task: {
            ...newTask,
            id: tasks.length
          },
        },
      })
    }
    return (
      <div>
        <h2>My Plans</h2>
        <h4>Task Manaer</h4>
        <hr />
        <AddTask onTaskCreate={onTaskCreate} />
        <TaskList 
          tasks={tasks} 
          onTaskRemove={onTaskRemove} 
          onTaskUpdate={onTaskUpdate} 
        />
      </div>
    )
}