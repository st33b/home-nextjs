import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import {useThemeContext} from "@/js/ThemeContext";
import {useClientReady} from "@/js/misc";

import classes from './Websites.module.scss';

import bdc_d_dark from '@/images/website_screenshots/bigdclassic-desktop-dark.jpeg';
import okc_d_dark from '@/images/website_screenshots/okclassic-desktop-dark.jpeg';
import ggc_d_dark from '@/images/website_screenshots/goldengateclassic-desktop-dark.jpeg';
import shiftid_d_dark from '@/images/website_screenshots/shiftid-desktop-dark.jpeg';
import bdc_d_light from '@/images/website_screenshots/bigdclassic-desktop-light.jpeg';
import okc_d_light from '@/images/website_screenshots/okclassic-desktop-light.jpeg';
import ggc_d_light from '@/images/website_screenshots/goldengateclassic-desktop-light.jpeg';
import shiftid_d_light from '@/images/website_screenshots/shiftid-desktop-light.jpeg';

import bdc_m_dark from '@/images/website_screenshots/bigdclassic-mobile-dark.jpeg';
import okc_m_dark from '@/images/website_screenshots/okclassic-mobile-dark.jpeg';
import ggc_m_dark from '@/images/website_screenshots/goldengateclassic-mobile-dark.jpeg';
import shiftid_m_dark from '@/images/website_screenshots/shiftid-mobile-dark.jpeg';
import bdc_m_light from '@/images/website_screenshots/bigdclassic-mobile-light.jpeg';
import okc_m_light from '@/images/website_screenshots/okclassic-mobile-light.jpeg';
import ggc_m_light from '@/images/website_screenshots/goldengateclassic-mobile-light.jpeg';
import shiftid_m_light from '@/images/website_screenshots/shiftid-mobile-light.jpeg';

const Websites = () => {
  const {theme} = useThemeContext();

  const ready = useClientReady();
  if (!ready) {
    return null;
  }

  const websites = [
    {
      title: 'The Big D Classic',
      fullTitle: false,
      locale: 'Dallas, TX',
      href: 'https://www.bigdclassic.com',
      desktop: {
        dark: bdc_d_dark,
        light: bdc_d_light,
      },
      mobile: {
        dark: bdc_m_dark,
        light: bdc_m_light,
      },
    },
    {
      title: 'The Golden Gate Classic',
      fullTitle: false,
      locale: 'San Francisco, CA',
      href: 'http://goldengateclassic.org',
      desktop: {
        dark: ggc_d_dark,
        light: ggc_d_light,
      },
      mobile: {
        dark: ggc_m_dark,
        light: ggc_m_light,
      },
    },
    {
      title: 'The OK Classic',
      fullTitle: false,
      locale: 'Oklahoma City, OK',
      href: 'http://okclassic.com',
      desktop: {
        dark: okc_d_dark,
        light: okc_d_light,
      },
      mobile: {
        dark: okc_m_dark,
        light: okc_m_light,
      },
    },
    {
      title: 'SHIFTID',
      fullTitle: 'The Seniors Handicap Invitational Family Tournament in DFW',
      locale: 'Dallas/Ft. Worth, TX',
      href: 'https://www.shiftid.org',
      desktop: {
        dark: shiftid_d_dark,
        light: shiftid_d_light,
      },
      mobile: {
        dark: shiftid_m_dark,
        light: shiftid_m_light,
      },
    },
  ];

  return (
    <div className={classes.Websites}>
      <div className={`${classes.Carousel} float-sm-end`}>
        <Carousel fade indicators={false} controls={true} className={'shadow text-center'}>
          {websites.map((tourn, i) => (
            <Carousel.Item key={'screenshot-desktop-' + i}>
              <a href={tourn.href}
                 rel={'noreferrer'}
                 target={"_blank"}>
                {theme.active === 'light' && (
                  <Image src={tourn.desktop.light}
                         title={tourn.fullTitle ? tourn.fullTitle : tourn.title}
                         alt={tourn.fullTitle ? tourn.fullTitle : tourn.title}
                         className={`${classes.Screenshot} img-fluid w-100`}
                  />
                )}
                {theme.active === 'dark' && (
                  <Image src={tourn.desktop.dark}
                         title={tourn.fullTitle ? tourn.fullTitle : tourn.title}
                         alt={tourn.fullTitle ? tourn.fullTitle : tourn.title}
                         className={`${classes.Screenshot} img-fluid w-100`}
                  />
                )}
              </a>
            </Carousel.Item>
          ))}
          {websites.map((tourn, i) => (
            <Carousel.Item key={'screenshot-mobile-' + i}>
              <a href={tourn.href}
                 className={''}
                 rel={'noreferrer'}
                 target={"_blank"}>
                {theme.active === 'light' && (
                  <Image src={tourn.mobile.light}
                         title={tourn.fullTitle ? tourn.fullTitle : tourn.title}
                         alt={tourn.fullTitle ? tourn.fullTitle : tourn.title}
                         className={`img-fluid ${classes.Screenshot} ${classes.MobileScreenshot}`}
                  />
                )}
                {theme.active === 'dark' && (
                  <Image src={tourn.mobile.dark}
                         title={tourn.fullTitle ? tourn.fullTitle : tourn.title}
                         alt={tourn.fullTitle ? tourn.fullTitle : tourn.title}
                         className={`img-fluid ${classes.Screenshot} ${classes.MobileScreenshot}`}
                  />
                )}
              </a>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <p>
        I maintain the informational websites for several IGBO-affiliated bowling tournaments. You&apos;ll see a family resemblance among them, since&mdash;in all honesty&mdash;I&apos;m not much of a visual designer. That said, I&apos;ve tried to give them some local and iconographic personality.
      </p>
      <p>
        I aim to put usability above all else, and once I find a layout that works well, I tend to follow the if-it-ain&apos;t-broke-don&apos;t-fix-it rule. With tournament websites, the user&apos;s goal is almost always to find a piece of information as quickly as possible. The easier I can make that task, the better.
      </p>

      <ul className={classes.ExampleList}>
        {websites.map((deets, i) => (
          <li key={i}>
            <a title={deets.fullTitle ? deets.fullTitle : deets.title}
               rel={'noreferrer'}
               target={'_blank'}
               href={deets.href}>
              {deets.title} ({deets.locale})
            </a>
          </li>
        ))}
      </ul>

      <p>
        <a href={'/'}>
          <i className={'bi-arrow-left pe-2'} aria-hidden={true}/>
          Back
        </a>
      </p>
    </div>
  );
}

export default Websites;
