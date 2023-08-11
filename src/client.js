import client from '@sanity/client'

export default client({
  projectId: '3pawvs27',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-08-11'
});