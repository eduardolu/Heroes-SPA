import queryString from 'query-string'
import { HeroeCard } from '../components/HeroeCard'
import { useFrom } from '../../Hooks/useFrom'
import { useLocation, useNavigate } from 'react-router-dom'
import { getHeroesByName } from '../helpers/getHeroesByName'

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  const heroe = getHeroesByName(q);
  
  const { searchText, onInputChange, onResetForm } = useFrom({ searchText: q });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`?q=${searchText.toLowerCase().trim()}`);
    onResetForm();
  }

  return (
    <div className="container">
      <h1 className="page-title">SEARCH</h1>
      <div className="row">
        <div className="col-md-5">
          <div className="search-container">
            <form onSubmit={onSearchSubmit}>
              <input
                type="text"
                placeholder="Search a hero..."
                className="form-control search-input mb-3"
                name="searchText"
                autoComplete="off"
                value={searchText}
                onChange={onInputChange}
              />
              <button type="submit" className="search-btn w-100">
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-7">
          {q === '' ? (
            <div className="alert">
              <p className="alert-title">Search your hero</p>
            </div>
          ) : heroe.length === 0 ? (
            <div className="alert">
              <p className="alert-title">No hero found with "{q}"</p>
            </div>
          ) : (
            <div className="row rows-cols-1 g-3">
              {heroe.map(hero => (
                <HeroeCard key={hero.id} {...hero} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}