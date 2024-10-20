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
    </div>
  );
};

export default PageHeader;
