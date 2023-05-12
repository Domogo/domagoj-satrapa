import { SectionHeader } from "components/shared/SectionHeader";

export const Experience = () => {
  return (
    <div className="w-full h-screen px-4 lg:px-24">
      <div className="flex flex-col gap-4">
        <SectionHeader text="Where I've worked" />

        <div className="flex flex-col lg:flex-row items-center gap-8 text-slate-300">
          <div>
            <h3>Lead Engineer @ Tapija</h3>
          </div>

          <div>
            <h3>President @ Tech City Pula</h3>
          </div>

          <div>
            <h3>Lead Engineer @ Enmaga</h3>
          </div>

          <div>
            <h3>Software Engineer @ Infobip</h3>
          </div>

          <div>
            <h3>Associate Engineer @ iOLAP</h3>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};
