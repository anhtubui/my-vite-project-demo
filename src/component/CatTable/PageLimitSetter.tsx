import { catPageLimitAtom } from "@/atom/catAtoms";
import clsx from "clsx";
import { useAtom } from "jotai";
import { Button } from "my-component-library-1204";

const LIMIT_STEP = 10;

export default function PageLimitSetter({ className }: { className?: string }) {
  const [catPageLimit, setCatPageLimit] = useAtom(catPageLimitAtom);

  return (
    <div className={clsx("flex items-center gap-2", className)}>
      <Button onClick={() => setCatPageLimit(catPageLimit - LIMIT_STEP)}>
        -{LIMIT_STEP}
      </Button>
      <span>{catPageLimit}</span>
      <Button onClick={() => setCatPageLimit(catPageLimit + LIMIT_STEP)}>
        +{LIMIT_STEP}
      </Button>
    </div>
  );
}
