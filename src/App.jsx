import { Container } from "@mui/material"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Products from "./components/Products"

function App() {

  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <Hero />
        <Products />
      </Container>
    </>
  )
}

export default App
