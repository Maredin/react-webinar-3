import React from "react";
import PropTypes from 'prop-types';
import Item from "../item";
import './style.css';

function Basket({ list, onDeleteItem, onSelectItem, onAddBasket }) {
    return (
        <div className='List'>{
            list.map(item =>
                <div key={item.code} className='List-item'>
                    <Item item={item} onDelete={onDeleteItem} onSelect={onSelectItem} onAddBasket={onAddBasket} />
                </div>
            )}
        </div>
    )
}









export default React.memo(Basket);