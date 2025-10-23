import React, { memo } from "react";
import { useTaskContext } from "../context/TaskContext";

const TaskForm = memo(() => {
  const {
    state,
    dispatch,
    addTask,
    filter,
    setFilter,
    statusFilter,
    setStatusFilter,
  } = useTaskContext();

  console.log("TaskForm rendered");

  return (
    <div className="bg-white shadow-md rounded-xl p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add New Task</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        <input
          type="text"
          placeholder="Task Name"
          value={state.form.name}
          onChange={(e) =>
            dispatch({
              type: "SET_FORM_FIELD",
              field: "name",
              value: e.target.value,
            })
          }
          className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Priority (low, medium, high)"
          value={state.form.priority}
          onChange={(e) =>
            dispatch({
              type: "SET_FORM_FIELD",
              field: "priority",
              value: e.target.value,
            })
          }
          className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="date"
          value={state.form.dueDate}
          onChange={(e) =>
            dispatch({
              type: "SET_FORM_FIELD",
              field: "dueDate",
              value: e.target.value,
            })
          }
          className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Description"
          value={state.form.description}
          onChange={(e) =>
            dispatch({
              type: "SET_FORM_FIELD",
              field: "description",
              value: e.target.value,
            })
          }
          className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 sm:col-span-2 md:col-span-3"
        />
      </div>

      {/* Filters Section */}
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <div>
          <label className="text-sm text-gray-600 mr-2">Priority:</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div>
          <label className="text-sm text-gray-600 mr-2">Status:</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="notcompleted">Not Completed</option>
          </select>
        </div>
      </div>

      <button
        onClick={() => addTask()}
        className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition font-medium"
      >
        Add Task
      </button>
    </div>
  );
});

export default TaskForm;
