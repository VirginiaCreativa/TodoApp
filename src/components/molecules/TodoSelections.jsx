/* eslint-disable no-return-assign */
import texts from '../../config/text.json';

const Selections = texts.selections;

const TodoSelections = () => (
  <>{Object.keys(Selections).forEach((item) => console.log(item))}</>
);

export default TodoSelections;
