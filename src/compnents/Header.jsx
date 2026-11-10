export default function Header(){
    return(<header className="app-header">
        <div>
          <p className="eyebrow">YOUR WORKSPACE</p>
          <h1>Task Manager</h1>
          <p className="subtitle">
            Organize your work and get things done.
          </p>
        </div>

        <div className="task-counter">
          <span>{remainingTasks}</span>
          <small>Tasks left</small>
        </div>
      </header>)
}