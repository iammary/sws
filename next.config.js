const withTypescript = require( '@zeit/next-typescript' );
module.exports       = withTypescript({
  target: 'serverless'
  // Other options are still valid
});

