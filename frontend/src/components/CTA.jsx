import { Link } from "react-router-dom";

function CTA() {
    return (
        <section className="cta-section text-center py-5">

            <div className="container">

                <h2 className="fw-bold">
                    Start Managing Your Healthcare Today
                </h2>

                <p className="mt-3">
                    Register now and experience AI-powered healthcare appointment management.
                </p>

                <Link
                    to="/register"
                    className="btn btn-primary btn-lg mt-3"
                >
                    Register Now
                </Link>

            </div>

        </section>
    );
}

export default CTA;