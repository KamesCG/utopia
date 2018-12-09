/* --- Global Dependencies --- */
import { connect } from "react-redux";
import { compose, lifecycle, withState } from "recompose";
/* --- Local Dependencies --- */
import { product1, ethereumMountains } from 'assets/images'
/* --- Module Dependencies --- */
import Component from "./component";

/* ------- React Container ------- */

/*-* Recompose *-*/
const QueryLifecycle = lifecycle(
{
  componentDidMount()
  {

  },
  componentDidUpdate(prevProps)
  {

  }
});

/*-* State Management *-*/
const LifecyleExample = withState(
  "example",
  "exampleToggle",
  true
);


/*-* Redux *-*/
const mapStateToProps = (state, props) => ({
  products: [
    {
      title: 'Proposal 1',
      alias: 'proposal1',
      image: ethereumMountains,
      description: 'Donec bibendum leo sed dolor tincidunt laoreet. Nam metus tortor, sagittis eu vulputate a, rhoncus at nisl.',
    },
    {
      title: 'Proposal 2',
      alias: 'proposal2',
      image: ethereumMountains,
      description: 'Donec bibendum leo sed dolor tincidunt laoreet. Nam metus tortor, sagittis eu vulputate a, rhoncus at nisl.',
    },
    {
      title: 'Proposal 3',
      alias: 'proposal3',
      image: ethereumMountains,
      description: 'Donec bibendum leo sed dolor tincidunt laoreet. Nam metus tortor, sagittis eu vulputate a, rhoncus at nisl.',
    }
  ]
});


const mapDispatchToProps = (dispatch, props) => ({
 
});

/* --- Export --- */
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  LifecyleExample,
  QueryLifecycle,
)(Component);