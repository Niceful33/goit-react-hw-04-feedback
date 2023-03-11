import React from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions ';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import { GlobalStyle } from 'components/GlobalStyle';
import { Layout } from 'components/Layuot/Layuot.styled';

class Feedback extends React.Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    totalFeedback: 0,
  };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleBtnGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };
  handleBtnNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  handleBtnBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };
  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = this.props.totalFeedback + good + neutral + bad;

    const countPositivePer = Math.round((good / countTotalFeedback) * 100);
    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onBtnGood={this.handleBtnGood}
            onBtnNeutral={this.handleBtnNeutral}
            onBtnBad={this.handleBtnBad}
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
    );
  }
}
export default Feedback;
