// import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API; // Make sure this is defined in your .env file
  const [progress, setProgress] = useState(0);

  const pageSize = 6; // Set a default page size for consistency
  const country = 'in'; // Set a default country

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar color="#f11946" height={3} progress={progress} />

        <Routes>
          {/* Set Entertainment as default route */}
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                pageSize={pageSize}
                country={country}
                category="entertainment" // Default to entertainment
              />
            }
          />

          {/* Routes for each category */}
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                pageSize={pageSize}
                country={country}
                category="business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                pageSize={pageSize}
                country={country}
                category="entertainment"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                pageSize={pageSize}
                country={country}
                category="science"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                pageSize={pageSize}
                country={country}
                category="technology"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                pageSize={pageSize}
                country={country}
                category="health"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                pageSize={pageSize}
                country={country}
                category="sports"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
