import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo/seo';
import Layout from 'components/layout/layout';
import Banner from '../sections/banner/banner';
import KeyFeature from '../sections/key-feature/key-feature';
import ServiceSection from '../sections/service-section/service-section';
import Products from '../sections/products/products';
import Reminder from '../sections/reminder/reminder';
import WorkFlow from '../sections/workflow/workflow';
import Price from '../sections/price/price';
import TestimonialCard from '../sections/testimonials/testimonial';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="Прокат вагів у Черкасах" />
          <Banner />
          <KeyFeature />
          <ServiceSection />
          <Products />
          <Reminder />
          <WorkFlow />
          <Price />
          <TestimonialCard />
        </Layout>
    </ThemeProvider>
  );
}
