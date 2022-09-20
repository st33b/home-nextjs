import classes from './Experience.module.scss';

const Cloudmark = () => {
  return (
    <div className={classes.Employer}>
      <div className={classes.Name}>
        <h4>
          Cloudmark
        </h4>
      </div>

      <div className={classes.Role}>
        <h5 className={classes.Title}>
          Senior Web Developer
        </h5>
        <p className={classes.Dates}>
          2009-2012
        </p>
        <div className={classes.Details}>
          <div className={classes.Responsibilities}>
            <p>
              Full-stack developer on internal tools as well as public- and customer-facing web applications. I
              introduced and drove the adoption of the Symfony framework for data- and interaction-driven applications.
              I also served as mentor to the junior member of our team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cloudmark;
