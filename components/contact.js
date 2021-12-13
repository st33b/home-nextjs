import React from "react";

import styles from './contact.module.scss';
import {Button} from "react-bootstrap";

const contact = () => (
  <div className={styles.Contact + " d-flex justify-content-center"}>
    <Button variant="outline-dark"
            size="sm"
            href="mailto:scott@stebleton.net"
            aria-label="Send me an email"
            className={styles.Button}
    >
      <i className="bi-envelope aria-hidden" />
      {' '}Email
    </Button>

    <Button variant="outline-dark"
            size="sm"
            href="https://github.com/st33b"
            aria-label="Visit my profile on GitHub"
            className={styles.Button}
    >
      <i className="bi-github aria-hidden" />
      {' '}Github
    </Button>

    <Button variant="outline-dark"
            size="sm"
            href="https://www.linkedin.com/in/scottstebleton/"
            aria-label="Visit my profile on LinkedIn"
            className={styles.Button}
    >
      <i className="bi-linkedin aria-hidden" />
      {' '}LinkedIn
    </Button>

    <Button variant="outline-dark"
            size="sm"
            href="/resume.pdf"
            aria-label="Download a PDF version of my resume"
            className={styles.Button + " d-none d-lg-block"}
    >
      <i className="bi-file-pdf aria-hidden" />
      {' '}PDF version
    </Button>
  </div>
);

export default contact;
