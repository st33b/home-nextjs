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
          <a href={'/tournio'}
             className={classes.Link}>
            Tournio
          </a>
        </li>
        <li>
          <a href={"/websites"}
             className={classes.Link}>
            Websites
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Component;