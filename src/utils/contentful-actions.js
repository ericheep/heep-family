import client from './contentful-client'

export const fetchBlogPosts = () => {
  return client.getEntries({
    content_type: 'blog',
  })
}
