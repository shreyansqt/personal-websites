import { Tile } from "@repo/components/tile";

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
