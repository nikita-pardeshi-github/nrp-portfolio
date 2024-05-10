import React, { useEffect } from 'react'
import './Contact.css'

const Contact = (props) => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, []);

    document.title = 'Contact Nikita Pardeshi'
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "a05aefdb-2bc8-444e-877c-1c0e057ccf75");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message)
            //   console.log("Hello Nikita")
        }
    };

    return (
        <div className='contact-class'>
            <h3>Let's Connect</h3>
            <br></br>
            <p>Have a project in mind or just want to say hello?
                I'd love to hear from you! Feel free to reach out using the form below,
                and I'll get back to you as soon as possible.
            </p>
            <br></br>
            <form className='contact-form' onSubmit={onSubmit}>
                <label className='form-label'>Name</label><br />
                <input type='text' placeholder='Enter your name' name='name' /><br /><br />

                <label className='form-label'>Email</label><br />
                <input type='email' placeholder='Enter your email' name='email' /><br /><br />

                <label className='form-label'>Comment</label><br />
                <textarea placeholder='Enter your message' name='message' /><br /><br />

                <button id="submit-button" className='contact-submit' type='submit'>Submit</button><br />
            </form>
        </div>
    )
}

export default Contact;