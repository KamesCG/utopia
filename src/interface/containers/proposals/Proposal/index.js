/* --- Global Dependencies --- */
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { compose, lifecycle, withState } from "recompose";
/* --- Local Dependencies --- */
import { 
  databaseWriteRequest,
  databaseReadRequest,
  databaseChannelRequest,
} from 'store/departments/actions'
import { fromDatabase } from 'store/departments/selectors'
/* --- Module Dependencies --- */
import Component from "./component";

/* -------------- React Container -------------- */

/*-* Recompose *-*/
const QueryLifecycle = lifecycle(
{
  componentDidMount()
  {
    this.props.databaseReadRequest(this.props.match.params.uid)
  },
  componentDidUpdate(prevProps)
  {

  }
});

/*-* Redux *-*/
const mapStateToProps = (state, props) => ({
  data: fromDatabase.getDeltaData(state, `read|proposals|${props.match.params.uid}`),
  comments: fromDatabase.getDeltaPath(state, `read|proposals|${props.match.params.uid}`, 'comments')
})
const mapDispatchToProps = (dispatch, props) => {
  return {
  databaseReadRequest: (uid)=>dispatch(databaseReadRequest({
    payload:{},
    metadata: {
      branch: ['proposals', uid],
      delta: `read|proposals|${uid}`
    } 
  })),
}}

/* --- Export --- */
export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  QueryLifecycle,
)(Component);