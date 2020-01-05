import React from "react";
import BlogCard from "@packages/cards";
import { Grid, GridItem } from "@packages/grids";
import { Link } from "gatsby";

const ArticlesOverview = ({ articles }) => (
  <Grid>
    {articles &&
      articles.map(
        ({
          node: {
            fields: { slug },
            frontmatter: { title, image }
          }
        }) => {
          return (
            <GridItem
              columnEndSm="span 12"
              columnEndMd="span 6"
              columnEndLg="span 6"
              columnEndXl="span 4"
            >
              <Link to={slug}>
                <BlogCard title={title} imageSrc={image} />
              </Link>
            </GridItem>
          );
        }
      )}
  </Grid>
);

ArticlesOverview.propTypes = {};

export default ArticlesOverview;
