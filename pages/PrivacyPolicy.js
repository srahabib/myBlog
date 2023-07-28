import react from 'react';
import {useRouter} from 'next/router';

const PrivacyPolicy = () => {

    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="lg:w-10/12 w-full">
            <p className="text-2xl font-semibold md:text-3xl">Privacy Policy</p>
            <p className="mt-4 mb-8 text-gray-400">
                This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from us.
            </p>
            <p className="text-xl font-semibold md:text-2xl">Information We Collect</p>
            <p className="mt-4 mb-8 text-gray-400">
            We may collect personal information, such as your name and email address, when you voluntarily provide it to us through our contact forms, comment sections, or newsletter subscription.
            </p>
            <p className="mt-4 mb-8 text-gray-400">
            We may also collect non-personal information, such as browser type, device information, and IP addresses, to analyze website trends and improve user experience.
            </p>
            <p className="text-xl font-semibold md:text-2xl">Use of Information</p>
            <p className="mt-4 mb-8 text-gray-400">
            Personal Information: We may use your personal information to respond to your inquiries, send you newsletters, or provide you with information related to your interactions with us.
            </p>
            <p className="mt-4 mb-8 text-gray-400">
            Non-Personal Information: Non-personal information is used to analyze trends, track user interactions, and gather demographic information for website improvement.
            </p>
            <p className="text-xl font-semibold md:text-2xl">Cookies and Similar Technologies</p>
            <p className="mt-4 mb-8 text-gray-400">
            We use cookies and similar technologies to enhance your experience on our website. Cookies are small files that are stored on your device and enable certain features and functionality. You can modify your browser settings to decline cookies or notify you when a cookie is being sent. However, please note that some parts of our website may not function correctly if you disable cookies.
            </p>
            <p className="text-xl font-semibold md:text-2xl">Third-Party Services</p>
            <p className="mt-4 mb-8 text-gray-400">
            We may use third-party services, such as Google Analytics, to analyze website traffic and improve our services. These third-party providers have their privacy policies and may use cookies and similar technologies. We do not have control over their practices, so we encourage you to review their privacy policies.
            </p>

            <p className="text-xl font-semibold md:text-2xl">Security</p>
            <p className="mt-4 mb-8 text-gray-400">
            We implement reasonable security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, please understand that no data transmission over the internet or electronic storage method is entirely secure.
            </p>

            <p className="text-xl font-semibold md:text-2xl">Children's Privacy</p>
            <p className="mt-4 mb-8 text-gray-400">
            Our website is not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided personal information on our website, please contact us, and we will take steps to remove that information from our records.
            </p>

            <p className="text-xl font-semibold md:text-2xl">Changes to This Privacy Policy</p>
            <p className="mt-4 mb-8 text-gray-400">
            We reserve the right to update or change this Privacy Policy at any time without prior notice. Any changes will be posted here, and the "Effective Date" will be revised accordingly.
            </p>

            <p className="text-xl font-semibold md:text-2xl">Contact Us</p>
            <p className="mt-4 mb-8 text-gray-400">
            If you have any questions about this Privacy Policy, please contact us from the contact page.
            </p>
    </div>
      </div>
    )
}

export default PrivacyPolicy;

