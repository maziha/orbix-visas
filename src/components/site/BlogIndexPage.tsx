"use client";

import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { Reveal, RevealStagger, RevealItem, HoverLift } from "@/components/motion";
import type { BlogPost } from "@/lib/blog-posts";
import { BREADCRUMBS } from "@/lib/breadcrumbs";
import { BLOG_INDEX_HERO } from "@/lib/blog/hero-copy";
import { SectionEyebrow } from "./SectionEyebrow";
import { PageHero } from "./PageHero";
import { SiteContainer } from "./SiteContainer";

export function BlogIndexPage({ posts }: { posts: BlogPost[] }) {
  return (
    <>
      <PageHero
        label={BLOG_INDEX_HERO.label}
        title={BLOG_INDEX_HERO.title}
        subtitle={BLOG_INDEX_HERO.subtitle}
        breadcrumbs={BREADCRUMBS.blog()}
      />

      <section className="py-16 md:py-20 bg-brand-white">
        <SiteContainer>
          <Reveal>
            <SectionEyebrow>GUIDES</SectionEyebrow>
            <h2 className="font-display text-3xl text-[var(--navy)] mt-2 mb-10">
              Latest articles
            </h2>
          </Reveal>
          {posts.length === 0 ? (
            <Reveal>
              <p className="text-muted-foreground text-lg">
                New guides are being added weekly — check back soon.
              </p>
            </Reveal>
          ) : (
            <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <RevealItem key={post.slug}>
                  <HoverLift
                    index={index}
                    className="card-base card-hover-service bg-brand-white rounded-xl border border-border p-6 flex flex-col h-full"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[var(--accent-sky)]">
                        <Tag className="h-3 w-3" />
                        {post.categoryLabel}
                      </span>
                      <span className="text-muted-foreground/40">·</span>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {post.readingTime} min
                      </span>
                    </div>
                    <h3 className="font-display text-xl text-[var(--navy)] leading-snug flex-1">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed line-clamp-3">
                      {post.heroText}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="btn-secondary mt-5 self-start inline-flex items-center gap-2 text-sm"
                    >
                      Read guide
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </HoverLift>
                </RevealItem>
              ))}
            </RevealStagger>
          )}
        </SiteContainer>
      </section>
    </>
  );
}
