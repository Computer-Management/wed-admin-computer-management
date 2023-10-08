import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Sidebar />
            <main>{children}</main>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
