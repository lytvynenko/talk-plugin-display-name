module.exports = {
  typeDefs: `
    type User {
      displayName: String
    }
  `,
  // The User resolver will return the display name from the embedded user metadata.
  resolvers: {
    User: {
      displayName(user) {
        if (user && user.metadata && user.metadata.displayName) {
          return user.metadata.displayName;
        }
        return user.username;
      }
    }
  }
};
