import React, { useState, useEffect } from 'react';
import { PrimaryBtn, ModalWrap, Input } from '../../../components';
import Create from './Create';
import List from './List';

const Course = () => {
  const [ isCreate, setIsCreate ] = useState(true);
  const [ lgShow, setLgShow ] = useState(false);
  const [ newCourse, setNewCourse ] = useState({});
  const [ originalOfListOfCourses, setOriginalOfListOfCourses ] = useState([
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
  ]);
  const [ listOfCourses, setListOfCourses ] = useState([
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
  ]);

  useEffect(
    () => {
      setNewCourse({});
    },
    [ lgShow, setNewCourse ]
  );

  const onNewCourse = () => {
    const newListOfCourses = [ ...listOfCourses ];
    newListOfCourses.push(newCourse);
    setListOfCourses(newListOfCourses);
  };

  const onEditCourse = () => {
    const newCourses = listOfCourses.map((course) => {
      return course.id === newCourse.id ? newCourse : course;
    });

    setListOfCourses(newCourses);
    setIsCreate(true);
  };

  const editCourse = (course) => {
    setLgShow(true);
    setNewCourse(course);
    setIsCreate(false);
  };

  const filterCourses = (e) => {
    const value = e.target.value;
    const filteredCourses = originalOfListOfCourses.filter((course) =>
      course.courseName.toLowerCase().includes(value.toLowerCase())
    );

    setListOfCourses(value === '' ? originalOfListOfCourses : filteredCourses);
  };

  return (
    <div>
      Course <br />
      <br />
      <PrimaryBtn text='Create New Course' onClick={() => setLgShow(!lgShow)} />
      <div style={{ maxWidth: '600px', margin: '0 auto', marginTop: '10px' }}>
        <Input type='text' name='filter' text='Filter By Name' autofocus={true} onChange={filterCourses} />
      </div>
      <List listOfCourses={listOfCourses} onClick={(course) => editCourse(course)} />
      <ModalWrap
        title='Create new course'
        text='Create'
        onClick={isCreate ? onNewCourse : onEditCourse}
        lgShow={lgShow}
        setLgShow={setLgShow}
        setIsCreate={setIsCreate}
      >
        <Create newCourse={newCourse} setNewCourse={setNewCourse} />
      </ModalWrap>
    </div>
  );
};

export default Course;
