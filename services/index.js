import {request , gql} from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async() => {
    const query = gql`
    query Assets($id: ID = "", $slug: String = "") {
        postsConnection {
          edges {
            node {
              author {
                bio
                id
                name
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
            }
          }
        }
        post(where: {id: $id, slug: $slug}) {
          categories {
            name
            slug
          }
        }
      }
      
  
    `;

    const result = await request(graphqlAPI, query);
    return result.postsConnection.edges;
}