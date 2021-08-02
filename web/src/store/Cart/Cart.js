import { makeAutoObservable } from 'mobx'

function shopCart(value = []) {
  return makeAutoObservable({
    value,
    get getCart() {
      return this.value
    },
    get getLength() {
      return this.value.length
    },
    setValue(val) {
      this.value = val
    },
    addProduct(val) {
      this.value.push(val)
    }
  })
}

export default shopCart()
