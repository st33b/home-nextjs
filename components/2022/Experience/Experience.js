import classes from './Experience.module.scss';
import Omada from "./Omada";
import Lumos from "./Lumos";
import Mfp from "./Mfp";
import Cloudmark from "./Cloudmark";

const Component = () => {
  return (
    <div className={classes.Experience}>
      <h3>
        Experience
      </h3>

      <Omada/>
      <Lumos/>
      <Mfp/>
      <Cloudmark/>
    </div>
  );
}

export default Component;