import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';

export const store = configureStore({
  reducer: contactsReducer,
});

// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { createStore } from 'redux';
// import { rootReducer } from './reducer';

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);
