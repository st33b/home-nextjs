import classes from './Education.module.scss';
import {Placeholder} from "react-bootstrap";

const Component = () => {
  return (
    <div className={classes.Education}>
      <h3>
        Education
      </h3>
      <ul>
        <li>
          <span className={[classes.Line, classes.Degree].join(' ')}>Bachelor of Science</span>
          <span className={classes.Line}>Computer Science</span>
          <span className={[classes.Line, classes.School].join(' ')}>University of Texas at Austin</span>
          <span className={classes.Line}>Austin, TX</span>
          <span className={[classes.Line, classes.Dates].join(' ')}>1998-2002</span>
        </li>
        <li>
          <span className={classes.Line}>Graduate Study in Computer Science</span>
          <span className={[classes.Line, classes.School].join(' ')}>University of Massachusetts at Amherst</span>
          <span className={classes.Line}>Amherst, MA</span>
          <span className={[classes.Line, classes.Dates].join(' ')}>2002-2003</span>
        </li>
      </ul>
    </div>
  );
}

export default Component;