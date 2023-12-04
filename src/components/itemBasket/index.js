import React from "react";
import PropTypes, { func } from 'prop-types';
import './style.css';

function ItemBasket({ basket, deliteBasket }) {
	return (
		basket.map((item) =>
			<div className="Basket__item" key={item.code}>
				<div className="Basket__item-code">{item.code}</div>
				<div className="Basket__item-title">{item.title}</div>
				<div className="Basket__item-price">{item.price.toLocaleString('ru-RU')} ₽</div>
				<div className="Basket__item-quantity">{item.quantity} шт</div>
				<div className="Basket__item-actions">
					<button onClick={() => { deliteBasket(item.code) }}>
						Удалить
					</button>
				</div>
			</div>
		)
	)
}

export default ItemBasket;