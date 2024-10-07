import { createClient } from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';

const projectId = process.env.REACT_APP_SANITY_PROJECT_ID; 
const dataset = 'production'; 
const token = process.env.REACT_APP_SANITY_TOKEN; 

if (!projectId) {
  console.error('Error: Sanity project ID is missing. Please check your .env file.');
}

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: '2023-10-01',
  useCdn: true,
  token: token,
});

const builder = createImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
