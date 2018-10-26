import React from "react";
import AuthorName from "../components/AuthorName";
import { gql } from "react-apollo";
import { withFragments } from "plugin-api/beta/client/hocs";

class AuthorNameContainer extends React.Component {
  render() {
    return <AuthorName comment={this.props.comment} />;
  }
}

const enhance = withFragments({
  comment: gql`
    fragment TalkAuthorName_AuthorName_comment on Comment {
      user {
        displayName
      }
    }
  `
});

export default enhance(AuthorNameContainer);
