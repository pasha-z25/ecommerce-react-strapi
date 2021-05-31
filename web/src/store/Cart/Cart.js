import { makeAutoObservable } from 'mobx'

function shopCart(value = []) {
  return makeAutoObservable({
    value,
    get double() {
      return this.value * 2
    },
    get valueLength() {
      return this.value.length
    },
    increment() {
      this.value++
    },
    setValue(val) {
      this.value = val
    }
  })
}

export default shopCart()
