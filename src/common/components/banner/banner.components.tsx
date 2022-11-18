import React from 'react';
import { Container } from '../container/container.components';

export const Banner = () => {
  return (
    <div className="bg-conduit-green shadow-banner text-white p-8 mb-8">
      <Container>
        <h1 className="font-titillium drop-shadow-logo text-center text-logo pb-2">Conduit</h1>
        <p className="text-center text-2xl font-light">A place to share your knowledge.</p>
      </Container>
    </div>
  );
};
