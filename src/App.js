import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Appbar from "./components/Appbar";
import Cards from "./pages/Cards";
import About from './pages/About'
import Gallery from "./pages/Gallery";
import Enterimag from './pages/Enterimag';
import Users from "./pages/Users";
import TodoApp from "./pages/TodoApp";
import EditTodo from "./pages/EditTodo";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Appbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/card" element={<Cards/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Gallery" element={<Gallery/>} />
          <Route path="/Image/:id" element={<Enterimag/>} />
          <Route path="/Users" element={<Users/>}/>
          <Route path="/TodoApp" element={<TodoApp/>}/>
          <Route path="/EditTodo/:index" element={<EditTodo/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
