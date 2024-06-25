import "../assets/css/cta-widget.css";

const CtaWidget = () => {
    return (
        <section id="cta">
            <div className="container">
                <div className="cta-block">
                    <img src={require("../assets/images/cta-widget-bg-pattern.png")} alt="bg-pattern" className="bg-pattern" />
                    <div className="rel">
                        <h2>Ready to Transform Your Business?</h2>
                        <p>
                            Get started with a free consultation and discover how CrownForte's AI-driven solutions can revolutionize your
                            talent acquisition and business operations.
                        </p>
                        <a href="mailto:crownforteconsults@gmail.com" className="cta-btn hover-scale">Book Your Free Consultation Now</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CtaWidget;