import Card from '../Card/Card';
import { CardsContainer } from "./styledComponents";
import { useEffect } from 'react';
import { getFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

export function Cards({ characters, onClose, getFav, access }) {
   const location = useLocation();
   const navigate = useNavigate();
   useEffect(() => {

      getFav()



   }, [])

   useEffect(() => {

      if (location.pathname === '/' && access === true) {

         navigate('/home')

      }

   }, [access, location.pathname])


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