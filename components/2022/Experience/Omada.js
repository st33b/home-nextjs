import classes from './Experience.module.scss';

const Omada = () => {
  return (
    <div className={classes.Employer}>
      <div className={classes.Name}>
        <h4>
          Omada Health, Inc.
        </h4>
      </div>

      <div className={classes.Role}>
        <h5 className={classes.Title}>
          Software Architect
        </h5>
        <p className={classes.Dates}>
          2021-present
          <sup>*</sup>
        </p>
        <div className={classes.Details}>
          <div className={classes.Responsibilities}>
            {/*<p>*/}
            {/*  Serving as the connective tissue between Omada's business and technical teams, with a focus on patient*/}
            {/*  identity at Omada: ensuring a coherent and complete view of the patient as a whole person, the better to*/}
            {/*  support Omada&apos;s multi-product platform offering. This includes interoperability within Omada's ecosystem*/}
            {/*  as well as externally, such as EHR data sharing.*/}
            {/*</p>*/}
            <p className={classes.Footnote}>
              <sup>*</sup>
              I went on medical leave shortly after moving into this role.
            </p>
          </div>
        </div>
      </div>

      <div className={classes.Role}>
        <h5 className={classes.Title}>
          Senior Manager, Engineering
        </h5>
        <p className={classes.Dates}>
          2018-2021
        </p>
        <div className={classes.Details}>
          <div className={classes.Responsibilities}>
            <p>
              Hiring, performance management, guidance and growth, mentorship, capacity planning, roadmap definition,
              technical vision and decision-making.
            </p>
          </div>
          <div className={classes.Notable}>
            <h6>
              Noteworthy
            </h6>
            <ul>
              <li>Built and staffed two full teams</li>
              <li>Grew engineers into senior engineers, team leads, and managers.</li>
              <li>
                Moved to Atlanta to build Omada&apos;s engineering presence in our new office (pre-pandemic).
              </li>
              <li>
                Promoted from Manager to Senior Manager in 2019.
              </li>
              <li>
                Leader of the{' '}
                <strong>
                  Out@Omada
                </strong>
                {' '}employee resource group (ERG), 2020-2021.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={classes.Role}>
        <h5 className={classes.Title}>
          Senior Software Engineer
        </h5>
        <p className={classes.Dates}>
          2016-2018
        </p>
        <div className={classes.Details}>
          <div className={classes.Responsibilities}>
            <p>
              Applying the philosophies of Agile and Test-Driven Development (TDD), I designed, built, and deployed
              software used by both participants in the Omada program as well as their Health Coaches.
            </p>
            <p>
              I worked to begin the transition away from a Ruby-on-Rails monolith, toward an event-driven,
              service-oriented architecture. This included reducing tight coupling between existing applications,
              improving performance, and evolving application architecture to reflect changes in our user base.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Omada;
