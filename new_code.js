// --- КОДЫН ЭХЛЭЛ ---

/****************************************************************************************
 * PRODUCT: SINGLES NUMEROLOGY & ASTROLOGY REPORT (LOVE DNA V1.0)
 * ENGINE: ROBUST V26.1 (Smart Doc Insertion, Token Limit Safe, UChat, Regex Cleaner)
 ****************************************************************************************/

const CONFIG = {
  VERSION: "v1.0-Singles-Love-DNA-Shaman",
  PRODUCT_NAME: "Зүрхний Хүрдийн Үйлийн Үрийн Тайлал",
  SHEET_NAME: "Sheet1",
  BATCH_SIZE: 3,
  GEMINI_MODEL: "gemini-2.5-flash",
  TEMPERATURE: 0.3,

  COLUMNS: {
    NAME: 0, ID: 1, INPUT: 2, PDF: 3, STATUS: 4,
    TOKEN: 5, DEBUG: 6, DATE: 7, VER: 8, ERROR: 9
  },

  UCHAT: {
    ENDPOINT: "https://www.uchat.com.au/api/subscriber/send-content",
    DELIVERY_MESSAGE: `Амар байна уу, үр минь {{NAME}}? 🔮\n\nУдган ээж нь чиний "Зүрхний хүрдийн заяаны төөрөг"-ийг үзээд дууслаа.\n\nДоорх судар дээр дарж, заяа тавилангийнхаа нууцыг олж уншаарай. 👇`,
    DELIVERY_BTN_TEXT: "📜 Заяаны судар хүлээн авах"
  },

  // ==================================================================================
  // 📜 FULL "GOLD STANDARD" REFERENCE TEXTS (STYLE GUIDE ONLY)
  // ==================================================================================
  REFERENCES: {
    PART_1: `I ХЭСЭГ ЗҮРХНИЙ ХҮРДИЙН ТӨӨРӨГ
Заяагдсан араншин
Үр минь, удган ээж нь чиний төрсөн өдрийн мөрөөр хөөж үзвээс, амьдралын замын тоо чинь 1-ийн хүрдээр эргэлдэж байна. Энэ нь чамайг энэ насанд хайр сэтгэлийн мандал дор "Өөрийнхөөрөө зүтгэгч, тэргүүлэгч" гэсэн сүлдтэй бууж ирснийг илтгэж байна даа. Хайр дурлалын ертөнцөд чи өөрийнхөө бодол санааг өмнөө тавьж, амьдралын жолоог гартаа атгах заяатай төрсөн хүн юм. Хайр гэдэг чиний хувьд зүгээр л нэг сэтгэл хөдлөл биш, харин хамтдаа нэгэн зүгт тэмүүлэх бат бэх түшиг, нөхөрлөл билээ. Гэвч энэ хүчтэй араншингаас чинь болоод заримдаа ханийнхаа үгийг сонсохгүй дарах, өөрийнхөөрөө зүтгэх бардам зан гарч ирэх гээд байдаг гэмийг анзаарч, тэнцвэрийг нь тааруулж яваарай, үр минь.

Матрицын тоон өгөгдөл ба тайлал
Пифагорын 9 нүдэн мандалд чиний тоонууд ингэж бууж байна даа: 1:3 | 2:2 | 3:0 | 4:0 | 5:1 | 6:0 | 7:0 | 8:2 | 9:0. Эдгээр тоонууд чиний сүнсний гүнд хэрхэн нөлөөлдгийг ээж нь хэлээд өгье. Нэгдүгээрт, чиний мандалд нэгийн тоо гурвантаа давтагдсан нь чамд тэнгэрээс өгөгдсөн маш хүчтэй манлайлах эрч хүчийг хуримтлуулж байна. Энэ нь чамайг бусдын дор орох дургүй, бие даасан хүчирхэг нэгэн болгож байгаа хэрэг. Аливаад чи өөрийнхөө шийдвэрээр хандаж, түүндээ хүрэх гэж уйгагүй зүтгэдэг сайн талтай. Гэвч хайр дурлалын харилцаанд энэ их хүч чинь савнаасаа халивал, ханиа өөрийн эрхгүй дарамтлах, эсвэл дорой амьтныг голох сүүдэр дагуулдаг тул дотоод сэтгэлээ шинжиж, ханиа энэрэн хайрлах ухааныг сурах хэрэгтэй байна даа.

Хайрын хэлний учир
Чиний төрсөн өдөрт 3-ын тооны эрчим оршиж байгаа нь чиний зүрхний хэл бол "Сэтгэлийн үг, урам зориг" гэдгийг харуулж байна. Хайртай хүнтэйгээ чи сэтгэлээ онгойтол ярилцаж, ойлголцохыг туйлаас хүсдэг хүн юм. Үнэтэй ховор эд хөрөнгөнөөс илүүтэй, оройн намуунд чамтай хууч хөөрч, мөрөөдлийг чинь хуваалцаж, урам хайрладаг хүнд л чиний зүрх уяран хайлна. Хэрвээ ханилсан хүн чинь дуугай, дотогшоо эсвэл чиний үгийг эс тоовол чи тэр гэрт ганцаардаж, гомдож эхэлдэг учиртай. Тиймээс чиний зүрхний түлхүүр бол харилцан яриа бөгөөд чамайг чин сэтгэлээсээ сонсох тэр л хүн чиний заяаны хань мөнөөсөө мөн.`,

    PART_2: `II ХЭСЭГ ҮЙЛИЙН ҮР БА СЭРЭМЖЛҮҮЛЭГ
Кармын өр
Үр минь, удган ээж нь чиний төрсөн он сар өдрийг судалж үзэхнээ 13, 14, 16, 19 гэсэн урьд насны хар нүгэл, үйлийн үрийн тоо алга байна. Үүнийг бид "Цагаан цаас шиг цэвэр үйлийн үр" гэж дууддаг юм. Энэ нь чи урьд насандаа хүний сэтгэл шархлуулж, өрх гэрийн үймээн тариагүй, буян хишигтэй явсныг илтгэж байна. Чамд ямар нэгэн удам дамжсан хараал, гэрлэлтийн бүтэлгүйтэл заяагдаагүй бөгөөд чиний өнөөдрийн ганц бие яваа чинь зөвхөн чиний өөрийн чинь л шийдвэр юм шүү дээ.

Цоорхой тоо буюу гацаа
Чиний мандалд 3, 4, 6, 7, 9-ийн тоонууд дутаж байна. Энэ нь чиний хайр дурлалын замд дараах бартаануудыг үүсгээд байна даа. Нэгдүгээрт, 3-ын тоо дутсанаас чи доторх үгээ хүнд хэлж чадахгүй, сэтгэлээ нээхдээ хойрго хандах гэмтэй. Хайрын хэл чинь яриа хөөрөө мөртлөө өөрөө эгзэгтэй үед дуугүй болчихдог нь ханиасаа хөндийрөх шалтгаан болдог. Хоёрдугаарт, 4-ийн тоо дутсан нь харилцаанд тогтвор суурьшил, хариуцлага дутаж мэдэх дохио өгч байна. Гуравдугаарт, 6-ийн тоо дутсан нь чи хайр сэтгэлд умбахдаа өөрийгөө умартаж, ханиасаа хэт хамааралтай болох, эсвэл өөрийгөө хайрлуулах эрхгүй хүн мэт дорд үзэх аюултайг анхааруулж байна.

Сэтгэлийн гацаа
Чиний хайр дурлалд тохиолдож буй хамгийн том чөдөр бол амьдралын замын 1-ийн тооноос үүдэлтэй "Хэт төгс рүү тэмүүлэх хүсэл", мөн 9-ийн тоо дутсанаас үүдэлтэй "Өнгөрснөөсөө зууралдах" өвчин хоёр нийлснээс болж байна. Чи дотроо ирээдүйн ханиа маш өндөр хэмжүүрээр зурж төсөөлөхөөс гадна, өнгөрсөнд учирч байсан тэр нэгэн хүний сүүдрээс одоо хэр нь салж чадахгүй л яваа юм байна даа. Шинээр танилцсан хүнээ хүртэл тэрхүү дурсамжтайгаа харьцуулж, голж шилээд байгаа чинь шинэ заяаны үүдийг хааж байна. Өнгөрснийг тавьж явуулахгүйгээр шинэ хувь заяа ирэхгүй гэдгийг ухаарах хэрэгтэй.

Эрчмийн харшил ба аюулын дохио
Амьдралын зам 1, мандалд нэгийн тоо гурвантаа орсон, дээр нь өдрийн 3-ын тоотой нийлээд чамд дараах төрлийн хүмүүс хамгийн их гай барцад авчирна гэдгийг удган ээж нь сануулъя. Хамгийн түрүүнд, чамайг захирч, бүхнийг гартаа оруулах гэсэн дарангуйлагч хүнээс хол яв. Чи өөрөө маш хүчтэй заяатай ч, тийм хүнтэй учирвал өөрийн үнэ цэнээ алдаж, түүний аяст орж гээгдэх аюултай. "Минийхээр л бай" гэж тулгадаг хүмүүс чиний сүнсийг боомилж мэднэ. Энэ төрлийн хүмүүс ихэвчлэн сарын 8, 17, 26-ны өдөр төрсөн байх нь олонтаа тул тийм хүмүүстэй харилцахдаа сонор сэрэмжтэй байж, өөрийн орон зайгаа хамгаалж яваарай.`,

    PART_3: `III ХЭСЭГ ЗАЯАНЫ ХАНИЙН ДҮР
Сүнсний зохицол
Удган ээж нь чиний төөргийг уншиж байхад, чамд заяасан хань чинь чиний дотоод ертөнцийг зөөлрүүлж, дутууг чинь гүйцээх хүн байх нь тодорхой байна. Амьдралын зам 1 болоод 1-ийн тоо гурвантаа орсон нь чамайг бардам, өөрийнхөөрөө, шийдмэг нэгэн гэдгийг гэрчилж байна. Тийм учраас чамд өөр шиг чинь ноёлох гэсэн хүн таарвал тэр гэр бүлд хэрүүл тэмцэл тасрахгүй. Харин чиний дутуу 3, 4, 6, 7, 9 тоонуудын эрчмийг нөхөх тайван, уян зөөлөн, халамжтай хүн л чиний заяаны хань юм. Тэр хүн чамайг сонсдог, дотоод хүчийг чинь хүндэлдэг хэрнээ чамайг тайвшруулж, нөмөр нөөлөг болж чадна. Түүний дэргэд чи өөрийгөө таньж, өнгөрсөн гомдлоо арилгах болно доо.

Ажил үйлс ба нэр хүнд
Заяаны ханийн чинь ажил үйлс нь эрх мэдэл хөөцөлдсөн биш, харин олон түмэнд тус хүргэдэг, сэтгэлийн урлалтай хүн байх магадлалтай байна. Багш, эмч, сэтгэл судлаач эсвэл урлагийн нарийн ухаантай хүн ч байж мэднэ. Тэр хүн хийж буй үйлээ зүгээр нэг мөнгөний төлөө бус, бусдад тус болох гэсэн цагаан сэтгэлээр хийдэг байх нь чухал. Санхүүгийн хувьд өлсөхгүй, гэхдээ амьдралынхаа бүх цагийг ажилд зарахгүй, чамд болон гэр бүлдээ цаг зав гаргадаг, амьдралын дэнсийг тэгш барьдаг хүн л чиний 4-ийн тооны дутууг нөхөж, өрх гэрт чинь амар амгаланг авчирна.

Ивээл өдрүүд буюу Алтан тоо
Чиний заяатай хамгийн сайн нийцэх хүний төрсөн өдөр нь сарын 6, 15, 24-ний өдрүүд байх нь машид ивээлтэй. Ялангуяа 6-гийн тоотой энэ хүмүүс чиний дутуу 6-гийн тоог гүйцээж, чамд халамж, хайр, гэр бүлийн халуун дулааныг бэлэглэх болно. Мөн сарын 2, 11, 20, 29-нд төрсөн 2-ын тооны хүмүүс чиний 1-ийн тоотой маш сайн зохицож, нэг нь удирдаж, нөгөөх нь уян хатан дагаж, амьдралыг тэгшитгэх болно. Эдгээр өдрүүдэд төрсөн хүмүүс чиний амьдралын замыг гэрэлтүүлэх хувьтай хүмүүс юм.`,

    PART_4: `IV ХЭСЭГ ХУВЬ ЗАЯАНЫ 3 ЖИЛИЙН ЗУРАГЛАЛ
2026 он: Ариусгал ба Төгсгөл
Үр минь, чиний 2026 оны хувийн жилийн төөргийг буулгавал 9-ийн тооны мөчлөгт шилжиж байна. Энэ нь чиний хайр сэтгэлийн амьдралд "Их ариусгал" хийгдэх онцгой жил байх нь ээ. Мандалд чинь 9-ийн тоо дутуу байгаагаас чи өнгөрсөн гомдлыг тээж явдаг бол, энэ онд тэр бүх сүүдрээс салж, дотоод сэтгэлээ ариусгах болно. Чамд тус болохоо больсон хуучин харилцаа, муу дадал зуршил энэ жил дуусгавар болно. Үүнийг хагацал гэж битгий гунь, харин шинэ замд бэлтгэж буй тэнгэрийн цэвэрлэгээ гэж ухаараарай.

2027 он: Шинэ мандал
Дараагийн жил буюу 2027 онд чи 1-ийн тооны мөчлөгт орно. Энэ бол амьдралын шинэ хуудас, шинэ эхлэл юм. Өнгөрсөн оны ариусгалын дараа чи цоо шинэ эрч хүчтэйгээр хайр дурлалын замд алхах болно. Чиний амьдралын зам 1 учраас энэ жилийн эрчим чамтай маш сайн нийцэж, хүссэн харилцаагаа бүтээхэд чинь дэм өгнө. Энэ онд чи заяаны ханьтайгаа учрах, эсвэл одоо байгаа харилцаагаа улам бат бэх болгох сайхан боломж хүлээж байна. Өөрийгөө зоригтой нээж, шинэ хайрыг угтаж аваарай.

2028 он: Итгэлцэл ба Нэгдэл
2028 он бол чиний хувьд 2-ын тооны мөчлөг буюу "Харилцан ойлголцол, нэгдэл"-ийн жил байх болно. Өмнөх онд эхлүүлсэн харилцаа чинь энэ жил илүү гүнзгийрч, бие биедээ итгэх итгэл улам батажна. Энэ онд гэрлэлтээ батлуулах, гал голомтоо асаах, үр хүүхэдтэй болох зэрэг амьдралын том шийдвэрүүд гаргахад хамгийн ивээлтэй жил байх болно. 2-ын эрчим нь арга билгийн нэгдэл, эв найрамдлыг бэлгэддэг тул чиний амьдралд урт удаан хугацааны аз жаргалын суурь тавигдах онцгой үе ирнэ дээ.`,

    PART_5: `V ХЭСЭГ ЗАЯАГ ТЭГШЛЭХ НУУЦ ТҮЛХҮҮР
Ухаарал: Дэнсийг тааруулах
Амьдралын зам чинь 1, мөн мандалд чинь гурван 1-ийн тоо байгаа нь чамайг биеэ даасан, бардам, хүчирхэг нэгэн болохыг илтгэж байна. Энэ хүч чамд амьдралд олон амжилтыг авчрах ч, хайр дурлалд заримдаа хатуудаж магадгүй. Хайр сэтгэлээ гэрэлтүүлье гэвэл "хамтын ойлголцол"-д суралцах хэрэгтэй. Бүхнийг өөрийнхөөрөө шийдэж, зааварлах хандлагаа зөөлрүүлж, ханийнхаа үгийг сонсож, амьдралын ачааг хуваалцаж сурах нь чиний хайр дурлалын замыг тэгшлэх гол түлхүүр юм. Энэ нь чиний дутуу байгаа 3 болон 4-ийн тоог нөхөж, гэр бүлд чинь амар амгаланг авчирна.

Өглөөний шившлэг буюу Зүрхний тарни
Дотор чинь хургасан "Би ганцаардах заяатай", "Намайг хэн ч ойлгохгүй" гэсэн муу бодлуудыг үргээхийн тулд өглөө бүр наранд цайгаа өргөж, өөртөө дараах үгсийг шившиж байгаарай:
"Би өнгөрсөн бүх гомдлыг салхинд хийсгэж, шинэ хайр, гэрэл гэгээг хүлээж авахад бэлэн байна."
"Би өөрийнхөө үнэ цэнийг мэднэ, би хайрлагдаж, жаргах эрхтэй хүн."
"Би зүрхээ нээж, бусдыг ойлгож сонсоход бэлэн. Би заяаныхаа ханьд итгэлцэл, урт удаан жаргалыг бэлэглэнэ."

Аз дуудах өнгө, чулуу
Чиний хүчирхэг эрчмийг дэмжиж, хайр дурлалд ээлтэй байх өнгө бол "Алтлаг шар" болон "Улаан" өнгө юм. Алтлаг өнгө чиний сүлд хийморийг өргөх бол, Улаан өнгө нь хайр сэтгэлийн хүрдэнд гал бадрааж, халуун дулаан харилцааг дуудах болно. Харин сэтгэлийг чинь ариусгаж, заяаны ханийг татах байгалийн чулуу бол "Бадмаараг (Рубин)" юм. Бадмаараг нь хайр дурлал, эр зоригийн чулуу бөгөөд чиний зүрхний хүрдийг нээж, жинхэнэ хайртай учрахад тусална.

Удган ээжийн эцсийн үг
Үр минь, чи бол эгэл нэгэн биш ээ. Амьдралын 1-ийн замтай, өөрийн гэсэн бодолтой, тэнгэрлэг хүчирхэг нэгэн. Ганц бие яваа чинь чиний муугийнх биш, харин чиний сүнс энгийн нэгэн харилцааг бус, гүн гүнзгий, жинхэнэ сэтгэлийн холбоог хайж байгаагийн шинж юм. Одоо чи өөрийн хүчээ зөв залж, дутуугаа нөхөж чадвал тэнгэрээс чамд гайхалтай бэлэг бэлдсэн байгаа. 2026 онд хуучнаа ариусган цэвэрлэж, 2027 онд шинэ амьдралаа угтаж, 2028 онд харилцан ойлголцлын бат бэх гэр бүлийг цогцлоохоор төөрөг чинь буужээ. Энэ хугацааг зөв ашиглаж, зүрхээ бэлдээрэй дээ, үр минь. Хурмаст тэнгэр чамайг ивээх болтугай.`
  }
};

function getProperty(key) {
  const val = PropertiesService.getScriptProperties().getProperty(key);
  if (!val) throw new Error(`MISSING SCRIPT PROPERTY: ${key}`);
  return val;
}

// ==========================================
// 🚀 ROBUST MAIN ENGINE (AUTO-HEALING)
// ==========================================
function main() {
  const START_TIME = new Date().getTime();
  const TIME_LIMIT_MS = 5 * 60 * 1000; // 5.0 minutes

  const lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) return;

  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.SHEET_NAME);
    const rows = sheet.getDataRange().getValues();
    let processedCount = 0;

    const KEYS = {
      GEMINI: getProperty("GEMINI_API_KEY"),
      TEMPLATE: getProperty("TEMPLATE_ID"),
      UCHAT: getProperty("UCHAT_API_KEY"),
      FOLDER: getProperty("FOLDER_ID")
    };

    const COLS = CONFIG.COLUMNS;

    for (let i = 1; i < rows.length; i++) {
      if (processedCount >= CONFIG.BATCH_SIZE) break;

      // Premium Upgrade 2: Time Limit Safeguard
      if (new Date().getTime() - START_TIME > TIME_LIMIT_MS) {
        console.warn("Time limit approaching. Stopping early to prevent Google Apps Script timeout.");
        break;
      }

      const row = rows[i];
      const name = String(row[COLS.NAME] || "Эрхэм");
      const contactID = row[COLS.ID];
      const inputData = String(row[COLS.INPUT]);
      const status = String(row[COLS.STATUS] || "");
      const rawDate = row[COLS.DATE];

      const pdfCell = sheet.getRange(i + 1, COLS.PDF + 1);
      const statusCell = sheet.getRange(i + 1, COLS.STATUS + 1);
      const errorCell = sheet.getRange(i + 1, COLS.ERROR + 1);
      const tokenCell = sheet.getRange(i + 1, COLS.TOKEN + 1);
      const debugCell = sheet.getRange(i + 1, COLS.DEBUG + 1);
      const dateCell = sheet.getRange(i + 1, COLS.DATE + 1);
      const verCell = sheet.getRange(i + 1, COLS.VER + 1);

      if (!inputData) continue;
      if (status === "АМЖИЛТТАЙ" || status.includes("ХЯНАХ ШААРДЛАГАТАЙ") || status.includes("24 цаг хэтэрсэн")) continue;

      let isRetry = false;
      if (status === "Боловсруулж байна...") {
        if (rawDate instanceof Date) {
          const nowMs = new Date().getTime();
          const startMs = rawDate.getTime();
          const diffMinutes = (nowMs - startMs) / (1000 * 60);

          if (diffMinutes > 15) {
             isRetry = true;
             console.log(`Timeout recovery for user. Stuck for ${Math.round(diffMinutes)} mins.`);
          } else {
             continue;
          }
        } else {
           continue;
        }
      }

      statusCell.setValue("Боловсруулж байна...");

      const startTime = new Date();
      dateCell.setValue(startTime); // MUST BE A DATE OBJECT FOR TIMEOUT RECOVERY
      SpreadsheetApp.flush();

      try {
        console.log(`Processing Love DNA logic for user...`);

        // 1. DATA PREP: AI PARSING
        const normalized = normalizeInputWithAI(inputData, KEYS.GEMINI);

        // 2. PARSE & CALCULATE (The Brain)
        const userProfile = calculateNumerologyProfile(normalized);

        // 3. GENERATE REPORT (The Voice) - Split Calls
        const reportResult = generateSequentialReport(userProfile, KEYS.GEMINI);

        // 4. SAFE PDF DELIVERY ENGINE
        const pdfUrl = createPdfSafely(name, reportResult.text, KEYS.TEMPLATE, KEYS.FOLDER);

        sendUChatProven(contactID, pdfUrl, name, KEYS.UCHAT);

        const totalTokens = (normalized.usage || 0) + reportResult.usage;
        const now = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm");

        pdfCell.setValue(pdfUrl);
        statusCell.setValue("АМЖИЛТТАЙ");
        tokenCell.setValue(totalTokens);
        debugCell.setValue(JSON.stringify(userProfile));
        dateCell.setValue(now);
        verCell.setValue(CONFIG.VERSION);
        errorCell.setValue("");

        processedCount++;

      } catch (err) {
        let errorMsgStr = err.toString();
        let mongolianError = "Системийн алдаа: " + errorMsgStr;

        if (errorMsgStr.includes("24H_LIMIT") || errorMsgStr.includes("window")) {
            mongolianError = "Фэйсбүүк 24 цаг хэтэрсэн тул мессеж явуулах эрх хаагдсан байна.";
            statusCell.setValue("24 цаг хэтэрсэн");
            errorCell.setValue(mongolianError);
            continue;
        } else if (errorMsgStr.includes("Gemini") || errorMsgStr.includes("JSON Parse")) {
            mongolianError = "AI (Gemini) хариу өгсөнгүй эсвэл түр зуур хэт ачаалалтай байна.";
        } else if (errorMsgStr.includes("UChat token") || errorMsgStr.includes("user_ns")) {
            mongolianError = "UChat тохиргоо эсвэл харилцагчийн код буруу байна.";
        } else if (errorMsgStr.includes("Drive")) {
            mongolianError = "Google Drive лимит хэтэрсэн эсвэл ID буруу байна.";
        }

        console.error(`Error: ${errorMsgStr}`);
        errorCell.setValue(mongolianError);

        if (isRetry || status === "") {
             statusCell.setValue("Дахин оролдож байна (1)");
        } else if (status === "Дахин оролдож байна (1)") {
             statusCell.setValue("Дахин оролдож байна (2)");
        } else if (status === "Дахин оролдож байна (2)") {
             statusCell.setValue("ХЯНАХ ШААРДЛАГАТАЙ");
        } else {
             statusCell.setValue("Дахин оролдож байна (1)");
        }
      }
    }
  } finally {
    lock.releaseLock();
  }
}

// ==========================================
// 2. CALCULATIONS ENGINE (Numerology: Life Path, Matrix, Karmic, Personal Year)
// ==========================================

function sumDigits(numStr) {
  let sum = 0;
  for (let char of numStr) {
    if (char >= '0' && char <= '9') {
      sum += parseInt(char, 10);
    }
  }
  return sum;
}

function reduceToSingleDigit(num, keepMaster = false) {
  let current = num;
  while (current > 9) {
    if (keepMaster && (current === 11 || current === 22 || current === 33)) {
      return current;
    }
    current = sumDigits(current.toString());
  }
  return current;
}

function extractKarmicDebt(day, month, yearSum) {
  const karmicNumbers = [13, 14, 16, 19];
  let found = [];

  if (karmicNumbers.includes(day)) found.push(day);

  let daySum = reduceToSingleDigit(day);
  let monthSum = reduceToSingleDigit(month);
  let ySumReduced = reduceToSingleDigit(yearSum);
  let totalRaw = daySum + monthSum + ySumReduced;

  if (karmicNumbers.includes(totalRaw)) found.push(totalRaw);

  return [...new Set(found)];
}

function calculatePythagoreanMatrix(dobStr) {
  const parts = dobStr.split(/[.\-\/]/);
  // dobStr is guaranteed to be YYYY.MM.DD at this point from normalization
  const dayStr = parts[2] || "01";

  const digits = dobStr.replace(/[^0-9]/g, '');
  let d1 = sumDigits(digits);
  let d2 = reduceToSingleDigit(d1);

  let firstDigitOfDOB = parseInt(dayStr[0], 10);
  if(firstDigitOfDOB === 0 && dayStr.length > 1) {
    firstDigitOfDOB = parseInt(dayStr[1], 10);
  }
  let d3 = Math.abs(d1 - (2 * firstDigitOfDOB));
  let d4 = reduceToSingleDigit(d3);

  const allNumbers = digits + d1.toString() + d2.toString() + d3.toString() + d4.toString();

  let matrix = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0};
  for (let char of allNumbers) {
    if (char >= '1' && char <= '9') {
      matrix[parseInt(char, 10)]++;
    }
  }

  let missing = [];
  for (let i = 1; i <= 9; i++) {
    if (matrix[i] === 0) missing.push(i);
  }

  return { matrix, missing, rawNumbers: allNumbers };
}

function getPersonalYear(day, month, targetYear) {
  let d = reduceToSingleDigit(sumDigits(day.toString()));
  let m = reduceToSingleDigit(sumDigits(month.toString()));
  let y = reduceToSingleDigit(sumDigits(targetYear.toString()));
  return reduceToSingleDigit(d + m + y);
}

function calculateNumerologyProfile(normalizedData) {
  const { dob, userGender, name } = normalizedData;
  const parts = dob.split(/[.\-\/]/).map(Number);
  const year = parts[0];
  const month = parts[1];
  const day = parts[2];

  // 1. Life Path Number
  const daySum = reduceToSingleDigit(sumDigits(day.toString()), true);
  const monthSum = reduceToSingleDigit(sumDigits(month.toString()), true);
  const yearSum = reduceToSingleDigit(sumDigits(year.toString()), true);

  const lifePathRaw = daySum + monthSum + yearSum;
  const lifePath = reduceToSingleDigit(lifePathRaw, true);

  // 2. Day Number (Love Language / Communication style)
  const dayNumber = reduceToSingleDigit(day);

  // 3. Karmic Debt
  const karmicDebt = extractKarmicDebt(day, month, sumDigits(year.toString()));

  // 4. Matrix & Missing numbers
  const { matrix, missing } = calculatePythagoreanMatrix(dob);
  const matrixStr = Object.keys(matrix).map(k => `${k}:${matrix[k]}`).join(" | ");

  // 5. Personal Years (Next 3 years)
  const currentYear = new Date().getFullYear();
  const py1 = { year: currentYear, py: getPersonalYear(day, month, currentYear) };
  const py2 = { year: currentYear + 1, py: getPersonalYear(day, month, currentYear + 1) };
  const py3 = { year: currentYear + 2, py: getPersonalYear(day, month, currentYear + 2) };

  return {
    name, gender: userGender, dob, year, month, day,
    lifePath, dayNumber, karmicDebt, matrix, matrixStr, missing,
    personalYears: [py1, py2, py3]
  };
}

function normalizeInputWithAI(raw, key) {
  const prompt = `
  TASK: Normalize this single person's data.
  INPUT: "${raw}"

  INSTRUCTIONS:
  1. Extract Gender (M/F). Return "Эрэгтэй" or "Эмэгтэй". Default "Эмэгтэй" if unknown. Note: In Mongolian "эрэгтэй", "эр" means male, "эмэгтэй", "эм" means female.
  2. Extract Date of Birth (YYYY.MM.DD). Look for formats like 19961030, 1996/10/30, 1996.10.30, 96.10.30.
  3. Extract "Name" if present, else "Эрхэм".

  RETURN JSON ONLY (No markdown formatting, just the raw JSON object):
  {"userGender": "Эрэгтэй", "dob": "YYYY.MM.DD", "name": "Name"}
  `;
  try {
    const result = callGeminiAPI(prompt, key, 0.1, true);
    // Strip markdown if AI hallucinated it despite instructions
    let jsonStr = result.text.trim();
    if (jsonStr.startsWith("```json")) {
        jsonStr = jsonStr.replace(/^```json\n/, "").replace(/\n```$/, "");
    }
    const data = JSON.parse(jsonStr);
    if (!data.dob) throw new Error("No date");

    let gender = "Эмэгтэй";
    let rawG = (data.userGender || "").toLowerCase();
    if (rawG.includes("эр") || rawG === "male" || rawG === "man" || raw.toLowerCase().includes("эр")) gender = "Эрэгтэй";

    return { ...data, userGender: gender, usage: result.usage };
  } catch (e) {
    console.warn("AI Normalization failed, using regex fallback.", e.toString());
    const dateMatch = raw.match(/\d{4}[\.\-\s\/]\d{1,2}[\.\-\s\/]\d{1,2}/);

    if (!dateMatch) {
       throw new Error("Төрсөн он сар өдөр олдсонгүй, эсвэл буруу форматтай байна. Гараар шалгана уу.");
    }

    let fallbackGender = "Эмэгтэй";
    if (raw.toLowerCase().includes("эр")) fallbackGender = "Эрэгтэй";

    return {
      dob: dateMatch[0].replace(/[\s\-\/]/g, "."),
      userGender: fallbackGender,
      name: "Эрхэм",
      usage: 0
    };
  }
}

// ==========================================
// 3. AI GENERATION (TOKEN-SAFE LENGTH + STRICT FORMAT)
// ==========================================
function generateSequentialReport(data, apiKey) {

  const header = `
👤 ХАРИЛЦАГЧИЙН ӨГӨГДӨЛ: ${data.name} | ${data.gender} | ${data.dob}
🔢 Амьдралын зам: ${data.lifePath} | Өдрийн тоо: ${data.dayNumber}
📊 Матриц: ${data.matrixStr} | Дутуу тоо: ${data.missing.join(', ') || 'Байхгүй'}
`;

  const SYSTEM_PROMPT = `
  ROLE: You are a 50-year-old highly intuitive, wise Mongolian Shaman woman (Удган ээж) who specializes in destiny, karma, and love numerology. Tone: Mystical, Grounded, Motherly, and Wise. You address the user as "Үр минь" (my child) and use ancient Mongolian phrasing (e.g., заяа тавилан, төөрөг, хүрд, мандал, үйл). You act as a spiritual guide reading their destiny.
  LANGUAGE: Proper Mongolian Cyrillic ONLY. STRICTLY NO KOREAN OR ENGLISH WORDS (Translate "vibration/frequency" to "эрчим/мандал").

  >>> MASTER RULES (STRICTLY ENFORCED): <<<
  1. ZERO META-TALK: NEVER use phrases like "Энэ хэсэгт бид...", "Дүгнэж хэлэхэд...", "Энэ хэсэг нь...", "Таны тайлан". Start your spiritual reading IMMEDIATELY in the very first sentence.
  2. MYSTICAL YET GROUNDED: Do NOT write like a meaningless fairy tale, but rather a deep spiritual and psychological reading. Use words related to numerology but in a shamanic context (e.g., "тооны мандал", "заяаны хүрд").
  3. STRICT FORMATTING & SUBTITLES:
     - Every logical section MUST have a subtitle on its own line (e.g., "Заяагдсан араншин", "Кармын өр", "Сүнсний зохицол").
     - Do NOT use Markdown headers like (#, ##) or bold formatting (**text**) for subtitles. Just plain text.
     - NO bullet points or asterisks (*, -).
  4. STRICT EMOJI RULE: The paragraph immediately following a subtitle MUST start with EXACTLY ONE emoji. ZERO exceptions. Do NOT use emojis on the subtitle line itself, and do NOT use them in the middle or end of sentences.
  5. COMPLETENESS: NEVER cut off mid-sentence. Always finish your thoughts and provide a complete, well-rounded conclusion.
  `;

  // 1st CALL: Part 1 - DNA & Archetype
  const prompt1 = `
  ${SYSTEM_PROMPT}
  TASK: Write PART 1 ONLY (Love DNA - Shaman version).

  DATA:
  - Амьдралын замын тоо (Life Path): ${data.lifePath}
  - Пифагорын матриц давтамж: ${data.matrixStr} (Анхаарах: 1, 2, эсвэл өөр ямар тоо их давтагдсан байна тэр нь давамгай зан чанарыг илтгэнэ)
  - Төрсөн өдрийн тоо (Love Language): ${data.dayNumber}
  - Хүйс: ${data.gender}

  INSTRUCTIONS: Begin exactly with "I ХЭСЭГ ЗҮРХНИЙ ХҮРДИЙН ТӨӨРӨГ" on its own line, then double line break.
  Write 3 distinct sections. For each section, provide the SUBTITLE on its own line, followed by a double line break, followed by the content paragraph starting with an emoji.
  Section 1 Subtitle: "Заяагдсан араншин" - Analyze their Life Path number and what archetype they are in love, using shamanic phrasing.
  Section 2 Subtitle: "Матрицын тоон өгөгдөл ба тайлал" - Analyze their matrix frequencies (especially repeating numbers like 1s, 2s or 8s) and what power/shadow traits it gives them.
  Section 3 Subtitle: "Хайрын хэлний учир" - Analyze their day number (${data.dayNumber}) to define their primary love language and how they need to be loved.

  STYLE GUIDE REFERENCE (Model your structure, depth, and tone exactly after this):
  ${CONFIG.REFERENCES.PART_1}
  `;
  const r1 = callGeminiAPI(prompt1, apiKey, CONFIG.TEMPERATURE);

  // 2nd CALL: Part 2 - Why Single & Red Flags
  const prompt2 = `
  ${SYSTEM_PROMPT}
  TASK: Write PART 2 ONLY (Why single & Red Flags - Shaman version).

  DATA:
  - Кармын өр (Karmic Debt): ${data.karmicDebt.length > 0 ? data.karmicDebt.join(', ') : 'Байхгүй (Цагаан цаас)'}
  - Матрицын цоорхой (Missing numbers): ${data.missing.join(', ') || 'Байхгүй'}
  - Амьдралын зам: ${data.lifePath}
  - Хүйс: ${data.gender}

  INSTRUCTIONS: Begin exactly with "II ХЭСЭГ ҮЙЛИЙН ҮР БА СЭРЭМЖЛҮҮЛЭГ" on its own line, then double line break.
  Write 4 distinct sections with subtitles on their own lines, followed by content paragraphs starting with an emoji.
  Section 1 Subtitle: "Кармын өр" - Explain if they have karmic debt affecting love, or if they are a "clean slate" and it's just their choices.
  Section 2 Subtitle: "Цоорхой тоо буюу гацаа" - Explain what the missing numbers (${data.missing.join(', ')}) mean in relationships (e.g. missing 4=instability, missing 6=self-worth issues, missing 9=holding onto past).
  Section 3 Subtitle: "Сэтгэлийн гацаа" - Combine their Life Path and missing numbers to identify their deepest psychological block.
  Section 4 Subtitle: "Эрчмийн харшил ба аюулын дохио" - Warn them about the types of people/energies they should avoid, based on their chart.

  STYLE GUIDE REFERENCE (Model your structure, depth, and tone exactly after this):
  ${CONFIG.REFERENCES.PART_2}
  `;
  const r2 = callGeminiAPI(prompt2, apiKey, CONFIG.TEMPERATURE);

  // 3rd CALL: Part 3 - Partner Avatar
  const prompt3 = `
  ${SYSTEM_PROMPT}
  TASK: Write PART 3 ONLY (Future Partner Avatar - Shaman version).

  DATA:
  - Амьдралын зам: ${data.lifePath}
  - Матрицын цоорхой (Missing numbers that need filling): ${data.missing.join(', ') || 'Байхгүй'}
  - Хүйс: ${data.gender}

  INSTRUCTIONS: Begin exactly with "III ХЭСЭГ ЗАЯАНЫ ХАНИЙН ДҮР" on its own line, then double line break.
  Write 4 distinct sections with subtitles on their own lines, followed by content paragraphs starting with an emoji.
  Section 1 Subtitle: "Сүнсний зохицол" - Describe the personality that complements them.
  Section 2 Subtitle: "Ажил үйлс ба нэр хүнд" - Suggest potential career fields or social roles for this partner.
  Section 3 Subtitle: "Ивээл өдрүүд буюу Алтан тоо" - What birth dates/numbers would mathematically balance this user?
  Section 4 Subtitle: "Гадаад төрхийн шинж" - A psychological projection of their aura and physical presence.

  STYLE GUIDE REFERENCE (Model your structure, depth, and tone exactly after this):
  ${CONFIG.REFERENCES.PART_3}
  `;
  const r3 = callGeminiAPI(prompt3, apiKey, CONFIG.TEMPERATURE);

  // 4th CALL: Part 4 - Future Timeline
  const prompt4 = `
  ${SYSTEM_PROMPT}
  TASK: Write PART 4 ONLY (Love Timeline - Shaman version).

  DATA:
  - Амьдралын зам: ${data.lifePath} (CRITICAL: DO NOT hallucinate this number. It is EXACTLY ${data.lifePath})
  - ${data.personalYears[0].year} он: Хувийн жил ${data.personalYears[0].py}
  - ${data.personalYears[1].year} он: Хувийн жил ${data.personalYears[1].py}
  - ${data.personalYears[2].year} он: Хувийн жил ${data.personalYears[2].py}

  INSTRUCTIONS: Begin exactly with "IV ХЭСЭГ ХУВЬ ЗАЯАНЫ 3 ЖИЛИЙН ЗУРАГЛАЛ" on its own line, then double line break.
  Write 4 distinct sections with subtitles on their own lines, followed by content paragraphs starting with an emoji.
  Section 1 Subtitle: "${data.personalYears[0].year} он: [insert PY meaning]" - Analyze this personal year for love.
  Section 2 Subtitle: "${data.personalYears[1].year} он: [insert PY meaning]" - Analyze this personal year for love.
  Section 3 Subtitle: "${data.personalYears[2].year} он: [insert PY meaning]" - Analyze this personal year for love.
  Section 4 Subtitle: "Учрах магадлалтай газрууд" - Based on their missing numbers and exactly their Life Path ${data.lifePath}, where should they hang out to meet their avatar?
  (Note: PY 1=New Beginnings, 2=Partnership, 3=Social/Fun, 4=Stability/Building, 5=Change/Freedom, 6=Family/Love, 7=Spiritual/Inner, 8=Power/Karma, 9=Endings/Clearing).

  STYLE GUIDE REFERENCE (Model your structure, depth, and tone exactly after this):
  ${CONFIG.REFERENCES.PART_4}
  `;
  const r4 = callGeminiAPI(prompt4, apiKey, CONFIG.TEMPERATURE);

  // 5th CALL: Part 5 - Final Key to Success
  const prompt5 = `
  ${SYSTEM_PROMPT}
  TASK: Write PART 5 ONLY (Key to Success - Shaman version).

  DATA:
  - Амьдралын зам: ${data.lifePath} (CRITICAL: Remember this is ${data.lifePath})
  - Хүйс: ${data.gender}

  INSTRUCTIONS: Begin exactly with "V ХЭСЭГ ЗАЯАГ ТЭГШЛЭХ НУУЦ ТҮЛХҮҮР" on its own line, then double line break.
  Write 4 distinct sections with subtitles on their own lines, followed by content paragraphs starting with an emoji.
  Section 1 Subtitle: "Ухаарал: Дэнсийг тааруулах" - Give them a practical psychological strategy to overcome their main flaw.
  Section 2 Subtitle: "Өглөөний шившлэг буюу Зүрхний тарни" - Provide 3 powerful, specific affirmations tailored to heal their blockages. For the affirmations themselves, include them inside the paragraph naturally, separating them with commas or semicolons, rather than placing them on new lines.
  Section 3 Subtitle: "Аз дуудах өнгө, чулуу" - Recommend a specific color and crystal based on their energy needs.
  Section 4 Subtitle: "Удган ээжийн эцсийн үг" - A powerful, grounding closing statement. Remind them their fate is in their hands.

  STYLE GUIDE REFERENCE (Model your structure, depth, and tone exactly after this):
  ${CONFIG.REFERENCES.PART_5}
  `;
  const r5 = callGeminiAPI(prompt5, apiKey, CONFIG.TEMPERATURE);

  return {
    text: header.trim() + "\n\n" + r1.text.trim() + "\n\n" + r2.text.trim() + "\n\n" + r3.text.trim() + "\n\n" + r4.text.trim() + "\n\n" + r5.text.trim(),
    usage: (r1.usage||0) + (r2.usage||0) + (r3.usage||0) + (r4.usage||0) + (r5.usage||0)
  };
}

// ==========================================
// 4. API & SAFE PDF DELIVERY ENGINE
// ==========================================
function callGeminiAPI(prompt, apiKey, temp, requireJson = false) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${CONFIG.GEMINI_MODEL}:generateContent?key=${apiKey}`;

  let payload = {
    "contents": [{ "parts": [{ "text": prompt }] }],
    "generationConfig": { "temperature": temp, "maxOutputTokens": 8192 },
    "safetySettings": [
        { "category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_ONLY_HIGH" },
        { "category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_ONLY_HIGH" },
        { "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_ONLY_HIGH" },
        { "category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_ONLY_HIGH" }
    ]
  };

  if (requireJson) payload.generationConfig.responseMimeType = "application/json";

  const maxAttempts = 3;
  let lastErrorMsg = "";

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const res = UrlFetchApp.fetch(url, { "method": "post", "contentType": "application/json", "payload": JSON.stringify(payload), "muteHttpExceptions": true });

    if (res.getResponseCode() === 429 || res.getResponseCode() >= 500) {
        lastErrorMsg = res.getContentText();
        Utilities.sleep(attempt * 2000); // 2s, then 4s wait
        continue;
    }

    try {
        const json = JSON.parse(res.getContentText());
        if (json.candidates && json.candidates[0].content) {
            return {
                text: json.candidates[0].content.parts[0].text,
                usage: json.usageMetadata ? json.usageMetadata.totalTokenCount : 0
            };
        }
        lastErrorMsg = res.getContentText();
    } catch(e) {
        lastErrorMsg = e.toString() + " | " + res.getContentText();
        Utilities.sleep(attempt * 2000);
    }
  }

  throw new Error(`Gemini API Error after ${maxAttempts} attempts: ${lastErrorMsg}`);
}

function createPdfSafely(name, content, templateId, folderId) {
  const targetFolder = DriveApp.getFolderById(folderId);
  const copyFile = DriveApp.getFileById(templateId).makeCopy(`${name} - ${CONFIG.PRODUCT_NAME}`, targetFolder);
  const copyId = copyFile.getId();

  const doc = DocumentApp.openById(copyId);
  const body = doc.getBody();

  body.replaceText("(?i){{name}}", name);

  let cleanText = content.replace(/\*/g, "");
  cleanText = cleanText.replace(/^#+\s/gm, "");

  const paragraphs = cleanText.split(/\n+/);
  for (let i = 0; i < paragraphs.length; i++) {
    let pText = paragraphs[i].trim();
    if (pText.length > 0) {
      const firstCharMatch = pText.match(/^[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{1F200}-\u{1F2FF}]/u);
      let firstEmoji = firstCharMatch ? firstCharMatch[0] : "";
      let noEmojiText = pText.replace(/[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{1F200}-\u{1F2FF}]/gu, "");
      paragraphs[i] = (firstEmoji + " " + noEmojiText).trim();
    }
  }

  // Rule 6: Locate and replace the EXACT placeholder safely
  let insertionIndex = -1;
  let textAttributes = {};
  let paragraphToReplace = null;

  const searchResult = body.findText("(?i){{\\s*report\\s*}}");

  if (searchResult) {
    const element = searchResult.getElement();
    const textElement = element.asText();

    // Extract exact font formatting to inherit
    textAttributes = textElement.getAttributes();

    paragraphToReplace = element.getParent();
    insertionIndex = body.getChildIndex(paragraphToReplace);
  } else {
    insertionIndex = body.getNumChildren() - 1;
  }

  for (let i = paragraphs.length - 1; i >= 0; i--) {
    let pText = paragraphs[i].trim();
    if (pText.length > 0) {
        let p = body.insertParagraph(insertionIndex, pText);

        // Inherit user's custom font and size from {{report}} placeholder
        let pTextElement = p.editAsText();

        // Clean inherited attributes to only keep FontFamily and FontSize
        if (textAttributes[DocumentApp.Attribute.FONT_FAMILY]) {
            pTextElement.setFontFamily(textAttributes[DocumentApp.Attribute.FONT_FAMILY]);
        }
        if (textAttributes[DocumentApp.Attribute.FONT_SIZE]) {
            pTextElement.setFontSize(textAttributes[DocumentApp.Attribute.FONT_SIZE]);
        }

        // Alignment
        if (pText.length > 50) {
            p.setAlignment(DocumentApp.HorizontalAlignment.JUSTIFY);
        }

        if (/^[IVXLC]+\s+ХЭСЭГ/.test(pText) || /^\d-р хэсэг/.test(pText)) {
            // Only bold and slightly increase size, preserving user's font (e.g. Oswald)
            pTextElement.setBold(true);
            if (textAttributes[DocumentApp.Attribute.FONT_SIZE]) {
                pTextElement.setFontSize(textAttributes[DocumentApp.Attribute.FONT_SIZE] + 2); // e.g. 13 -> 15
            } else {
                pTextElement.setFontSize(14);
            }
            p.setSpacingBefore(20);
            p.setSpacingAfter(10);
        } else {
            p.setLineSpacing(1.5);
            p.setSpacingAfter(10);
        }
    }
  }

  // Remove the original placeholder paragraph AFTER inserting new ones,
  // to avoid "Can't remove the last paragraph" error.
  if (paragraphToReplace) {
    try {
      paragraphToReplace.removeFromParent();
    } catch (e) {
      // If it's still the last paragraph in the document, we just clear its text safely.
      paragraphToReplace.clear();
    }
  }

  doc.saveAndClose();

  const pdfBlob = copyFile.getAs('application/pdf');
  const pdfFile = targetFolder.createFile(pdfBlob);
  pdfFile.setName(`${name} - Тайлан.pdf`);
  pdfFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

  copyFile.setTrashed(true);
  return pdfFile.getUrl();
}

function sendUChatProven(userNs, pdfUrl, name, token) {
  if (!token) throw new Error("DELIVERY: UChat token байхгүй.");
  if (!userNs) throw new Error("DELIVERY: user_ns хоосон.");

  const msg = CONFIG.UCHAT.DELIVERY_MESSAGE.replace("{{NAME}}", name);
  const btn = CONFIG.UCHAT.DELIVERY_BTN_TEXT;

  const payload = {
    user_ns: String(userNs).trim(),
    data: {
      version: "v1",
      content: { messages: [ { type: "text", text: msg, buttons: [ { type: "url", caption: btn, url: pdfUrl } ] } ] }
    }
  };

  const res = UrlFetchApp.fetch(CONFIG.UCHAT.ENDPOINT, {
    method: "post",
    headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" },
    payload: JSON.stringify(payload), muteHttpExceptions: true
  });

  const status = res.getResponseCode();
  const body = res.getContentText();

  if (status < 200 || status >= 300) throw new Error("DELIVERY HTTP " + status + ": " + body.substring(0, 200));
  const json = JSON.parse(body);
  if (json.status !== "ok" && json.success !== true) throw new Error("DELIVERY API failed: " + JSON.stringify(json));
}

// --- КОДЫН ТӨГСГӨЛ ---
