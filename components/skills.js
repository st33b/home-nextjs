import React from 'react';
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

import styles from './skills.module.scss';

const skills = () => {
  const leadership = [
    'One-on-ones',
    'Hiring',
    'Performance management',
    'Coaching plan',
    'Interviewing',
    'Inclusiveness',
    'Professional growth',
    'Empathy',
    'Capacity planning',
    'Mentorship',
    'Roadmap definition',
    'Technical vision',
  ].sort();
  const recentTech = [
    'Ruby',
    'Ruby on Rails',
    'React',
    'Redux',
    'REST',
    'API',
    'SQL',
    'JavaScript',
    'NextJS',
    'CSS',
    'HTML',
    'TDD',
    'OOP',
    'PostgreSQL',
  ].sort();
  const oldTech = [
    'Scala',
    'Swagger',
    'LAMP',
    'PHP',
    'Java',
    'C/C++',
    'jQuery',
    'Zend',
    'Symfony',
    'MySQL',
    'Apache',
    'SOAP',
    'Ant',
    'Maven',
  ].sort();
  return (
    <div className={styles.Skills}>
      <Card className={styles.Period}>
        <Card.Header>
          <h4>Skills & Buzzwords</h4>
        </Card.Header>
        <Card.Body>
          <Card.Title className={styles.Category}>
            Leadership
          </Card.Title>
          <Card.Text>
            {leadership.map((item, i) => {
              return (
                <Badge bg="light" text="dark" key={i} className={styles.Skill}>
                  {item}
                </Badge>
              );
            })}
          </Card.Text>
          <Card.Title className={styles.Category}>
            Technology
          </Card.Title>
          <Card.Text>
            {recentTech.map((item, i) => {
              return (
                <Badge bg="light" text="dark" key={i} className={styles.Skill}>
                  {item}
                </Badge>
              );
            })}
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className={styles.Period}>
        <Card.Header>
          <h4>Previous but not recent</h4>
        </Card.Header>
        <Card.Body>
          <Card.Title className={styles.Category}>
            Technology
          </Card.Title>
          <Card.Text>
            {oldTech.map((item, i) => {
              return (
                <Badge bg="light" text="dark" key={i} className={styles.Skill}>
                  {item}
                </Badge>
              );
            })}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default skills;
