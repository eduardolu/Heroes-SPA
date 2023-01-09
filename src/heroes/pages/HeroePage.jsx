import { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroesById } from '../helpers';

export const HeroePage = () => {
  const { id } = useParams();
  
  const navigate = useNavigate();

  const heroe = useMemo(()=> getHeroesById(id),[id]) 
  
  const onBack = () => {
    navigate ( -1);
  }

  if (!heroe) { 
    return <Navigate to='/marvel' />;
  }

  return (
    <div className='row mt-5'>
      <div className="col-4 animate__animated animate__backInDown">
        <img src={`/assets/heroes/${id}.jpg`} alt={heroe.superhero} className='img-thumbnail'/>
      </div>
      <div className="col-8">
        <h3>{heroe.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter ego:</b> {heroe.alter_ego}</li>
          <li className='list-group-item'><b>Publisher:</b> {heroe.publisher}</li>
          <li className='list-group-item'><b>First appearance:</b> {heroe.first_appearance}</li>
        </ul>
        <h5 className='mt-5'>characters</h5>
        <p>{heroe.characters}</p>
      </div>
      <button 
        className='btn btn-outline-info'
        onClick={onBack}
      >Back</button>
    </div>
  )
}