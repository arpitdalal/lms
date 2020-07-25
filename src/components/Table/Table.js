import React from 'react';
import { Table } from '../BootstrapWrap';

const TableWrap = ({ tableHeads, tableRows }) => {
  let id = 1;

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {(tableHeads || []).map((tableHead) => {
            return <th>{tableHead}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {(tableRows || []).map((tableRow) => {
          return (
            <tr>
              <td>{id++}</td>
              {Object.values(tableRow).map((value) => {
                return <td>{value}</td>;
              })}
              <td>edit</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TableWrap;
