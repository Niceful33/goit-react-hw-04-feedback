import React from 'react';
import PropTypes from 'prop-types';
import { OptinsItem, OptionsTotal } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePer }) =>
  total !== 0 && (
    <>
      <OptinsItem>Good:{good}</OptinsItem>
      <OptinsItem>Neutral:{neutral}</OptinsItem>
      <OptinsItem>Bad:{bad}</OptinsItem>
      <OptionsTotal>Total: {total}</OptionsTotal>
      <OptionsTotal>
        Positive feedback:
        {good > 0 ? positivePer + '%' : 0 + '%'}
      </OptionsTotal>
    </>
  );

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  // total: PropTypes.number.isRequired,
  // positivePercentage: PropTypes.number.isRequired,
};
