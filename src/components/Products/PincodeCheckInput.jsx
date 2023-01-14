import axios from 'axios';
import React, { useState } from 'react';
import toast from "react-hot-toast";

const PincodeCheckInput = () => {

    const [pinCode, setPinCode] = useState();
    const [service, setService] = useState(false);

    const onChangePin = (e) => {
        // e.preventDefault();
        // console.log(e.target.value);
        setPinCode(e.target.value);
    }

    const getAvailablePincodes = async () => {
        console.log("Clicked");
        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        };
        const getPincode = await axios.get("http://localhost:3000/api/pincode/codes", config)
        const pins = getPincode.data.pins

        // console.log(getPincode.data.pins, pinCode)
        if (pins.includes(pinCode)) {
            setService(true);
            console.log(pinCode);
            toast.success(
                `${"Yes.. We deliver at entered Pincode."}`, {
                position: "bottom-center",
            });
        } else {
            setService(false);
            console.log(pinCode);
            toast.error(
                `${"Sorry.!! We dont delivery at this Pincode."}`, {
                position: "bottom-center",
            });
        }
    };

    return (
        <>
            <div className="pincode mt-12 flex space-x-2 text-sm">
                {/* <h3>Pinconde Availability: </h3> */}
                <input 
                    type="text" 
                    name="pincode" 
                    value={pinCode}
                    onChange={(e)=>onChangePin(e)} 
                    className="border rounded-md py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-purple-500" 
                    // defaultValue={"Check Delivery Pincodes"}
                    placeholder='Enter Pincode'
                />
                <button 
                    onClick={getAvailablePincodes} 
                    className="flex w-fit space-x-2 rounded-md bg-orange-600 px-4 py-3 font-semibold shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-[2px] hover:bg-black hover:shadow-blue-800/20 text-white"
                >
                    Check
                </button>
            </div>
            <div className="text-sm mt-3">
            {/* {    pinCode? (
                    <>
                        { service && service != null && 
                            <div className="text-green-600">
                                <p>We delivery at this Pincode.</p>
                            </div>
                        }

                        { !service && service != null && 
                            <div className="text-red-600">
                                <p>Sorry.!! We dont delivery at this Pincode.</p>
                            </div>
                        }
                    </>
                ) : (
                    <></>
                )
            } */}
                {
                    pinCode ? (
                        <>
                            { 
                                (service && service != null) ? (
                                    <div className="text-green-600">
                                        <p>We delivery at this Pincode.</p>
                                    </div>
                                ) : (
                                    <div className="text-red-600">
                                        <p>Sorry.!! We dont delivery at this Pincode.</p>
                                    </div>
                                )
                            }
                        </>
                    ) : (
                        <></>
                    )
                }
            </div>
        </>
    )
}

export default PincodeCheckInput;