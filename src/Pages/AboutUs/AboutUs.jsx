import React from 'react';

const AboutUs = () => {
    return (
        <div className="w-10/12 md:w-5/6 lg:w-5/7 mx-auto px-4 md:px-20 py-10 space-y-16">

            <title>ToyTopia | About Us</title>

            <section className="text-center space-y-3">
                <h1 className="text-4xl font-bold text-[#796363]">About ToyTopia</h1>
                <p className="text-lg text-gray-600">
                    A colorful digital space built for toy lovers, parents, and local creators.
                </p>
            </section>

            <section>
                <p className="text-gray-600 leading-relaxed">
                    ToyTopia is a simple and community-focused online platform where families can
                    explore creative toys, discover local sellers, and enjoy a smooth browsing
                    experience. We believe toys are not just products—they are tiny sparks that
                    ignite imagination, learning, and joy.
                    <br /><br />
                    Our platform connects trusted toy makers with parents looking for safe and
                    interesting items for their children.
                </p>
            </section>

            <section className="space-y-3 text-center">
                <h2 className="text-3xl font-semibold">Our Mission</h2>
                <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    At ToyTopia, our goal is simple: support local toy creators and make high-quality,
                    affordable toys accessible to everyone.
                    <br /><br />
                    We aim to build a safe, friendly, and transparent toy marketplace where parents
                    feel confident and sellers feel encouraged to grow.
                </p>
            </section>

            <section>
                <h2 className="text-3xl font-semibold mb-4 text-center">Our Values</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 shadow rounded-xl bg-gray-100">
                        <h4 className="font-medium text-lg">Community Focus</h4>
                        <p className="text-sm text-gray-600 mt-2">
                            We prioritize local sellers and families, building trust and connection.
                        </p>
                    </div>
                    <div className="p-6 shadow rounded-xl bg-green-100">
                        <h4 className="font-medium text-lg">Creativity & Fun</h4>
                        <p className="text-sm text-gray-600 mt-2">
                            Toys should inspire imagination, learning, and joy for every child.
                        </p>
                    </div>
                    <div className="p-6 shadow rounded-xl bg-yellow-100">
                        <h4 className="font-medium text-lg">Transparency</h4>
                        <p className="text-sm text-gray-600 mt-2">
                            Honest ratings and clear information help families make confident choices.
                        </p>
                    </div>
                    <div className="p-6 shadow rounded-xl bg-pink-100">
                        <h4 className="font-medium text-lg">Safety First</h4>
                        <p className="text-sm text-gray-600 mt-2">
                            Only toys that meet trusted safety standards are showcased.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
