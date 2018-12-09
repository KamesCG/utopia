/* --- Global Dependencies --- */
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { compose, lifecycle } from "recompose";
/* --- Local Dependencies --- */
import { authLogout } from 'store/departments/actions'

/* --- Local Dependencies --- */
import Component from './component';

/* --- Container --- */
/*-* Recompose *-*/
const QueryLifecycle = lifecycle(
  {
    componentDidMount()
    {
      console.log(this.props)
      if(this.props.redirect && !this.props.user.loggedIn) {
        this.props.history.push(this.props.redirect)
      }
    },
    componentDidUpdate(prevProps)
    {
      {console.log(this.props)}
      if(this.props.redirect && !this.props.user.loggedIn) {
        this.props.history.push(this.props.redirect)
      }
    }
  });

const mapStateToProps = (state) => ({
  user: state.authentication || state.authentication.user
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(authLogout())
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  QueryLifecycle
)(Component);
