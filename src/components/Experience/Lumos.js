import classes from './Experience.module.scss';

const Lumos = () => {
  return (
    <div className={classes.Employer}>
      <div className={classes.Name}>
        <h4>
          Lumos Labs
        </h4>
      </div>

      <div className={classes.Role}>
        <h5 className={classes.Title}>
          Senior Software Engineer
        </h5>
        <p className={classes.Dates}>
          2015-2016
        </p>
        <div className={classes.Details}>
          <div className={classes.Responsibilities}>
            <p>
              I was part of the Platform team, responsible for building and supporting payment systems, event and
              analytics tracking, transactional and marketing emails, and the customer service portal, amongst others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lumos;
