import Card from "react-bootstrap/Card";

import styles from './Footer.module.scss'

const Component = () => {
  return (
    <div className={styles.Footer}>
      <Card>
        <Card.Body>
          <Card.Text>
            <span className="visually-hidden">Copyright</span>
            <span className="aria-hidden">{String.fromCharCode(169)}{' '}</span>
            2022 Scott Stebleton
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Component;
