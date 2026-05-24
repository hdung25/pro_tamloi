import type { Metadata } from "next";
import { PageBanner } from "@/components/page-banner";
import { ContactInfoCards } from "@/components/contact/contact-info-cards";
import { ContactForm } from "@/components/contact/contact-form";
import { UspStrip } from "@/components/usp-strip";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Liên hệ — Tâm Lợi Foods",
  description:
    "Liên hệ Tâm Lợi Foods qua hotline 0915 015 115, email info@tamloi.com hoặc gửi tin nhắn trực tiếp. Địa chỉ: 377A Long Bình, Tây Ninh.",
};

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5!2d106.4!3d10.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVMOieSBOaW5o!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s";

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Liên hệ"
        subtitle="Tâm Lợi Foods luôn sẵn sàng lắng nghe và đồng hành cùng quý khách hàng, đối tác."
        image="/images/factory.png"
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Liên hệ" },
        ]}
        align="left"
      />

      <ContactInfoCards />

      <section className="bg-[var(--color-cream)] py-12 md:py-16">
        <div className="container-page grid gap-6 md:grid-cols-2 md:gap-8">
          <Reveal direction="right">
            <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[var(--color-line)] md:p-7">
              <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--color-brand)]">
                Bản đồ đường đi
              </h3>
              <div className="mt-4 flex-1 overflow-hidden rounded-2xl ring-1 ring-[var(--color-line)]">
                <iframe
                  src={MAP_SRC}
                  title="Bản đồ Tâm Lợi Foods"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[320px] w-full md:h-[380px]"
                />
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=377A+Long+Binh+Tay+Ninh"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 inline-flex items-center justify-center gap-2 rounded-full border-2 border-[var(--color-brand)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--color-brand)] transition-all duration-300 hover:bg-[var(--color-brand)] hover:text-white"
              >
                Xem đường đi trên Google Map
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </Reveal>

          <Reveal direction="left" delay={150}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <UspStrip />
    </>
  );
}
