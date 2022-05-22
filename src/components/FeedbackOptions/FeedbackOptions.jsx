
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  const elements = options.map((item, index) => {
      return (
        
        <button key = {index} type="button" onClick={() => {onLeaveFeedback(item)}}>{item}</button>
        
      )
    });
  return <>{elements}</>;
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};