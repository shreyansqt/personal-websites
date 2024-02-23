import { Image } from "../image";
import { ReactNode } from "react";
import styles from "./styles.module.css";
import { TileBorder } from "./TileBorder";

interface Props {
  children?: ReactNode;
  className?: string;
  title?: string;
  image?: string;
}

export const Tile = ({ children, className, title, image }: Props) => {
  return (
    <div className={`${styles.tile} ${className}`}>
      <TileBorder />
      <div className="px-10 py-12">
        {title && <h3 className="mb-4 text-3xl">{title}</h3>}
        {children}
      </div>

      {image && (
        <div className={styles.imageWrapper}>
          <Image src={image} alt="Cover image for the post" />
        </div>
      )}
    </div>
  );
};
