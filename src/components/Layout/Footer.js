import ColorModeToggler from "../ColorModeToggler/ColorModeToggler";
import styles from './Footer.module.scss'

const Component = () => (
  <div className={styles.Footer}>
    <div className={'d-flex justify-content-center align-items-center'}>
      <p>
        <span className="visually-hidden">Copyright</span>
        <span className="aria-hidden">{String.fromCharCode(169)}</span>
        &nbsp;2024 Scott Stebleton
      </p>
      <ColorModeToggler className={'ms-3 d-inline-block'}/>
    </div>
  </div>
);

export default Component;
