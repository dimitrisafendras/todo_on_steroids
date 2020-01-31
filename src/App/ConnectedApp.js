import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { pressButton } from '../models/App/actions';
import { App } from './App';

const mapStateToProps = ({ state }) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  press: bindActionCreators(pressButton, dispatch),
});

export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
