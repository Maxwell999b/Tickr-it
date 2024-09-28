import { metadata } from "./metadata";

export default function Head() {
  return (
    <>
      <title>{metadata.title?.toString() || "Tickr-it"}</title>
      <meta name="description" content={metadata.description?.toString() || "Default description"} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
