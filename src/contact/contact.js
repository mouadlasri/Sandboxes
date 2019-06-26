import React from "react";

import "./contact.css";

const ContactForm = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 contact-form">
          <form>
            <div class="md-form mt-3">
              <input
                type="text"
                id="materialSubscriptionFormPasswords"
                class="form-control"
              />
              <label for="materialSubscriptionFormPasswords">Name</label>
            </div>

            <div class="md-form">
              <input
                type="email"
                id="materialSubscriptionFormEmail"
                class="form-control"
              />
              <label for="materialSubscriptionFormEmail">E-mail</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
