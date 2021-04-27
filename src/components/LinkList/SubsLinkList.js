import {gql} from '@apollo/client';

export const linksSub = gql`
    subscription {
        newLink {
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
    }
`;

export const votesSub = gql`
    subscription {
        newVote {
            id
            link {
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
            user {
                id
            }
        }
    }
`;