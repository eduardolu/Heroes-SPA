import { Link } from 'react-router-dom'

export const HeroeCard = ({id,superhero,publisher,alter_ego,first_appearance,characters}) => {
    const heroeImgUrl = `/assets/heroes/${id}.jpg`
    return (
    <div className='col animate__animated animate__fadeIn'>
        <div className='card'>
            <img src={heroeImgUrl} className='card-img' alt={superhero} />
            <div className='card-body'>
                <h5 className='card-title'>{superhero}</h5>
                <p className='card-text'> {alter_ego} </p>
                {
                    (alter_ego !== characters) && <p className="card-text">{characters}</p>
                }
                <p className='card-text'>
                    <small>{first_appearance}</small>
                </p>
                <Link to={`/heroe/${id}`} className='card-link'>
                    Más información
                </Link>
            </div>
        </div>
    </div>
  )
}