import React from 'react';

const a = React.createClass({

  // The counter only needs the length of the textarea’s content to be correctly
  // displayed. It is not necessarily required as we can assume the default
  // value is 0.
  //
  // Note that the whole `propTypes` property could be omitted as it is only
  // used for props validation. Basically it tells React to warn in case we pass
  // a `length` prop that is not a number.
  propTypes: {
    length: React.PropTypes.number
  },

  // Here we define a default value for the `length` prop in case it is not
  // being passed for whatever reason.
  getDefaultProps() {
    return {
      length: 0
    };
  },

  // When it comes to rendering the counter, it is basically a span displaying
  // the `length` prop as part of a sentence. You could also make the plurali-
  // sation a bit more clever here by having a conditional statement based on
  // `this.props.length`.
  render () {
    return (
      <span>{this.props.length} character(s)</span>
    );
  }

});

export default a;
