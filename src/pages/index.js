import React from "react";
import { GridSpacer } from "@packages/grids";
import ArticleOverview from "@components/ArticleOverview";
import TeaserOverview from "@components/TeaserOverview";
import PageHeader from "@components/PageHeader";
import Layout from "@layout";
import SEO from "@components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader />
    <TeaserOverview />
    <GridSpacer />
    <ArticleOverview />
    <GridSpacer />
  </Layout>
);

export default IndexPage;
