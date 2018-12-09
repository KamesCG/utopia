/* --- Global Dependencies --- */
import { connect } from "react-redux";
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
    this.props.databaseReadRequest()
  },
  componentDidUpdate(prevProps)
  {

  }
});

/*-* Redux *-*/
const mapStateToProps = (state, props) => ({
  data: fromDatabase.getDeltaData(state, `read|proposals`)
})
const mapDispatchToProps = (dispatch, props) => {
  return {
  databaseReadRequest: (eid)=>dispatch(databaseReadRequest({
    payload:{},
    metadata: {
      branch: ['proposals'],
      delta: `read|proposals`
    } 
  })),
}}

/* --- Export --- */
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  QueryLifecycle,
)(Component);