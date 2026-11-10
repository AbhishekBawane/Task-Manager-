import { useState } from "react";


function Items({task, onToggle, onDelete, onUpdate}){
    const [isEditing, setIsEditing] = useState(false)
    const [editTitle, setEditTitle] = useState(task.title)
    const [editError, setEditError] = useState("")

    const today = new Date()

    const todayString = [
        today.getFullYear(),
        String(today.getMonth()+1).padStart(2,"0"),
        String(today.getDate()).padStart(2,"0")
    ].join("-")

    const isOverdue = !task.completed && task.dueDate && task.dueDate < todayString

    const handleEdit = () =>{
        setEditTitle(task.title)
        setIsEditing(true)
        setEditError("")
    }


    const handleSave = () =>{
        const trimedTitle = editTitle.trim()

        if(!trimedTitle){
            setEditError("Task Title cannot be empty")
            return
        }
        onUpdate(task.id, trimedTitle)
        setIsEditing(false)
        setEditError("")
    }

    const handleCancel = () =>{
        setEditTitle(task.title)
        setIsEditing(false)
        setEditError("")
    }

    const handleKeyDown = (e) =>{
        if(e.key === "Enter"){
            e.preventDefault()
            handleSave()
        }
        
        if(e.key === "Escape"){
            handleCancel()
        }
    }

    const handleDelete = () =>{
        const confirmed = window.confirm(
            `Are you sure you want to delete "${task.title}"?`
        )

        if(confirmed){
            onDelete(task.id)
        }
    }

    return(
        <article className="task-card">
            <input type="checkbox" checked={task.completed} onChange={()=>onToggle(task.id)}
                    aria-label = {`Mark ${task.title} as complete`}/>
            
            <div className="task-info">
                {isEditing ? (
                <div className="edit-container">
                    <input type="text" className="edit-input" value={editTitle}
                            onChange={(e)=>{setEditTitle(e.target.value); setEditError("")}} 
                            onKeyDown={handleKeyDown}/>
                    <div className="edit-actions">
                        <button className="save-btn" type="button" onClick={handleSave}>Save</button>
                        <button className="cancel-btn" type="button" onClick={handleCancel}>Cancel</button>
                    </div>
                    {editError && (
                        <p className="form-error">{editError}</p>
                    )}
                </div>
                ):(
                    <>
                    <h3 className={task.completed? "completed":""}>{task.title}</h3>
                    <div className="task-meta">
                        <p>Due Date:{task.dueDate || "No due Date"}</p>
                        {isOverdue && (
                            <span className="overdue-label">OverDue</span>
                        )}
                    </div>
                    </>
                )}
            </div>

            <span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span>
            {!isEditing && (
                <div className="task-actions">
                    <button type="button" className="edit-btn" onClick={handleEdit}
                            aria-label={`Edit ${task.title}`}>Edit</button>
                    <button type="button" className="delete-btn" onClick={handleDelete}
                            aria-label={`Delete ${task.title}`} >Delete</button>
                </div>
            )}
        </article>
    )
}


export default Items