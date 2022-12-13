import moment from 'moment';
import 'moment/dist/locale/es';
import React from 'react';
import styled from 'styled-components';

moment.locale('es');

const BoxTime = styled.p`
  font-weight: 500;
  font-size: 0.7rem !important;
  margin-bottom: 6px;
  height: 0;
`;

const Time = () => {
  const date = moment().format('LL');
  return <BoxTime>{date}</BoxTime>;
};

export default Time;
