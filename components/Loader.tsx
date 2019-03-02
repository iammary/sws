import * as React from 'react';
import ContentLoader from 'react-content-loader';

const Loader: React.FunctionComponent<any> = () => (
  <ContentLoader
    height={200}
    width={150}
    speed={2}
    primaryColor="#323E4A"
    secondaryColor="#4b5966"
  >
    <rect x="0" y="6.55" rx="4" ry="4" width="140" height="7" />
    <circle cx="70" cy="57.45" r="35" />
    <rect x="0" y="100" rx="3" ry="3" width="40" height="7" />
    <rect x="100" y="100" rx="3" ry="3" width="40" height="7" />
    <rect x="0" y="115" rx="3" ry="3" width="140" height="35" />
    <rect x="0" y="160" rx="3" ry="3" width="140" height="7" />
    <rect x="0" y="175" rx="3" ry="3" width="100" height="7" />
  </ContentLoader>
);

export default Loader;
