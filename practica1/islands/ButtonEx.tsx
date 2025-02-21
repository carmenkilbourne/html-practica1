import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  count:string;
}

export default function Counter(props: CounterProps) {
  return (
    <div>
      <Button onClick={() => props.count}>-1</Button>
    </div>
  );
}