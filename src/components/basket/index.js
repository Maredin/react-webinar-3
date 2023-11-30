import React from "react";
import PropTypes, { func } from 'prop-types';
import Item from "../item";
import './style.css';

function ItemBasket({ basket, deliteBasket }) {
    return (
        basket.map((item) =>
            <div className="Basket__item" key={item.code}>
                <div className="Basket__item-code">{item.code}</div>
                <div className="Basket__item-title">{item.title}</div>
                <div className="Basket__item-price">{item.price} ₽</div>
                <div className="Basket__item-quantity">{item.quantity} шт</div>
                <div className="Basket__item-actions">
                    <button onClick={() => { deliteBasket(item.title) }}>
                        Удалить
                    </button>
                </div>
            </div>
        )
    )
}

function Basket({ basket, deliteBasket }) {
    function hideBasket() {
        const basket = document.querySelector('.Basket__wrapper');
        basket.style.display = 'none';
    }
    function amount() {
        let result = 0;
        for (let item of basket) {
            result += item.price * item.quantity;
        }
        return result;
    }
    return (
        <div className='Basket__wrapper'>
            <div className="Basket">
                <div className="Basket__header">
                    <h2 className="Basket__header-title">
                        Корзина
                    </h2>
                    <button className="Basket__header-btn" onClick={() => { hideBasket() }}>Закрыть</button>
                </div>
                <div className="Basket__products">
                    <ItemBasket basket={basket} deliteBasket={deliteBasket} />
                    <div className="Basket__total">
                        <p className="Basket__total-descr">Итого</p>
                        <p className="Basket__total-amount">{amount()} ₽</p>
                    </div>
                </div>
            </div>
        </div>
    )
}









export default React.memo(Basket);