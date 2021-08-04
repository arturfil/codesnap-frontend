import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import forecastReducer from "./reducers/forecastReducer";
import postsReducer from "./reducers/postsReducer";

const rootReducer = combineReducers({
  forecasts: forecastReducer,
  posts: postsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export type RootState = ReturnType<typeof rootReducer>;

export default store;