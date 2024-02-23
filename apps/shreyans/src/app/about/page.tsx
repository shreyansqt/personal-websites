import { Tile } from "@repo/common/components/tile";

export const metadata = {
  title: "About me",
};

export default function Home() {
  return (
    <div className="container py-20">
      <Tile title="About me" />
    </div>
  );
}
