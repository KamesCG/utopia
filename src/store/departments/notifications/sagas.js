/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { toast } from 'react-toastify';
import { takeEvery } from 'redux-saga/effects';
/* ------------------------- Internal Dependencies -------------------------- */
/*---*--- Redux Actions ---*---*/ 
import { NOTIFICATION_OPEN} from './actions'

/*---*--- Components ---*---*/ 

/*--- Login With Phone ---*/
function* notificationOpen({payload, metadata}) {
  toast(<div></div> )
}

/* ------------------------------ Export Sagas ------------------------------ */
export default function* rootSaga() {
  yield [
    takeEvery(NOTIFICATION_OPEN, notificationOpen),
  ];
}