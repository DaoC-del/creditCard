import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RoomProvider } from './context/RoomContext';
import { routes } from './types/routes';

const App: React.FC = () => {
  return (
    <Router>
      <RoomProvider>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </RoomProvider>
    </Router>
  );
};

export default App;
