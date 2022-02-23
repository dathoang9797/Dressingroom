import { SET_CLOTHES } from './ModelConstant';

export const actionChooseModel = (mode: string, image: string) => {
  return {
    type:SET_CLOTHES,
    payload: { mode, image },
  } as const;
};

export type ActionsChooseModel = ReturnType<typeof actionChooseModel>;
