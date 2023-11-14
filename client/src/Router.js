import { Routes, Route } from 'react-router-dom';
import { App } from './App';
import { TVShows } from './components';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/tvshows" element={<TVShows />} />
        </Routes>
    );
}

export default Router;