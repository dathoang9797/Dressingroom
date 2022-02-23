import styled from 'styled-components/macro';
import IMAGES from 'assets/images';
import { propsModelStyle } from './Model.types';

const { backGround, allBody, model } = IMAGES;
const { background998 } = backGround;
const { bodyNew, bikiniBraNew, bikiniPantsNew, feetHighLeftNew, feetHighRightNew } = allBody;

export const ModelContain = styled.div<propsModelStyle>`
  width: 460px;
  height: 590px;
  margin: 0 auto;
  position: relative;
  z-index: -1;
  background-size: cover;
  background-image: ${(props) => (props.backgroundChange ? `url(${props.backgroundChange})` : `url(${background998})`)};
`;

export const ModelBody = styled.div<propsModelStyle>`
  width: 250px;
  height: 500px;
  position: absolute;
  top: 12%;
  left: 22%;
  background-size: cover;
  background-image: url(${bodyNew});
`;

export const ModelHead = styled.div<propsModelStyle>`
  width: 70px;
  height: 80px;
  position: absolute;
  top: 0%;
  left: 52%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background-size: cover;
  transform: translate(-50%, 20px);
  background-size: cover;
  background-image: url(${model['1000']});
`;

export const ModelBikinitop = styled.div<propsModelStyle>`
  width: 250px;
  height: 500px;
  position: absolute;
  top: 12%;
  left: 22%;
  z-index: 1;
  background-size: cover;
  background-image: ${(props) => (props.backgroundChange ? `url(${props.backgroundChange})` : `url(${bikiniBraNew})`)};
`;

export const ModelBikiniBottom = styled.div<propsModelStyle>`
  width: 250px;
  height: 500px;
  position: absolute;
  top: 12%;
  left: 22%;
  z-index: 1;
  background-size: cover;
  background-image: ${(props) => (props.backgroundChange ? `url(${props.backgroundChange})` : `url(${bikiniPantsNew})`)};
`;

export const ModelFeetLeft = styled.div<propsModelStyle>`
  width: 25px;
  height: 41px;
  position: absolute;
  bottom: 6.5%;
  left: 40.4%;
  z-index: 1;
  background-size: cover;
  background-image: url(${feetHighLeftNew});
`;

export const ModelFeetRight = styled.div<propsModelStyle>`
  width: 25px;
  height: 41px;
  position: absolute;
  bottom: 6.5%;
  right: 33.3%;
  background-size: cover;
  z-index: 1;
  background-image: url(${feetHighRightNew});
`;

export const ModelHandBag = styled.div<propsModelStyle>`
  width: 500px;
  height: 1000px;
  position: absolute;
  bottom: -40.5%;
  right: -3.5%;
  transform: scale(0.5);
  z-index: 4;
  background-size: cover;
  background-image: ${(props) => (props.backgroundChange ? `url(${props.backgroundChange})` : ``)};
`;

export const ModelHair = styled.div<propsModelStyle>`
  width: 1000px;
  height: 1000px;
  position: absolute;
  top: -75.5%;
  right: -59%;
  transform: scale(0.15);
  z-index: 4;
  background-size: cover;
  background-image: ${(props) => (props.backgroundChange ? `url(${props.backgroundChange})` : ``)};
`;

export const ModelFeet = styled.div<propsModelStyle>`
  width: 500px;
  height: 1000px;
  position: absolute;
  bottom: -40%;
  right: -3.5%;
  transform: scale(0.5);
  z-index: 1;
  background-image: ${(props) => (props.backgroundChange ? `url(${props.backgroundChange})` : ``)};
`;

export const ModelNeckLaces = styled.div<propsModelStyle>`
  width: 50px;
  height: 50px;
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%, -50%);
  background-size: cover;
  z-index: 1;
  background-image: ${(props) => (props.backgroundChange ? `url(${props.backgroundChange})` : ``)};
`;
