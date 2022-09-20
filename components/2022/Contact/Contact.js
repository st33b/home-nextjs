import classes from './Contact.module.scss';

const Contact = () => {
  return (
    <div className={classes.Contact}>
      <h3 className={'d-none d-sm-block'}>
        Contact
      </h3>
      <ul className={'d-flex justify-content-between d-sm-block'}>
        <li className={'me-auto'}>
          <i className={"bi-geo-alt-fill d-sm-none"} aria-hidden={true}/>
          Atlanta, GA
          <i className={"bi-geo-alt-fill d-none d-sm-inline"} aria-hidden={true}/>
        </li>
        <li className={'d-sm-none me-2'}>
          <a href="mailto:scott@stebleton.net"
             aria-label="Send me an email"
             title={"Send me an email"}
             className={`btn ${classes.Link} ${classes.Code}`}>
            <span className={'visually-hidden'}>
              Email me
            </span>
            <i className="bi-envelope-fill" aria-hidden={true} />
          </a>
        </li>
        <li className={'d-none d-sm-block'}>
          <a href="mailto:scott@stebleton.net"
             aria-label="Send me an email"
             className={`${classes.Link} ${classes.Code}`}>
            <span className={'d-none d-sm-inline'}>
              scott@stebleton.net
            </span>
          </a>
          <i className="bi-envelope-fill" aria-hidden={true} />
        </li>
        <li className={'d-sm-none'}>
          <a tel={"4153088651"}
             aria-label={"Call me"}
             title={"Call me"}
             className={`btn ${classes.Link}`}>
            <span className={'visually-hidden'}>
              Call me
            </span>
            <i className={"bi-telephone-fill"} aria-hidden={true}/>
          </a>
        </li>
        <li className={'d-none d-sm-block'}>
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
          <i className={"bi-telephone-fill"} aria-hidden={true}/>
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