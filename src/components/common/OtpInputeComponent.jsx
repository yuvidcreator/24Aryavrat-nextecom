import { useState } from 'react';
// import OtpInput from 'react-otp-input';

const OTPInputPage = () => {

    const [otp, setOtp] = useState();

    const handleChange = () => {

    }

    return (
        <div className="flex text-center justify-center items-center min-h-screen">
            {/* <OtpInput 
                value={otp}
                onChange={handleChange}
                numInputs={6}
                separator={<span> - </span>}
                inputStyle={"text-5xl border-2 space-x-2"}
                focusStyle={true}
            /> */}

            {/* <div className="bg-blue-500 py-20 px-3"> */}
                {/* <div className="container mx-auto"> */}
                    {/* <div className="max-w-sm mx-auto md:max-w-lg"> */}
                        <div className="w-full">
                            <div className="bg-white h-64 py-3 rounded text-center">
                                <h1 className="text-2xl font-bold">OTP Verification</h1>
                                <div className="flex flex-col mt-4">
                                    <span>Enter the OTP you received at</span>
                                    <span className="font-bold">+91 ******876</span>
                                </div>
                                
                                <div id="otp" className="flex flex-row justify-center text-center px-2 mt-5">
                                    <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="first" maxLength="1" /> 
                                    <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="second" maxLength="1" /> 
                                    <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="third" maxLength="1" /> 
                                    <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="fourth" maxLength="1" />
                                    <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="fifth" maxLength="1" /> 
                                    <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="sixth" maxLength="1" />
                                </div>
                                
                                <div className="flex justify-center text-center mt-5">
                                    <a className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer"><span className="font-bold">Resend OTP</span><i className='bx bx-caret-right ml-1'></i></a>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
                {/* </div> */}
            {/* </div> */}
        </div>
    )
}

export default OTPInputPage