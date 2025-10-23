# 🧩 Task Manager App (React + Context + useReducer)

A simple yet powerful **Task Management** application built using **React**, **Context API**, and **useReducer**.  
This project demonstrates clean state management, component optimization, and UI structuring using reusable components.

---

## 🚀 Features

✅ Add new tasks with name, priority, due date, and description  
✅ Edit existing tasks  
✅ Delete tasks  
✅ Mark tasks as completed / not completed  
✅ Filter tasks by:
   - Priority (Low / High)
   - Status (Completed / Not Completed)
✅ State management using **useReducer + Context API**  
✅ Optimized rendering with **React.memo** and **useCallback**

---

## 🧠 Tech Stack

| Technology | Purpose |
|-------------|----------|
| React | UI development |
| Context API | Global state management |
| useReducer | State logic handling |
| useCallback / memo | Performance optimization |
| TypeScript | Type safety |
| CSS / Tailwind (optional) | Styling |

---

## 🧱 Folder Structure

src/
┣ 📁 components/
┃ ┣ TaskForm.tsx
┃ ┣ TaskItem.tsx
┃ ┣ TaskList.tsx
┣ 📁 context/
┃ ┗ TaskContext.js
┣ 📁 reducer/
┃ ┗ taskReducer.js
┣ App.tsx
┣ index.tsx

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/bdd48256-bf88-42d4-a649-90b03b5ff415" />


---

## ⚙️ How to Run Locally

### 1️⃣ Clone the repository
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/task-manager-react.git
2️⃣ Navigate into the project folder
bash
Copy code
cd task-manager-react
3️⃣ Install dependencies
bash
Copy code
npm install
4️⃣ Start the development server
bash
Copy code
npm run dev
The app will start at http://localhost:5173/ (Vite default).

🖼️ Screenshots
(Add screenshots of your app UI here, e.g. task list, edit form, filters, etc.)

diff
Copy code
📸 Example:
- Task Form view
- Task List view
- Editing a task
- Filtering tasks
🧩 Key Concepts Used
React Context → Avoided prop drilling

useReducer → Centralized logic for actions (add, edit, delete, filter)

Custom Hook (useTaskContext) → Clean access to context

React.memo + useCallback → Prevented unnecessary re-renders

💡 What I Learned
How to combine useReducer with Context API

Managing complex state in a scalable way

Optimizing React components for performance

Structuring React apps professionally

# Harshita Epuri

💼 [LinkedIn](https://www.linkedin.com/in/harshithaepuri/) | 🌐 [Portfolio](https://portfolio-79ft.vercel.app/) | 💻 [GitHub](https://github.com/Harshithaepuri)

Live Demo

🌐 View Live on Vercel

⭐️ Support
If you like this project, please consider starring ⭐ the repository on GitHub to support development and learning!

yaml

Would you like me to also:
✅ Write a **short Git commit + push guide** (so you can easily upload it to GitHub step by step)?  
I can make it simple like “copy–paste these 5 commands” and you’re done.




