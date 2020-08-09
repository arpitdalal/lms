import React from 'react';
import { Table } from '../BootstrapWrap';
import PrimaryBtn from '../Button/PrimaryBtn';

const TableWrap = ({ tableHeads, tableRows, onClick }) => {
  return (
    <Table striped bordered hover style={{ marginTop: '10px' }}>
      <thead>
        <tr>
          {(tableHeads || []).map((tableHead, key) => {
            return <th key={key}>{tableHead}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {(tableRows || []).map((tableRow, key) => {
          return (
            <tr key={key}>
              {Object.values(tableRow).map((value, key) => {
                return <td key={key}>{value}</td>;
              })}
              <td>
                <PrimaryBtn id={tableRow.id} key={key} text='Edit' onClick={() => onClick(tableRow)} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TableWrap;
