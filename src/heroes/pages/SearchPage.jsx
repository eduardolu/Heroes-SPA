import queryString from 'query-string'
import { HeroeCard } from '../components/HeroeCard'
import {useFrom} from '../../Hooks/useFrom'
import { useLocation, useNavigate } from 'react-router-dom'
import { getHeroesByName } from '../helpers/getHeroesByName'

export const SearchPage = () => {

  const navigate = useNavigate();
  const logation =useLocation();

  const {q = ''} = queryString.parse(logation.search);
  const heroe = getHeroesByName(q)
  
  const {searchText, onInputChange,onResertFrom } = useFrom({
    searchText: q
  });

  const onSearchSubmit = (event) =>{
    event.preventDefault();
    // if (searchText.trim().length <= 1) return; 
    navigate(`?q=${searchText.toLowerCase().trim()}`)
    // console.log(searchText);
    onResertFrom()
  }


  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">

        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input type="text"
              placeholder='Search a here'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={onInputChange}
            />
            <button className='btn btn-outline-primary mt-1'>Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Result</h4>
          <hr />
          
          {
            (q === '') ?
              <div className='alert alert-primary'>
                Search here
              </div>
              :(heroe.length === 0) &&
              <div className='alert alert-danger'>
                No heroe with <b>{q}</b>
              </div>   
              }
              {
              <div className='row rows-cols-1 g-3'>
                {
                heroe.map( hero => (
                  <HeroeCard key={ hero.id } {...hero}/>
                ))
                }
              </div>
            } 
        </div>
      </div>
    </>
  )
}
