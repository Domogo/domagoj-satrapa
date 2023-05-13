import Image from "next/image";

export const InvaderWhite = () => {
  return (
    <div className="relative h-6 w-6">
      <Image
        className="object-contain"
        fill
        sizes="100%"
        src="/invader_white.webp"
        alt="invader"
      />
    </div>
  );
};
