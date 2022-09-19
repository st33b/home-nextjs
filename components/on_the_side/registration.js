import React from 'react';

import styles from './side.module.scss';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import {Carousel} from "react-bootstrap";

const registration = () => {
  return (
    <div className={styles.Project}>
      <Card>
        <Card.Header>
          <Card.Title className={styles.Title}>
            Bowling Tournament Registration System
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Col xs={12} sm={8} md={6} className="float-sm-end">
            <Carousel fade>
              <Carousel.Item key={1}>
                <img src={'/images/igbo-reg-form.jpeg'}
                     alt="The form for a bowler to register for a tournament"
                     title="The form for a bowler to register for a tournament"
                     className="d-block w-100"
                />
              </Carousel.Item>
              <Carousel.Item key={2}>
                <img src={'/images/igbo-reg-events.jpeg'}
                     alt="A menu of optional events for a bowler to choose from"
                     title="A menu of optional events for a bowler to choose from"
                     className="d-block w-100"
                />
              </Carousel.Item>
              <Carousel.Item key={3}>
                <img src={'/images/igbo-reg-director.jpeg'}
                     alt="The director's admin interface"
                     title="The director's admin interface"
                     className="d-block w-100"
                />
              </Carousel.Item>
            </Carousel>
          </Col>

          <Card.Text>
            I build and maintain an online registration system for bowling tournaments affiliated with the{' '}
            <a href="http://www.igbo.org/">
              International Gay Bowling Organization
            </a>
            {' '}(IGBO). I've been working on it since 2015, partly as a passion project, and partly as a way to
            exercise my development skills. It is built using Ruby on Rails, with an API-driven front end written in
            React, and a custom administrative interface for tournament directors.
          </Card.Text>
          <Card.Text>
            Bowlers can use the system to register for tournaments, sign up for optional events, join existing teams
            (for solo bowlers), and pay their registration fees using PayPal's Express Checkout feature.
          </Card.Text>
          <Card.Text>
            Tournament directors can see all registered teams and bowlers, make changes, move bowlers from one team to
            another, create and confirm free entries, and export bowler data in both CSV and XML formats, the latter of
            which is designed for import into IGBO-TS, a commonly-used tournament software.
          </Card.Text>
          <Card.Text>
            To date, five different tournaments in three states have used this system, some for several years. As tournaments return to the
            calendar with the easing of the pandemic, I anticipate adding more to the list.
          </Card.Text>

        </Card.Body>
      </Card>
    </div>
  );
};

export default registration;
