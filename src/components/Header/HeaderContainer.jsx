import React from 'react';
import s from './Header.module.css';
import Header from './Header'
import { connect } from 'react-redux';
import { setAuthUserThunk } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setAuthUserThunk();
    }

    render() {
        return <Header {...this.props} />
    }

}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, { setAuthUserThunk })(HeaderContainer);