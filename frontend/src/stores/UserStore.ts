import { observable } from 'mobx'

export interface User {
  id: string | number
  username: string
}

class UserStore {
  @observable
  public me?: User

  @observable
  public users: User[] = []
}

export const userStore = new UserStore()
