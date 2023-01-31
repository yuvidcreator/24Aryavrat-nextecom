import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { login, reset } from '@/redux/features/authSlice';
import toast from "react-hot-toast";

const LoginPage = () => {

    const router = useRouter();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const {user, userId, isError, isLoading, isSuccess, message, isAuthenticated} = useSelector(state => state.auth);

    // console.log(data);

    // console.log(isError, "Message -->", message)

    useEffect(() => {
        if (!isAuthenticated && (user === null) && isError && message) {
            toast.error(`${message}`, {
                position: "bottom-center",
            });
        }
    
        if (isAuthenticated) {
            router.push("/");
        }
        // dispatch(reset());
    // }, [isError, message,userId, isAuthenticated, router, dispatch]);
    }, [isAuthenticated, user, isError, message, router]);

    const submitHandler = (e) => {
        e.preventDefault();

        // if (!email) {
        //     toast.error("Email must be Provided", {
        //         position: "bottom-center",
        //     });
        // }

        // if (!password) {
        //     toast.error("Password must be Provided", {
        //         position: "bottom-center",
        //     });
        // }

        const userData = {
            email, password
        };

        dispatch(login(userData));
    }

    return (
        <>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-16 mb-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <Image className="mx-auto h-24 md:h-36 w-auto" src="/24Aryavrat-logo.png" alt="24Aryavrat Logo" height={500} width={500} />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
                            <p className="text-center justify-center mt-4 mb-4">OR</p>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            <Link href="/signup-with-otp" className="font-medium text-blue-800 hover:text-indigo-500">Create an Account</Link>
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
                                <label htmlFor="emailormobile" className="inline-block form-label mt-2 mb-2 text-gray-700">
                                    Registered Email
                                </label>
                                <input 
                                    id="emailormobile" 
                                    name="emailormobile" 
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
                                    placeholder="Enter Email id" 
                                    value={email} 
                                    onChange={(e)=>setEmail(e.target.value)} 
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="inline-block form-label mt-2 mb-2 text-gray-700">
                                    Password
                                </label>
                                <input 
                                    id="password" 
                                    name="password" 
                                    type="password"  
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
                                    placeholder="Password" 
                                    value={password} 
                                    onChange={(e)=>setPassword(e.target.value)} 
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
                                Sign in
                            </button>
                        </div>
                        <div className="text-sm text-center justify-center">
                            {/* <Link href="/forget-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot your password?
                            </Link> */}
                            <Link href="https://wa.me/919970948096/" target={"_blank"} className="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot your password?
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage