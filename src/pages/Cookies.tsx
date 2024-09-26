const Cookies = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>
            <p className="mb-4">
                This website uses cookies to enhance user experience. By using our website, you consent to all cookies in accordance with our Cookie Policy.
            </p>
            <h2 className="text-2xl font-semibold mt-6">What Are Cookies?</h2>
            <p className="mb-4">
                Cookies are small text files that are used to store small pieces of information. They are stored on your device when the website is loaded on your browser.
            </p>
            <h2 className="text-2xl font-semibold mt-6">How We Use Cookies</h2>
            <ul className="list-disc ml-6 mb-4">
                <li>To remember your preferences.</li>
                <li>To understand how you interact with our website.</li>
                <li>To analyze our traffic.</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-6">Managing Cookies</h2>
            <p className="mb-4">
                You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can modify your browser setting to decline cookies if you prefer.
            </p>
            <h2 className="text-2xl font-semibold mt-6">Changes to Our Cookie Policy</h2>
            <p className="mb-4">
                We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.
            </p>
            <p className="mt-4">
                If you have any questions about our Cookie Policy, please contact us at: <a href="mailto:support@example.com" className="text-blue-500">support@example.com</a>
            </p>
        </div>
    )
}

export default Cookies