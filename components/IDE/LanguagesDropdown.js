import Select from "react-select";
import  CustomStyles  from "../IDE/constants/CustomStyles";
import  LanguageOptions  from "./constants/LanguageOptions";

export default function LanguagesDropdown ({ onSelectChange }) {
    return (
        <Select className="text-black font-semibold"
          placeholder={`Filter By Category`}
          options={LanguageOptions}
          styles={CustomStyles}
          defaultValue={LanguageOptions[0]}
          onChange={(selectedOption) => onSelectChange(selectedOption)}
        />
      );
}