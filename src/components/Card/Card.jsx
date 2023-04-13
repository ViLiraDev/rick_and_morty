import styles from '../Card/card.module.css'
import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';


function Card({ id, name, species, gender, onClose, image, addFav, removeFav, myFavorites }) {
   const [isFav, setIsFav] = useState(false);
   const [currentPath, setCurrentPath] = useState(window.location.pathname);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(id);
      }
      else {
         setIsFav(true);
         addFav({ id, name, species, gender, image, onClose })
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const audioRef = useRef(null);
   function handleMouseEnter() {

      audioRef.current.currentTime = 0;
      audioRef.current.play();
   }

   useEffect(() => {
      setCurrentPath(window.location.pathname);
   }, [window.location.pathname]);

   return (
      <div className={styles.cardContainer} onMouseEnter={handleMouseEnter}>

         <div className={styles.card}>
            <div className={styles.btn}>
               <button className={styles.btnFav} onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
               {currentPath !== '/favorites' && (
               <button className={styles.btnDel} onClick={() => onClose(id)}>X</button>   
               )}
               
            </div>
            <Link to={`/detail/${id}`} style={{ textDecoration: 'none', color: '#227093' }}>
               <h2 className={styles.cardName}>{name}</h2>
            </Link>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <img src={image} alt={name} />
            <audio ref={audioRef}>
               <source src={process.env.PUBLIC_URL + '/burbuja.mp3'} type="audio/mpeg" />
            </audio>

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

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);
