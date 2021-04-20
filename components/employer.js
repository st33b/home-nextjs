import React from "react";

import Role from './role';

import styles from './employer.module.scss';

// roles is the output of front-matter processing, data and content
const employer = ({name, roles}) => {
  return (
    <div className={styles.Employer}>
      <p className="lead">
        {name}
      </p>

      {roles.map((role, i) => {
        return <Role key={i} data={role.data} content={role.content} />
      })}

    </div>
  );
};

export default employer;

// retrieve all role data, then process all the Markdown
// each employer has:
// {
//   employer: <name of employer>,
//   roles: <array of roles>, each of which has:
//     data (with front matter properties)
//     content (unprocessed)
// }

// export async function getResumeContent() {
//   const allRoles = getRolesData();
//
//   const allContent = allRoles.map(details => {
//     const allRoleContent = details.roles.map(matterResult => {
//       const content = await remark()
//         .use(html)
//         .process(matterResult.content);
//       const contentHtml = content.toString();
//
//       return {
//         contentHtml,
//         ...matterResult.data,
//       }
//     });
//     return {
//       employer: details.employer,
//       roles: allRoleContent,
//     }
//   });
//
//   return allContent;
// }
