import { makeAutoObservable } from 'mobx'

function products(value = []) {
  return makeAutoObservable({
    value,
    get getProducts() {
      return this.value
    },
    get getLength() {
      return this.value.length
    },
    setValue(val) {
      this.value = val
    }
  })
}

export default products()
