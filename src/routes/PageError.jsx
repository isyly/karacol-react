import { useRouteError } from "react-router-dom";

const PageError = () => {
    const error = useRouteError();
    console.log("Route error:", error);
    return (
        <div className="page-error">
            <h1>404 - Page Not FFFFound</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
        </div>
    );
};

export default PageError;