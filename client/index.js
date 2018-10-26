import AuthorName from "./containers/AuthorName";
import { gql } from "react-apollo";

export default {
  slots: {
    commentAuthorName: [AuthorName]
  },
  fragments: {
    CreateCommentResponse: gql`
      fragment TalkAuthorName_CreateCommentResponse on CreateCommentResponse {
        comment {
          user {
            displayName
          }
        }
      }
    `
  },
  mutations: {
    PostComment: ({ variables }) => ({
      optimisticResponse: {
        createComment: {
          comment: {
            user: {
              displayName: String,
              __typename: "User"
            },
            __typename: "Comment"
          }
        }
      }
    })
  }
};
