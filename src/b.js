import React from 'react';

const b = React.createClass({

  // The textarea only needs one thing from the parent component: the method to
  // be called on change (`onChange`). Therefore, it should be both required and
  // a function.
  //
  // Note that the whole `propTypes` property could be omitted as it is only
  // used for props validation. Basically it tells React to warn in case we pass
  // a `handleChange` prop that is not a function, or if we do not pass a
  // `handleChange` prop at all.
  propTypes: {
    handleChange: React.PropTypes.func.isRequired
  },

  // The render method is extremely simple as it only consists on displaying a
  // textarea to which is bound the `handleChange` method on the `onChange`
  // event.
  render () {
    return (
      <textarea onChange={this.props.handleChange} />
    );
  }

});

export default b;
