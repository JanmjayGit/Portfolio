import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-32 text-center">
      <Seo title="Not found" description="This page does not exist." path="/404" />
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-3xl font-semibold">Page not found</h1>
      <p className="mt-3 text-muted">That route is not wired up.</p>
      <Link to="/" className="mt-8 inline-block text-accent">
        Return home
      </Link>
    </div>
  );
}
