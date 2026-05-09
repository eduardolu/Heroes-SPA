import { HeroeList } from '../components/HeroeList'

export const DcPage = () => {
  return (
    <>
      <h1 className="page-title">DC COMICS</h1>
      <HeroeList publisher='DC Comics' />
    </>
  )
}