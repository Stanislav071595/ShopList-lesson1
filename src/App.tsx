import React from 'react';
import './App.css';
import {ShoppingList} from "./components/ShoppingList";


function App() {

    const goods = [
        {id: 1, title: "Milk", expectedPrice: "$1.99", realPrice: "$1.99", inBasket: true},
        {id: 2, title: "Bread", expectedPrice: "$0.99", realPrice: "$0.89", inBasket: false},
        {id: 3, title: "Coca-Cola", expectedPrice: "$1.49", realPrice: "$1.49", inBasket: true},
        {id: 4, title: "Eggs", expectedPrice: "$2.49", realPrice: "$3.99", inBasket: false}
    ]
    const goods2 = [
        {id: 1, title: "Meat", expectedPrice: "$1.99", realPrice: "$1.99", inBasket: false},
        {id: 2, title: "Water", expectedPrice: "$0.99", realPrice: "$0.89", inBasket: true},
        {id: 3, title: "Beer", expectedPrice: "$1.49", realPrice: "$1.49", inBasket: false},
        {id: 4, title: "Oil", expectedPrice: "$2.49", realPrice: "$3.99", inBasket: true}
    ]

    return (
        <div className="App">
            <ShoppingList title={"What to buy"} goods={goods}/>
            <ShoppingList title={"What to buy today"} goods={goods2}/>
        </div>
    );
}

export default App;