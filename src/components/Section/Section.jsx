import React from 'react';
import PropTypes from 'prop-types';
import { Title, SectionWrap } from './Section.styled';

const Section = ({ title, children }) => (
  <SectionWrap>
    <Title>{title}</Title>
    {children}
  </SectionWrap>
);
export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
