import React, { useState, useEffect } from 'react';
import { Input, DropdownWrap } from '../../../components';

const Create = ({ setNewCourse }) => {
  const [ categoryId, setCategoryId ] = useState(0);
  const [ course, setCourse ] = useState({});

  useEffect(
    () => {
      setNewCourse(course);
    },
    [ course, setNewCourse ]
  );

  const categories = [ { id: 1, name: 'Frontend' }, { id: 2, name: 'Backend' }, { id: 3, name: 'Database' } ];
  const subCategories = [
    { id: 1, categoryId: 1, name: 'React' },
    { id: 2, categoryId: 1, name: 'Angular' },
    { id: 3, categoryId: 1, name: 'Vue' },
    { id: 4, categoryId: 2, name: 'Nodejs' },
    { id: 5, categoryId: 2, name: 'PHP' },
    { id: 6, categoryId: 3, name: 'MongoDB' },
    { id: 7, categoryId: 3, name: 'MySQL' }
  ];

  const setCourseObject = (key, value) => {
    setCourse({ ...course, [key]: value });
  };

  return (
    <div className='createCourse'>
      <Input
        type='text'
        name='courseName'
        text='Course name'
        focus={true}
        onChange={(e) => setCourseObject(e.target.name, e.target.value)}
      />
      <DropdownWrap
        name='category'
        title='Category'
        options={categories}
        setSelectedValue={(value) => setCategoryId(value)}
        onChange={(key, value) => setCourseObject(key, value)}
      />
      <DropdownWrap
        name='subCategory'
        title='Sub Category'
        options={subCategories.filter((subCategory) => subCategory.categoryId === categoryId)}
        onChange={(key, value) => setCourseObject(key, value)}
      />
      <Input type='number' name='fee' text='Fees' onChange={(e) => setCourseObject(e.target.name, e.target.value)} />
    </div>
  );
};

export default Create;
