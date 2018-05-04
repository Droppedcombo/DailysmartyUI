import React from 'react';
import { Link } from 'react-router-dom';

const Logo = (props) => {
    const size = {
        height: props.size ? props.size : 105
    }
        return (
            <div className="logo-main">
                <Link to="/">
                    <img style={size} src="/assets/ds_circle_logo.png" alt="daily smarty logo big" />
                </Link>
            </div>
        )
}

export default Logo;