import Card from '../Card/Card';
import { CardsContainer } from "./styledComponents";
import { getFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useEffect } from 'react';


export function Cards({ characters, onClose, getFav }) {


   useEffect(() => {

      getFav()

   }, [])


   return (

      <CardsContainer>

         {

            characters.map(({ id, name, status, species, gender, origin, image }) => {

               return (

                  <Card
                     key={id}
                     id={id}
                     name={name}
                     status={status}
                     species={species}
                     gender={gender}
                     origin={origin.name}
                     image={image}
                     onClose={onClose}

                  />


               )

            })
         }
      </CardsContainer>
   );
}


const mapDispatchToProps = dispatch => {

   return {

      getFav: () => dispatch(getFav())
   }
}

export default connect(null, mapDispatchToProps)(Cards);
