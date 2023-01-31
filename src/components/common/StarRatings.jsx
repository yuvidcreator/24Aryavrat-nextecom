import { Fragment } from "react";
import { FaStar } from "react-icons/fa";


const StarRatings = (props) => {
    // console.log((props));
    return (
        <>
            <div className="p-2">
                <div className="flex flex-wrap">
                    { 
                        [...Array(props.number), props.id].map((i, num)=> {
                            // console.log(i, num);
                            const ratingValue = i + 1;
                            return (
                                <label key={num}>
                                    <FaStar className="w-5 text-yellow-500" />
                                </label>
                            )
                        }) 
                    }
                </div>
            </div>
        </>
    )
}

export default StarRatings