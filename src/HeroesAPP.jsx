import { UserProvider } from './context/UserContext'
import { AppRouter } from './router/AppRouter'

export const HeroesAPP = () => {
  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  )
}