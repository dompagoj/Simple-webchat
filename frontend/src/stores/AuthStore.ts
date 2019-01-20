import { observable, computed } from 'mobx'

class AuthStore {
  @observable
  public token: string = ''

  @computed
  public get isLoggedIn() {
    return !!this.token
  }
}

export const authStore = new AuthStore()
