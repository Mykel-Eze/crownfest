import "../assets/css/home.css"

import CtaWidget from "../components/CtaWidget";

const Home = () => {
    return (
        <div className="home-wrapper">
            <header id="home">
                <div className="container rel full-height">
                    <div className="header-content-wrapper">
                        <div className="header-txt-side">
                            <h1>Unlock the Power of AI-Driven Talent Acquisition and Business Consulting</h1>
                            <p>Optimize your recruitment process and business operations with CrownForte's innovative AI solutions.</p>
                            <a href="mailto:crownforteconsults@gmail.com" className="cta-btn hover-scale">Book Your Free Consultation Now</a>
                        </div>
                        <div className="header-img-side">
                            <img src={require("../assets/images/home-img.png")} alt="home" />
                        </div>
                    </div>
                </div>
            </header>

            <section id="about">
                <div className="row">
                    <div className="container rel">
                        <h2 className="section-title center">About CrownForte</h2>
                        <div className="just-txt">
                            <p>
                                CrownForte is a cutting-edge SaaS platform designed to revolutionize talent acquisition and business
                                consulting. Our AI-driven solutions help startups and SMEs streamline recruitment processes, enhance
                                operational efficiency, and drive business growth. With a focus on the IT, telecom, manufacturing, and
                                healthcare sectors, CrownForte is your trusted partner in navigating the complexities of modern business.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services">
                <div className="row">
                    <div className="container rel">
                        <h2 className="section-title center">Our Services</h2>
                        <div className="services-wrapper">
                            <div className="services-block">
                                <img src={require("../assets/images/talent.png")} alt="block-img" />
                                <h4>AI-Powered Talent Acquisition</h4>
                                <p>Leverage our AI technology to find the best candidates quickly and efficiently. Our advanced algorithms
                                    match your job requirements with top talent, ensuring the perfect fit for your organization.</p>
                            </div>
                            <div className="services-block">
                                <img src={require("../assets/images/resume-review.png")} alt="block-img" />
                                <h4>Automated Resume Screening</h4>
                                <p>Save time and resources with our automated resume screening tool. Our AI scans and evaluates resumes,
                                    highlighting the most qualified candidates and reducing the time spent on manual review.</p>
                            </div>
                            <div className="services-block">
                                <img src={require("../assets/images/business-solutions.png")} alt="block-img" />
                                <h4>Custom Business Solutions</h4>
                                <p>Tailor-made solutions to address your unique business challenges. Our expert consultants work closely
                                    with you to develop strategies that optimize operations, improve productivity, and drive growth.</p>
                            </div>
                            <div className="services-block">
                                <img src={require("../assets/images/consulting.png")} alt="block-img" />
                                <h4>Expert Consulting Services</h4>
                                <p>Benefit from the expertise of our seasoned consultants who bring a wealth of experience across various
                                    industries. Whether you need strategic advice or hands-on support, our team is here to help you achieve
                                    your business goals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonials">
                <div className="row">
                    <div className="container rel">
                        <h2 className="section-title center">What Our Clients Say</h2>
                        <div className="testimonials-wrapper">
                            <div className="testimony-block">
                                <img src={require("../assets/images/woman.jpg")} alt="testifier" />
                                <blockquote>
                                    "CrownForte transformed our recruitment process. The AI-powered tools are incredibly efficient, and
                                    we've seen a significant improvement in the quality of our hires." 
                                    <div className="testifier">- Sarah L., HR Manager, TechCorp</div>
                                </blockquote>
                            </div>
                            <div className="testimony-block">
                                <img src={require("../assets/images/man.jpg")} alt="testifier" />
                                <blockquote>
                                    "The consulting services provided by CrownForte have been invaluable. Their tailored solutions
                                    helped us optimize our operations and achieve substantial growth."
                                    <div className="testifier">- James K., CEO, InnovateX</div>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CtaWidget />
        </div>
    )
}

export default Home;