import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./assets/Dashboard/Dashboard";
import News from "./assets/News/news";

function App() {
  

  return (
    <>
        <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
