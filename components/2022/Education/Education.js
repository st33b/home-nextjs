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
          <Placeholder/>
          {/* BS */}
        </li>
        <li>
          <Placeholder/>
          {/* grad study */}
        </li>
      </ul>
    </div>
  );
}

export default Component;