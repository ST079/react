import PropTypes from "prop-types";

const UserGeeting = (props) => {
  return props.isLoggedIn ? (
    <h2>Welcome {props.username}</h2>
  ) : (
    <h2>Please LogIn to continue.......</h2>
  );
};

UserGeeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

UserGeeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};
export default UserGeeting;
