import moment from 'moment';
import 'moment/dist/locale/es';
import React from 'react';
import styled from 'styled-components';

import variable from '../../styles/variable';

moment.locale('es');

const BoxTime = styled.p`
  font-weight: 400 !important;
  color: ${variable.grey_3} !important;
  font-size: 0.7rem !important;
  margin-bottom: 0;
`;

const Time = () => {
  const date = moment().format('LL');
  return <BoxTime>{date}</BoxTime>;
};

export default Time;
