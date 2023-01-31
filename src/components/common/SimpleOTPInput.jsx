import React, { useState } from 'react'

const SimpleOTPInput = ({otp}) => {

    const [otpProp, setOtpProp] = useState();

    const handleNumChange = (e) => {
        const limit = 6;
        setOtpProp(e.target.value.slice(0, limit));
    };

    return (
        <>
            <div className="flex justify-center text-center min-h-screen">
                <div className="mb-3 xl:w-96">
                    <label htmlFor="otpControlForm" className="flex form-label mb-2 text-gray-700 justify-center text-center">
                        Enter Recieved OTP
                    </label>
                    <input
                        className="
                            form-control
                            flex
                            justify-center
                            text-center
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                        type="number"
                        id="otp"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={handleNumChange}
                        pattern="[0-9]{1,6}"
                        title="OTP must be 6 digit numbers."
                    />
                </div>
            </div>
        </>
    )
}

export default SimpleOTPInput