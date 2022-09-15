import classes from './OnTheSide.module.scss';
import {Placeholder} from "react-bootstrap";

const Component = () => {
  return (
    <div className={classes.OnTheSide}>
      <h3>
        On the Side
      </h3>
      <ul>
        <li>
          <Placeholder/>
          {/* Tournio */}
        </li>
        <li>
          <Placeholder/>
          {/* Websites */}
        </li>
      </ul>
    </div>
  );
}

export default Component;