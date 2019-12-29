const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@packages": path.resolve(__dirname, "src/packages/"),
        "@components": path.resolve(__dirname, "src/components/"),
        "@layout": path.resolve(__dirname, "src/layout/")
      }
    }
  });
};

// Called when a new node is created for plugins wishing to extend or transform nodes created
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    // This function allows you to create additional fields on nodes created by other plugins.
    createNodeField({
      node,
      name: `slug`,
      value: slug
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
            }
          }
        }
      }
    }
  `);
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/BlogPost.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug
      }
    });
  });
};
