import the_internal_structure from "../../../assets/images/Yerning_tuzilishi/the_internal_structure.jpg";
import ichki_yadro from "../../../assets/images/Yerning_tuzilishi/ichki_yadro.jpg";
import tashqi_yadro from "../../../assets/images/Yerning_tuzilishi/tashqi_yadro.jpg";
import mantiya from "../../../assets/images/Yerning_tuzilishi/mantiya.avif";
import yuqori_mantiya from "../../../assets/images/Yerning_tuzilishi/yuqori_mantiya.jpg";
import qobiq from "../../../assets/images/Yerning_tuzilishi/qobiq.jpg";

const Yerning_tuzilishi = () => {
  return (
    <div className="bg-black w-full pt-[100px] text-white">
      <div className="container bg-black">
        <div className="flex items-center flex-col justify-center gap-14 pb-24">
          <div className="flex items-center flex-col justify-center">
            <img
              className="w-[40%]"
              src={the_internal_structure}
              alt="the_internal_structure"
              loading="lazy"
            />
            <div className="w-full">
              <h1
                className="text-[60px] drop-shadow-[3px_3px_0_white] text-center"
                style={{ letterSpacing: "35px" }}
              >
                Yerning tuzilishi
              </h1>
            </div>
          </div>

          <div
            className="w-[80%] text-[20px]"
            style={{ lineHeight: "40px", wordSpacing: "7px" }}
          >
            <p>
              Yerning sayyorasi uchta asosiy qatlamdan tashkil topgan: Yer
              qobig`i, mantiya va yadro. Agar sayyorani tuxum bilan taqqoslasak,
              tuxum po`stlog`i - Yer qobig`i, oqi - mantiyani va sarig`i -
              yadroni ifodalaydi. Aytish joiz, mantiya va yadro ham bit necha
              qismlarga bo`linadi.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="rounded-[20px] border-2 border-white overflow-hidden shadow-[10px_10px_0_rgba(255,255,255,0.7)]">
              <img
                src={ichki_yadro}
                className="w-[350px] h-[300px]"
                alt="ichki yadro"
                loading="lazy"
              />
            </div>
            <div
              className="w-[60%] flex flex-col gap-5"
              style={{ lineHeight: "35px", wordSpacing: "7px" }}
            >
              <h1 className="text-[30px]">ICHKI YADRO</h1>
              <p className="text-[20px]">
                Yer markazida qattiq ichki yadro joylashgan. Issiq va zich yadro
                radiusi taxmiman 1221 km hamda undagi bosim 3.6 mln atmosferani
                tashkil qiladi. Ichki yadrodagi harorat Quyosh yuzasi kabi issiq
                (taxminan 5200 <sup>o</sup>C daraja), ya`ni temirni eritish
                uchun yetarlicha issiq.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div
              className="w-[60%] flex flex-col gap-5"
              style={{ lineHeight: "35px", wordSpacing: "7px" }}
            >
              <h1 className="text-[30px]">TASHQI YADRO</h1>
              <p className="text-[20px]">
                Yadroning bu qismi ham temir va nikeldan tashkil topgan, biroq
                suyuq holatda. U Yer yuzasidan 5180 km dan 2880 km gacha
                chuqurlikda joylashgan. Uran va toriy elementlarining radioaktiv
                parchalanishi natijasida isitiladigan bu suyuqlik katta va
                turbulent oqimlarga aylanadi. Bu harakat elektr tokini, ular
                esa, o`z navbatida, Yerning magnit maydonini hosil qiladi. Ba`zi
                tashqi yadro bilan bo`gliq bo`lgan sabablarga ko`ra, Yerning
                magnit maydoni har 200 000 - 300 000 yilda teskari tomonga
                o`zgaradi.
              </p>
            </div>
            <div className="rounded-[20px] border-2 border-white overflow-hidden shadow-[-10px_10px_0_rgba(255,255,255,0.7)]">
              <img
                src={tashqi_yadro}
                className="w-[350px] h-[300px] scale-110 scale-x-[1.35] "
                alt="ichki yadro"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="rounded-[20px] border-2 border-white overflow-hidden shadow-[10px_10px_0_rgba(255,255,255,0.7)]">
              <img
                src={mantiya}
                className="w-[350px] h-[300px] scale-[2] scale-x-[2.5]"
                alt="ichki yadro"
                loading="lazy"
              />
            </div>
            <div
              className="w-[60%] flex flex-col gap-5"
              style={{ lineHeight: "30px", wordSpacing: "7px" }}
            >
              <h1 className="text-[30px]">MANTIYA</h1>
              <p className="text-[20px]">
                Mantiya Yerning eng katta va eng qalin qatlami bo`lib, sayyora
                umumiy hajmining 84 foizini tashkil qiladi. Amntiya yana yuqori
                va quyi mantiyaga bo`lish mumkin. Mantiyaning harorati uning
                qobig`i bilan chegarasi yaqinida 1 000 <sup>o</sup>C dan, yadro
                bilan chegarasi yaqinida 3 700 <sup>o</sup>C gacha farq qiladi.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div
              className="w-[60%] flex flex-col gap-5"
              style={{ lineHeight: "30px", wordSpacing: "7px" }}
            >
              <h1 className="text-[30px]">QUYI MANTIYA</h1>
              <p className="text-[20px]">
                Quyi mantiya Yer yuzasi ostida taxminan 660 km dan 2 700 km
                gacha cho`zilgan. Quyi mantiya yuqori mantiya va o`tish zonasiga
                qaraganda issiqroq va zichroq.
              </p>
            </div>
            <div className="rounded-[20px] border-2 border-white overflow-hidden shadow-[10px_10px_0_rgba(255,255,255,0.7)]">
              <img
                src={mantiya}
                className="w-[350px] h-[300px] scale-125 scale-x-[1.8]"
                alt="ichki yadro"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="rounded-[20px] border-2 border-white overflow-hidden shadow-[10px_10px_0_rgba(255,255,255,0.7)]">
              <img
                src={yuqori_mantiya}
                className="w-[350px] h-[300px] scale-x-[1.4]"
                alt="ichki yadro"
                loading="lazy"
              />
            </div>
            <div
              className="w-[60%] flex flex-col gap-5"
              style={{ lineHeight: "30px", wordSpacing: "7px" }}
            >
              <h1 className="text-[30px]">YUQORI MANTIYA</h1>
              <p className="text-[20px]">
                Yuqori mantiya qobiqdan 410 km chuqurlikka qadar kengaygan.
                Yuqoridan mantiya, asosan, qattiq, ammo uning moslashuvchan
                hududi tektonik faollikka yordam beradi.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div
              className="w-[60%] flex flex-col gap-5"
              style={{ lineHeight: "30px", wordSpacing: "7px" }}
            >
              <h1 className="text-[30px]">QOBIQ</h1>
              <p className="text-[20px]">
                Yer qobig`i bu - biz yashaydigan qatlam. U qattiq qaynatilgan
                tuxum qobig`iga o`xshaydi. Qobiq boshqa 3 ta qatlamga nisbatan
                juda nozik, uning qalinligi okeanlar ostida atigi 8 km (okean
                qobig`i) va materiklar ostida (materik qobig`i) taxminan 32 km
                bo`ladi. Yer qobig`ining harorati havo haroratidan qobiqning eng
                chuqur qismlarida taxminan 870 <sup>o</sup>C gacha farqlanadi.
              </p>
            </div>
            <div className="rounded-[20px] border-2 border-white overflow-hidden shadow-[10px_10px_0_rgba(255,255,255,0.7)]">
              <img
                src={qobiq}
                className="w-[350px] h-[300px]"
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
