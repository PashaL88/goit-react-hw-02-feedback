import PropTypes from 'prop-types';

function Notification({ message }) {
  return <p>{message}</p>;
}

export default Notification;

Notification.defaultProps = {
  message: 'There is no feedback',
};

Notification.propTypes = {
  message: PropTypes.string,
};