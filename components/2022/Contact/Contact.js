import {Placeholder} from "react-bootstrap";
import classes from './Contact.module.scss';

const Component = () => {
  return (
    <div className={classes.Contact}>
      <h3>
        Contact
      </h3>
      <ul>
        <li>
          Atlanta, GA (for now)
          <i className={"bi-geo-alt-fill"} aria-hidden={true}/>
        </li>
        <li>
          <a href="mailto:scott@stebleton.net"
             aria-label="Send me an email"
             className={`${classes.Link} ${classes.Code}`}>
            scott@stebleton.net
          </a>
          <i className="bi-envelope-fill" aria-hidden={true} />
        </li>
        <li>
          <a tel={"4153088651"}
             aria-label={"Call me"}
             className={classes.Link}>
            415-308-8651
          </a>
          <i className={"bi-telephone-fill"} aria-hidden={true}/>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/scottstebleton/"
             aria-label="Visit my profile on LinkedIn"
             className={classes.Link}>
            LinkedIn
          </a>
          <i className={"bi-linkedin"} aria-hidden={true}/>
        </li>
        <li>
          <a href="https://github.com/st33b"
             aria-label="Visit my profile on GitHub"
             className={classes.Link}>
            Github
          </a>
          <i className={"bi-github"} aria-hidden={true}/>
        </li>
      </ul>
    </div>
  );
}

export default Component;