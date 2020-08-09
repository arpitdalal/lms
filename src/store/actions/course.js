import * as actionTypes from './types';

export const addCourse = (newCourse) => {
  return {
    type: actionTypes.ADD_COURSE,
    value: newCourse
  };
};
