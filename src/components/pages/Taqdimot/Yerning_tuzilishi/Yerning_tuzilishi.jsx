import the_internal_structure from "../../../../assets/images/Yerning_tuzilishi/the_internal_structure.jpg";
import ichki_yadro from "../../../../assets/images/Yerning_tuzilishi/ichki_yadro.jpg";
import tashqi_yadro from "../../../../assets/images/Yerning_tuzilishi/tashqi_yadro.jpg";
import mantiya from "../../../../assets/images/Yerning_tuzilishi/mantiya.avif";
import yuqori_mantiya from "../../../../assets/images/Yerning_tuzilishi/yuqori_mantiya.jpg";
import qobiq from "../../../../assets/images/Yerning_tuzilishi/qobiq.jpg";
import { useTranslation } from "react-i18next";
import { translationKey } from "../../../../translation/translationKey/translationKey";

const Yerning_tuzilishi = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-black w-full pt-[100px] text-white">
      <div className="container bg-black">
        <div className="flex items-center flex-col justify-center gap-14 pb-24 max-sm:gap-8">
          <div className="flex items-center flex-col justify-center">
            <img
              className="w-[40%] max-sm:w-[60%]"
              src={the_internal_structure}
              alt="the_internal_structure"
              loading="lazy"
            />
            <div className="w-full">
              <h1 className="text-[60px] drop-shadow-[3px_3px_0_white] tracking-[35px] text-center max-sm:text-[25px] max-sm:drop-shadow-[1px_1px_0_white] max-sm:tracking-[20px]">
                {t(translationKey["The structure of the earth"])}
              </h1>
            </div>
          </div>

          <div
            className="w-[80%] text-[20px] leading-[40px] max-sm:w-full max-sm:text-[16px] max-sm:leading-[20px]"
            style={{ wordSpacing: "7px" }}
          >
            <p>{t(translationKey["The structure text1"])}</p>
          </div>
          <div className="flex items-center justify-between max-sm:flex-col max-sm:gap-8">
            <div className="rounded-[20px] border-2 border-white overflow-hidden shadow-[10px_10px_0_rgba(255,255,255,0.7)] max-sm:w-[90%] max-sm:shadow-[5px_5px_0_rgba(255,255,255,0.7)]">
              <img
                src={ichki_yadro}
                className="w-[350px] h-[300px] max-sm:h-[250px]"
                alt="ichki yadro"
                loading="lazy"
              />
            </div>
            <div
              className="w-[60%] flex flex-col gap-5 leading-[35px] max-sm:leading-[20px] max-sm:w-full"
              style={{ wordSpacing: "7px" }}
            >
              <h1 className="text-[30px] max-sm:text-center max-sm:text-[25px]">
                {t(translationKey["THE INNER CORE"])}
              </h1>
              <p className="text-[20px] max-sm:text-[16px]">
                {t(translationKey["The structure text2"])}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between max-sm:flex-col gap-8">
            <div
              className="w-[60%] flex flex-col gap-5 max-sm:w-full leading-[35px] max-sm:leading-[20px] max-sm:order-1"
              style={{ wordSpacing: "7px" }}
            >
              <h1 className="text-[30px] max-sm:text-[25px] max-sm:text-center">
                {t(translationKey["THE OUTER CORE"])}
              </h1>
              <p className="text-[20px] max-sm:text-[16px]">
                {t(translationKey["The structure text3"])}
              </p>
            </div>
            <div className="rounded-[20px] border-2 border-white overflow-hidden shadow-[-10px_10px_0_rgba(255,255,255,0.7)] max-sm:w-[90%] max-sm:shadow-[-5px_5px_0_rgba(255,255,255,0.7)]">
              <img
                src={tashqi_yadro}
                className="w-[350px] h-[300px] scale-110 scale-x-[1.35] max-sm:h-[250px]"
                alt="ichki yadro"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex items-center justify-between max-sm:flex-col gap-8">
            <div className="rounded-[20px] border-2 border-white overflow-hidden shadow-[10px_10px_0_rgba(255,255,255,0.7)] max-sm:w-[90%] max-sm:shadow-[5px_5px_0_rgba(255,255,255,0.7)]">
              <img
                src={mantiya}
                className="w-[350px] h-[300px] scale-[2] scale-x-[2.5] max-sm:h-[250px]"
                alt="ichki yadro"
                loading="lazy"
              />
            </div>
            <div
              className="w-[60%] flex flex-col gap-5 max-sm:w-full leading-[35px] max-sm:leading-[20px]"
              style={{ wordSpacing: "7px" }}
            >
              <h1 className="text-[30px] max-sm:text-[25px] max-sm:text-center">
                {t(translationKey["MANTLE"])}
              </h1>
              <p className="text-[20px] max-sm:text-[16px]">
                {t(translationKey["The structure text4"])}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between max-sm:flex-col gap-8">
            <div
              className="w-[60%] flex flex-col gap-5 max-sm:w-full leading-[35px] max-sm:leading-[20px] max-sm:order-1"
              style={{ wordSpacing: "7px" }}
            >
              <h1 className="text-[30px] max-sm:text-[25px] max-sm:text-center">
                {t(translationKey["THE LOWER MANTLE"])}
              </h1>
              <p className="text-[20px] max-sm:text-[16px]">
                {t(translationKey["The structure text5"])}
              </p>
            </div>
            <div className="rounded-[20px] border-2 border-white overflow-hidden shadow-[-10px_10px_0_rgba(255,255,255,0.7)] max-sm:w-[90%] max-sm:shadow-[-5px_5px_0_rgba(255,255,255,0.7)]">
              <img
                src={mantiya}
                className="w-[350px] h-[300px] scale-125 scale-x-[1.8] max-sm:h-[250px]"
                alt="ichki yadro"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex items-center justify-between max-sm:flex-col gap-8">
            <div className="rounded-[20px] border-2 border-white overflow-hidden shadow-[10px_10px_0_rgba(255,255,255,0.7)] max-sm:w-[90%] max-sm:shadow-[5px_5px_0_rgba(255,255,255,0.7)]">
              <img
                src={yuqori_mantiya}
                className="w-[350px] h-[300px] scale-x-[1.4] max-sm:h-[250px]"
                alt="ichki yadro"
                loading="lazy"
              />
            </div>
            <div
              className="w-[60%] flex flex-col gap-5 max-sm:w-full leading-[35px] max-sm:leading-[20px]"
              style={{ wordSpacing: "7px" }}
            >
              <h1 className="text-[30px] max-sm:text-[25px] max-sm:text-center">
                {t(translationKey["THE UPPER MANTLE"])}
              </h1>
              <p className="text-[20px] max-sm:text-[16px]">
                {t(translationKey["The structure text6"])}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between max-sm:flex-col gap-8">
            <div
              className="w-[60%] flex flex-col gap-5 max-sm:w-full leading-[35px] max-sm:leading-[20px] max-sm:order-1"
              style={{ wordSpacing: "7px" }}
            >
              <h1 className="text-[30px] max-sm:text-[25px] max-sm:text-center">
                {t(translationKey["SHELL"])}
              </h1>
              <p className="text-[20px] max-sm:text-[16px]">
                {t(translationKey["The structure text7"])}
              </p>
            </div>
            <div className="rounded-[20px] border-2 border-white overflow-hidden shadow-[10px_10px_0_rgba(255,255,255,0.7)] max-sm:w-[90%] max-sm:shadow-[-5px_5px_0_rgba(255,255,255,0.7)]">
              <img
                src={qobiq}
                className="w-[350px] h-[300px] max-sm:h-[250px]"
                alt="ichki yadro"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yerning_tuzilishi;
