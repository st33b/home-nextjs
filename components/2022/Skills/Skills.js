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

  return (
    <div className={classes.Skills}>
      <h3>
        Skills
      </h3>

      <div className={classes.Category}>
        <h6>
          Technology
        </h6>
        <div className={classes.Items}>
          {recentTech.map((item, i) => {
            return (
              <span key={i} className={`badge rounded-pill ${classes.Skill}`}>
                {item}
              </span>
            );
          })}
        </div>
      </div>

      <div className={classes.Category}>
        <h6>
          Leadership
        </h6>
        <div className={classes.Items}>
          {leadership.map((item, i) => {
            return (
              <span key={i} className={`badge rounded-pill ${classes.Skill}`}>
                {item}
              </span>
            );
          })}
        </div>
      </div>

      <div className={classes.Category}>
        <h6>
          Previous but not recent
        </h6>
        <div className={classes.Items}>
          {oldTech.map((item, i) => {
            return (
              <span key={i} className={`badge rounded-pill ${classes.Skill}`}>
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