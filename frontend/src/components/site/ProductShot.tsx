import { cn } from "@/lib/utils";
import type { ProductScreen } from "@/lib/content";

type ProductShotProps = {
  screen: ProductScreen;
  priority?: boolean;
  showCaption?: boolean;
  className?: string;
  sizes?: string;
};

const ProductShot = ({
  screen,
  priority = false,
  showCaption = true,
  className,
  sizes = "(min-width: 1160px) 1100px, 100vw",
}: ProductShotProps) => (
  <figure className={cn("m-0", className)}>
    <img
      src={`/assets/command/${screen.file}-1712.webp`}
      srcSet={`/assets/command/${screen.file}-900.webp 900w, /assets/command/${screen.file}-1712.webp 1712w`}
      sizes={sizes}
      width={screen.width}
      height={screen.height}
      alt={screen.alt}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      className="h-auto w-full rounded-lg border border-border/80 bg-white shadow-panel"
    />
    {showCaption && (
      <figcaption className="mt-3 flex flex-col gap-1 text-[13px] leading-relaxed text-muted-foreground sm:flex-row sm:gap-2">
        <span className="font-semibold text-foreground">{screen.title}.</span>
        <span>{screen.caption}</span>
      </figcaption>
    )}
  </figure>
);

export default ProductShot;
