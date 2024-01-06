import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log("error", error)
    return (
        <div>
            <h2>OopS! Something went wrong</h2>
            <h3>{error.status}: {error.error.message}</h3>
        </div>
    )
}

export default ErrorPage