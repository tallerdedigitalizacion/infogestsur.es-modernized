import { ModernizedPage, routePages } from "../page";

export function generateStaticParams() {
  return routePages.map((page) => ({
    slug: [page.slug, "index.html"],
  }));
}

type PageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function InteriorPage({ params }: PageProps) {
  const { slug } = await params;
  const normalizedSlug = slug.filter((part) => part !== "index.html").join("/");
  const page = routePages.find((item) => item.slug === normalizedSlug);

  return (
    <ModernizedPage
      routeTitle={page?.title ?? "Página interior"}
      innerPage
      contactDemo={Boolean(page?.contactDemo)}
    />
  );
}
