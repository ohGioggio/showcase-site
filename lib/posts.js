import projectsData from '../data/projects'
import path from 'path'
import matter from 'gray-matter'

export function getAllPostIds() {
  return projectsData.map((project) => {
    return {
      params: {
        id: project.id.toString(),
      },
    };
  });
}

export function getPostData(id) {
  const project = projectsData.find((project) => project.id.toString() === id);
  const matterResult = matter(project.description);

  return {
    id,
    ...project,
    content: matterResult.content,
  };
}
