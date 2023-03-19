import { useState } from "react";


const Subscribe = () => {
    const [ person, setPerson ] = useState({email: ''})
    const [ subscriberList, setSubscriberList ] = useState([])

    const handleInputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setPerson({...person, [name]: value});
    }

    const handleAddSubscriber = (e) => {
        e.preventDefault();
        if (person.email) {
            const newPerson = { ...person, id: new Date().getTime().toString()}
            setSubscriberList([...subscriberList, newPerson])
            setPerson({email: ''})
        }
    }

    return (
        <div className="subscribe-div">
            <h2>Let's help you <span className="blue-text">grow</span> your
             business to <span className="blue-text">greater</span> heights</h2>

             <div className="subscribe-form">
                <form onSubmit={(e) => handleAddSubscriber(e)} >
                    <input type="email" onChange={(e)=> handleInputChange(e) } name="email" defaultValue="" id="subscribe-field" placeholder="Enter your Email" />
                    <button className="get-started btn" type="submit">Subscribe</button>
                </form>
             </div>
        </div>
    )
}

export default Subscribe;