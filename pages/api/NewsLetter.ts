/** *************************************************************
* Any file inside the folder pages/api is mapped to /api/* and  *
* will be treated as an API endpoint instead of a page.         *
*************************************************************** */
import { GraphQLClient, gql } from 'graphql-request';
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;


// export a default function for API route to work
export default async function asynchandler(req: any, res:any) {
  const graphQLClient = new GraphQLClient((graphqlAPI!), {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

  const query = gql`
    mutation CreateNewsLetter($email: String!) {
      createNewsLetter(data: {email: $email} ) { id }
    }
  `;

  const result = await graphQLClient.request(query, {
    email: req.body.email,
  });

  return res.status(200).send(result);
}

