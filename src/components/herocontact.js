import React, { useState } from "react";

const FORM_ENDPOINT = " https://public.herotofu.com/v1/ee330890-566d-11ee-844c-3ff971b55902";

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();

        const inputs = e.target.elements;
        const data = {};

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].name) {
                data[inputs[i].name] = inputs[i].value;
            }
        }

        fetch(FORM_ENDPOINT, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Form response was not ok');
                }

                setSubmitted(true);
            })
            .catch((err) => {
                // Submit the form manually
                e.target.submit();
            });
    };

    if (submitted) {
        return (
            <>
                <div className="text-2xl">Thank you!</div>
                <div className="text-md">We'll be in touch soon.</div>
            </>
        );
    }

    return (
        <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
        >
            <h2 className="font-bold mb-5">Contact me</h2>
            <div className="pt-0 mb-3">
                <input
                    type="text"
                    placeholder="Your name"
                    name="name"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    required
                />
            </div>
            <div className="pt-0 mb-3">
                <input
                    type="email"
                    placeholder="Your email"
                    name="email"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    required
                />
            </div>
            <div className="pt-0 mb-3">
                <textarea
                    placeholder="Your message"
                    name="message"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    required
                />
            </div>
            <div className="pt-0 pt-3 mb-3">
                <button
                    className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full"
                    type="submit"
                >
                    Send a message
                </button>
            </div>
        </form>
    );
};

export default ContactForm;