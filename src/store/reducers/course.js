import * as actionTypes from '../actions/types';

const initialState = {
  course: [
    {
      id: 1,
      courseName: 'Nodejs',
      category: 2,
      subCategory: 5,
      fee: 100
    },
    {
      id: 2,
      courseName: 'Reactjs',
      category: 1,
      subCategory: 3,
      fee: 50
    }
  ]
};

function course(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_COURSE:
      const newListOfCourses = [ ...state.course ];
      newListOfCourses.push(action.value);

      return { course: newListOfCourses };
    default:
      return state;
  }
}

export default course;
