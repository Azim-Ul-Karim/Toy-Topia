import React from 'react';

const Support = () => {
    return (
        <div className="w-10/12 md:w-5/6 lg:w-5/7 mx-auto px-4 md:px-20 py-10 space-y-16">

            <title>ToyTopia | Support</title>

            <section className="text-center space-y-3">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#796363]">Support Center</h1>
                <p className="text-gray-600">
                    Find answers, solve issues, and get the help you need.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
                <div className="px-4 space-y-3">
                    <details className="collapse bg-base-200">
                        <summary className="collapse-title font-medium">How do I try a toy?</summary>
                        <div className="collapse-content">Browse Toys → Open details → Try Now</div>
                    </details>

                    <details className="collapse bg-base-200">
                        <summary className="collapse-title font-medium">Are toys safe?</summary>
                        <div className="collapse-content">All toys are reviewed by sellers and parents with reliable ratings.</div>
                    </details>

                    <details className="collapse bg-base-200">
                        <summary className="collapse-title font-medium">How can I browse toys?</summary>
                        <div className="collapse-content">
                            You can explore all toys from the “Toys” page.
                        </div>
                    </details>

                    <details className="collapse bg-base-200">
                        <summary className="collapse-title font-medium">What should I do if my profile picture doesn’t load?</summary>
                        <div className="collapse-content">
                            The system automatically uses a default fallback image. You can re-upload your picture from your account settings.
                        </div>
                    </details>

                    <details className="collapse bg-base-200">
                        <summary className="collapse-title font-medium">How can I share feedback about ToyTopia?</summary>
                        <div className="collapse-content">
                            Use the “Feedback” page to share your experience, suggestions, or issues with the platform.
                        </div>
                    </details>
                </div>
            </section>

            <section className="text-center space-y-3">
                <h3 className="text-xl font-semibold">Still Need Help?</h3>
                <p className="text-gray-600">Reach out to our team anytime at support@toytopia.com</p>
            </section>
        </div>
    );
};

export default Support;