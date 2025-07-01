import { ShimmerButton } from "../magicui/shimmer-button";

export function ShimmerButtonDemo() {
  return (
    <ShimmerButton className="shadow-2xl hover:scale-105">
      <span className="whitespace-pre-wrap text-center text-base font-light text-white lg:text-lg">
        Pre-order Now
      </span>
    </ShimmerButton>
  );
}
