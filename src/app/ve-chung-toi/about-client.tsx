"use client";

import { PageBanner } from "@/components/page-banner";
import { AboutIntro } from "@/components/about/about-intro";
import { AboutStats } from "@/components/about/about-stats";
import { AboutCoreValues } from "@/components/about/about-core-values";
import { AboutProcess } from "@/components/about/about-process";
import { AboutMilestones } from "@/components/about/about-milestones";
import { UspStrip } from "@/components/usp-strip";
import { useLanguage } from "@/context/language-context";

export function AboutPageClient() {
  const { t } = useLanguage();

  return (
    <>
      <PageBanner
        title={t("about.title")}
        subtitle={t("about.subtitle")}
        image="/images/factory.png"
        breadcrumbs={[
          { label: t("nav.home"), href: "/" },
          { label: t("about.title") },
        ]}
        align="left"
      />
      <AboutIntro />
      <AboutStats />
      <AboutCoreValues />
      <AboutProcess />
      <AboutMilestones />
      <UspStrip />
    </>
  );
}
