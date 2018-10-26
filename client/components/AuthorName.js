import React from "react";
import styles from "./AuthorName.css";
import cn from "classnames";
export default ({ comment }) => {
  return (
    <span className={cn(styles.displayName, "talk-nca-display-name")}>
      {comment.user.displayName}
    </span>
  );
};
