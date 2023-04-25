import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import  GradeAnalysis  from './components/AnalysedData';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gradeAnalysis" element={<GradeAnalysis />}/>

    </Routes>
    <Footer />
    </div>
  );
}

export default App;
