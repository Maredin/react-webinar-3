import React from "react";
import PropTypes, { func } from 'prop-types';
import './style.css';
import ItemBasket from "../itemBasket";

function Basket({ basket, deliteBasket, amount }) {
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
					<div className="Basket__total"><p className="Basket__total-descr">Итого</p>
						<p className="Basket__total-amount">{amount().toLocaleString('ru-RU')} ₽</p>
					</div>
				</div>
			</div>
		</div>
	)
}









export default React.memo(Basket);