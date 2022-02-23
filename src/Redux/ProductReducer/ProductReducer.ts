import { AnyAction } from '@reduxjs/toolkit';
import { ProductInitialState } from './ProductReducer.types';
import IMAGES from 'assets/images';

const {
  clothes: {
    botcloth1,
    botcloth2,
    botcloth3,
    botcloth4,
    botcloth5,
    topcloth1,
    topcloth2,
    topcloth3,
    topcloth4,
    topcloth5,
    topcloth6,
    botcloth_show1,
    botcloth_show2,
    botcloth_show3,
    botcloth_show4,
    botcloth_show5,
    topcloth_show1,
    topcloth_show2,
    topcloth_show3,
    topcloth_show4,
    topcloth_show5,
    topcloth_show6,
  },
  necklaces: { neckLace1, neckLace2, neckLace3, neckLaceShow1, neckLaceShow2, neckLaceShow3 },
  shoes: { shoes1, shoes2, shoes3, shoes4, shoes5, shoes_show1, shoes_show2, shoes_show3, shoes_show4, shoes_show5 },
  handBags: { handBag1, handBag2, handBag3, handbag_show1, handbag_show2, handbag_show3 },
  hairStyle: { hairStyle1, hairStyle2, hairStyle3, hairStyle_show1, hairStyle_show2, hairStyle_show3 },
  backGround: {
    background1,
    background1_show,
    background2,
    background2_show,
    background3,
    background3_show,
    background4,
    background4_show,
    background5,
    background5_show,
    background6,
    background6_show,
    background7,
    background7_show,
  },
} = IMAGES;

const initialState = [
  {
    id: 'topcloth_1',
    type: 'topclothes',
    name: 'Top Cloth 1',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.',
    imgSrc_jpg: topcloth_show1,
    imgSrc_png: topcloth1,
  },
  {
    id: 'topcloth_2',
    type: 'topclothes',
    name: 'Top Cloth 2',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.',
    imgSrc_jpg: topcloth_show2,
    imgSrc_png: topcloth2,
  },
  {
    id: 'topcloth_3',
    type: 'topclothes',
    name: 'Top Cloth 3',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.',
    imgSrc_jpg: topcloth_show3,
    imgSrc_png: topcloth3,
  },
  {
    id: 'topcloth_4',
    type: 'topclothes',
    name: 'Top Cloth 4',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.',
    imgSrc_jpg: topcloth_show4,
    imgSrc_png: topcloth4,
  },
  {
    id: 'topcloth_5',
    type: 'topclothes',
    name: 'Top Cloth 5',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.',
    imgSrc_jpg: topcloth_show5,
    imgSrc_png: topcloth5,
  },
  {
    id: 'topcloth_6',
    type: 'topclothes',
    name: 'Top Cloth ',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.',
    imgSrc_jpg: topcloth6,
    imgSrc_png: topcloth_show6,
  },

  // Both clothes
  {
    id: 'botcloth_1',
    type: 'botclothes',
    name: 'Bot Cloth 1',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.',
    imgSrc_jpg: botcloth_show1,
    imgSrc_png: botcloth1,
  },
  {
    id: 'botcloth_2',
    type: 'botclothes',
    name: 'Bot Cloth 2',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.',
    imgSrc_jpg: botcloth_show2,
    imgSrc_png: botcloth2,
  },
  {
    id: 'botcloth_3',
    type: 'botclothes',
    name: 'Bot Cloth 3',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.',
    imgSrc_jpg: botcloth_show3,
    imgSrc_png: botcloth3,
  },
  {
    id: 'botcloth_4',
    type: 'botclothes',
    name: 'Bot Cloth 4',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.',
    imgSrc_jpg: botcloth_show4,
    imgSrc_png: botcloth4,
  },
  {
    id: 'botcloth_5',
    type: 'botclothes',
    name: 'Bot Cloth 5',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.',
    imgSrc_jpg: botcloth_show5,
    imgSrc_png: botcloth5,
  },

  // Shoes
  {
    id: 'shoes_1',
    type: 'shoes',
    name: 'Shoes 1',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.',
    imgSrc_jpg: shoes_show1,
    imgSrc_png: shoes1,
  },
  {
    id: 'shoes_2',
    type: 'shoes',
    name: 'Shoes 2',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.',
    imgSrc_jpg: shoes_show2,
    imgSrc_png: shoes2,
  },
  {
    id: 'shoes_3',
    type: 'shoes',
    name: 'Shoes 3',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.',
    imgSrc_jpg: shoes_show3,
    imgSrc_png: shoes3,
  },
  {
    id: 'shoes_4',
    type: 'shoes',
    name: 'Shoes 4',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.',
    imgSrc_jpg: shoes_show4,
    imgSrc_png: shoes4,
  },
  {
    id: 'shoes_5',
    type: 'shoes',
    name: 'Shoes 5',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.',
    imgSrc_jpg: shoes_show5,
    imgSrc_png: shoes5,
  },

  // Handbags
  {
    id: 'handbag_1',
    type: 'handbags',
    name: 'Handbag 1',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.',
    imgSrc_jpg: handbag_show1,
    imgSrc_png: handBag1,
  },
  {
    id: 'handbag_2',
    type: 'handbags',
    name: 'Handbag 2',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.',
    imgSrc_jpg: handbag_show2,
    imgSrc_png: handBag2,
  },
  {
    id: 'handbag_3',
    type: 'handbags',
    name: 'Handbag 3',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.',
    imgSrc_jpg: handbag_show3,
    imgSrc_png: handBag3,
  },

  // Necklaces
  {
    id: 'necklace_1',
    type: 'necklaces',
    name: 'Necklace 1',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.',
    imgSrc_jpg: neckLace1,
    imgSrc_png: neckLaceShow1,
  },
  {
    id: 'necklace_2',
    type: 'necklaces',
    name: 'Necklace 2',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.',
    imgSrc_jpg: neckLace2,
    imgSrc_png: neckLaceShow2,
  },
  {
    id: 'necklace_3',
    type: 'necklaces',
    name: 'Necklace 3',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.',
    imgSrc_jpg: neckLace3,
    imgSrc_png: neckLaceShow3,
  },

  // Hairstyle
  {
    id: 'hairstyle_1',
    type: 'hairstyle',
    name: 'Hairstyle 1',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.',
    imgSrc_jpg: hairStyle_show1,
    imgSrc_png: hairStyle1,
  },
  {
    id: 'hairstyle_2',
    type: 'hairstyle',
    name: 'Hairstyle 2',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.',
    imgSrc_jpg: hairStyle_show2,
    imgSrc_png: hairStyle2,
  },
  {
    id: 'hairstyle_3',
    type: 'hairstyle',
    name: 'Hairstyle 3',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.',
    imgSrc_jpg: hairStyle_show3,
    imgSrc_png: hairStyle3,
  },

  // Background
  {
    id: 'background_1',
    type: 'background',
    name: 'Background 1',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.',
    imgSrc_jpg: background1_show,
    imgSrc_png: background1,
  },
  {
    id: 'background_2',
    type: 'background',
    name: 'Background 2',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.',
    imgSrc_jpg: background2_show,
    imgSrc_png: background2,
  },
  {
    id: 'background_3',
    type: 'background',
    name: 'Background 3',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.',
    imgSrc_jpg: background3_show,
    imgSrc_png: background3,
  },
  {
    id: 'background_4',
    type: 'background',
    name: 'Background 4',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.',
    imgSrc_jpg: background4_show,
    imgSrc_png: background4
  },
  {
    id: 'background_5',
    type: 'background',
    name: 'Background 5',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.',
    imgSrc_jpg: background5_show,
    imgSrc_png: background5,
  },
  {
    id: 'background_6',
    type: 'background',
    name: 'Background 6',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.',
    imgSrc_jpg: background6_show,
    imgSrc_png: background6
  },
  {
    id: 'background_7',
    type: 'background',
    name: 'Background 7',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.',
    imgSrc_jpg: background7_show,
    imgSrc_png: background7
  },
] as ProductInitialState;

const productReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productReducer;
