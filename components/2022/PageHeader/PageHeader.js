import classes from './PageHeader.module.scss';

const PageHeader = () => {
  return (
    <div className={classes.PageHeader}>
      <div className={`${classes.Name} d-flex justify-content-center`}>
        <h1 className="display-4">
          Scott Stebleton
        </h1>
      </div>
      <ul className={`${classes.Roles} d-flex justify-content-center`}>
        <li>
          Software Engineer
        </li>
        <li>
          Bicyclist
        </li>
        <li>
          Bowler
        </li>
      </ul>
    </div>
  );
};

export default PageHeader;
