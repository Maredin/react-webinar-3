import React, { useCallback } from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Basket from './components/basket';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {

  const list = store.getState().list;
  const basket = store.getState().basket;

  const callbacks = {
    onDeleteItem: useCallback((code) => {
      store.deleteItem(code);
    }, [store]),

    onSelectItem: useCallback((code) => {
      store.selectItem(code);
    }, [store]),

    onAddItem: useCallback(() => {
      store.addItem();
    }, [store]),

    onAddBasket: useCallback((code) => {
      store.addBasket(code);
    }, [store]),

    deliteBasket: useCallback((code) => {
      store.deliteBasket(code);
    }, [store]),

    openBasket: useCallback(() => {
      store.openBasket();
    }, [store]),

    closeBasket: useCallback(() => {
      store.closeBasket();
    }, [store]),
  }

  return (
    <PageLayout>
      <Head title='Магазин' />
      <Controls onAdd={callbacks.onAddItem} basket={basket} openBasket={callbacks.openBasket} />
      {store.state.popup ? <Basket basket={basket} deliteBasket={callbacks.deliteBasket} closeBasket={callbacks.closeBasket} /> : ''}
      <List list={list}
        onDeleteItem={callbacks.onDeleteItem}
        onSelectItem={callbacks.onSelectItem}
        onAddBasket={callbacks.onAddBasket} />
    </PageLayout>
  );
}

export default App;
