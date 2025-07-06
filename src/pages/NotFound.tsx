import React from 'react';
import {Layout} from '../components/layout/Layout';

const NotFound: React.FC = () => (
  <Layout>
    <h2 className="text-2xl font-bold mb-4">404 - Page Not Found</h2>
    <p>The page you are looking for does not exist.</p>
  </Layout>
);

export default NotFound;
