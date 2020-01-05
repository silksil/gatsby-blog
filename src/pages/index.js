import React from "react";
import { Grid, GridItem, GridSpacer } from "@packages/grids";
import ArticleOverview from "@components/ArticleOverview";
import TeaserOverview from "@components/TeaserOverview";
import PageHeader from "@components/PageHeader";
import HighlightedArticles from "@components/HighlightedArticles";
import Layout from "@layout";
import SEO from "@components/seo";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const latestPosts = data.latest.edges;
  const teasers = [latestPosts[0]];
  const articles = latestPosts.slice(1);
  const popularPosts = data.popular.edges;

  return (
    <Layout>
      <SEO title="Home" />
      <Grid>
        <GridItem
          columnStartSm="1"
          columnEndSm="span 12"
          columnStartMd="1"
          columnEndMd="span 10"
          columnStartLg="2"
          columnEndLg="12"
        >
          <PageHeader />
        </GridItem>
        <GridItem
          columnStartSm="1"
          columnEndSm="14"
          columnEndMd="7"
          columnStartLg="1"
          columnEndLg="9"
          columnStartXl="2"
        >
          <TeaserOverview articles={teasers} />
        </GridItem>
        <GridItem
          columnStartSm="1"
          columnEndSm="14"
          columnStartMd="7"
          columnEndMd="13"
          columnStartLg="9"
          columnEndLg="13"
          columnEndXl="12"
        >
          <HighlightedArticles articles={popularPosts} />
        </GridItem>
      </Grid>
      <GridSpacer />
      <Grid>
        <GridItem
          columnStartSm="1"
          columnEndSm="14"
          columnStartXl="2"
          columnEndXl="12"
        >
          <ArticleOverview articles={articles} />
        </GridItem>
      </Grid>
      <GridSpacer />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 8
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            image
            slug
          }
        }
      }
    }
    popular: allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { highlight: { eq: "Popular" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            image
          }
        }
      }
    }
  }
`;
