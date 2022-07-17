import Image from "next/image";

const ComponentWithBackgroundImage: React.FC<{
  imagePath: string;
  alignItems: string;
  children: React.ReactNode;
  className?: string;
}> = ({ imagePath, className = "", children, alignItems = "" }) => {
  return (
    <div className="image-height relative w-full">
      {/* background image */}
      <Image src={imagePath} alt={imagePath} layout="fill" objectFit="cover" />

      <div className="z-10 relative horizontal-padding h-full flex items-center">
        {/* child */}
        <div className={`flex flex-col w-full ${alignItems}`}>
          <div className="w-96">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ComponentWithBackgroundImage;
