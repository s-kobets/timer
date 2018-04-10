/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError
} from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import Button from '../../components/Button';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import mp3 from './finish.mp3';

export class HomePage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  constructor(props) {
    super(props);

    this.state = {
      contentTimers: [],
      timers: [],
      sliceTimer: [],
      currentTimer: { value: '', spent: 0 },
      circle: 0,
      view: false
    };
  }
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  componentWillUnmount() {
    clearInterval(this.time);
  }

  submit = e => {
    e.preventDefault();
    this.setState({ view: true });
    this.calledTimer();
  };

  calledTimer = changeTimer => {
    const { sliceTimer, timers, currentTimer } = this.state;
    let timer = currentTimer.value;

    if (changeTimer) {
      timer = changeTimer;
      this.setState({ currentTimer: { ...currentTimer, value: changeTimer } });
      // this.setState({ timers: [timer, ...timers.slice(1)] });
    }
    if (timer !== '00:00:00') {
      let t = timer.split(':');
      switch (t.length) {
        case 3:
          t = Number(t[0]) * 3600 + Number(t[1]) * 60 + Number(t[2]);
          break;
        case 2:
          t = Number(t[0]) * 3600 + Number(t[1]) * 60;
          break;
        case 1:
          t = Number(t[0]) * 3600;
          break;
      }

      t -= 1;
      const hour = Math.floor(t / 3600);
      const minut = Math.floor((t - hour * 3600) / 60);
      const second = t - (hour * 3600 + minut * 60);
      this.time = setTimeout(() => {
        return this.calledTimer(
          `${hour > 9 ? hour : `0${hour}`}:${minut > 9
            ? minut
            : `0${minut}`}:${second > 9 ? second : `0${second}`}`
        );
      }, 1000);
    } else {
      let sliceTimers = [...sliceTimer.slice(1)];

      this.setState(
        () => ({
          sliceTimer: sliceTimers,
          currentTimer: { value: sliceTimers[0], spent: currentTimer.spent++ }
        }),
        () => {
          clearTimeout(this.time);
          if (this.state.sliceTimer.length > 0) this.calledTimer();
        }
      );

      // this.sound && this.sound.play();
    }
  };

  renderContentTimers = () => (
    <Input type="time" step="1" onChange={this.handleChangeTime} />
  );

  addContentTimer = () => {
    this.setState({
      contentTimers: [...this.state.contentTimers, this.renderContentTimers()]
    });
  };

  handleChangeTime = e => {
    e.preventDefault();
    const value = e.currentTarget.value;
    const index = e.currentTarget.dataset.index;
    const { timers, currentTimer } = this.state;

    let myTimer = timers;
    myTimer.splice(index, 1, value);

    const t = value.split(':');
    if (t.length === 3) {
      this.setState(
        () => ({
          timers: [...myTimer],
          sliceTimer: [...myTimer]
        }),
        () => {
          this.setState({
            currentTimer: { ...currentTimer, value: timers[0] }
          });
        }
      );
    }
  };

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos
    };

    const { view, currentTimer, timers, contentTimers } = this.state;

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <div>
          <CenteredSection>
            <audio ref={node => (this.sound = node)}>
              <source src={mp3} type="audio/mp3" />
            </audio>
            <Form>
              <Input
                type="time"
                step="1"
                data-index="0"
                onChange={this.handleChangeTime}
                value={timers[0]}
              />

              {React.Children.map(contentTimers, (item, index) =>
                React.cloneElement(item, {
                  'data-index': index + 1,
                  value: timers[index + 1]
                })
              )}
              <Button onClick={this.addContentTimer}>+</Button>
              <Button type="submit" onClick={this.submit}>
                Start
              </Button>
            </Form>

            {view && <div>{currentTimer.value}</div>}
            {/* <H2>
              <FormattedMessage {...messages.startProjectHeader} />
            </H2>
            <p>
              <FormattedMessage {...messages.startProjectMessage} />
            </p> */}
          </CenteredSection>
          <Section>
            <H2>
              <FormattedMessage {...messages.trymeHeader} />
            </H2>
            <Form onSubmit={this.props.onSubmitForm}>
              <label htmlFor="username">
                <FormattedMessage {...messages.trymeMessage} />
                <AtPrefix>
                  <FormattedMessage {...messages.trymeAtPrefix} />
                </AtPrefix>
                <Input
                  id="username"
                  type="text"
                  placeholder="mxstbr"
                  value={this.props.username}
                  onChange={this.props.onChangeUsername}
                />
              </label>
            </Form>
            <ReposList {...reposListProps} />
          </Section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    }
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withSaga, withConnect)(HomePage);
