import { getPlaiceholder, GetPlaiceholderReturn } from "plaiceholder";
import fs from "node:fs/promises";

export const getPlaceholder = async (
  src: string
): Promise<GetPlaiceholderReturn> => {
  const file = await fs.readFile(`${process.cwd()}/public${src}`);
  return getPlaiceholder(file, { size: 16 });
};
