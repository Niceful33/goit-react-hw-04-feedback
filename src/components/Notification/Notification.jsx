import React from 'react';
import PropTypes from 'prop-types';
import { Message } from './Notification.styled';

const Notification = ({ message, total }) =>
  total === 0 && <Message>{message}</Message>;

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};
