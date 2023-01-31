import React, { useEffect, useState } from 'react'
// import { useQuery } from "react-query";
// import axios from "axios";
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { signupWithOTP, reset } from '@/redux/features/authSlice';
import toast from "react-hot-toast";


const SignupPage = () => {

    const router = useRouter();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");

    const dispatch = useDispatch();

    const {userId, isError, isLoading, isSuccess, message, isAuthenticated} = useSelector(state => state.auth);

    useEffect(() => {
        if (isError && message) {
            toast.error(`${message}`, {
                position: "bottom-center",
            });
        }

        if (isAuthenticated || userId) {
            router.push("/");
        }

        dispatch(reset());
    }, [isError, message, router, userId, dispatch, isAuthenticated]);

    // const getOtpForUserSignup = () => { 
    //     const config = {
    //         headers: { 
    //             "Content-Type": "application/json", 
    //             "Accept": "application/json" 
    //         },
    //     }
    //     return axios.post(`${FROM_API_URL}/v1/accounts/signup-user/`, config) 
    // }

    // const {data, error, isLoading, isFetching, failureCount, refetch} = useQuery(
    //     'getSignupOTP', 
    //     getOtpForUserSignup,
    //     {
    //         // cacheTime: 5000,
    //         // staleTime: 30000
    //         refetchOnMount: false, //true by default
    //         refetchOnWindowFocus: false, //by default true --> for using refetch fn for on click event
    //         // refetchInterval: 3000,
    //         // refetchIntervalInBackground: true,
    //         enabled: false  //--> for using refetch fn for on click event
    //     }
    // )


    if (isLoading) {
        return (
            <h2 className="flex justify-center items-center text-center text-lg text-black font-semibold min-h-screen">Loading...</h2>
            // <div className="flex justify-center items-center text-center min-h-screen">
            //     <Spinner />
            // </div>
        )
    }

    if (isError) {
        return <h2 className="flex justify-center items-center text-center text-lg text-black font-semibold min-h-screen space-x-2">
                    {"Something went wrong"}
                </h2>
    }

    // if (data) {
    //     console.log(data.data);
    // }

    const submitHandler = (e) => {
        e.preventDefault();

        if (!firstName) {
            toast.error("First Name must be Provided", {
                position: "bottom-center",
            });
        }

        if (!lastName) {
            toast.error("Last Name must be Provided", {
                position: "bottom-center",
            });
        }

        if (!email) {
            toast.error("Email must be Provided", {
                position: "bottom-center",
            });
        }

        if (!mobile) {
            toast.error("Mobile must be Provided", {
                position: "bottom-center",
            });
        }

        const userData = {
            firstName, lastName, email, mobile
        };

        // console.log(userData);
        dispatch(signupWithOTP(userData));
        if (!isLoading) {
            router.push("/signup-confirm-otp");
        }
        // toast.success(`OTP Sent on ${mobile}`, {
        //     position: "bottom-center",
        // });
    }


    return (
        <>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-16 mb-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <Image className="mx-auto h-24 lg:h-36 w-auto" src="/24Aryavrat-logo.png" alt="24Aryavrat Logo" height={500} width={500} />
                        <h2 className="mt-6 text-center text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Create an Account</h2>
                            <p className="text-center justify-center mt-4 mb-4">OR</p>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            <Link href="/login" className="font-medium text-blue-800 hover:text-indigo-500">Already have an Account?</Link>
                        </p>
                        <p className="mt-6 text-center text-sm text-gray-600">
                            Some of Pages are under maintainance, but you can Create an Account.
                        </p>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Very Soon all products gets available.
                        </p>
                        
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={submitHandler}>
                        <input type="hidden" name="remember" value="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="otpControlForm" className="inline-block form-label mb-2 text-gray-700">
                                    First Name
                                </label>
                                <input 
                                    id="firstName" 
                                    name="firstName" 
                                    type="text" 
                                    required 
                                    className="
                                        form-control
                                        block
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
                                    placeholder="Enter First Name" 
                                    value={firstName} 
                                    onChange={(e)=>setFirstName(e.target.value)} 
                                />
                            </div>
                            <div>
                                <label htmlFor="otpControlForm" className="inline-block form-label mt-2 mb-2 text-gray-700">
                                    Last Name
                                </label>
                                <input 
                                    id="lastName" 
                                    name="lastName" 
                                    type="text" 
                                    required 
                                    className="
                                        form-control
                                        block
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
                                    placeholder="Enter last Name" 
                                    value={lastName} 
                                    onChange={(e)=>setLastName(e.target.value)} 
                                />
                            </div>
                            <div>
                                <label htmlFor="otpControlForm" className="inline-block form-label mt-2 mb-2 text-gray-700">
                                    Email
                                </label>
                                <input 
                                    id="email" 
                                    name="email" 
                                    type="email" 
                                    required 
                                    className="
                                        form-control
                                        block
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
                                    placeholder="Enter Valid Email address" 
                                    value={email} 
                                    onChange={(e)=>setEmail(e.target.value)} 
                                />
                            </div>
                            <div>
                                <label htmlFor="otpControlForm" className="inline-block form-label mt-2 mb-2 text-gray-700">
                                    Mobile Number
                                </label>
                                <input 
                                    id="mobile" 
                                    name="mobile" 
                                    type="mobile" 
                                    required 
                                    className="
                                        form-control
                                        block
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
                                    placeholder="Enter Valid Mobile number" 
                                    value={mobile} 
                                    onChange={(e)=>setMobile(e.target.value)} 
                                />
                            </div>
                        </div>

                        {/* <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                            </div>

                            <div className="text-sm">
                                <Link href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</Link>
                            </div>
                        </div> */}

                        <div>
                            <button type="submit" className="flex mx-auto mt-4 mb-10 rounded-md bg-blue-800 py-2 px-12 font-semibold shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-[2px] hover:bg-orange-600 hover:shadow-orange-500/40 text-white">
                                Create Account
                            </button>
                        </div>
                        <div>
                            <p className="text-center text-sm font-semibold text-red-500">
                                Note - OTP Bases Account creation is there. Please make sure to use Valid Email Only.
                            </p>
                        </div>
                        {/* <div className="text-sm text-center justify-center">
                            <Link href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Already have an Account?</Link>
                        </div> */}
                        <div className="text-sm text-center justify-center">
                            <p>You will recieve OTP on Entered Email.</p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignupPage