import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import ElHvit from './pages/ElHvit';
import Kjøretøy from './pages/Kjøretøy';
import Klær from './pages/Klær';
import Møbler from './pages/Møbler';
import Planter from './pages/Planter';
import Hjem from './pages/Hjem';

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Hjem />} />
      <Route path="/elektronikk-og-hvitevarer" element={<ElHvit />} />
      <Route path="/kjoretoy" element={<Kjøretøy />} />
      <Route path="/klaer-og-tilbehor" element={<Klær />} />
      <Route path="/planter" element={<Planter />} />
      <Route path="/mobler" element={<Møbler />} />
    </Routes>
  );
}

export default App;
