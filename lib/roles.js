import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const expDirectory = path.join(process.cwd(), 'experience');
const omadaDir = path.join(process.cwd(), 'experience', 'omada');

const omadaOrder = [
  '2',
  '1',
];

const othersOrder = [
  // 'lumos',
  'mfp',
  // 'beatport',
  // 'cloudmark',
  // 'hi5',
];

const getRoleData = (filename) => {
  const file = fs.readFileSync(filename);
  const matterResult = matter(file);

  // const content = await remark()
  //   .use(html)
  //   .process(matterResult.content);
  // const contentHtml = content.toString();

  // return {
  //   contentHtml,
  //   ...matterResult.data
  // };

  return matterResult;
}

export const getRolesData = () => {
  // get the Omada roles
  const omadaRoles = omadaOrder.map(async basename => {
    const filename = path.join(omadaDir, basename + '.md');

    const data = getRoleData(filename);
    return data;
  });

  // give it the same structure the others will have
  const omada = {
    employer: 'Omada Health',
    roles: omadaRoles,
  };

  // get the roles from other employers (1 each)
  const otherRoles = othersOrder.map(async basename => {
    const filename = path.join(expDirectory, basename + '.md');
    const roleData = getRoleData(filename);

    return {
      employer: roleData.data.employer,
      roles: [roleData.data],
    };
  });

  otherRoles.unshift(omada);

  return otherRoles;
};

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
