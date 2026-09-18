export type UserRole = "admin" | "user"

export interface User {
  id: number
  username: string
  role: UserRole
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Session {
  token: string
  user: User
}
