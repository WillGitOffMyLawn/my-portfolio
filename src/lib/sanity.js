// src/lib/sanity.js
import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'your_project_id', // Replace with your Sanity project ID
  dataset: 'production',        // Replace if using a different dataset
  useCdn: true,                 // Use CDN for faster response times
});
