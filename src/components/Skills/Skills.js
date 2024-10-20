import classes from './Skills.module.scss';

const Skills = () => {
  const leadership = [
    'One-on-ones',
    'Hiring',
    'Performance management',
    'Coaching plans',
    'Interviewing',
    'Inclusiveness',
    'Professional growth',
    'Empathy',
    'Capacity planning',
    'Mentorship',
    'Roadmap definition',
    'Technical vision',
    'Psychological safety',
  ].sort();
  const recentTech = [
    'Ruby',
    'Ruby on Rails',
    'React',
    'Bootstrap',
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

  const salient = [
    'Ruby on Rails',
    'React',
    'JavaScript',
    'APIs',
    'TDD',
    'Data Modeling',
    'Mentorship',
    'Growth',
  ];

  return (
    <div className={classes.Skills}>
      <h3 title={'Ooh, keywords! How fun!'}>
        <span className={'d-sm-none'}>
          Primary{' '}
        </span>
        Skills
      </h3>

      <div className={`d-sm-none ${classes.Category}`}>
        <div className={`${classes.Items} ${classes.Salient}`}>
          {salient.map((item, i) => {
            return (
              <span key={i} className={`${classes.Skill}`}>
                {item}
              </span>
            );
          })}
        </div>
      </div>

      <div className={`d-none d-sm-block ${classes.Category}`}>
        <h6>
          Technology
        </h6>
        <div className={classes.Items}>
          {recentTech.map((item, i) => {
            return (
              <span key={i} className={`${classes.Skill}`}>
                {item}
              </span>
            );
          })}
        </div>
      </div>

      <div className={`d-none d-sm-block ${classes.Category}`}>
        <h6>
          Leadership
        </h6>
        <div className={classes.Items}>
          {leadership.map((item, i) => {
            return (
              <span key={i} className={`${classes.Skill}`}>
                {item}
              </span>
            );
          })}
        </div>
      </div>

      <div className={`d-none d-sm-block ${classes.Category}`}>
        <h6>
          Previous but not recent
        </h6>
        <div className={classes.Items}>
          {oldTech.map((item, i) => {
            return (
              <span key={i} className={`${classes.Skill}`}>
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
