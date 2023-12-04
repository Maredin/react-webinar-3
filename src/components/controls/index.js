import React from "react";
import PropTypes from 'prop-types';
import { plural } from "../../utils";
import './style.css';

function Controls({ basket, openBasket }) {

  // Стоимость товара
  function amount() {
    let result = 0;
    for (let item of basket) {
      result += item.price * item.quantity;
    }
    return result;
  }

  function plur() {
    return (
      basket.length ? `${basket.length}  ${plural(basket.length, {
        one: 'товар',
        few: 'товара',
        many: 'товаров'
      })} / ${amount().toLocaleString('ru-RU')} ₽` : 'пусто'
    )
  }


  return (
    <div className='Controls'>
      <div className="Bascet">В корзине: <span> {plur()} </span></div>
      <button onClick={() => openBasket()}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  onAdd: PropTypes.func,
  goBasket: PropTypes.func
};

Controls.defaultProps = {
  onAdd: () => { },
  goBasket: () => { }
}

export default React.memo(Controls);
