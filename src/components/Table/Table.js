import React from 'react';
import { Table } from '../BootstrapWrap';
import PrimaryBtn from '../Button/PrimaryBtn';

const TableWrap = ({ tableHeads, tableRows, onClick }) => {
  return (
    <Table striped bordered hover style={{ marginTop: '10px' }}>
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
              {Object.values(tableRow).map((value) => {
                return <td>{value}</td>;
              })}
              <td>
                <PrimaryBtn id={tableRow.id} text='Edit' onClick={() => onClick(tableRow)} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TableWrap;
