/* 
 * Internal for rendering markdown pages
 * Mostly from the NextJS docs
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Directory where the posts are (root folder)
const postsDirectory = path.join(process.cwd(), 'posts');

// Returns posts sorted by date
export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.filter((fileName) => {
    // Only looking for Markdown files
    return fileName.match('.*md')

  }).map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);

    // Parsing date
    const dateMs = Date.parse(fs.statSync(fullPath).mtime);
    const date = (new Date(dateMs)).toUTCString();
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Using Matter to parse Markdown
    const matterResult = matter(fileContents);

    return {
      id,
      dateMs,
      date,
      ...matterResult.data,
    };
  });

  // Sort func
  return allPostsData.sort((a, b) => {
    if (a.dateMs < b.dateMs) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Returns all posts by ID to be used
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.filter((fileName) => {
    // Only looking for Markdown files
    return fileName.match('.*md')

  }).map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

// Get data from ID
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const dateMs = Date.parse(fs.statSync(fullPath).mtime);
  const date = (new Date(dateMs)).toUTCString();

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    date, 
    dateMs,
    contentHtml,
    ...matterResult.data,
  };
}