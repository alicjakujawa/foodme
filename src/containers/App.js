import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import store from '../store/configureStore';

class App extends Component {
  render() {
    const { main, header } = this.props;
    return (
      <Provider store={store}>
        <div>
          {header}
          {main}
        </div>
      </Provider>
    );
  }
}

App.propTypes = {
  header: PropTypes.object,
  main: PropTypes.object,
};

export default App;
