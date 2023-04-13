import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from '../src/components/Nav/Nav.jsx'
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Routes ,Route, useLocation, useNavigate} from 'react-router-dom'
import About from './components/About/about';
import Detail from './components/Detail/detail';
import Form from './components/Form/Form';
import Favorites from "./components/Favorites/Favorites";


function App() {

   const [characters,setCharacters] = useState([]);
   const location = useLocation();
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   
   const username = "probandoo@gmail.com";
   const password = "prueba123";

   const login = (userData) => {
      if(userData.username === username && userData.password === password){
         setAccess(true);
         navigate("/home");
      }

   }
   useEffect(() => {
      !access && navigate('/')
   },[access])


   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
         let exist = characters.find((ch)=> ch.id===data.id)
         if(exist){
            alert("Ya existe");
         } else {

            setCharacters((oldChars) => [...oldChars, data]);
         }
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== Number(id))
      setCharacters(charactersFiltered)
   }

   return (
      <div className='App'>
         {location.pathname === '/' ? <Form login={login}/> : <Nav onSearch={onSearch} setAccess={setAccess}/>}
         <Routes>
            <Route path='home' element={<Cards onClose={onClose} characters={characters} />} />
            <Route path='about' element={<About/>} />
            <Route path='detail/:detailId' element={<Detail/>} />
            <Route path='/favorites' element={<Favorites/>} />
         </Routes>
      </div>
   );
}

export default App;
