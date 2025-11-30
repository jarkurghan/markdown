import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import EditorPage from './pages/EditorPage';
import WhatIsMarkdownPage from './pages/WhatIsMarkdownPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/app" replace />} />
      <Route path="/app" element={<Layout />}>
        <Route index element={<EditorPage />} />
        <Route path="what-is-markdown" element={<WhatIsMarkdownPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}

export default App;