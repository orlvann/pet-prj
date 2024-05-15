import { useRouteError } from 'react-router-dom';

function ErrorBoundary() {
  const error = useRouteError();

  const getErrorDetails = (error: unknown): string => {
    if (typeof error === 'string') {
      return error;
    } else if (error instanceof Error) {
      return error.stack || error.message || 'An unknown error occurred';
    }
    return 'An unexpected error type';
  };

  console.error('Error caught by ErrorBoundary:', error);

  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <details style={{ whiteSpace: 'pre-wrap' }}>
        {getErrorDetails(error)}
      </details>
      <button onClick={() => window.location.reload()}>Try Again</button>
    </div>
  );
}

export default ErrorBoundary;
