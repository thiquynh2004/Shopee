import { createContext, useState } from 'react'
import { User } from 'src/types/user.type'
import { getAccessTokenFromLCSStorage, getProfile } from 'src/utils/auth'

interface AppContextInterface {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  profile: User | null
  setProfile: React.Dispatch<React.SetStateAction<User | null>>
}
const initialAppContext: AppContextInterface = {
  isAuthenticated: Boolean(getAccessTokenFromLCSStorage()),
  setIsAuthenticated: () => null,
  profile: getProfile(),
  setProfile: () => null
}
export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    initialAppContext.isAuthenticated
  )
  const [profile, setProfile] = useState<User | null>(initialAppContext.profile)
  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        profile: initialAppContext.profile,
        setProfile
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
