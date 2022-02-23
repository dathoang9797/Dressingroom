import { combineReducers } from '@reduxjs/toolkit';
import ProductReducer from './ProductReducer';
import CategoriesReducer from './CategoriesReducer';
import ChooserCategoryReducer from './ChooserCategoryReducer';
import ModelReducer from './ModelReducer';

export const rootReducer = combineReducers({
  ProductReducer,
  CategoriesReducer,
  ChooserCategoryReducer,
  ModelReducer,
});
