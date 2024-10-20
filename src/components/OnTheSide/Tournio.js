import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

import {useThemeContext} from "@/js/ThemeContext";
import {useClientReady} from "@/js/misc";

import LogoImage from "../../images/tournio-logo.png";
import LogoImageDark from "../../images/tournio-logo-inverted-gray.png";

// import dirDesktopDark from "../../images/tournio_screenshots/director-desktop-dark.png";
// import dirDesktopLight from "../../images/tournio_screenshots/director-desktop-light.png";
// import dirMobileDark from "../../images/tournio_screenshots/director-mobile-dark.png";
// import dirMobileLight from "../../images/tournio_screenshots/director-mobile-light.png";
// import regCartDark from "../../images/tournio_screenshots/registration-cart-dark.png";
// import regCartLight from "../../images/tournio_screenshots/registration-cart-light.png";
// import regFormDark from "../../images/tournio_screenshots/registration-form-dark.png";
// import regFormLight from "../../images/tournio_screenshots/registration-form-light.png";
// import regFrontDark from "../../images/tournio_screenshots/registration-front-dark.png";
// import regFrontLight from "../../images/tournio_screenshots/registration-front-light.png";
import tournioMobileDark from '@/images/tournio_screenshots/tournio-mobile-dark.jpeg';
import tournioMobileLight from '@/images/tournio_screenshots/tournio-mobile-light.jpeg';
import tournioDesktopDark from '@/images/tournio_screenshots/tournio-desktop-dark.jpeg';
import tournioDesktopLight from '@/images/tournio_screenshots/tournio-desktop-light.jpeg';

import classes from './Tournio.module.scss';

const Tournio = () => {
  const {theme} = useThemeContext();

  const ready = useClientReady();
  if (!ready) {
    return null;
  }

  const screenshots = {
    desktop: [
      {
        light: {
          key: 'tournio-desktop-light',
          src: tournioDesktopLight,
          alt: 'Tournio in light mode on a larger device',
          title: 'Tournio as seen in light mode on a larger device',
        },
        dark: {
          key: 'tournio-desktop-dark',
          src: tournioDesktopDark,
          alt: 'Tournio in dark mode on a larger device',
          title: 'Tournio as seen in dark mode on a larger device',
        },
      },
    ],
    mobile: [
      {
        light: {
          key: 'tournio-mobile-light',
          src: tournioMobileLight,
          alt: 'Tournio in light mode on a mobile device',
          title: 'Tournio as seen in light mode on a mobile device',
        },
        dark: {
          key: 'tournio-mobile-dark',
          src: tournioMobileDark,
          alt: 'Tournio in dark mode on a mobile device',
          title: 'Tournio as seen in dark mode on a mobile device',
        },
      },
    ],
  };

  return (
    <div className={classes.Tournio}>
      <div className={classes.Title}>
        <h2 className={'visually-hidden'}>
          Tournio
        </h2>
        {theme.active === 'light' && <Image src={LogoImage}
                                      alt={'Tournio logo image'}
                                      className={'img-fluid'}
        />}
        {theme.active === 'dark' && <Image src={LogoImageDark}
                                     className={'img-fluid'}
                                     alt={'Tournio logo image'}
        />}
      </div>

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
        <Carousel fade indicators={false} controls={true} className={'shadow text-center'}>
          {screenshots.desktop.map((deets, i) => (
            <Carousel.Item key={'screenshot-desktop-' + i}>
              <a href={deets[theme.active].src}
                 rel={'noreferrer'}
                 target={"_blank"}>
                  <Image src={deets[theme.active].src}
                         title={deets[theme.active].title}
                         alt={deets[theme.active].alt}
                         className={`${classes.Screenshot} img-fluid w-100`}
                  />
              </a>
            </Carousel.Item>
          ))}

          {screenshots.mobile.map((deets, i) => (
            <Carousel.Item key={'screenshot-mobile-' + i}>
              <a href={deets[theme.active].src}
                 rel={'noreferrer'}
                 target={"_blank"}>
                <Image src={deets[theme.active].src}
                       title={deets[theme.active].title}
                       alt={deets[theme.active].alt}
                       className={`img-fluid ${classes.Screenshot} ${classes.MobileScreenshot}`}
                />
              </a>
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
