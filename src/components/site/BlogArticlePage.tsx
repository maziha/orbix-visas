"use client";

import { Clock } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion";
import type { BlogPost } from "@/lib/blog-posts";
import { buildBlogArticleJsonLd } from "@/lib/blog-article-json-ld";
import { BREADCRUMBS } from "@/lib/breadcrumbs";
import { FaqSection } from "./FaqSection";
import { PageHero } from "./PageHero";
import { SiteContainer } from "./SiteContainer";

export function BlogArticlePage({ post }: { post: BlogPost }) {
  const breadcrumbs = BREADCRUMBS.blogPost(post.slug, post.title);

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBlogArticleJsonLd(post)) }}
      />
      <PageHero
        compact
        label={post.categoryLabel}
        title={post.title}
        subtitle={post.heroText}
        breadcrumbs={breadcrumbs}
        meta={
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.readingTime} min read
            </span>
            <span className="text-white/40">·</span>
            <span>
              {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        }
      />

      <section className="py-16 md:py-20 bg-brand-white">
        <SiteContainer>
          <RevealStagger className="space-y-12">
            {post.sections.map((section) => (
              <RevealItem key={section.heading}>
                <h2 className="font-display text-2xl md:text-3xl text-[var(--navy)] mb-4">
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.paragraphs.map((para, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
                {section.listItems && section.listItems.length > 0 && (
                  <ul className="mt-5 space-y-3">
                    {section.listItems.map((item, i) => {
                      const [bold, ...rest] = item.split(" — ");
                      const hasLabel = rest.length > 0;
                      return (
                        <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                          <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--accent-sky)] shrink-0" />
                          <span>
                            {hasLabel ? (
                              <>
                                <span className="font-semibold text-[var(--navy)]">{bold}</span>
                                {" — "}
                                {rest.join(" — ")}
                              </>
                            ) : (
                              item
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </RevealItem>
            ))}
          </RevealStagger>
        </SiteContainer>
      </section>

      {post.faq.length > 0 && (
        <section className="py-16 md:py-20 bg-brand-subtle">
          <SiteContainer>
            <FaqSection
              faq={post.faq}
              title={`${post.categoryLabel} — common questions`}
              inset
            />
          </SiteContainer>
        </section>
      )}
    </article>
  );
}
