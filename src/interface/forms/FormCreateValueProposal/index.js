/* --- Global Dependencies --- */
import React from 'react';
import {
  compose,
  lifecycle,
} from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

/* --- Local Dependencies ---- */
import { 
  databaseWriteRequest,
  databaseReadRequest,
  databaseChannelRequest,
} from 'store/departments/actions'
import { fromDatabase } from 'store/departments/selectors'

/* --- Module Dependencies --- */
import Form from './component'

/* ------------ Component ------------ */
/* --- Event Handlers --- */
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {

  const payload = {
    data,
    meta: {
      type: 'values',
      status: 'initialized',
    }
  }

  const metadata = {
    branch: ['proposals'],
    delta: 'write|proposal|request',
    writeType: 'create',
  }

  dispatch(databaseWriteRequest({payload,metadata}))

  props.reset() // Reset Redux Form
}).catch(err=>console.log(err))

/*---*--- Lifecylce Methods ---*---*/
const QueryLifecycle = lifecycle({
  componentDidMount()
  {

  },
  componentDidUpdate(prevProps)
  {

  }
})

/* ------------ Form Validation ------------ */
const config = {
  form: 'FormCreateProposal',
  fields: [
    'proposalName',
    'proposalSummary',
  ],
  destroyOnUnmount: true,
  onSubmit,
}

/*-* Redux *-*/
const mapStateToProps = (state, props) => ({
  data: fromDatabase.getDeltaData(state, `read|proposals`)
})

const mapDispatchToProps = (dispatch, props) => ({
  databaseReadRequest: (eid)=>dispatch(databaseReadRequest({
    payload:{},
    metadata: {
      branch: ['projects', eid],
      delta: `read|proposals`
    } 
  })),
})

/* ------------ Export ------------ */
const FormConfiguration = reduxForm(config)
const FormRedux = props => <Form { ...props} />

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  FormConfiguration,
  QueryLifecycle,
)(FormRedux);
