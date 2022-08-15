import Links from './admin/links/Links'
import Appearance from './admin/appearance/Appearance'
import Settings from './admin/settings/Settings'
import Analytics from './admin/analytics/Analytics'
import Home from './Home'
import User from './User'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/admin" element={<Links />} />
      <Route path="/admin/appearance" element={<Appearance />} />
      <Route path="/admin/settings" element={<Settings />} />
      <Route path="/admin/analytics"element={<Analytics />} />
      <Route path=":id" element={<User />} />
    </Routes>
  );
}

export default App;