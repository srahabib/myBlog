import React, { useRef , useState , useEffect} from 'react'
import { SubmitEmail } from '../services'

const Newsletter = () => {
const [email, setEmail] = useState("");
const [emailError, setEmailError] = useState("");
const [emailValid, setEmailValid] = useState(false);
const Email = useRef();


const handleNewsLetter = (e) => {
    setEmailError(false);
    e.preventDefault();
    setEmail(e.target.value);
    if (e.target.value.length > 0) {
        setEmailError("");
        setEmailValid(true);
    } else {
        setEmailError("Please enter your email");
        setEmailValid(false);
    }

    console.log(email);

    const EmailObj = {
        email
    }

    SubmitEmail(EmailObj).then((result) => {
        setEmailValid(true);
        console.log(result);
        setTimeout(() => {
            setEmailValid(false);
        }
        , 3000);
    })
}







  return (
    <div>
        <section class="bg-pink-200 ">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-md sm:text-center">
                <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-white sm:text-4xl ">Sign up for our newsletter</h2>
                <p class="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl ">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
                <form action="#">
                    <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                        <div class="relative w-full">
                            <label for="email" class="hidden mb-2 text-sm font-medium text-gray-900 ">Email address</label>
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg class="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                            </div>
                            <input ref={Email} class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 " placeholder="Enter your email" type="email" id="email" required="" name="Email"/>
                        </div>
                        <div>
                            <button onClick={handleNewsLetter} type="submit" class=" bg-pink-500 py-3 px-5 w-full text-sm font-medium text-center rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 text-white">Subscribe</button>
                        </div>
                        {emailValid && <div className="text-green-500">Valid</div>}
                    </div>
                    <div class="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer ">We care about the protection of your data. <a href="#" class="font-medium text-primary-600 hover:underline">Read our Privacy Policy</a>.</div>
                </form>
            </div>
        </div>
        {emailError && <div className="text-red-500">Error message</div>}
        </section>
      
    </div>
  )
}

export default Newsletter
