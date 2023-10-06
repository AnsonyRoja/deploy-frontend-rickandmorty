import './App.css';
import Cards from './components/Cards/Cards.jsx';
import TextoRickM from './components/banner/TextoRickAndMorty.jsx';
import Nav from './components/nav/Nav.jsx'
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Favorites from './components/Favorites/Favorites';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Form from './components/Form/Form';
import { useDispatch } from 'react-redux';
import { removeFav } from './redux/actions';



function App() {
   const dispatch = useDispatch();
   const [access, setAccess] = useState(false);
   const location = useLocation();
   const [characters, setCharacters] = useState([]);
   const navigate = useNavigate();
   const URL = 'https://servidor-rickandmorty-pwak.onrender.com/rickandmorty/login/';
   // const onSearch = ()=>{
   //      setCharacters([...characters, example])
   // }
   // .then(({ data }) => {

   const onSearchByname = async (name) => {


      try {

         const { data } = await axios(`https://servidor-rickandmorty-pwak.onrender.com/rickandmorty/character/name/${name}`);



         setCharacters(data.results);




      } catch (error) {

         alert('Character Not exist')

      }


   }
   const onSearch = async (id) => {

      try {


         const { data } = await axios(`https://servidor-rickandmorty-pwak.onrender.com/rickandmorty/character/${id}`)


         const characterRepeat = characters?.find((char) => char.id === data.id);

         if (characterRepeat) {

            alert('Already in the list!')
         }

         else if (data.id !== undefined) {
            setCharacters((oldChars) => [...oldChars, data]);
         }



      } catch (error) {

         alert('Character Not exist')

      }


   }


   const login = async (userData) => {


      try {


         const { email, password } = userData;
         const { data } = await axios(URL + `?email=${email}&password=${password}`)

         const { access } = data;

         setAccess(access);

         localStorage.setItem('accessToken', access);

         access && navigate('/home');



      } catch (error) {

         console.log(error.message);

      }


   }


   useEffect(() => {
      const storedAccessToken = localStorage.getItem('accessToken');

      if (storedAccessToken) {
         setAccess(storedAccessToken);
      } else {
         !access && navigate('/');
      }

   }, [access, navigate])

   const onClose = (id) => {

      const charactersFiltered = characters?.filter(character => character.id !== Number(id));
      setCharacters(charactersFiltered);
      dispatch(removeFav(id));

   }

   return (
      <div className='App'>

         {location.pathname === '/' ? <div className='fondo'>

            {location.pathname === '/' ? <TextoRickM /> : null}
            <Routes>
               <Route path='/' element={<Form login={login} />} />
            </Routes>
         </div> : null}

         {
            // location.pathname !== '/' ? <Nav onSearch={onSearch}/> : null
            location.pathname !== '/' && <Nav onSearch={onSearch} onSearchByname={onSearchByname} access={access} setAccess={setAccess} />
         }


         <Routes>
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/Detail/:id' element={<Detail />} />

         </Routes>




      </div>
   );
}

export default App;
