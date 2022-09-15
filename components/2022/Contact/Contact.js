import classes from './Contact.module.scss';
import {Placeholder} from "react-bootstrap";

const Component = () => {
  return (
    <div className={classes.Contact}>
      <h3>
        Contact
      </h3>
      <ul>
        <li>
          <Placeholder/>
          {/* city */}
        </li>
        <li>
        {/* email */}
          <Placeholder/>
        </li>
        <li>
          {/* phone */}
          <Placeholder/>
        </li>
        <li>
          {/* linkedin */}
          <Placeholder/>
        </li>
        <li>
          {/* github */}
          <Placeholder/>
        </li>
      </ul>
    </div>
  );
}

export default Component;