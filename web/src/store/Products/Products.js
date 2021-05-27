import { makeObservable, observable, computed, action } from "mobx"

class Products {
    constructor() {
        makeObservable(this)
    }

    @observable products = []
    @observable cardStatus = false

    @computed get getProductsLength() {
        return this.products.length
    }

    @action toggleCardStatus() {
        this.cardStatus = !this.cardStatus
    }
    @action setProducts = (value) => this.products = value
}

const products = new Products()
export default products