import React, { useState } from "react";
import PropTypes, { object } from "prop-types";
import { plural } from "../../utils";
import './style.css';

function Item(props) {

  const callbacks = {

    onDelete: (e) => {
      e.stopPropagation();
      props.onDelete(props.item.code);

    },
    onAddBasket: (e) => {
      e.stopPropagation();
      props.onAddBasket(props.item.code);
    }
  }

  return (
    <div className='Item'
      onClick={callbacks.onClick}>
      <div className='Item-code'>{props.item.code}</div>
      <div className='Item-title'>
        {props.item.title}
      </div>
      <div className="Item-price">{props.item.price.toLocaleString('ru-RU')} ₽</div>
      <div className='Item-actions'>
        <button onClick={callbacks.onAddBasket}>
          Добавить
        </button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    selected: PropTypes.bool,
    count: PropTypes.number
  }).isRequired,
  onDelete: PropTypes.func,
  onSelect: PropTypes.func,
  onAddBasket: PropTypes.func
};

Item.defaultProps = {
  onDelete: () => {
  },
  onSelect: () => {
  },
  onAddBasket: () => {
  },
}

export default React.memo(Item);
