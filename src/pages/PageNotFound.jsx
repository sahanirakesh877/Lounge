import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center vh-100">
        <h1 className="display-1 fw-bold text-danger">404</h1>
        <h2 className="mb-4">Oops! Page Not Found</h2>
        <p className="lead mb-4 text-center">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-danger">
          Go Back Home
        </Link>
      </div>
    </>
  );
};

export default PageNotFound;
