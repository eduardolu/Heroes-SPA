import { HeroeList } from '../components/HeroeList'

export const MarvelPage = () => {
  return (
    <>
      <h1 className="page-title">MARVEL</h1>
      <HeroeList publisher='Marvel Comics' />
    </>
  )
}