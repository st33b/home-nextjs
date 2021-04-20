import React from "react";
import unified from "unified";
import parse from 'remark-parse';
import remark2react from 'remark-react'

import styles from './employer.module.scss';

// roles is the output of front-matter processing, data and content
const role = ({data, content}) => {
  return (
    <div>
      <p>Title: {data.title}</p>
      <p>Start: {data.start}</p>
      <p>End: {data.end}</p>

      <div>
        {
          unified()
            .use(parse)
            .use(remark2react)
            .processSync(content).result
        }
      </div>

    </div>
  )
};

export default role;

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
