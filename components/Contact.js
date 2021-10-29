import ContactForm from "./sections/ContactForm"

const Contact = () => {
    return (
        <section className="py-20" style={{ background: '#f1f1f1' }} id="portfolio">
            <div className="container mx-auto">
                <div className="mx-auto text-center pb-8">
                    <h2 className="text-4xl font-semibold pb-2">Contact Me</h2>
                    <p>Lets Keep In Touch</p>
                </div>

                <ContactForm/>
            </div>

        </section>
    )
}

export default Contact;
