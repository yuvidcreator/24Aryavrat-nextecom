import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { login, reset } from '@/redux/features/authSlice';
import toast from "react-hot-toast";

const ForgetPasswordPage = () => {

    const router = useRouter();
    
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();

    const {userId, isError, isLoading, isSuccess, message, isAuthenticated} = useSelector(state => state.auth);

    useEffect(() => {
        if (isError && message) {
            toast.error(`${message}`, {
                position: "bottom-center",
            });
        }

        if (isAuthenticated || userId ) {
            router.push("/");
        }

        dispatch(reset());
    }, [isError, message, userId, isAuthenticated, router, dispatch]);

    const submitHandler = (e) => {
        e.preventDefault();

        if (!email) {
            toast.error("Email must be Provided", {
                position: "bottom-center",
            });
        }

        const userData = {
            email
        };

        console.log(userData);
        // dispatch(login(userData));
    }

    return (
        <>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-16 mb-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <Image className="mx-auto h-24 md:h-36 w-auto" src="/24Aryavrat-logo.png" alt="24Aryavrat Logo" height={500} width={500} />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Reset Password</h2>
                            <p className="text-center justify-center mt-4 mb-4">OR</p>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            <Link href="/signup-with-otp" className="font-medium text-blue-800 hover:text-indigo-500">Create an Account</Link>
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={submitHandler}>
                        <input type="hidden" name="remember" value="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="email" className="flex justify-center text-center form-label mt-2 mb-2 text-gray-700">
                                    Enter Registered Email
                                </label>
                                <input 
                                    id="email" 
                                    name="email" 
                                    type="email" 
                                    required 
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
                                    placeholder="Email address" 
                                    value={email} 
                                    onChange={(e)=>setEmail(e.target.value)} 
                                />
                            </div>
                            <div>
                                <button type="submit" className="flex mx-auto mt-4 mb-10 rounded-md bg-blue-800 py-2 px-12 font-semibold shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-[2px] hover:bg-orange-600 hover:shadow-orange-500/40 text-white">
                                    Request OTP
                                </button>
                            </div>
                            <div className="text-sm text-center justify-center">
                                <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Already have an Account?</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ForgetPasswordPage