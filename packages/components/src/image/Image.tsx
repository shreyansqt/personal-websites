import { getPlaceholder } from "@repo/utils/getPlaceholder";
import { ClientImage } from "./ClientImage";

type Props = {
  src: string;
  alt?: string;
  className?: string;
  priority?: boolean;
};

export const Image = async ({ src, alt = "", className, priority }: Props) => {
  const { metadata, base64 } = await getPlaceholder(src);

  return (
    <ClientImage
      src={src}
      alt={alt}
      priority={priority}
      height={metadata.height}
      width={metadata.width}
      className={className}
      base64={base64}
    />
  );
};
