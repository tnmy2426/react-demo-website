import React, { useState } from 'react';

const Contact = () => {

    const [inputData, setInputData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        number: "",
        message: ""
    })
    const inputHandler = (event) => {
        const { name, value } = event.target
        setInputData((preValue) => {
            return {
                ...preValue, [name]: value
            }
        });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`
        Your Name is: ${inputData.firstName} ${inputData.lastName}
        Your Email is: ${inputData.email}
        Your Mobile No: ${inputData.number}
        Your Messages: ${inputData.message}
        `)
    };

    return (
        <>
            <section className="contact_container">
                <div className="my-4 p-2">
                    <h1 className="heading">Contact Us</h1>
                </div>
                <div className="container">
                    <form onSubmit={formSubmit}>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-10 mx-auto">
                                <div className='mb-3'>
                                    <label htmlFor="#firstNameInput" className='form-label'>First Name</label>
                                    <input
                                        type="text"
                                        id="firstNameInput"
                                        className="form-control"
                                        name="firstName"
                                        onChange={inputHandler}
                                        value={inputData.firstName}
                                        placeholder="Enter your First Name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="#lastNameInput" className='form-label'>Last Name</label>
                                    <input
                                        type="text"
                                        id="lastNameInput"
                                        className="form-control"
                                        name="lastName"
                                        onChange={inputHandler}
                                        value={inputData.lastName}
                                        placeholder="Enter your Last Name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="#emailInput" className='form-label'>Email</label>
                                    <input
                                        type="email"
                                        id="emailInput"
                                        className="form-control"
                                        name='email'
                                        onChange={inputHandler}
                                        value={inputData.email}
                                        placeholder="example@mail.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="#numberInput" className='form-label'>Mobile No</label>
                                    <input
                                        type="number"
                                        id="numberInput"
                                        className="form-control"
                                        name='number'
                                        onChange={inputHandler}
                                        value={inputData.number}
                                        placeholder="Enter your Mobile Number" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="#messageInput" className='form-label'>Message</label>
                                    <textarea
                                        name="message"
                                        className="form-control"
                                        id="messageInput"
                                        rows="3"
                                        placeholder="Say something about yourself..."
                                        value={inputData.message}
                                        onChange={inputHandler}>
                                    </textarea>
                                </div>
                                <div className="mb-3">
                                    <button
                                        type="submit"
                                        className=" btn about_btn">Submit Form</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact
