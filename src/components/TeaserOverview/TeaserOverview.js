import React from "react";
import BlogCard from "@packages/cards";
import { Grid, GridItem } from "@packages/grids";
import { Link } from "gatsby";

const TeaserOverview = ({ articles }) =>
  articles &&
  articles.map(
    ({
      node: {
        fields: { slug },
        frontmatter: { title, image }
      }
    }) => {
      return (
        <Link to={slug}>
          <BlogCard title={title} imageSrc={image} isFaded />
        </Link>
      );
    }
  );

TeaserOverview.propTypes = {};

export default TeaserOverview;
