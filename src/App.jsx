import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // If using React Router
import Header from './components/common/Header';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* Other components and routes */}
      </div>
    </Router>
  );
}

export default App;
