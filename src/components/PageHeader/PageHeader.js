import classes from './PageHeader.module.scss';

const PageHeader = () => {
  return (
    <div className={classes.PageHeader}>
      <div className={`${classes.Name} d-sm-flex justify-content-center`}>
        <h1 className="display-6">
          Scott Stebleton
        </h1>
      </div>
      <ul className={`${classes.Roles} d-flex justify-content-start justify-content-sm-center`}>
        <li>
          Software Professional
        </li>
        <li>
          Mentor
        </li>
        <li>
          Bowler
        </li>
      </ul>
      <div className={`${classes.Seeking}`}>
        {/*
        Seeking an individual contributor role with a mission-driven organization, where I will have the opportunity
        to grow and stretch my skills as an architect, developer, mentor, and human being.
        */}
        I am on long-term disability. While I hope to eventually return to work, for the time being, I am focused on my
        health and am not open to new opportunities.
      </div>
    </div>
  );
};

export default PageHeader;
