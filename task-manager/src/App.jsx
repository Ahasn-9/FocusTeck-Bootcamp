import { Routes, Route, Link } from 'react-router-dom';
import TaskList from './components/TaskList';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <nav className="flex gap-4 mb-6 text-blue-600 font-semibold">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
