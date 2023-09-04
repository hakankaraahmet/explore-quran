import { BiPlayCircle } from "react-icons/bi";
import { IVerseInfo } from "../../../utils/types/Verse";

const VerseCard = ({ verse }: { verse: IVerseInfo }) => {
  return (
    <div
      className="common-breakpoint border-2 rounded-3xl flex justify-between p-4"
      key={verse.id}
    >
      <div className="w-[10%] flex flex-col items-center justify-center p-2">
        <button className=" rounded-full">
          <BiPlayCircle size={32} />
        </button>
      </div>
      <div className="w-[90%] flex flex-col p-2">
        <div className="py-2 md:py-4 px-2 text-2xl md:text-4xl" dir="rtl">
          {verse.text_uthmani}
        </div>
        <div className="py-2 md:py-4  text-base md:text-xl flex flex-wrap">
          <span className="mr-2">({verse.verse_number})</span>{" "}
          <p dangerouslySetInnerHTML={{ __html: verse.translations[0].text }} />
        </div>
      </div>
    </div>
  );
};

export default VerseCard;
