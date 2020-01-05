import React from "react";
import { graphql } from "gatsby";
import Layout from "@layout";
import { ArticleHeader } from "@packages/headers";
import { Grid, GridItem, GridSpacer } from "@packages/grids";
import { Text } from "@packages/typography";
import SEO from "@components/seo";
import RelatedArticles from "@components/RelatedArticles";
import formatDate from "@utils/formatDate";
import Break from "@packages/break";

export default ({ data }) => {
  const post = data.post;
  const relatedArticles = data.relatedArticles.edges;

  console.log(post.timeToRead);

  return (
    <Layout>
      <SEO title="Home" />
      <Grid>
        <GridSpacer />
      </Grid>

      <ArticleHeader
        title={post.frontmatter.title}
        subtitle="IVM-baas Hans Brug sprak vorige week duizenden boze boeren toe die vinden dat zijn instituut onbetrouwbare stikstofdata levert. ‘Het enige dat wij kunnen blijven doen is de waarde van kennis voor het voetlicht brengen.’"
        image="https://airbnb.design/wp-content/uploads/2017/07/Opti-blog-061517_Community-Creators_Antigua_Kim-0281-copy.gif"
        date={formatDate(post.frontmatter.date)}
        timeToRead={post.timeToRead}
      />
      <Grid>
        <GridItem
          columnStartSm="1"
          columnEndSm="span 12"
          columnStartMd="2"
          columnEndMd="span 10"
          columnStartLg="4"
          columnEndLg="10"
        >
          <Text
            color="primaryContrastDark"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </GridItem>
        <GridItem
          columnStartSm="1"
          columnEndSm="span 12"
          columnStartMd="2"
          columnEndMd="span 10"
          columnStartLg="4"
          columnEndLg="10"
        >
          <Break style={{ marginBottom: "24px" }} />
          <RelatedArticles articles={relatedArticles} />
        </GridItem>
      </Grid>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $tags: [String]) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      frontmatter {
        title
        date
        description
        tags
      }
    }
    relatedArticles: allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { tags: { in: $tags } } }
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
            highlight
            date
          }
        }
      }
    }
  }
`;
