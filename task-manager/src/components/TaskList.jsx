import { useState, useEffect } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [completed, setCompleted] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=7')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const toggleComplete = (id) => {
    setCompleted((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  if (loading) return <p className="text-center text-gray-600">Loading tasks...</p>;
  if (error) return <p className="text-center text-red-500">Failed to load tasks.</p>;

  return (
    <div className="max-w-xl mx-auto bg-white p-6 shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Task Manager</h1>
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center px-4 py-2 rounded-md ${
              completed[task.id] ? 'bg-green-100 text-green-800 line-through' : 'bg-gray-100'
            }`}
          >
            <span>{task.title}</span>
            <button
              onClick={() => toggleComplete(task.id)}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
            >
              {completed[task.id] ? 'Undo' : 'Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
