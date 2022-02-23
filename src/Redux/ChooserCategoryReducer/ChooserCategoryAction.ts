import { SET_CATEGORY } from './ChooserCategoryConstant';

export const actionChooseCategory = (category: string) => {
  return {
    type: SET_CATEGORY,
    payload: category,
  } as const;
};

export type ActionsChooseCategory = ReturnType<typeof actionChooseCategory>;
