import React from 'react';
import { TableWrap } from '../../../components';

const List = ({ listOfStudents, onClick }) => {
  const tableHeader = [ 'Id', 'Student id', 'Name', 'Email', 'Course category', 'Course name', 'Actions' ];
  return <TableWrap onClick={onClick} tableHeads={tableHeader} tableRows={listOfStudents} />;
};

export default List;
