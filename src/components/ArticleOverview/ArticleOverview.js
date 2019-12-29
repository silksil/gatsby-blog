import React from "react";

import BlogCard from "@packages/cards";
import { Grid, GridItem } from "@packages/grids";

const ArticleOverview = ({ articles }) => (
  <Grid>
    {articles &&
      articles.map(({ title, tags, imageSrc }) => {
        return (
          <GridItem
            columnEndSm="span 12"
            columnEndMd="span 6"
            columnEndLg="span 4"
          >
            <BlogCard title={title} tags={tags} imageSrc={imageSrc} />
          </GridItem>
        );
      })}
  </Grid>
);

ArticleOverview.propTypes = {};

export default ArticleOverview;
