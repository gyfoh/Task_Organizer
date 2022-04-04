import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Tasks from './components/pages/Tasks'
import Contact from './components/pages/Contact'
import EditTask from './components/pages/EditTask'
import NewTask from './components/pages/NewTask'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/tasks" element={<Tasks/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/edittask" element={<EditTask/>}></Route>
          <Route path="/newtask" element={<NewTask/>}></Route>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
