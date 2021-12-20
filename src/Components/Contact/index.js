import React, { useState } from "react";

import emailjs from "emailjs-com";
import { Button, Form } from "semantic-ui-react";

const FULL_WIDTH = { width: "100%" };
const EMPTY_CONTENT = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = ({ data }) => {
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [contact, setContact] = useState(EMPTY_CONTENT);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !contact.name ||
      !contact.email ||
      !contact.subject ||
      !contact.message
    ) {
      alert("Missing something to submit!!");
      return;
    }
    try {
      setSubmitting(true);
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        contact,
        process.env.REACT_APP_USER_ID
      );
      setSubmitting(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      setContact(EMPTY_CONTENT);
    } catch (e) {}
  };
  const handleChange = (e, { name, value }) =>
    setContact((prev) => {
      return { ...prev, [name]: value };
    });
  const {
    name,
    address: { city, zip },
    phone,
    contactMessage: message,
  } = data;
  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{message}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <Form onSubmit={handleSubmit} loading={submitting}>
            <Form.Field required>
              <label>Name</label>
              <Form.Input
                type="text"
                id="name"
                name="name"
                value={contact.name}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field required>
              <label>Email</label>
              <Form.Input
                type="text"
                id="email"
                name="email"
                value={contact.email}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field required>
              <label>Subject</label>
              <Form.Input
                type="text"
                id="subject"
                name="subject"
                value={contact.subject}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field required>
              <label>Message</label>
              <Form.TextArea
                style={FULL_WIDTH}
                type="text"
                id="message"
                name="message"
                value={contact.message}
                onChange={handleChange}
              />
            </Form.Field>
            <Button
              className="submit float-right"
              type="submit"
              loading={submitting}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Form>

          {success && (
            <div>
              <i className="fa fa-check" />
              Your message was sent, thank you!
              <br />
            </div>
          )}
        </div>
        <aside
          className="four columns footer-widgets"
          style={{ marginTop: "6rem" }}
        >
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
              {name}
              <br />
              {city}, {zip}
              <br />
              <span>{phone}</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
