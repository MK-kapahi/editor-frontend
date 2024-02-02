
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import Saga from "./saga";
import rootReducer from "./rootReducer";
// import persistedReducer from "./persistReducer";
// import { persistStore } from "redux-persist";

const composeEnhancers = compose;

const sagaMiddleware = createSagaMiddleware();

export const Store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(Saga);

export default Store
