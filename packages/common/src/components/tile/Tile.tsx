import type { ReactElement, ReactNode } from "react";
import type { TSanityImage } from "../../types";
import { SanityImage } from "../sanity-image";
import styles from "./styles.module.css";
import { TileBorder } from "./TileBorder";

interface Props {
  children?: ReactNode;
  className?: string;
  title?: string;
  image?: TSanityImage;
}

export function Tile({
  children,
  className,
  title,
  image,
}: Props): ReactElement {
  return (
    <div className={`${styles.tile} ${className}`}>
      <TileBorder />
      <div className="px-10 py-12">
        {title ? <h3 className="mb-4 text-3xl">{title}</h3> : null}
        {children}
      </div>

      {image?.asset ? (
        <div className={styles.imageWrapper}>
          <SanityImage image={image} />
        </div>
      ) : null}
    </div>
  );
}
