import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import FragmentsList from "./components/FragmentsList/FragmentsList";
import Fragment from "./components/Fragment/Fragment";
// import Resume from "./components/Resume/Resume";
// import Contact from "./components/Contact/Contact";
// import ArcsList from "./components/ArcsList/ArcsList";
// import Timeline from "./components/Timeline/Timeline";
// import Heroes from "./components/Heroes/Heroes";
// import Shop from "./components/Shop/Shop";
// import Profil from "./components/Profil/Profil";
// import Register from "./components/Register/Register";
// import Login from "./components/Login/Login";
// import Admin from "./components/Admin/Admin";
// import AdminFragEdit from "./components/AdminFragEdit/AdminFragEdit";

import './styles/App.css';

function App() {
  return (
    <div className='bg-img' >
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/profile/:id" element={<Profil />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/contact" element={<Contact />} /> */}
        <Route exact path="/fragments" element={<FragmentsList />} />
        {/* <Route exact path="/arcs" element={<ArcsList />} />
        <Route exact path="/timeline" element={<Timeline />} />
        <Route exact path="/heroes" element={<Heroes />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/profil/:id" element={<Profil />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/fragment/edit/:id" element={<AdminFragEdit />} /> */}
        <Route exact path="/fragment/:id" element={<Fragment />} />
      </Routes>        
    </div>
  )
}

export default App;
