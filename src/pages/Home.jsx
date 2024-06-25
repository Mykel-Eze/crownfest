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
                    <div className="container">
                        <h2 className="section-title">About CrownForte</h2>
                        <p>
                            CrownForte is a cutting-edge SaaS platform designed to revolutionize talent acquisition and business
                            consulting. Our AI-driven solutions help startups and SMEs streamline recruitment processes, enhance
                            operational efficiency, and drive business growth. With a focus on the IT, telecom, manufacturing, and
                            healthcare sectors, CrownForte is your trusted partner in navigating the complexities of modern business.
                        </p>
                    </div>
                </div>
            </section>

            <section id="services">
                <div className="row">
                    <div className="container">
                        <h2 className="section-title">Our Services</h2>
                        <div>
                            <h3>AI-Powered Talent Acquisition</h3>
                            <p>Leverage our AI technology to find the best candidates quickly and efficiently. Our advanced algorithms
                                match your job requirements with top talent, ensuring the perfect fit for your organization.</p>
                        </div>
                        <div>
                            <h3>Automated Resume Screening</h3>
                            <p>Save time and resources with our automated resume screening tool. Our AI scans and evaluates resumes,
                                highlighting the most qualified candidates and reducing the time spent on manual review.</p>
                        </div>
                        <div>
                            <h3>Custom Business Solutions</h3>
                            <p>Tailor-made solutions to address your unique business challenges. Our expert consultants work closely
                                with you to develop strategies that optimize operations, improve productivity, and drive growth.</p>
                        </div>
                        <div>
                            <h3>Expert Consulting Services</h3>
                            <p>Benefit from the expertise of our seasoned consultants who bring a wealth of experience across various
                                industries. Whether you need strategic advice or hands-on support, our team is here to help you achieve
                                your business goals.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonials">
                <div className="row">
                    <div className="container">
                        <h2 className="section-title">What Our Clients Say</h2>
                        <blockquote>"CrownForte transformed our recruitment process. The AI-powered tools are incredibly efficient, and
                            we've seen a significant improvement in the quality of our hires." - Sarah L., HR Manager, TechCorp
                        </blockquote>
                        <blockquote>"The consulting services provided by CrownForte have been invaluable. Their tailored solutions
                            helped us optimize our operations and achieve substantial growth." - James K., CEO, InnovateX
                        </blockquote>
                    </div>
                </div>
            </section>

            <CtaWidget />
        </div>
    )
}

export default Home;