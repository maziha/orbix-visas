import { Link } from "@tanstack/react-router";

export function SiteNotFound() {
  return (
    <div className="container-px mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center py-20 text-center">
      <p className="font-display text-7xl text-[var(--navy)]">404</p>
      <h1 className="mt-4 font-display text-2xl text-[var(--navy)]">Page not found</h1>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link to="/" className="btn-primary mt-8">
        Back to home
      </Link>
    </div>
  );
}
