import Image from "next/image";

export const GitHubButton = () => {
  return (
    <a
      href="https://github.com/Domogo"
      target="_blank"
      rel="noopener noreferrer"
      className={`w-fit uppercase cursor-pointer mt-2 text-aqua border border-aqua p-2`}
    >
      <div className="w-6 h-6 relative text-aqua">
        <Image src="/github.svg" fill alt="GitHub icon" />
      </div>
    </a>
  );
};
