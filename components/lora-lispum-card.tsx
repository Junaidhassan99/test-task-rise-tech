import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoraLispumCard: React.FC<{
  icon: IconDefinition;
  rotate?: number;
}> = ({ icon, rotate }) => {
  return (
    <div className="flex flex-col items-center ">
      <div className="py-1">
        <FontAwesomeIcon icon={icon} className="text-7xl" rotate={rotate} />
      </div>
      <div className="text-center text-xl py-1">Lorem Ipsum</div>
      <p className="text-center py-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue
        massa vel nibh interdum suscipit. Aliquam ut mi odio.
      </p>
    </div>
  );
};

export default LoraLispumCard;
