import { Route, Routes } from 'react-router-dom';
import './App.css';
import TreeStoryPage from './pages/TreeStoryPage/TreeStoryPage';
import Home from './pages/Home/Home';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/TreeStory" element={<TreeStoryPage />} />
        </Routes>
    );
}

export default App;
