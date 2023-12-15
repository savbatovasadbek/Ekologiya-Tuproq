import listosfera_1 from "../../../../assets/images/Litosfera/listosfera_1.webp";
import listosfera_2 from "../../../../assets/images/Litosfera/listosfera_2.png";
import listosfera_3 from "../../../../assets/images/Litosfera/listosfera_3.jpg";
import listosfera_4 from "../../../../assets/images/Litosfera/listosfera_4.jpg";

const Litosfera = () => {
  return (
    <div className="bg-black  indent-[30px] leading-8">
      <div className="container text-white flex flex-col gap-8 py-5 max-sm:gap-4">
        <div className="">
          <h1 className="text-[50px] drop-shadow-[3px_3px_0_white] tracking-[20px] text-center max-sm:text-[18px] max-sm:drop-shadow-[1px_1px_0_white] max-sm:tracking-[5px] leading-[80px] max-sm:leading-8">
            Litosfera: Yerning tashqi qobig`i haqida faktlar
          </h1>
        </div>

        <div className="mt-10">
          <p className="">
            ``Litosfera - biz uy deb ataydigan Yer qatlami ...``
          </p>
        </div>

        <div className="">
          <div className="flex flex-col mt-10">
            <img
              src={listosfera_1}
              className="w-[80%] mx-auto my-0"
              alt="Litosfera Yerning eng tashqi qatlami bo`lib, tektonik plitalar deb
              ataladigan bo`laklarga bo`linadi. (Rasm krediti: johan63 Getty
              Images orqali)"
              loading="lazy"
            />
            <p className="text-[14px] text-center">
              Litosfera Yerning eng tashqi qatlami bo`lib, tektonik plitalar deb
              ataladigan bo`laklarga bo`linadi. (Rasm krediti: johan63 Getty
              Images orqali)
            </p>
          </div>
          <div className="mt-10">
            <p>
              Litosfera Yerning eng tashqi qatlami bo`lib , qobiq va yuqori
              mantiyaning mo`rt qismidan iborat. Litosfera atamasi yunoncha
              ``lito`` tosh degan ma`noni anglatadi va ``sphaira`` globus yoki
              to`p degan ma`noni anglatadi.
            </p>
            <p className="mt-10">
              The Geological Society ma`lumotlariga ko`ra, yuqoridagi atmosfera
              va pastdagi astenosfera o`rtasida joylashgan litosfera 190 milya
              (300 kilometr) chuqurlikka yetishi mumkin .
            </p>
          </div>
        </div>

        <div className="mb-10">
          <p>
            Litosfera-astenosfera chegarasida — harorat 2400 daraja Farengeytga
            (1300 daraja Selsiy) yetganda — jinslar juda sekin bo`lsa-da,
            yopishqoq xususiyatga ega bo`lib, oqadi. Sciencing.com
            ma`lumotlariga ko`ra, tog` jinslari yuqoridagi mantiya va qobiqning
            millari tufayli yuzaga kelgan yuqori bosim tufayli mustahkam bo`lib
            qoladi, biroq yiliga bir yoki ikki dyuym (2,5 dan 5 santimetr)
            siljish tezligi . Egiluvchanlikning bu o`zgarishi - materialning
            stress ostida deformatsiyalanishi yoki cho`zilishi qobiliyati -
            yuqori mantiyadagi litosfera va astenosfera o`rtasidagi chegarani
            belgilaydi.
          </p>
          <p className="mt-10">
            Litosferaning astenosferadagi doimiy ``slip `n` slide`` harakati uni
            tektonik plitalar deb ataladigan bir nechta katta qismlarga
            bo`linishiga olib keldi.
          </p>
          <div className="mt-10 w-[60%] mx-auto my-0">
            <img
              src={listosfera_2}
              className="w-full"
              alt="Litosfera"
              loading="lazy"
            />
          </div>
        </div>

        <div className="">
          <div className="w-full border-b border-b-[#3669C9] flex items-center justify-center">
            <div className="py-1 px-[80px] bg-[#3669C9]">
              <h1>LITOSFERA NAVLARI</h1>
            </div>
          </div>

          <p className="mt-6">
            Litosferani ikki turga bo`lish mumkin: okeanik va kontinental.
          </p>
          <p className="mt-10">
            Sciencing.com ma`lumotlariga ko`ra, okean qobig`i nisbatan nozik va
            zich. Okean qobig`i asosan kremniy va magniyga boy bazalt jinsidan
            iborat. Geologiya jamiyati ma`lumotlariga ko`ra, uning qalinligi
            O`rta Atlantika tizmasi kabi okeanlarning tarqaladigan markazlarida
            bir necha mildan, etuk okean havzalari ostida 60-90 milya (100-150
            km) gacha.
          </p>
          <p className="mt-10">
            Boshqa tomondan, kontinental qobiq asosan kremniy va alyuminiyga boy
            granit jinslaridan iborat bo`lib, qalinligi 190 milya (300 km) gacha
            yetishi mumkin. Santa-Barbaradagi Kaliforniya universiteti
            ma`lumotlariga ko`ra, qit`alar okean tubidan balandroq balandlikda,
            chunki qit`a qobig`i okean qobig`iga qaraganda kamroq zichroq va
            shuning uchun mantiyada ``suzadi`` .
          </p>
        </div>

        <div className="py-6">
          <div className="w-full border-b border-b-[#3669C9] flex items-center justify-center">
            <div className="py-1 px-[80px] bg-[#3669C9]">
              <h1>LITOSFERA VA PLITALAR TEKTONIGI</h1>
            </div>
          </div>
          <p className="mt-10">
            Litosfera tektonik plitalar deb ataladigan qismlarga bo`lingan.
            Geologiya jamiyati ma`lumotlariga ko`ra, ettita katta va sakkizta
            kichik plitalar mavjud . Oy va sayyoralar instituti ma`lumotlariga
            ko`ra, Yer bu jihatdan noyobdir, biz hali ham haqiqiy plitalarga
            bo`lingan litosferaga ega bo`lgan boshqa sayyorani topmadik .
          </p>
          <div className=" mt-10 flex items-center flex-col">
            <img
              src={listosfera_3}
              className="w-[60%] mx-auto my-0"
              alt="Litosferani tektonik plitalar deb ataladigan katta qismlarga bo'lish mumkin. Bu plitalar asta-sekin astenosfera qatlami ustida harakat qiladi. (Rasm krediti: Getty Images orqali blueringmedia)"
              loading="lazy"
            />
            <p className="text-center text-[14px]">
              Litosferani tektonik plitalar deb ataladigan katta qismlarga
              bo`lish mumkin. Bu plitalar asta-sekin astenosfera qatlami ustida
              harakat qiladi. (Rasm krediti: Getty Images orqali blueringmedia)
            </p>
          </div>
          <p className="mt-10">
            Astenosfera litosfera plitalari plitalari uchun moylash vositasi
            bo`lib, ularning siljishi, bir-biriga tegishi va bir-birining
            yonidan o`tishiga imkon beradi - bu vulqon otilishi va zilzilalar
            kabi geologik hodisalarga olib keladi.
          </p>
          <p className="mt-10">
            Plitalar tektonikasi, shuningdek, Hindiston va Tibet chegarasi
            bo`ylab 1800 milya (2900 km) ga cho`zilgan Himoloy tog`lari kabi
            Yerdagi eng hayratlanarli relef shakllari uchun ham javobgardir.
            Amerika Qo`shma Shtatlari Geologik xizmati ma`lumotlariga ko`ra,
            ulkan tog` tizmasi 40-50 million yil oldin Hindiston va Evrosiyo
            plitalari to`qnashganda paydo bo`lgan .
          </p>
          <div className="flex gap-10 my-10 max-sm:flex-col">
            <div className="w-[1200px] max-sm:w-full">
              <p>
                Milliy okean va atmosfera ma`muriyati (NOAA) ma`lumotlariga
                ko`ra , O`rta Atlantika tizmasi kabi yirik okean tizmalari
                ikkita tektonik plitalar har biridan uzoqlashganda, bir-biridan
                farq qiluvchi plastinka chegaralarida hosil bo`ladi. Eritilgan
                jinslar astenosfera orqali dengiz tubiga oqib chiqqach, u katta
                bazalt otilishlarini hosil qiladi. Plitalar bir-biridan farq
                qilganda, yangi okean tubi paydo bo`ladi va plitalar bir-biridan
                uzoqlashishda davom etadi. Sciencing.com ma`lumotlariga ko`ra,
                okean plitasi kontinental plastinkaga o`xshab “engilroq”
                plastinka bilan to`qnashganda, uning ostidan burilib,
                subduktsiya deb ataladi. Tektonik plitalar, ehtimol,
                sayyoramizning 4,6 milliard yillik tarixida juda erta paydo
                bo`lgan va shu vaqtdan beri bamperli avtomobillarning sekin
                harakatlanuvchi o`yinini o`ynamoqda.
              </p>
            </div>
            <div className="w-[600px] flex flex-col gap-4 max-sm:w-full">
              <div className="py-1 px-[80px] bg-[#3669C9] w-full text-center">
                <h1>BILASIZMI?</h1>
              </div>
              <p className="text-[14px]">
                San-Andreas yoriq chizig`i bo`ylab harakat har yili
                Los-Anjelesni San-Frantsiskoga 1,8 dyuym (4,6 sm)
                yaqinlashtiradi?
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5">
            <img
              src={listosfera_4}
              alt="Turli xil zichlikdagi ikkita plastinka to'qnashganda plitalar tektonikasi va subduktsiyaning tasviri. (Rasm krediti: CHRISTOPH BURGSTEDT/SCIENCE FOTO KUTUBXONASI Getty Images orqali)"
            />
            <p className="text-[14px] text-center">
              Turli xil zichlikdagi ikkita plastinka to`qnashganda plitalar
              tektonikasi va subduktsiyaning tasviri. (Rasm krediti: CHRISTOPH
              BURGSTEDT/SCIENCE FOTO KUTUBXONASI Getty Images orqali)
            </p>
          </div>
        </div>
        <div className="">
          <div className="w-full border-b border-b-[#3669C9] flex items-center justify-center">
            <div className="py-1 px-[80px] bg-[#3669C9]">
              <h1>LITOSFERA VA PLITALAR TEKTONIGI</h1>
            </div>
          </div>
          <p className="mt-10">
            Biz litosferaning mavjudligini bilamiz, chunki u biz yashayotgan
            joyda va ajoyib vulqonlar va baland tog` tizmalari orqali plastinka
            tektonikasining bevosita ta`sirini ko`rishimiz mumkin. Ammo yer
            ostida nima bo`layotganini qanday bilamiz?
          </p>
          <p className="mt-10">
            Zilzilalar va seysmik to`lqinlar bizga Yerning ichki qismi,
            jumladan, litosfera va astenosfera joylashgan joy haqida ko`p
            narsalarni aytib berishi mumkin.{" "}
          </p>
          <p className="mt-10">
            Kolumbiya universiteti ma`lumotlariga ko`ra, zilzila paytida
            birlamchi (P) va ikkilamchi (S) to`lqinlar Yerning ichki qismiga
            tarqaladi . Dunyo bo`ylab joylashgan maxsus stantsiyalar bu
            to`lqinlarni aniqlaydi va ularning tezligini qayd etadi, bu esa
            olimlarga to`lqinlar o`tgan materialning tarkibi, harorati va bosimi
            haqida ko`p narsalarni aytib beradi.{" "}
          </p>
          <div className="flex justify-between mt-10 max-sm:flex-col">
            <div className="w-[800px] max-sm:w-full">
              <p>
                Seysmik to`lqinlar qattiq jinslar kabi zich moddalar bo`ylab
                tezroq tarqaladi va suyuqliklarda sekinlashadi. Taxminan 60-90
                milya (100-250 km) chuqurlikda seysmik to`lqinlar sekinlasha
                boshlaydi, bu ularning qisman erigan (taxminan 1%) zonasiga -
                astenosferaga kirganligini ko`rsatadi. Seysmik past tezlik
                zonasi - astenosferadagi jinslar haroratning oshishi yoki
                bosimning pasayishi tufayli qisman eriydi. Geologiya jamiyati
                ma`lumotlariga ko`ra, bunday qisman erish issiq nuqtalarda va
                plitalar chegaralarida ko`proq uchraydi .
              </p>
            </div>
            <div className="w-maxflex flex-col gap-4">
              <div className="py-1 px-[80px] bg-[#3669C9] w-full text-center">
                <h1>TEGISHLI HIKOYALAR:</h1>
              </div>
              <div className="text-[14px] flex flex-col gap-3 my-4">
                <a href="">- Yer qanday paydo bo`lgan?</a>
                <a href="">- Yer qanchalik tez harakat qiladi?</a>
                <a href="">- Yerga eng o`xshash 10 ta ekzosayyora </a>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-full border-b border-b-[#3669C9] flex items-center justify-center">
            <div className="py-1 px-[80px] bg-[#3669C9]">
              <h1>LITOSFERA VA PLITALAR TEKTONIGI</h1>
            </div>
          </div>
          <p className="mt-10 mb-10">
            ESA yordamida Yer litosferasi tomonidan yaratilgan mayda magnit
            signallarning eng batafsil xaritasini o`rganing . Amerika Qo`shma
            Shtatlari Geologik xizmatining ushbu ajoyib batafsil xaritasi bilan
            dunyodagi vulqonlar, zilzilalar, zarba kraterlari va plitalar
            tektonikasini kezing . Ochiq universitet bilan yer yuzasi ostida
            nima borligini ko`rib chiqing va Yerning ichki makonini bilib oling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Litosfera;
