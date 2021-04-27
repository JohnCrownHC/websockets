import { gql } from "@apollo/client";

export const feedGQL = gql`
  query FeedQuery($take: Int, $skip: Int, $orderBy: LinkOrderByInput) {
    feed(take: $take, skip: $skip, orderBy: $orderBy) {
      id
      links {
        id
        url
        description
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
        createdAt
      }
      count
    }
  }
`;