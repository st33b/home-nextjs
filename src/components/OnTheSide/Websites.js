import classes from './Websites.module.scss';

import BigD from "../../images/website_screenshots/bigdclassic.jpeg";
import SF from "../../images/website_screenshots/sfggc.jpeg";
import OKC from "../../images/website_screenshots/okclassic.jpeg";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

const Websites = () => {
  const websites = [
    {
      src: BigD,
      title: "Big D Classic, in Dallas, Texas",
    },
    {
      src: SF,
      title: "The Golden Gate Classic, in San Francisco, California",
    },
    {
      src: OKC,
      title: "The OK Classic, in Oklahoma City, Oklahoma",
    },
  ];

  return (
    <div className={classes.Websites}>
      <div className={`${classes.Carousel} float-sm-end`}>
        <Carousel fade indicators={false} controls={false} className={'shadow'}>
          {websites.map((img, i) => (
            <Carousel.Item key={i + 1}>
              <a href={img.src.src}
                 target={"_new"}>
                <Image src={img.src}
                       title={img.title}
                       alt={img.title}
                       blur={true}
                       className={classes.Screenshot}
                />
              </a>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <p>
        I maintain the informational websites for several IGBO-affiliated bowling tournaments. You&apos;ll see a
        family resemblance among them, since&mdash;in all honesty&mdash;I&apos;m not much of a visual designer.
        </p>
      <p>
        I aim to put usability above all else, and once I find a layout that works well, I tend to follow the
        if-it-ain&apos;t-broke-don&apos;t-fix-it rule. With tournament websites, the user&apos;s goal is almost
        always to find a piece of information as quickly as possible. The easier I can make that task, the better.
      </p>

      <ul className={classes.ExampleList}>
        <li>
          <a href="https://www.bigdclassic.com/">
            Big D Classic (Dallas, TX)
          </a>
        </li>
        <li>
          <a href="http://goldengateclassic.org/">
            Golden Gate Classic (San Francisco, CA)
          </a>
        </li>
        <li>
          <a href="http://okclassic.com/">
            OKClassic (Oklahoma City, OK)
          </a>
        </li>
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
