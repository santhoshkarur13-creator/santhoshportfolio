import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import BackgroundAnimation from './components/BackgroundAnimation';

export default function App() {
    return (
        <BrowserRouter>
            <BackgroundAnimation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project/:id" element={<ProjectDetails />} />
            </Routes>
        </BrowserRouter>
    )
}