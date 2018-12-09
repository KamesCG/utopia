/* --- External Dependencies --- */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { compose, lifecycle, withState } from "recompose";
/* --- Local Dependencies --- */
import Component from './component';
import { authLoginWithAuthorization } from 'store/departments/actions'

/* ------- React Container ------- */
/*-* Recompose *-*/
const QueryLifecycle = lifecycle(
  {
    componentDidMount()
    {
      if(this.props.user.loggedIn && this.props.redirect) {
        this.props.history.push(this.props.redirect)
      }
    },
    componentDidUpdate(prevProps)
    {
      // Redirect User to new URL after Login
      if(this.props.user.loggedIn && this.props.redirect) {
        this.props.history.push(this.props.redirect)
      }
    }
  });

const mapStateToProps = (state) => ({
  user: state.authentication || state.authentication.user
})

const mapDispatchToProps = (dispatch, props) => ({
  authLogin: () => dispatch(authLoginWithAuthorization({
    metadata: {
      providerSelection: props.providerSelection
    }
  })),
})



export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  QueryLifecycle,
)(Component);
