// import React, {useState} from 'react';
import React from 'react';
// import { validateEmail } from '../../utils/helper';

function Contact(){
  // const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  //   // const { name, email, message } = formState;

  //   const [errorMessage, setErrorMessage] = useState('');

    // function handleChange(e) {
    //     if (e.target.name === 'email') {
    //         const isValid = validateEmail(e.target.value);

    //         console.log(isValid);

    //         if (!isValid) {
    //             setErrorMessage('Your email is invalid.');
    //         } else {
    //             setErrorMessage('');
    //         }
    //     } else {
    //         if (!e.target.value.length) {
    //             setErrorMessage(`${e.target.name} is required`);
    //         } else {
    //             setErrorMessage('');
    //         }
    //     }

    //     if (!errorMessage) {
    //         setFormState({ ...formState, [e.target.name]: e.target.value });
    //     }


    //     console.log('errorMessage ' + errorMessage);
    // }

    return (
        <section className="contact-cont border section-bkg">
            <div className="row">
                <div className="col-sm">
                    <h1 className="p-3">Contact Information </h1>
                    <h4 className="p-3">Click on my contact info below to get in touch!</h4>
                    <ul>
                        <li>
                            Phone: <a className="contact-link" href="t">(310) 968 3778</a>
                        </li>
                        <li>
                            Email: <a className="contact-link" href="mailto:juliangraves96@gmail.com@gmail.com">juliangraves96@gmail.com</a>
                        </li>
                        <li>
                            LinkedIn: <a className="contact-link" href="https://www.linkedin.com/i/" target="_blank">juliangraves</a> 
                        </li>
                        <li>
                            GitHub: <a className="contact-link" href="https://github.com/Badjuju666" target="_blank">juliangraves</a> 
                        </li>
                    </ul>
                    <p>Any form of contact convient to you is acceptlbe.</p>
                </div>
            </div>
        </section>
    );
}


export default Contact;
