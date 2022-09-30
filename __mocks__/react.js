const React = require.actual('react')
module.exports = { ...React, useEffect: React.useLayoutEffect }