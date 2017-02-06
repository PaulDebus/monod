import { connect } from 'react-redux';
import Sync from './presenter';


const mapStateToProps = (state) => {
  const app = state.app;

  return {
    offline: app.offline,
  };
};

export default connect(mapStateToProps)(Sync);
