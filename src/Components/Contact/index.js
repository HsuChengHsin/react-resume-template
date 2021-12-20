import React, { useState } from "react";

import { Button, Form } from "semantic-ui-react";

const FULL_WIDTH = { width: "100%" };

const Contact = ({ data }) => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e, { name, value }) =>
    setContact((prev) => {
      return { ...prev, [name]: value };
    });
  const handleSubmit = () => console.log(contact);
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
          <Form onSubmit={handleSubmit}>
            <Form.Field required>
              <label>Name</label>
              <Form.Input
                style={FULL_WIDTH}
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
                style={FULL_WIDTH}
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
                style={FULL_WIDTH}
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
              loading={false}
            >
              Submit
            </Button>
          </Form>

          <div id="message-warning">Error boy</div>
          <div id="message-success">
            <i className="fa fa-check" />
            Your message was sent, thank you!
            <br />
          </div>
        </div>
        <aside className="four columns footer-widgets">
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
