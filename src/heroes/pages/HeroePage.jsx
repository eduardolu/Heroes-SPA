import { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroesById } from '../helpers';

export const HeroePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const heroe = useMemo(() => getHeroesById(id), [id]);

  const onBack = () => navigate(-1);

  if (!heroe) return <Navigate to='/marvel' />;

  return (
    <div className="container">
      <div className="hero-detail mt-5 animate__animated animate__fadeIn">
        <div className="row g-0">
          <div className="col-md-4 hero-img-container">
            <img src={`/assets/heroes/${id}.jpg`} alt={heroe.superhero} className="img-fluid" />
          </div>
          <div className="col-md-8 p-4">
            <h2 className="hero-detail-title">{heroe.superhero}</h2>
            <ul className="list-unstyled mt-4">
              <li className="mb-3"><strong>Alter ego:</strong> {heroe.alter_ego}</li>
              <li className="mb-3"><strong>Publisher:</strong> {heroe.publisher}</li>
              <li className="mb-3"><strong>First appearance:</strong> {heroe.first_appearance}</li>
            </ul>
            <h4 className="mt-4" style={{ color: 'var(--gold)' }}>Characters</h4>
            <p>{heroe.characters}</p>
            <button className="btn btn-primary mt-4" onClick={onBack}>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}