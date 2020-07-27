import React, { useState } from 'react';
import { PrimaryBtn, ModalWrap } from '../../../components';
import Create from './Create';
import List from './List';

const Course = () => {
  const [ lgShow, setLgShow ] = useState(false);
  const [ newCourse, setNewCourse ] = useState({});
  const [ listOfCourses, setListOfCourses ] = useState([
    {
      courseName: 'Nodejs',
      category: 2,
      subCategory: 5,
      fee: 100
    },
    {
      courseName: 'Reactjs',
      category: 1,
      subCategory: 3,
      fee: 50
    }
  ]);

  const onSubmit = () => {
    const newListOfCourses = [ ...listOfCourses ];
    newListOfCourses.push(newCourse);
    setListOfCourses(newListOfCourses);
  };

  const editCourse = (course) => {
    setLgShow(true);
    setNewCourse(course);
  };

  return (
    <div>
      Course <br />
      <br />
      <PrimaryBtn text='Create New Course' onClick={() => setLgShow(!lgShow)} />
      <List listOfCourses={listOfCourses} onClick={(course) => editCourse(course)} />
      <ModalWrap title='Create new course' text='Create' onClick={onSubmit} lgShow={lgShow} setLgShow={setLgShow}>
        <Create newCourse={newCourse} setNewCourse={setNewCourse} />
      </ModalWrap>
    </div>
  );
};

export default Course;
