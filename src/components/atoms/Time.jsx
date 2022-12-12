import moment from 'moment';
import 'moment/dist/locale/es';
import React from 'react';
import styled from 'styled-components';

moment.locale('es');

const BoxTime = styled.div`
  p {
    font-size: 0.7rem;
    margin-bottom: 10px;
    height: 0;
  }
`;

const Time = () => {
  const date = moment().format('LL');
  return (
    <BoxTime>
      <p>{date}</p>
    </BoxTime>
  );
};

export default Time;
