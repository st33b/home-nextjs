import styles from './Footer.module.scss'

const Component = () => {
  return (
    <div className={styles.Footer}>
      <span className="visually-hidden">Copyright</span>
      <span className="aria-hidden">{String.fromCharCode(169)}{' '}</span>
      2022 Scott Stebleton
    </div>
  );
};

export default Component;
