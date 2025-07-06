import React from 'react';

const Statistics: React.FC = () => (
  <section className="py-12 bg-gray-100">
    <h2 className="text-2xl font-bold mb-2">Impact Statistics</h2>
    <div className="flex justify-center gap-8">
      <div>
        <span className="block text-3xl font-bold">10k+</span>
        <span>People Helped</span>
      </div>
      <div>
        <span className="block text-3xl font-bold">50+</span>
        <span>Programs</span>
      </div>
      <div>
        <span className="block text-3xl font-bold">100+</span>
        <span>Volunteers</span>
      </div>
    </div>
  </section>
);

export default Statistics;
