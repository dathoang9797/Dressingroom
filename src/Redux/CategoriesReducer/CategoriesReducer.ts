import { AnyAction } from '@reduxjs/toolkit';
import { CategoriesInitialState } from './CategoriesReducer.types';
import IMAGES from 'assets/images';

const initialState = [
  { tabName: 'tabTopClothes', showName: 'Áo', type: 'topclothes' },
  { tabName: 'tabBotClothes', showName: 'Quần', type: 'botclothes' },
  { tabName: 'tabShoes', showName: 'Giày dép', type: 'shoes' },
  { tabName: 'tabHandBags', showName: 'Túi xách', type: 'handbags' },
  { tabName: 'tabNecklaces', showName: 'Dây chuyền', type: 'necklaces' },
  { tabName: 'tabModels', showName: 'Người mẫu', type: 'models' },
  { tabName: 'tabHairStyle', showName: 'Kiểu tóc', type: 'hairstyle' },
  { tabName: 'tabBackground', showName: 'Nền', type: 'background' },
] as CategoriesInitialState;

const categoriesReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default categoriesReducer;
