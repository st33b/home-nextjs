import classes from './Experience.module.scss';

const mfp = () => {
  return (
    <div className={classes.Employer}>
      <div className={classes.Name}>
        <h4>
          MyFitnessPal
        </h4>
      </div>

      <div className={classes.Role}>
        <h5 className={classes.Title}>
          Lead Software Engineer
        </h5>
        <p className={classes.Dates}>
          2014-2015
        </p>
        <div className={classes.Details}>
          <div className={classes.Responsibilities}>
            <p>
              I helped drive the migration from a Ruby-on-Rails monolith toward a service- oriented architecture, and
              served as a leader in RESTful API design. As a team lead, I mentored junior developers and an intern on
              their career paths, in addition to developing high-level estimates of the time and effort required to
              design and implement new features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default mfp;
