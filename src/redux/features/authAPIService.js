import axios from 'axios';



const SIGNUP_WITH_OTP_URL = "/api/auth/signupwithotp/";
const SIGNUP_CONFIRM_OTP_URL = "/api/auth/signupconfirmotp/";
const SIGNUP_SET_PASSWORD_URL = "/api/auth/signupsetpassword/";
const LOGIN_URL = "/api/auth/login/";
const VERIFY_URL = "/api/auth/verify/";
const LOGOUT_URL = "/api/auth/logout/";
const GET_USER = "/api/auth/user/";


// Signup with OTP
const signupWithOTP = async (userData) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    };

    const response = await axios.post(SIGNUP_WITH_OTP_URL, userData, config);

    // console.log(response.data);

    return response.data;
};


// Confirm Signup OTP
const signupConfirmOTP = async (otpData) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    };

    const response = await axios.post(SIGNUP_CONFIRM_OTP_URL, otpData, config);

    // console.log(response.data);

    return response.data;
}


// Set Password for Signup Process
const signupSetPassword = async (signupSetPasswordData) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    };

    const response = await axios.post(SIGNUP_SET_PASSWORD_URL, signupSetPasswordData, config);

    // console.log(response.data);

    return response.data;
}


// Login 
const login = async (userData) => {
    // console.log(userData);
    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    };

    const response = await axios.post(LOGIN_URL, userData, config);
    
    // console.log(response.data.user);
    // console.log(response.data.message);

    if (response.data === "200") {
        return (response.data);
    } else {
        return (response.data);
    }

};


const user_auth_status = async() => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    };

    const response = await axios.get(VERIFY_URL, config);

    // console.log(response.status);

    return (response.data);
}


const getUser = async() => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    };

    const response = await axios.get(GET_USER, config);

    return (response.data);
}


const logout = async() => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    };
    const response = await axios.post(LOGOUT_URL, config);
    // console.log(response.data);
    return (response.data);
}




const authAPIService = { 
    login, 
    logout, 
    getUser, 
    user_auth_status, 
    signupWithOTP, 
    signupConfirmOTP, 
    signupSetPassword 
};

export default authAPIService;