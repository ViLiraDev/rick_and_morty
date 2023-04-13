import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./detail.module.css";

const Detail = () => {
    const { detailId } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${detailId}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [detailId])

    return (
        <div className={styles.card}>
        <div className={styles.cardImage}>
            <img src={character?.image} alt={character.name} />
        </div>
        <div className={styles.cardInfo}>
            <h1>{character?.name}</h1>
            <p><span className={styles.cardInfoLabel}>Status:</span> {character?.status}</p>
            <p><span className={styles.cardInfoLabel}>Specie:</span> {character?.species}</p>
            <p><span className={styles.cardInfoLabel}>Gender:</span> {character?.gender}</p>
            <p><span className={styles.cardInfoLabel}>Origin:</span> {character?.origin?.name}</p>
        </div>
        </div>
    )
}

export default Detail;



