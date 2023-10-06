import style from "./Card.module.css";
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions'
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card({ id, name, species, gender, origin, status, image, onClose, addFav, removeFav, myFavorites }) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {

      if (isFav) {

         setIsFav(false);
         removeFav(id);

      } else {


         setIsFav(true);

         addFav({ id, name, species, gender, image, origin, status })
      }
   }




   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });

      if (myFavorites.length === 0) {
         addFav({ id, name, species, gender, image, origin, status })
         setIsFav(true);
      }

   }, [myFavorites]);


   return (
      <div className={style.container}>

         {/* {

                  isFav 
                   ? (<button onClick={handleFavorite}>❤️</button>
                  ) : (
                     <button onClick={handleFavorite}>🤍</button>
                  )
                  
               } */}
         <div className={style.btnContainer}>

            <button className={style.btnFav} onClick={handleFavorite}>{isFav ? '❤️' : '💙'}</button>
            {onClose ? <button onClick={() => onClose(id)} className={style.closeButton}>X</button> : null}
         </div>
         <img className="person" src={image} alt='' />
         <div className={style.nameDiv}>
            <Link to={`/detail/${id}`}>
               <h3 className={style.name}>{name}</h3>
            </Link>
         </div>
         <div className={style.textoCard}>
            <h3 className={style.genderSpecie}>{species}</h3>
            <h3 className={style.genderSpecie}>{gender}</h3>
         </div>

      </div>

   );
}


const mapStateToProps = (state) => {


   return {

      myFavorites: state.myFavorites
   }

}

const mapDispatchToProps = (dispatch) => {

   return {

      addFav: (character) => { dispatch(addFav(character)) },

      removeFav: (id) => { dispatch(removeFav(id)) }
   }

}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
