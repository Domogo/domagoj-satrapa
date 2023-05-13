import Image from "next/image";

export const Invader = () => {
  return (
    <div className="relative h-40 w-40">
      <Image
        className="object-contain"
        fill
        sizes="100%"
        src="/invader_blue.webp"
        alt="invader"
      />
    </div>
  );
};
