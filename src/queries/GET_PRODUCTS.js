import { gql } from "@apollo/client";

const GET_PRODUCTS = gql`
  query Query {
    products {
      created_at
      description
      id
      image
      name
      origin
      recipe {
        id
        image
        name
      }
      time
      updated_at
    }
  }
`;

export default GET_PRODUCTS;
