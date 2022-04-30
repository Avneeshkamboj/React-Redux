import React from "react";
import { useDispatch } from "react-redux";
import { contactsub } from "../features/contactform";

function Contact() {
    const dispatch = useDispatch();

    const test = () => {
        alert("this is working");
    }
/*    const formres = async (e) => {
        e.preventDefault();
    await fetch("https://reactdb-cb03c-default-rtdb.firebaseio.com//reactdb.json",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringyfy({
                name: "Avneesh",
                phone: "8888746512",
                email: "ak@mymail.com",
                message: "this is test message",
            })
            
}
    )
} */

return (
    <div>
        <button
            onClick={() => {
                dispatch(contactsub(test));
            }}
        >
            Submit
        </button>
    </div>
)
}

export default Contact