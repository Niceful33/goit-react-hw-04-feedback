import React, { useState } from 'react';

import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layuot/Layuot.styled';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total] = useState(0);

  const handleBtnGood = () => {
    setGood(good + 1);
  };
  const handleBtnNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleBtnBad = () => {
    setBad(bad + 1);
  };
  const countTotalFeedback = total + good + neutral + bad;
  const countPositivePer = Math.round((good / countTotalFeedback) * 100);
  return (
    <>
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onBtnGood={handleBtnGood}
            onBtnNeutral={handleBtnNeutral}
            onBtnBad={handleBtnBad}
          />
        </Section>
        <Section title="Statistics:">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePer={countPositivePer}
          />
        </Section>
        <Notification
          message="There is no feedback"
          total={countTotalFeedback}
        />
        <GlobalStyle />
      </Layout>
    </>
  );
}
