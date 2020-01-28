import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { start } from '../../models/App/actions';
import { App } from './App';

const mapStateToProps = ({ state }) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  start: bindActionCreators(start, dispatch),
});

export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
