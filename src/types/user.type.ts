const user = {
  _id: '63eaf1dc6d7c6203408516c6',
  roles: ['User'],
  email: 'ntq@gmail.com',
  name: 'Anonymous',
  date_of_birth: '',
  address: '',
  phone: '',
  createdAt: '2023-02-14T02:28:44.224Z',
  updatedAt: '2023-02-14T02:28:44.224Z',
  __v: 0
}
type Roles = 'User' | 'Admin'
export interface User {
  _id: string
  roles: Roles[]
  email: string
  name: string
  date_of_birth: string
  address: string
  phone: string
  createdAt: string
  updatedAt: string
}
