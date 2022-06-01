import React from 'react';
import propTypes from 'prop-types';

const Counter = props =>
  <table className="counter">
    <tbody>
      <tr>
        <td>Đã điểm danh:</td>
        <td>{props.numberAttending}</td>
      </tr>
      <tr>
        <td>Chưa điểm danh:</td>
        <td>{props.numberUnconfirmed}</td>
      </tr>
      <tr>
        <td>Tổng:</td>
        <td>{props.totalInvited}</td>
      </tr>
    </tbody>
  </table>;

Counter.propTypes = {
  numberAttending: propTypes.number,
  numberUnconfirmed: propTypes.number,
  totalInvited: propTypes.number
}

export default Counter