# ✅ Task Manager App

A responsive Task Manager application built with **React and Vite**. This application helps users organize their daily work by creating, editing, completing, deleting, searching, filtering, and sorting tasks.

## 🚀 Live Demo

[View Live Application](https://taskmanager-teal-omega.vercel.app?_vercel_share=yxtpaLLCj2jdaHVOsvDhhvhe55mIGF1G)

> Replace this URL with your actual Vercel deployment URL

## 📸 Features

- **Add Tasks:** Create tasks with a title, priority, and optional due date.
- **Edit Tasks:** Update task titles directly within the task card.
- **Delete Tasks:** Remove tasks with a confirmation dialog.
- **Complete Tasks:** Mark tasks as completed or active using checkboxes.
- **Task Filtering:** Filter tasks by All, Active, and Completed.
- **Search Tasks:** Search task titles with case-insensitive matching.
- **Task Sorting:** Sort tasks by due date or priority.
- **Priority Levels:** Categorize tasks as Low, Medium, or High.
- **Overdue Detection:** Automatically identify incomplete tasks past their due dates.
- **Responsive Design:** Optimized for desktop and mobile devices.
- **Initial Data Loading:** Load starter tasks from a local JSON file using the Fetch API.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend development |
| Vite | Development server and build tool |
| JavaScript (ES6+) | Application logic |
| HTML5 | Application structure |
| CSS3 | Styling and responsive design |
| React Hooks | State management |
| Fetch API | Loading initial task data |
| localStorage | Browser-based task data storage |

## 📂 Project Structure

```text
task-manager-react/
│
├── public/
│   └── tasks.json
│
├── src/
│   ├── compnents/
│   │   ├── Form.jsx
│   │   ├── Items.jsx
│   │   |── Lists.jsx
|   |   |── Header.jsx 
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## ⚙️ Getting Started

Follow these instructions to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/AbhishekBawane/Task-Manager-
```

### 2. Navigate to the project directory

```bash
cd task-manager-
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Visit the URL displayed in your terminal, usually:

```text
http://localhost:5173
```

## 📋 Task Data Structure

The application uses the following structure for tasks:

```json
{
  "id": 1,
  "title": "Complete React project",
  "priority": "High",
  "dueDate": "2027-03-12",
  "completed": false
}
```

**Task properties:**

- `id`: Unique identifier for each task.
- `title`: Name or description of the task.
- `priority`: Task priority (Low, Medium, High).
- `dueDate`: Optional deadline in YYYY-MM-DD format.
- `completed`: Boolean indicating whether the task is completed.

## 🔍 Application Logic

### Task Filtering

Users can view tasks based on three categories:

- All: Displays every task.
- Active: Displays incomplete tasks.
- Completed: Displays completed tasks.

### Search

The search functionality uses JavaScript string methods to find tasks by title, ignoring letter case.

### Sorting

Tasks can be sorted using:

- Due Date: Earliest deadlines appear first, and tasks without due dates appear last.
- Priority: High → Medium → Low.

## 🌐 Deployment

This application can be deployed using Vercel.

1. Push your project to GitHub.
2. Visit [Vercel](https://taskmanager-teal-omega.vercel.app?_vercel_share=yxtpaLLCj2jdaHVOsvDhhvhe55mIGF1G).
3. Import your GitHub repository.
4. Select Vite as the framework preset.
5. Configure the build command as `npm run build`.
6. Set the output directory to `dist`.
7. Click Deploy.

## 📌 Future Improvements

- Complete automatic localStorage persistence for every task update.
- Add task categories and tags.
- Implement task deadline reminders.
- Add dark mode.
- Improve keyboard accessibility.

## 👨‍💻 Author

**Abhishek Bawane**

- GitHub: [Your GitHub Profile](https://github.com/AbhishekBawane)

## 📄 License

This project is created for learning and internship assessment purposes. You are welcome to explore and modify it for educational use.
