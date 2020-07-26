import React from 'react';
import { TableWrap } from '../../../components';

const List = ({ listOfCourses, onClick }) => {
  const tableHeader = [ 'Id', 'Name', 'Category', 'Sub category', 'Fees', 'Actions' ];
  return <TableWrap onClick={onClick} tableHeads={tableHeader} tableRows={listOfCourses} />;
};

export default List;
