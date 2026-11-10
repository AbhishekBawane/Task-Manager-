import { use, useEffect, useState } from 'react'
import './App.css'
import Lists from './compnents/Lists'
import Form from './compnents/Form'

const Storage_key = "task-manager-tasks"

function App() {
  const [tasks, setTasks] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [retryCount, setRetryCount] = useState(0)
  const [isFormOpen, setIsFormOpen] = useState(false)


  useEffect(()=>{
    const controller = new AbortController()

    const loadTask = async()=>{
      try{
        setLoading(true)
        setError("");

        let initialTasks = null

        const savedTasks = localStorage.getItem(Storage_key)

        if(savedTasks !== null){
          try {
            const parsedTasks = JSON.parse(savedTasks)

            if(Array.isArray(parsedTasks)){
              initialTasks= parsedTasks
            }
          }catch{
             localStorage.removeItem(Storage_key)
          }
        }

        if(initialTasks==null){
          const response = await fetch("/tasks.json", {signal: controller.signal})

          initialTasks = await response.json()
        }

        if(!controller.signal.aborted){
          setTasks(initialTasks)

        }
      }catch(err){
        if(err.name !== "AbortError"){
          setError(err.message || "Something went wrong")
        }
      }finally{
        if(!controller.signal.aborted){
          setLoading(false)
        }
      }
    }

    loadTask()

    return()=>controller.abort()
  }, [retryCount])

  const remainingTask = tasks? tasks.filter((task)=>!task.completed).length:0

  const handleRetry = () =>{
    setRetryCount((prev)=>prev+1)
  }

  if (loading){
    return(
      <div className="status-container">
        <div className='loading'></div>
        <p>Loading Your Tasks-----</p>
      </div>
    )
  }
  
  const handleAddTask = (newTask)=>{
    setTasks((prevTask) => [...prevTask, newTask])
    setIsFormOpen(false)
  }

  const  handleToggleTaksk = (taskId)=>{
    setTasks((prevTasks)=> prevTasks.map((task)=>task.id ===taskId?{...task, completed:!task.completed}: task))
  }

  const handleupdateTask =(taskId, newTitle)=>{
    setTasks((prevTasks)=> prevTasks.map((task)=>task.id === taskId? {...task, title: newTitle}:task)) 
  }

  const handleDeleteTask =(taskId)=>{
    setTasks((prevTasks)=>prevTasks.filter((task)=>task.id !== taskId))
  }
  
  if(error){
    return(
      <div className='status-container'>
        <h2>Oops! Something Went wrong.</h2>
        <p>{error}</p>
        <button onClick={handleRetry}>Try Again</button>
      </div>
    )
  }

  return (
      <section className='app-container' id="center">
        <header className='app-header'>
          <div>
            <p>Your WorkSpace</p>
            <h1>Task Manager</h1>
            <p>Organize Your Work</p>
          </div>

          <div>
            <span>{remainingTask}</span>
            <small>Tasks left</small>
          </div>
        </header>
        
        <Lists tasks={tasks} onToggle={handleToggleTaksk} onUpdate={handleupdateTask} onDelete={handleDeleteTask}/>
        
        <button className="add-task" onClick={()=>setIsFormOpen(!isFormOpen)}>+</button>

        {isFormOpen && (
          <div className='modal-overlay'>
            <div className="task-modal" role="dialog" aria-modal="true" aria-label="add-task-title"
                 onClick={(e)=>e.stopPropagation()}>
                 <button className='modal-close' onClick={()=>setIsFormOpen(!isFormOpen)}>&times</button>   
                 <h2 id="add-task-title">Add new Task</h2>
                 <p className='modal-subtitle'>Add new task to your Workspace.</p>
                 <Form onAddTask={handleAddTask}/>  
            </div>
          </div>
        )}
        
      </section>
  )
}

export default App
