import * as React from "react";
import { Link } from "gatsby";

// markup
const NotFoundPage = () => {
  return (
    <main className="p-24">
      <title>Not found</title>
      <h1 className="mt-0 mb-16 max-w-72">Page not found</h1>
      <p>
        Sorry, this page doesn't exist.
        <br />
        Please double-check the url or return to home.
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;
