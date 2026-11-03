import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import usePageMeta from "@/hooks/usePageMeta";

const NotFound = () => {
  const location = useLocation();

  usePageMeta({
    title: "Page not found | Whizunik",
    description: "The page you requested is not part of the Whizunik website.",
    path: location.pathname,
  });

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />

      <main className="flex flex-1 items-center justify-center px-5 pb-20 pt-32 sm:px-6 md:pt-40">
        <div className="w-full max-w-lg text-center">
          <span className="inline-flex items-center rounded-md border border-primary/20 bg-primary/[0.07] px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
            Error 404
          </span>

          <h1 className="text-page-title mt-6">This page is not part of the workspace.</h1>
          <p className="mx-auto mt-3 max-w-md text-[14px] leading-relaxed text-muted-foreground">
            The route{" "}
            <code className="rounded border border-border bg-surface-container px-1.5 py-0.5 font-mono text-[12px] text-foreground">
              {location.pathname}
            </code>{" "}
            does not exist. Use the navigation above, or return to the main overview.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 text-[13px] font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
            >
              <ArrowLeft size={15} />
              Back to overview
            </Link>
            <Link
              to="/contact"
              className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 text-[13px] font-semibold text-foreground transition-colors hover:border-primary/40 sm:w-auto"
            >
              Contact the team
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
