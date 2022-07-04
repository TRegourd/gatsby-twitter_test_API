import { graphql } from "gatsby";
import * as React from "react";

// markup
const IndexPage = ({ data }) => {
  console.log(data);

  return (
    <ul>
      {data.allFeedGatsbyTwitterRss.edges.map((item) => {
        return (
          <li
            key={item.node.title}
            dangerouslySetInnerHTML={{ __html: item.node.content }}
          ></li>
        );
      })}
    </ul>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allFeedGatsbyTwitterRss {
      edges {
        node {
          title
          link
          content
        }
      }
    }

    feedGatsbyTwitterRss {
      title
      link
      content
    }
  }
`;
