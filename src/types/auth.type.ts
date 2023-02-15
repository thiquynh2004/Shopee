import { User } from './user.type'
import { ResponseAPI } from './utils.type'

export type AuthResponse = ResponseAPI<{
  accessToken: string
  expires: string
  user: User
}>
