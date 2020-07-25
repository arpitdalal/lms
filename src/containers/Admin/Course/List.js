import React from 'react';
import { TableWrap } from '../../../components';

const List = ({ listOfCourses }) => {
  const tableHeader = [ 'id', 'Name', 'Category', 'Sub category', 'Fees', 'Actions' ];
  return <TableWrap tableHeads={tableHeader} tableRows={listOfCourses} />;
};

export default List;
