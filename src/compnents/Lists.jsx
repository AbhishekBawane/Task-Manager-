import { useState } from "react"
import Items from "./Items"

function Lists({tasks, onToggle, onUpdate, onDelete}){
    const [filter, setFilter] = useState("All")
    const [search, setSearch] = useState("")
    const [sortBy, setSortBy] = useState("dueDate")

    const filteredTasks = tasks.filter((task)=>{
        if(filter ==="Active" && task.completed){
            return false
        }
        
        if(filter === "Completed" && !task.completed){
            return false
        }

        const matchesSearch = task.title.toLowerCase().includes(search.trim().toLowerCase());
        
return matchesSearch
    }) 

    const sortedTasks = [...filteredTasks].sort((a, b) =>{
        if(sortBy === 'dueDate'){
            if(!a.dueDate && !b.dueDate) return 0
            if(!a.dueDate) return 1
            if(!b.dueDate)return -1
            
            return a.dueDate.localeCompare(b.dueDate)
        }

        if(sortBy === "priority"){
            const priorityOrder = {
                High:1,
                Medium:2,
                Low:3
            }
            return priorityOrder[a.priority]
        }

        return 0
    })
    const allCount = tasks.length
    const activeCount = tasks.filter((task)=>task.completed).length
    const completeCount = tasks.filter((task)=>task.completed).length

    return(
        <section className="task-section">
            <div className="task-toolbar">
                <div className="filter-tabs">
                    <button type="button" className={filter === "All"? "filter-btn active": "filter-btn"}
                            onClick={()=>setFilter("All")}>All ({allCount})
                    </button>
                    <button type="button" className={filter==="Active"?"filter-btn active": "filter-btn"}
                            onClick={()=>setFilter("Active")}>Active({activeCount})
                    </button>
                    <button type="button" className={filter === "Completed"?"filter-btn active": "filter-btn"}
                            onClick={()=>setFilter("Completed")}>Completed({completeCount})
                    </button>
                </div>

                <div className="task-controls">
                    <input type="search" className="task-search" placeholder="Seacrch Tasks...." value={search}
                           onChange={(e)=>setSearch(e.target.value)} aria-label="Search task by title"/>
                    <section className="sort-select" value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
                        <option value="dueDate" >Sort By DueDate</option>
                        <option value="priority">Sort By Priority</option>
                    </section>
                </div>
            </div>

            <div className="task-list">
                {sortedTasks.length > 0 ? (
                    sortedTasks.map((task)=>(
                        <Items key={task.id} task={task} onToggle={onToggle} onUpdate={onUpdate} onDelete={onDelete}/>
                    ))
                ):(
                    <div className="empty-state">
                        <h3>No Tasks foumd</h3>
                        <p>
                            {search ?"Try Searching with a different title.":"There are no tasks in this category."}
                        </p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Lists