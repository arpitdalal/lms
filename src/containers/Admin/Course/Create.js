import React, { useState } from 'react';
import { Input, DropdownWrap } from '../../../components';

const Create = () => {
  const [ categoryId, setCategoryId ] = useState(0);
  const [ course, setCourse ] = useState({});

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

  const setSelectedValue = (value) => {
    setCategoryId(value);
  };

  const setCourseObject = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setCourse({ ...course, [key]: value });
  };

  return (
    <div className='createCourse'>
      <Input name='courseName' text='Course name' focus={true} onChange={(e) => setCourseObject(e)} />
      <DropdownWrap title='Category' options={categories} setSelectedValue={setSelectedValue} />
      <DropdownWrap
        title='Sub Category'
        options={subCategories.filter((subCategory) => subCategory.categoryId === categoryId)}
      />
      <Input name='fee' text='Fees' onChange={(e) => setCourseObject(e)} />
    </div>
  );
};

export default Create;
