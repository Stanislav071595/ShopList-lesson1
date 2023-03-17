export type test = any;

export type ShoppingListPropsType = {
    title: string
    goods: GoodsItemsType[]

}

export type GoodsItemsType = {
    id: number
    title: string
    expectedPrice: string
    realPrice: string
    inBasket: boolean
}

