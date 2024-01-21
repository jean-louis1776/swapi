import { Route, Routes } from "react-router-dom"
import { PageWrapper } from "./components/PageWrapper"
import CharacterPage from "./pages/CharacterPage"
import Home from "./pages/Home"

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/characters/:id" element={<PageWrapper />}>
        <Route index element={<CharacterPage />} />
      </Route>
    </Routes>
  )
}

export default App
