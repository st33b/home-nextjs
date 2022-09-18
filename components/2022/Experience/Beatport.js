import classes from './Experience.module.scss';

const Beatport = () => {
  return (
    <div className={classes.Employer}>
      <div className={classes.Name}>
        <h4>
          Beatport
        </h4>
      </div>

      <div className={classes.Role}>
        <h5 className={classes.Title}>
          Database Developer
        </h5>
        <p className={classes.Dates}>
          2012-2013
        </p>
        <div className={classes.Details}>
          <div className={classes.Responsibilities}>
            <p>
              Full-stack developer on several customer-facing projects and RESTful APIs, with a focus on database
              integration: schema design, data modeling, and optimizing our applications' and APIs' integration with the
              data layer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beatport;
