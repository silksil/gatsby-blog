const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);
const kebabCase = require("lodash.kebabcase");

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@packages": path.resolve(__dirname, "src/packages/"),
        "@components": path.resolve(__dirname, "src/components/"),
        "@layout": path.resolve(__dirname, "src/layout/"),
        "@utils": path.resolve(__dirname, "src/utils/")
      }
    }
  });
};

// Called when a new node is created for plugins wishing to extend or transform nodes created
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    // This function allows you to create additional fields on nodes created by other plugins.
    createNodeField({
      node,
      name: "slug",
      value: `posts/${kebabCase(node.frontmatter.title)}`
    });

    createNodeField({
      node,
      name: "tags",
      value: node.frontmatter.tags
    });
  }
};

// For plugins to add pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
              tags
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    console.log("NODE", node.fields.tags);
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/BlogPost.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
        tags: node.fields.tags
      }
    });
  });
};
