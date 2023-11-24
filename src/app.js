import React from 'react';
import { createElement } from './utils.js';
import './styles.css';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {

  const list = store.getState().list;

  function validateClicked(clickedItem) {
    if (clickedItem > 1 && clickedItem < 5) {
      return "раза"
    } else if (clickedItem > 20) {
      if (clickedItem % 10 > 1 && clickedItem % 10 < 5) {
        return "раза"
      }
    }
    return "раз"
  };

  return (
    <div className='App'>
      <div className='App-head'>
        <h1>Приложение на чистом JS</h1>
      </div>
      <div className='App-controls'>
        <button onClick={() => store.addItem()}>Добавить</button>
      </div>
      <div className='App-center'>
        <div className='List'>{
          list.map(item =>
            <div key={item.code} className='List-item'>
              <div className={'Item' + (item.selected ? ' Item_selected' : '')}
                onClick={(e) => { e.target.tagName != 'BUTTON' ? store.selectItem(item.code) : '' }}>
                <div className='Item-code'>{item.code}</div>
                <div className='Item-title'>{item.title} {item.clicked > 0 ? ` | Выделяли ${item.clicked} ${validateClicked(item.clicked)}` : ''}</div>
                <div className='Item-actions'>
                  <button onClick={() => store.deleteItem(item.code)}>
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
