type ContactItem = [string, string]

const contactData: ContactItem[] = [
    ["📍", "Mérida, Yucatán, México"],
    ["📞", "+52 999 000 0000"],
    ["✉️", "hola@compostura.mx"],
]

export const FooterContact = () => (
    <div className="c-contact">
        {contactData.map(([icon, text]) => (
            <div className="c-contact__row" key={text}>
                <span className="c-contact__icon">{icon}</span>
                <span className="c-contact__text">{text}</span>
            </div>
        ))}
    </div>
)