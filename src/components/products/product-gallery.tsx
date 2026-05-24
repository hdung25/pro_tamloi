"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  alt: string;
};

export function ProductGallery({ images, alt }: Props) {
  const [active, setActive] = useState(0);
  const main = images[active] ?? images[0];

  return (
    <div>
      <div className="relative overflow-hidden rounded-2xl bg-[var(--color-cream)] shadow-sm ring-1 ring-[var(--color-line)]">
        <Image
          src={main}
          alt={alt}
          width={800}
          height={800}
          priority
          className="h-auto w-full object-cover transition-opacity duration-300"
        />
      </div>

      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3">
          {images.map((src, i) => (
            <button
              key={`${src}-${i}`}
              type="button"
              onClick={() => setActive(i)}
              className={`overflow-hidden rounded-xl bg-[var(--color-cream)] ring-2 transition-all ${
                active === i
                  ? "ring-[var(--color-brand)]"
                  : "ring-transparent hover:ring-[var(--color-cream-dark)]"
              }`}
              aria-label={`Ảnh ${i + 1}`}
            >
              <Image
                src={src}
                alt=""
                width={200}
                height={200}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
