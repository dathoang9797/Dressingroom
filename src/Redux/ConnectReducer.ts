import { connect, ConnectedProps } from 'react-redux';
import { RootState } from 'Redux/Store';
import { actionChooseCategory } from 'Redux/ChooserCategoryReducer/ChooserCategoryAction';
import { actionChooseModel } from 'Redux/ModelReducer/ModelAction';

const mapState = (state: RootState) => ({
  productList: state.ProductReducer,
  categoriesList: state.CategoriesReducer,
  chooserCategory: state.ChooserCategoryReducer,
  model: state.ModelReducer,
});

const mapDispatch = {
  actionChooseCategory,
  actionChooseModel,
};

export const connector = connect(mapState, mapDispatch);
export type PropsFromReducer = ConnectedProps<typeof connector>;
