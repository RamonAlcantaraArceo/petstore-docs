(() => {
  const basePath = "/petstore-docs/";
  const targetPath = "/petstore-docs/hello/";
  const { pathname } = window.location;

  if (pathname === basePath || pathname === basePath.slice(0, -1)) {
    window.location.replace(targetPath);
  }
})();
