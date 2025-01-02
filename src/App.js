import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import MovieDetailsPage from "./Features/MovieDetailsPage";
import MoviesPage from "./Features/MoviesPage";
import PeopleDetailPage from "./Features/PeopleDetailsPage";
import PeoplePage from "./Features/PeoplePage";
import { Navigation } from "./Features/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/people/:id" element={<PeopleDetailPage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="*" element={<Navigate to="/movies" />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
