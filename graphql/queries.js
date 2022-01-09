/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMurdochBaddy = /* GraphQL */ `
  query GetMurdochBaddy($id: ID!) {
    getMurdochBaddy(id: $id) {
      id
      name
      details
      createdAt
      updatedAt
    }
  }
`;
export const listMurdochBaddies = /* GraphQL */ `
  query ListMurdochBaddies(
    $filter: ModelMurdochBaddyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMurdochBaddies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        details
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
