import classes from './Contact.module.scss';

const Contact = () => {
  return (
    <div className={classes.Contact}>
      <h3 className={'d-none d-sm-block'}>
        Contact
      </h3>
      <ul className={'d-flex justify-content-between d-sm-block'}>
        <li>
          <i className={"bi-geo-alt-fill d-sm-none"} aria-hidden={true}/>
          Atlanta, GA
          <i className={"bi-geo-alt-fill d-none"} aria-hidden={true}/>
        </li>
        <li>
          <i className="bi-envelope-fill d-sm-none" aria-hidden={true} />
          <a href="mailto:scott@stebleton.net"
             aria-label="Send me an email"
             className={`${classes.Link} ${classes.Code}`}>
            <span className={'d-none d-sm-inline'}>
              scott@stebleton.net
            </span>
            <span className={'d-sm-none'}>
              email
            </span>
          </a>
          <i className="bi-envelope-fill d-none" aria-hidden={true} />
        </li>
        <li>
          <i className={"bi-telephone-fill d-sm-none"} aria-hidden={true}/>
          <a tel={"4153088651"}
             aria-label={"Call me"}
             className={classes.Link}>
            <span className={'d-none d-sm-inline'}>
              415-308-8651
            </span>
            <span className={'d-sm-none'}>
              call
            </span>
          </a>
          <i className={"bi-telephone-fill d-none"} aria-hidden={true}/>
        </li>
        <li className={'d-none d-sm-block'}>
          <a href="https://www.linkedin.com/in/scottstebleton/"
             aria-label="Visit my profile on LinkedIn"
             className={classes.Link}>
            LinkedIn
          </a>
          <i className={"bi-linkedin"} aria-hidden={true}/>
        </li>
        <li className={'d-none d-sm-block'}>
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

export default Contact;