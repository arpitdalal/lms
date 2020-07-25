import React from 'react';
import { TableWrap } from '../../../components';

const List = ({ listOfStudents }) => {
  const tableHeader = [ 'Id', 'Student id', 'Name', 'Email', 'Course name', 'Actions' ];
  return <TableWrap tableHeads={tableHeader} tableRows={listOfStudents} />;
};

export default List;
