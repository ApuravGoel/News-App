import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

function App() {
  const [progress,setProgress] = useState(0);
  const appStyle = {
    display: "flex",
    minHeight: "100vh",
    background: "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)",
    flexDirection: "column"
  }
  const country = 'in'
  return (
    <BrowserRouter>
      <div style={appStyle}>
        <LoadingBar
          color='#F2CD5C'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
          height="5px"
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<News setProgress = {setProgress} key="general" country={country} category="general" />} />
          <Route path="/entertainment" element={<News setProgress = {setProgress} key="entertainment" country={country} category="entertainment" />} />
          <Route path="/health" element={<News setProgress = {setProgress} key="health" country={country} category="health" />} />
          <Route path="/science" element={<News setProgress = {setProgress} key="science" country={country} category="science" />} />
          <Route path="/sports" element={<News setProgress = {setProgress} key="sports" country={country} category="sports" />} />
          <Route path="/technology" element={<News setProgress = {setProgress} key="technology" country={country} category="technology" />} />
          <Route path="/business" element={<News setProgress = {setProgress} key="business" country={country} category="business" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
