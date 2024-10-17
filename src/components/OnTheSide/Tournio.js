import {useEffect, useState} from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

import LogoImage from "../../images/tournio-logo.png";
import LogoImageDark from "../../images/tournio-logo-inverted-gray.png";

import dirDesktopDark from "../../images/tournio_screenshots/director-desktop-dark.png";
import dirDesktopLight from "../../images/tournio_screenshots/director-desktop-light.png";
import dirMobileDark from "../../images/tournio_screenshots/director-mobile-dark.png";
import dirMobileLight from "../../images/tournio_screenshots/director-mobile-light.png";
import regCartDark from "../../images/tournio_screenshots/registration-cart-dark.png";
import regCartLight from "../../images/tournio_screenshots/registration-cart-light.png";
import regFormDark from "../../images/tournio_screenshots/registration-form-dark.png";
import regFormLight from "../../images/tournio_screenshots/registration-form-light.png";
import regFrontDark from "../../images/tournio_screenshots/registration-front-dark.png";
import regFrontLight from "../../images/tournio_screenshots/registration-front-light.png";

import classes from './Tournio.module.scss';

const Tournio = () => {
  const [scheme, setScheme] = useState('light');
  useEffect(() => {
    if (!window) {
      return;
    }
    if (window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setScheme('dark');

      window.matchMedia('(prefers-color-scheme: dark)').addEventListener(
        'change', event => {
          if (event.matches) {
            setScheme('dark');
          }
        }
      );

      window.matchMedia('(prefers-color-scheme: light)').addEventListener(
        'change', event => {
          if (event.matches) {
            setScheme('light');
          }
        }
      );
    }
  }, []);

  const screenshots = [
    {
      light: regFrontLight,
      dark: regFrontDark,
      title: "Screenshot of a tournament's registration front page",
    },
    {
      light: regFormLight,
      dark: regFormDark,
      title: "Screenshot of a tournament's registration form",
    },
    {
      light: regCartLight,
      dark: regCartDark,
      title: "Screenshot of a bowler's shopping cart",
    },
    {
      light: dirDesktopLight,
      dark: dirDesktopDark,
      title: "Screenshot of the director's interface, as seen on desktop",
    },
    {
      light: dirMobileLight,
      dark: dirMobileDark,
      title: "Screenshot of the director's interface, as seen on mobile",
    },
  ];

  return (
    <div className={classes.Tournio}>
      <div className={classes.Title}>
        <h2 className={'visually-hidden'}>
          Tournio
        </h2>
        {scheme === 'light' && <Image src={LogoImage}
                                      alt={'Tournio logo image'}
                                      className={'img-fluid'}
        />}
        {scheme === 'dark' && <Image src={LogoImageDark}
                                     className={'img-fluid'}
                                     alt={'Tournio logo image'}
        />}
      </div>

      {/* Carousel of images here */}

      <p>
        I build and maintain{' '}
        <a href={"https://tourn.io"}
           target={"_new"}>
          Tournio
        </a>
        , an online registration system for bowling tournaments affiliated with the{' '}
        <a href="http://www.igbo.org/">
          International Gay Bowling Organization
        </a>
        {' '}(IGBO). I&apos;ve been working on it since 2015, partly as a passion project, and partly as a way to exercise my development skills. It is built using Ruby on Rails, with an API-driven React front end using NextJS, and a custom administrative interface for tournament directors.
      </p>

      <div className={`${classes.Carousel} float-sm-end`}>
        <Carousel fade indicators={false} controls={false} className={'shadow'}>
          {screenshots.map((img, i) => (
            <Carousel.Item key={i + 1}>
              {scheme === 'light' && (
                <a href={img.light.src}
                   target={"_new"}>
                  <Image src={img.light}
                         title={img.title}
                         alt={img.title}
                         className={`${classes.Screenshot} img-fluid w-100`}
                  />
                </a>
              )}
              {scheme === 'dark' && (
                <a href={img.dark.src}
                   target={"_new"}>
                  <Image src={img.dark}
                         title={img.title}
                         alt={img.title}
                         className={`${classes.Screenshot} img-fluid w-100`}
                  />
                </a>
              )}
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <p>
        Bowlers can use Tournio to register for tournaments, sign up for optional events, join existing teams (for solo bowlers), and pay their registration fees via Stripe.
      </p>
      <p>
        Tournament directors can see all registered teams and bowlers, make changes, move bowlers from one team to another, create and confirm free entries, and export bowler data in both CSV and XML formats, the latter of which is designed for import into tournament software used by many IGBO tournaments.
      </p>
      <p>
        To date, fourteen different tournaments across the country have used Tournio, including IGBO Annual 2024, which registered nearly 350 bowlers. As the system has matured and word of mouth has spread, it has become a viable alternative to the no-cost registration solution provided by IGBO&apos;s technology partner.
      </p>
      <ul className={classes.Github}>
        <li>
          <i className={'bi-github pe-2'} aria-hidden={true}/>
          <a href={"https://github.com/st33b/tournio-api"}>
            API Backend
          </a>
        </li>
        <li>
          <i className={'bi-github pe-2'} aria-hidden={true}/>
          <a href={"https://github.com/st33b/tournio-web-client"}>
            Web Frontend
          </a>
        </li>
      </ul>

      <p>
        <a href={'/'}>
          <i className={'bi-arrow-left pe-2'} aria-hidden={true} />
          Back
        </a>
      </p>
    </div>
  );
}

export default Tournio;
