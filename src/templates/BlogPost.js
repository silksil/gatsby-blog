import React from "react";
import { graphql } from "gatsby";
import Layout from "@layout";
import { ArticleHeader } from "@packages/headers";
import { Grid, GridItem, GridSpacer } from "@packages/grids";
import SEO from "@components/seo";

export default ({ data }) => {
  const post = data.markdownRemark;

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
      />
      <Grid>
        <GridItem
          columnStartSm="1"
          columnEndSm="span 12"
          columnStartMd="2"
          columnEndMd="span 10"
          columnStartLg="4"
          columnEndLg="10"
          as="div"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Grid>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
