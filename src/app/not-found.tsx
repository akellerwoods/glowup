import { PageHead } from "@/components/ui/PageHead";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <PageHead
      label="404"
      title="This page wandered off."
      text="The page you're looking for isn't here. The dogs are, though."
    >
      <div className="flex flex-wrap items-center gap-6">
        <Button href="/">Back home</Button>
        <Button href="/transformations" variant="text">
          See the transformations
        </Button>
      </div>
    </PageHead>
  );
}
