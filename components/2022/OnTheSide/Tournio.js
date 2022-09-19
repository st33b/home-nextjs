import {useEffect, useState} from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

import LogoImage from "../../../images/tournio-logo.png";
import LogoImageDark from "../../../images/tournio-logo-inverted-gray.png";

import dirDesktopDark from "../../../public/images/tournio_screenshots/director-desktop-dark.png";
import dirDesktopLight from "../../../public/images/tournio_screenshots/director-desktop-light.png";
import dirMobileDark from "../../../public/images/tournio_screenshots/director-mobile-dark.png";
import dirMobileLight from "../../../public/images/tournio_screenshots/director-mobile-light.png";
import regCartDark from "../../../public/images/tournio_screenshots/registration-cart-dark.png";
import regCartLight from "../../../public/images/tournio_screenshots/registration-cart-light.png";
import regFormDark from "../../../public/images/tournio_screenshots/registration-form-dark.png";
import regFormLight from "../../../public/images/tournio_screenshots/registration-form-light.png";
import regFrontDark from "../../../public/images/tournio_screenshots/registration-front-dark.png";
import regFrontLight from "../../../public/images/tournio_screenshots/registration-front-light.png";

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
  });

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
        {scheme === 'light' && <Image src={LogoImage} alt={'Tournio logo image'}/>}
        {scheme === 'dark' && <Image src={LogoImageDark} alt={'Tournio logo image'}/>}
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
        {' '}(IGBO). I&apos;ve been working on it since 2015, partly as a passion project, and partly as a way to
        exercise my development skills. It is built using Ruby on Rails, with an API-driven front end written in
        React, and a custom administrative interface for tournament directors.
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
                         blur={true}
                         className={classes.Screenshot}
                  />
                </a>
              )}
              {scheme === 'dark' && (
                <a href={img.dark.src}
                   target={"_new"}>
                  <Image src={img.dark}
                         title={img.title}
                         blur={true}
                         className={classes.Screenshot}
                  />
                </a>
              )}
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <p>
        Bowlers can use Tournio to register for tournaments, sign up for optional events, join existing teams
        (for solo bowlers), and pay their registration fees via Stripe.
      </p>
      <p>
        Tournament directors can see all registered teams and bowlers, make changes, move bowlers from one team to
        another, create and confirm free entries, and export bowler data in both CSV and XML formats, the latter of
        which is designed for import into IGBO-TS, a commonly-used tournament software.
      </p>
      <p>
        To date, ten different tournaments across the country have used Tournio, five of them for the first time in
        2022, some for several years. As the system matures and word of mouth spreads, I anticipate adding more
        to the list.
      </p>

      <p>
        <a href={'/resume2022'}
           className={classes.Back}>
          <i className={'bi-arrow-left'} aria-hidden={true} />
          Back
        </a>
      </p>
    </div>
  );
}

export default Tournio;