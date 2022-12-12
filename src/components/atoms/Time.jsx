import moment from 'moment';
import 'moment/locale/es';
import React from 'react';

moment.locale('es');

const Time = () => {
  const dateToFormat = moment('2012 July', 'YYYY MMM', 'es');
  return <p>{dateToFormat}</p>;
};

export default Time;
