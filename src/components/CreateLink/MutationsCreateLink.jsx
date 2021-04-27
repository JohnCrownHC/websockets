import {gql} from "@apollo/client";

export const createLink = gql`
    mutation PostMutation(
        $description: String!
        $url: String!
    ) {
        post(description: $description, url: $url) {
            id
            createdAt
            url
            description
        }
    }
`;