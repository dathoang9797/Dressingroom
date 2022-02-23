import { SET_CATEGORY } from './ChooserCategoryConstant';
import { ActionsChooseCategory } from 'Redux/ChooserCategoryReducer/ChooserCategoryAction';
import { ChooserCategoriesInitialState } from './ChooserCategoryReducer.types';

const initialState = 'topclothes' as ChooserCategoriesInitialState;

const chooserCategoriesReducer = (state = initialState, action: ActionsChooseCategory) => {
  switch (action.type) {
    case SET_CATEGORY: {
      console.log('🚀 ~ file: ChooserCategoryReducer.ts ~ line 8 ~ chooserCategoriesReducer ~ action', action);

      state = action.payload;
      return state;
    }
    default:
      return state;
  }
};

export default chooserCategoriesReducer;
