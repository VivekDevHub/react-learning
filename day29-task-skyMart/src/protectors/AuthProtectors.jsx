import React, { useEffect } from 'react';
import { load } from '../lib/LocalStorage';
import { Outlet, useNavigate } from 'react-router';
import { showErrorToast } from '../lib/toastUtil';

const AuthProtectors = () => {

    let user = load("logUser");
    let navigate = useNavigate();

    useEffect(() => {

        if (user.name == undefined) {
            showErrorToast("Please Login first");
            navigate("/login");
            return;
        }
    }, [])

    return <Outlet />;
}

export default AuthProtectors