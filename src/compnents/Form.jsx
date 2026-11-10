import  { useState} from "react"

function Form({onAddTask}){
    const [title, setTitle] = useState("")
    const [priority, setPriority] = useState("Medium")
    const [dueDate, setDueDate] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();

        const trimedTitle = title.trim()

        if(!trimedTitle){
            setError("Task title is required.")
            return
        }

        const newTask = {
            id: Date.now(),
            title: trimedTitle,
            priority: priority,
            dueDate: dueDate || null,
            completed: false
        }

        onAddTask(newTask)

        setTitle("")
        setPriority("Medium")
        setDueDate("")
        setError("")
    }

    return(
        <form className="task-form" onSubmit={handleSubmit}>
            <div className="form-box">
            <div className="form-group">
                <label htmlFor="task-title">Task Title</label>
                <input id="task-title" type="text" 
                  placeholder="What needs to be done?" value={title} 
                  onChange={(e)=>{setTitle(e.target.value); setError("");}}/>
                
                {error && <p className="form-error">{error}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="task-priority">Task Priority</label>
                <select id="task-priority" value={priority} onChange={(e)=>setPriority(e.target.value)}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="task-date">Due Date</label>
                <input id="task0date" type="date" value={dueDate} onChange={(e)=>setDueDate(e.target.value)}/>
            </div>
            <button className="add-task-btn" type="submit">+ Add Task</button>
            </div>
        </form>
    )
}

export default Form