import contactStyles from "./Contact.module.css";

function Contact() {
  return (
    <div>
      <div className={contactStyles.contactHeader}>
        Contact me for more info:
      </div>
      <div className={contactStyles.contactDiv}>
        <div className={contactStyles.contactBody}>info@cmportraits.com</div>
        <div className={contactStyles.contactBody}>facebook.com/cmportraits</div>
        <div className={contactStyles.contactBody}>@cmportraits</div>
      </div>
    </div>
  );
}

export default Contact;
