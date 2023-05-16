import Image from "next/image";

export const LinkedInButton = () => {
  return (
    <a
      href="https://www.linkedin.com/in/domogo/"
      target="_blank"
      rel="noopener noreferrer"
      className={`w-fit uppercase cursor-pointer mt-2 text-aqua border border-aqua p-2`}
    >
      <div className="w-6 h-6 relative text-aqua">
        <Image src="/linkedIn.svg" fill alt="LinkedIn icon" />
      </div>
    </a>
  );
};
