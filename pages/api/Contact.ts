import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

/** *************************************************************
* Any file inside the folder pages/api is mapped to /api/* and  *
* will be treated as an API endpoint instead of a page.         *
*************************************************************** */
const token = process.env.GRAPHCMS_TOKEN;
// export a default function for API route to work
export default async function asynchandler(req:any, res:any) {
    console.log(token);
  const graphQLClient = new GraphQLClient((graphqlAPI!), {
    
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

  const query = gql`
    mutation CreateForm($name: String!, $email: String!, $message: message!) {
      createForm(data: {name: $name, email: $email, message: $message}) { id }
    }
  `;

  try {
    const result = await graphQLClient.request(query, req.body);
    return res.status(200).send(result);
    
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }

 

 

}
