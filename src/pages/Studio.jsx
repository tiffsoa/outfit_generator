import { Link } from "react-router-dom";

export default function Studio() {
  return (
    <div className="p-10">
      <Link to="/" className="btn btn-ghost mb-5">
        ← Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-5">The Studio</h1>
      <div className="alert alert-success">
        <span>TODO: Build the Drag & Drop Canvas here!</span>
      </div>
    </div>
  );
}
