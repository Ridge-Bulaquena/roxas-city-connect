import React from 'react';
import { Layout, Header, Footer, Button, Card, Section } from '../components/ui';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
        },
    },
};

const GetStartedPage = () => {
  return (
    <Layout>
      <Header showGetStarted />
      <Section variant="hero" spacing="xl">
        <Card variant="elevated">
          <h1>Welcome to Roxas City Connect</h1>
          <Button variant="primary" size="lg">
            Get Started
          </Button>
        </Card>
      </Section>
      <Footer />
    </Layout>
  );
};

export default GetStartedPage; 