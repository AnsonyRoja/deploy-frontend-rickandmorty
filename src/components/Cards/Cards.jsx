import Card from '../Card/Card';
import { CardsContainer } from "./styledComponents";
import { useEffect } from 'react';
import { getFav } from '../../redux/actions';
import { connect } from 'react-redux';
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


export default connect(null, { getFav })(Cards);