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
      title: 'Product 1',
      alias: 'product1',
      image: product1,
      description: 'Donec bibendum leo sed dolor tincidunt laoreet. Nam metus tortor, sagittis eu vulputate a, rhoncus at nisl.',
    },
    {
      title: 'Product 2',
      alias: 'product2',
      image: ethereumMountains,
      description: 'Donec bibendum leo sed dolor tincidunt laoreet. Nam metus tortor, sagittis eu vulputate a, rhoncus at nisl.',
    },
    {
      title: 'Product 3',
      alias: 'product3',
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