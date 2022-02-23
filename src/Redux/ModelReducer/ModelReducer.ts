import { ModelInitialState } from './ModelReducer.types';
import { SET_CLOTHES } from './ModelConstant';
import { ActionsChooseModel } from './ModelAction';

const initialState = {
  background: '',
  botclothes: '',
  hairstyle: '',
  handbags: '',
  necklaces: '',
  shoes: '',
  topclothes: '',
} as ModelInitialState;
const modelReducer = (state = initialState, action: ActionsChooseModel) => {
  switch (action.type) {
    case SET_CLOTHES: {
      const { mode, image } = action.payload;
      const newState = { [mode]: image };
      return { ...state, ...newState };
    }
    default:
      return state;
  }
};

export default modelReducer;
