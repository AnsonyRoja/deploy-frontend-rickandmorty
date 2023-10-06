import Card from '../Card/Card.jsx';
import { connect, useDispatch } from 'react-redux';
import { filterCards, orderCards } from '../../redux/actions.js';
import { useState } from 'react';
import styles from './Favorite.module.css';
import { getFav } from '../../redux/actions.js';


const Favorites = ({ myFavorites, getFav }) => {
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    const handleOrder = (event) => {

        dispatch(orderCards(event.target.value));
        setAux(true);
        getFav();

    }

    const handleFilter = (event) => {

        dispatch(filterCards(event.target.value))
        getFav();

    }
    return (

        <div className={styles.contenedor}>
            <div className={styles.favorite}>
                <select className={styles.selector} onChange={handleOrder}>

                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>

                </select>


                <select className={styles.selectorFilter} onChange={handleFilter}>

                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                    <option value="allCharacters">All Characters</option>
                </select>
            </div>

            <div className={styles.containerCards}>

                {
                    myFavorites?.map(fav => {

                        return (
                            <div className={styles.cards}>

                                <Card
                                    key={fav.id}
                                    id={fav.id}
                                    name={fav.name}
                                    species={fav.species}
                                    gender={fav.gender}
                                    image={fav.image}

                                />

                            </div>
                        )

                    })
                }
            </div>
        </div>

    )

}

const mapStateToProps = (state) => {

    return {

        myFavorites: state.myFavorites,
    }

}

const mapDispatchToProps = (dispatch) => {

    return {

        getFav: () => dispatch(getFav())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

