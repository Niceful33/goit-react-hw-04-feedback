import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from './Options.styled';

const FeedbackOptions = ({ onBtnGood, onBtnNeutral, onBtnBad }) => (
  <>
    <Btn type="button" onClick={onBtnGood}>
      Good
    </Btn>
    <Btn type="button" onClick={onBtnNeutral}>
      Neutral
    </Btn>
    <Btn type="button" onClick={onBtnBad}>
      Bad
    </Btn>
  </>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onBtnGood: PropTypes.func.isRequired,
  onBtnNeutral: PropTypes.func.isRequired,
  onBtnBad: PropTypes.func.isRequired,
};
