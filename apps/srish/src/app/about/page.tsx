import { Tile } from "@repo/common/components/tile";
import type { ReactElement } from "react";

export const metadata = {
  title: "About me",
};

export default function Home(): ReactElement {
  return (
    <div className="container py-20">
      <Tile title="About me" />
    </div>
  );
}
