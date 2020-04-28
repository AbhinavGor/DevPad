import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Footer = ({auth:{ isAuthenticated, loading}, logout}) => {

  const guestLinks = (
    <ul>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
  );
    return (
    <div className='ff'>
        <div></div>
      <div className='footer '>
        <div className='right'><a href = 'https://abhinavgor.netlify.app/'>&copy;DevPad 2020.All Rights Reserved</a></div>
      </div>
      </div>
    )
};

Footer.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Footer);