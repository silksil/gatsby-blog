import React from "react";
import BlogCard from "@packages/cards";
import { Grid, GridItem } from "@packages/grids";

const TeaserOverview = ({ teasers }) => (
  <Grid>
    {teasers &&
      teasers.map(({ featuredImage, title }) => {
        return (
          <GridItem
            columnEndSm="span 12"
            columnEndMd="span 6"
            columnEndLg="span 6"
          >
            <BlogCard
              title={title}
              imageSrc={featuredImage && featuredImage.mediaItemUrl}
              isFaded
            />
          </GridItem>
        );
      })}
  </Grid>
);

TeaserOverview.propTypes = {};

export default TeaserOverview;
