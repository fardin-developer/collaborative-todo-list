import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Todo from './Todo';
import Login from './Login';
import SignUp from './SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
