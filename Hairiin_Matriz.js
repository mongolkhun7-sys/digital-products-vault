// --- КОДЫН ЭХЛЭЛ ---

/****************************************************************************************
 * PRODUCT: SINGLES NUMEROLOGY & ASTROLOGY REPORT (LOVE DNA V1.0)
 * ENGINE: ROBUST V26.1 (Smart Doc Insertion, Token Limit Safe, UChat, Regex Cleaner)
 ****************************************************************************************/

const CONFIG = {
  VERSION: "v1.0-Singles-Love-DNA",
  PRODUCT_NAME: "Хайр дурлалын ДНХ тайлан",
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
    DELIVERY_MESSAGE: `Сайн байна уу, {{NAME}}? 🔮\n\nТаны "Хайр дурлалын ДНХ" тайлан бэлэн боллоо.\n\nДоорх товч дээр дарж татаж авна уу. 👇`,
    DELIVERY_BTN_TEXT: "📥 Тайлан татах"
  },

  // ==================================================================================
  // 📜 FULL "GOLD STANDARD" REFERENCE TEXTS (STYLE GUIDE ONLY)
  // ==================================================================================
  REFERENCES: {
    PART_1: `I ХЭСЭГ ХАЙР ДУРЛАЛЫН ДНХ
Хайрын Архетип
Таны төрсөн огноогоор тооцоолсон Амьдралын замын тоо 1 нь таныг хайр дурлалын харилцаанд Бие даасан Манлайлагч гэсэн хүчирхэг архетипээр тодорхойлж байна. Энэ нь таныг хайранд хүчтэй байр суурьтай, шийдвэр гаргагч нэгэн болохыг илтгэдэг. Та харилцаанд өөрийн гэсэн үзэл бодол, зорилготойгоор ханддаг бөгөөд хамтрагчаа удирдан чиглүүлэх, харилцааны жолоог гартаа авахыг эрмэлздэг. Таны хувьд хайр бол зөвхөн сэтгэл хөдлөлөөс илүүтэйгээр хамтын зорилго, амьдралын замыг хамтдаа туулах хүчирхэг түншлэл юм. Та бие даасан байдлаа эрхэмлэдэг тул хайртай хүнтэйгээ байхдаа ч өөрийн орон зай, эрх чөлөөгөө хадгалахыг чухалчилдаг. Гэвч энэ хүчтэй манлайлах чадвар нь заримдаа харилцаанд хэт хяналт тогтоох, хамтрагчийнхаа үзэл бодлыг үл тоомсорлох эрсдэлийг дагуулж болзошгүй тул тэнцвэрийг олох нь таны хувьд чухал юм.

Матрицын тоон өгөгдөл ба тайлал
Таны Пифагорын матрицын 9 нүдэнд тоонууд дараах байдлаар байрлаж байна: 1:3 | 2:2 | 3:0 | 4:0 | 5:1 | 6:0 | 7:0 | 8:2 | 9:0. Эдгээр тоо тус бүр нь таны зан чанарт дараах нөлөөллийг үзүүлдэг. Нэгдүгээрт, таны матрицад нэгийн цифр гурван удаа давтагдан байрлаж байгаа нь танд төрөлхийн маш хүчтэй Манлайллын хэт хүчийг өгдөг. Энэ нь таныг бусдын эрхшээлд орох дургүй, бие даасан, зорилгодоо тууштай хүчирхэг эр хүн болгодог сайн талтай. Та аливаа асуудалд өөрийн шийдвэрийг гаргаж, түүнийгээ тууштай хэрэгжүүлэхийг эрмэлздэг. Гэвч хайр дурлалын харилцаанд энэ хүч хэтэрвэл хамтрагчаа өөрийн мэдэлгүй захирах, дарах, эсвэл зөөлөн зан чанартай хүмүүсийг шүүмжилж голдог сүүдэр талыг үүсгэх эрсдэлтэй. Таны хувьд харилцаанд тэнцвэртэй байдлыг хадгалж, хамтрагчийнхаа үзэл бодол, мэдрэмжийг сонсож сурах нь чухал юм.

Хайрын Хэл
Таны төрсөн өдрийн тоо 3-ын энергитэй байгаа нь таны Хайрын хэлийг Чин сэтгэлийн яриа болон Урмын үг гэж тодорхойлж байна. Та хайртай хүнтэйгээ байхдаа өөрийгөө бүрэн илэрхийлэх, ярилцах, ойлголцох маш их хэрэгцээтэй байдаг. Танд зүгээр нэг үнэтэй бэлэг өгдөг хүнээс илүү тантай орой бүр цаг гарган ярилцдаг, таны мөрөөдлийг сонсдог мөн таныг байнга магтаж урамшуулдаг хүн хамгийн их таалагддаг. Хэрэв таны хамтрагч дуугүй дотогшоо эсвэл таныг сонсдоггүй хүн байвал та тэр харилцаанд ганцаардаж эхэлдэг бөгөөд энэ нь таны харилцаа хөрөх гол шалтгаан болдог тул таны хайрын түлхүүр бол Харилцан яриа бөгөөд таныг чин сэтгэлээсээ сонсдог хүн л таны зүрхийг эзэмшиж чадна.`,

    PART_2: `II ХЭСЭГ ЯАГААД ГАНЦ БИЕ БАЙНА ВЭ БА АЮУЛЫН ДОХИО
Кармын Өр
Таны төрсөн он сар өдрийн тооцооллыг нарийвчлан шалгаж үзэхэд 13, 14, 16, 19 гэсэн Кармын өрийн тусгай тоонууд илрээгүй нь таны хувьд маш том давуу тал бөгөөд үүнийг Нумерологид Цэвэр үйлийн үр буюу Цагаан цаас гэж нэрлэдэг юм. Энэ нь таныг өмнөх амьдралдаа бусдын хайр сэтгэлийг шархлуулсан эсвэл гэр бүлийн өмнө хүлээсэн үүргээсээ зугтсан ямар нэгэн хүнд ачаа тээшгүйгээр энэ ертөнцөд ирснийг баталж байгаа тул танд удам дамжсан ганц бие байдал эсвэл заяагдмал бүтэлгүйтэл гэж байхгүй гэсэн үг бөгөөд таны одоогийн ганц бие байдал нь зөвхөн таны өнөөдрийн сонголт болон шийдвэрээс шууд хамаарна.

Матрицын Цоорхой
Таны матрицад 3, 4, 6, 7, 9 гэсэн тоонууд дутуу байгаа нь таны хайр дурлалын харилцаанд дараах гол гацаануудыг үүсгэж байна. Нэгдүгээрт, танд Ярианы цоорхойг илэрхийлэх 3-ын тоо дутуу байгаа нь таныг харилцаанд өөрийн сэтгэл хөдлөл, бодлоо чөлөөтэй илэрхийлэхэд бэрхшээлтэй болгодог. Хэдийгээр таны хайрын хэл яриа байдаг ч, энэ цоорхой нь таныг ярилцлагаас зайлсхийх, эсвэл чухал үед дуугүй болох хандлагатай болгож, улмаар хамтрагчтайгаа сэтгэлээр холдох эрсдэлтэй. Хоёрдугаарт, танд Тогтвортой байдлын цоорхойг илэрхийлэх 4-ийн тоо дутуу байгаа нь харилцаанд дэг журам, тууштай байдлыг хадгалахад бэрхшээл учруулж болзошгүй. Гуравдугаарт, танд Үнэ цэнийн цоорхойг илэрхийлэх 6-гийн тоо дутуу байгаа нь таныг хайр дурлалд орохоороо өөрийгөө бүрэн мартаж, хамтрагчаасаа сэтгэл санааны хувьд хэт хамааралтай болох эсвэл өөрийгөө хайрлуулах эрхгүй мэтээр дорд үзэх эрсдэлтэй байдалд хүргэдэг.

Сэтгэл зүйн гацаа
Таны хайр дурлалын гол сэтгэл зүйн гацаа нь таны Амьдралын замын тоо 1-ийн нөлөөгөөр үүсдэг Төгс төгөлдөрийн урхи болон матрицын 9-ийн тоо дутуу байгаатай холбоотой Өнгөрснөөсөө салахад бэрхшээлтэй байдал хоёр нийлж үүсдэг. Та дотоод сэтгэлдээ ирээдүйн ханиа маш өндөр шалгуураар төсөөлдөгөөс гадна, өнгөрсөн харилцааны шарх эсвэл хэзээ нэгэн цагт учирч байсан тэр онцгой нэгэнийг одоог хүртэл сэтгэлээсээ бүрэн тавьж явуулахгүй зууралдсаар байх магадлалтай. Та шинээр танилцсан хүн бүрийг тэрхүү өнгөрсний дурсамжтайгаа ухамсаргүйгээр харьцуулж, тэр хүн шиг мэдрэмж өгөхгүй байна гэж голдог нь таны шинэ харилцаанд орох боломжийг хааж буй далд шалтгаан байж болзошгүй тул өнгөрснөөсөө бүрэн салах нь чухал юм.

Аюулын бүс Энергийн үл зохицол ба сэрэмжлүүлэг
Таны Амьдралын замын тоо 1 (бие даасан манлайлагч), матрицад 1-ийн тоо гурван удаа давтагдсан (манлайллын хэт хүч), мөн Өдрийн тоо 3 (харилцаа) гэсэн хослолд дараах гурван төрлийн зан төлөв болон энерги хамгийн хүчтэй сөрөг нөлөө үзүүлэх магадлалтай тул та ийм харилцаанаас сэрэмжлэх хэрэгтэй. Нэгдүгээрт, таны хувьд хэт захирангуй, бүхнийг хяналтдаа байлгах гэсэн хандлагатай хүн хамгийн эрсдэлтэй. Та уг нь төрөлхийн хүчирхэг өгөгдөлтэй боловч ийм хүнтэй харилцах үедээ өөрийн үнэ цэнийг алдаж, түүний хатуу дүрмэнд захирагдан өөрийнхөө мэдрэмж, зөн совинг үгүйсгэхэд хүрдэг сөрөг талтай. Ийм хүн нь таныг "Минийхээр бай" гэж шахаж, таныг өөрийн гэсэн орон зайгүй болгодог бөгөөд нумерологийн ухаанд энэ төрлийн хүчирхэг боловч дарангуйлах хандлагатай энерги нь ихэвчлэн сарын 8, 17, 26-ны өдөр төрсөн хүмүүст илүү тод илрэх магадлалтай байдаг тул та тэдний энэ талыг анхаарч харилцах нь зүйтэй.`,

    PART_3: `III ХЭСЭГ: ИРЭЭДҮЙН ХАНИЙН АВАТАР
Зан чанар
Таны хувьд ирээдүйн ханийн дүр төрхийг нумерологийн үүднээс тодорхойлж үзэхэд, таны дотоод ертөнцийг тэнцвэржүүлж, таныг бүрэн дүүрэн болгох чадвартай хүн байх болно. Таны Амьдралын Зам 1, мөн матрицын давтамжид 1-ийн тоо гурван удаа давтагдаж байгаа нь таныг бие даасан, манлайлагч, өөрийн гэсэн үзэл бодолтой, зорилгодоо тууштай хүчирхэг эр хүн болохыг илтгэдэг. Иймээс танд хэт давамгайлах эсвэл таныг хянах гэсэн хүнтэй учирвал харилцаа тань зөрчилдөөнөөр дүүрэн байх болно. Харин таны дутуу байгаа 3 (ярианы цоорхой), 4 (тогтвортой байдлын цоорхой), 6 (үнэ цэнийн цоорхой), 7 (итгэлцлийн цоорхой), 9 (өнгөрснөө тавих цоорхой) тоонуудыг нөхөж чадах, тайван, уян хатан, бусдыг ойлгодог, халамжтай хүн таны төгс зохицол юм. Тэр хүн таныг сонсож, таны санаа бодлыг хүндэтгэдэг, сэтгэл хөдлөлийн хувьд тогтвортой, таны дотоод хүчийг дэмждэг, харин ч таныг тайвшруулж, аюулгүй мэдрэмжийг өгдөг хүн байх болно. Түүний хажууд та өөрийгөө бүрэн нээж, өнгөрсөн шарх, гомдлоосоо ангижрах боломжийг мэдрэх болно.

Мэргэжил ба Статус
Мэргэжил болон нийгмийн статусын хувьд таны ирээдүйн хань нь таныг хянах эсвэл өрсөлдөх гэсэн эрх мэдэлд шунасан хүн биш, харин бусдад туслах, үйлчлэх, эсвэл бүтээлч салбарт ажилладаг хүн байх магадлал өндөр. Тухайлбал, багш, сэтгэл зүйч, эмч, нийгмийн ажилтан, урлагийн хүн, эсвэл хүний нөөцийн мэргэжилтэн зэрэг ажил мэргэжилтэй байж болно. Тэр хүн ажлаа зөвхөн мөнгө олох хэрэгсэл гэж хардаггүй, харин өөрийн үнэ цэнэ, бусдад өгөх хувь нэмэр гэж үздэг, зорилго төвтэй хүн байх нь чухал. Санхүүгийн хувьд тогтвортой байх боловч амьдралынхаа бүх цагийг ажилдаа зориулдаггүй, харин гэр бүл, хайр дурлалдаа цаг гаргаж чаддаг, амьдралын тэнцвэрийг эрхэмлэдэг хүн байх болно. Энэ нь таны дутуу байгаа 4-ийн тоо буюу тогтвортой байдлыг нөхөж, гэр бүлийн харилцаанд дэг журам, тууштай байдлыг авчрах болно.

Тохирох тоонууд
Таны энергитэй хамгийн төгс зохицох "Алтан тоонууд" буюу ирээдүйн ханийн тань төрсөн өдөр нь сарын 6, 15, 24-ний өдрүүд байх магадлалтай. Эдгээр нь таны хувьд нумерологийн хувьд хамгийн тохиромжтой өдрүүд юм. Ялангуяа 6-гийн тоотой (сарын 6, 15, 24-нд төрсөн) хүмүүс таны дутуу байгаа 6-гийн тоог нөхөж, танд гэр бүлсэг, халамжтай, тогтвортой, үнэ цэнэтэй мэдрэмжийг бэлэглэж чадна. Мөн 2-ын тоотой (сарын 2, 11, 20, 29-нд төрсөн) хүмүүс таны амьдралын замын 1-ийн тоотой төгс зохицож, харилцан ойлголцол, хамтын ажиллагааг авчирдаг. Тэд таны манлайлах чадварыг дэмжиж, харин өөрсдөө уян хатан байдлаар харилцааг тэнцвэржүүлж чадна.`,

    PART_4: `IV ХЭСЭГ: ХАЙР ДУРЛАЛЫН 3 ЖИЛИЙН ЗУРАГЛАЛ
2026 он: Төгсгөл ба Цэвэрлэгээ
Таны 2026 оны "Хувийн жил"-ийн энергийг тооцоолж үзэхэд та энэ жил "Төгсгөл ба Цэвэрлэгээ" буюу 9-ийн тооны мөчлөгт орж байна. Энэ нь таны хайр дурлалын амьдралд "Их Цэвэрлэгээ" хийгдэх онцгой жил байх болно. Таны матрицын дутуу тоонд 9 (Өнгөрснөө тавих цоорхой) байгаа тул та өнгөрсөн шарх, гомдлоо удаан тээж, шинэ харилцаа тогтооход бэрхшээлтэй байдаг. Тэгвэл 2026 он яг энэ асуудлыг шийдэж, өмнөх бүх эргэлзээ, айдас болон хуучин дурсамжуудаасаа бүрмөсөн салж, сэтгэл зүйн хувьд бүрэн чөлөөлөгдөх жил юм. Энэ жил таны амьдралд үйлчлэхээ больсон харилцаа, хуучин хэв маягууд төгсгөл болж, та шинэ эхлэлд бэлтгэгдэх болно. Энэ нь хагацал салалт гэхээсээ илүүтэйгээр, таныг илүү сайн ирээдүйд бэлдэх зорилготой "цэвэрлэгээ" гэдгийг ойлгох нь чухал.

2027 он: Шинэ эхлэл
Харин дараагийн жил буюу 2027 он нь Нумерологид "Шинэ эхлэл" буюу 1-ийн жил тохиох бөгөөд энэ нь таны хайр дурлалын амьдралд цоо шинэ хуудас нээгдэх жил байх болно. Өмнөх жилийн цэвэрлэгээний дараа та шинэ эрч хүч, шинэ зорилготойгоор урагшлах болно. Таны Амьдралын Зам 1 (Бие даасан манлайлагч) учраас энэ жил таны хувийн энергитэй төгс зохицож, таныг хайр дурлалын амьдралдаа санаачлагатай байж, өөрийн хүссэн харилцааг бий болгоход дэмжинэ. Энэ жил та жинхэнэ хайраа олох эсвэл одоо байгаа харилцаагаа цоо шинэ түвшинд гаргах боломжтой. Энэ бол таны хувьд өөрийгөө бүрэн илэрхийлж, хайр дурлалын амьдралдаа шинэ суурийг тавих хамгийн таатай жил юм.

2028 он: Харилцан ойлголцол
Эцэст нь 2028 он бол таны хувьд "Харилцан ойлголцол" буюу 2-ын жил тохиож байгаа нь хайр дурлалын харилцаагаа гүнзгийрүүлж, бат бөх суурийг тавих жил байх болно. Өмнөх жилүүдэд үүссэн харилцаагаа энэ жил та хоёр харилцан ойлголцол, итгэлцэл дээр тулгуурлан бэхжүүлэх болно. Энэ нь гэрлэлтээ албан ёсоор батлуулах, хамтдаа амьдрах, гэр бүлийн гал голомтоо асаах эсвэл хүүхэдтэй болох зэрэг амьдралын чухал шийдвэрүүдийг гаргахад хамгийн ивээлтэй жил юм. 2-ын энерги нь хамтын ажиллагаа, эв нэгдэл, дипломат харилцааг дэмждэг тул та хоёрын харилцаа илүү тогтвортой, аз жаргалтай болох болно. Энэ онд таны амьдралд өрнөх үйл явдлууд ирээдүйн урт хугацааны жаргалтай амьдралын бат бөх суурь болох тул харилцаандаа бүрэн анхаарлаа хандуулах хэрэгтэй.`,

    PART_5: `V ХЭСЭГ: АМЖИЛТЫН НУУЦ ТҮЛХҮҮР
Стратеги: Тэнцвэрийг олох
Таны амьдралын замын 1 тоо болон матрицын давтамжид гурван 1 байгаа нь таныг бие даасан, манлайлагч, өөрийнхөөрөө байхыг эрхэмлэдэг, хүчирхэг эр хүн болохыг тодорхой илтгэж байна. Энэхүү хүчтэй энерги нь таныг амьдралын олон салбарт амжилтад хүргэдэг боловч хайр дурлалын харилцаанд ороход заримдаа сорилт болж болзошгүй юм. Иймээс таны хайр дурлалын амьдралыг өөрчлөх хамгийн чухал стратеги бол "хамтын ажиллагаа"-нд суралцах явдал юм. Та бүх зүйлийг өөрөө шийдэх, хяналтдаа байлгах гэсэн хандлагаа багасгаж, харилцаандаа түншээ сонсох, түүний санаа бодлыг үнэлэх, хамтдаа шийдвэр гаргах чадварыг хөгжүүлэх нь чухал. Энэ нь таны "Ярианы цоорхой" (3) болон "Тогтвортой байдлын цоорхой" (4)-г нөхөхөд тусална.

Өглөөний шидэт тарни (Affirmations)
Таны далд ухамсарт суусан "Би ганцаараа байх ёстой", "Намайг хэн ч ойлгохгүй", "Бүх эмэгтэйчүүд ижилхэн" гэх мэт сөрөг итгэл үнэмшлийг эвдэхийн тулд та дараах шидэт үгсийг өглөө бүр толинд харж өөртөө хэлж хэвшээрэй.
"Би өнгөрсөн бүх гомдлоо тавьж явууллаа, би одоо шинэ хайрыг хүлээж авахад бэлэн байна."
"Би өөрийнхөө үнэ цэнийг мэдэрч байна, би хайрлагдах эрхтэй хүн."
"Би нээлттэй ярилцаж, бусдыг сонсоход бэлэн байна. Би харилцаандаа тууштай байж, итгэлцлийг бий болгоно."

Аз дуудах өнгө ба чулуу
Таны хүчирхэг энергийг дэмжиж, хайр дурлалын амьдралд эерэг нөлөө үзүүлэх өнгө бол "Алтлаг" болон "Улаан" юм. Алтлаг өнгө нь таны манлайлах чадвар, амжилтыг бэхжүүлж, өөртөө итгэх итгэлийг нэмэгдүүлдэг бол, Улаан өнгө нь таны дотоод хүсэл тэмүүлэл, эрч хүчийг илэрхийлж, харилцаанд дулаан уур амьсгал бүрдүүлэхэд тусална. Эдгээр өнгийн хувцас эсвэл аксесуар хэрэглэх нь таны аураг гэрэлтүүлж, эерэг энергийг татах болно. Харин таны энергийг цэвэрлэж, хайр дурлалыг дуудах байгалийн чулуу бол "Рубин" юм. Рубин нь хайр, хүсэл тэмүүлэл, эр зоригийг бэлгэддэг бөгөөд таны зүрхний чакраг нээж, жинхэнэ хайрыг татах хүчийг өгнө. Энэ чулуу нь таныг өөрийн үнэ цэнийг мэдэрч, харилцаандаа илүү зоригтой, нээлттэй байхад тусална.

Эцсийн дүгнэлт
Та бол зүгээр нэг энгийн хүн биш, амьдралын замын 1 тоотой, бие даасан, манлайлагч чанартай, өөрийн гэсэн үзэл бодолтой хүчирхэг эр хүн юм. Таны ганц бие байгаа шалтгаан нь таны муухай эсвэл азгүйд биш, харин таны шалгуур өндөр, таны сүнс зүгээр нэг энгийн харилцааг биш, харин гүн гүнзгий холбоо, жинхэнэ хайрыг хайж байгаад оршино. Одоо та өөрийнхөө хүчийг (1-ийн давтамж) зөв ашиглаж, дутуугаа (3, 4, 6, 7, 9) хүлээн зөвшөөрч, тэнцвэржүүлж чадвал таныг хувь заяаны гайхалтай бэлэг хүлээж байна. Ялангуяа 2026 онд хувийн жил 9-тэй давхцаж, өнгөрсөн бүх зүйлээ цэвэрлэж, 2027 онд шинэ эхлэл, 2028 онд харилцан ойлголцол, түншлэлийн жил таныг хүлээж байгаа тул энэ хугацааг зөв ашиглаж, өөрийгөө бэлдээрэй.`
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
  ROLE: You are an elite, highly intuitive Mongolian Numerologist & Psychologist specializing in love and relationships. Tone: Direct, Grounded, Psychological, and Wise. Avoid excessive analogies and fairy-tale similes. Write as a mature, experienced counselor speaking directly to a single individual about their love life.
  LANGUAGE: Proper Mongolian Cyrillic ONLY. STRICTLY NO KOREAN OR ENGLISH WORDS (Translate "vibration/frequency" to "давтамж/эрчим").
  
  >>> MASTER RULES (STRICTLY ENFORCED): <<<
  1. ZERO META-TALK: NEVER use phrases like "Энэ хэсэгт бид...", "Дүгнэж хэлэхэд...", "Энэ хэсэг нь...", "Таны тайлан". Start your analysis IMMEDIATELY in the very first sentence.
  2. NO POETRY / FAIRY TALES: Do NOT write like a poem or a fairy tale. Be realistic, deeply psychological, and analytical. STRICTLY FORBIDDEN to use words like "мэт", "шиг" to make poetic analogies.
  3. STRICT FORMATTING & SUBTITLES:
     - Every logical section MUST have a subtitle on its own line (e.g., "Хайрын Архетип", "Зан чанар", "Кармын Өр").
     - Do NOT use Markdown headers like (#, ##) or bold formatting (**text**) for subtitles. Just plain text.
     - NO bullet points or asterisks (*, -).
  4. STRICT EMOJI RULE: The paragraph immediately following a subtitle MUST start with EXACTLY ONE emoji. ZERO exceptions. Do NOT use emojis on the subtitle line itself, and do NOT use them in the middle or end of sentences.
  5. COMPLETENESS: NEVER cut off mid-sentence. Always finish your thoughts and provide a complete, well-rounded conclusion.
  `;

  // 1st CALL: Part 1 - DNA & Archetype
  const prompt1 = `
  ${SYSTEM_PROMPT}
  TASK: Write PART 1 ONLY (Love DNA).
  
  DATA: 
  - Амьдралын замын тоо (Life Path): ${data.lifePath}
  - Пифагорын матриц давтамж: ${data.matrixStr} (Анхаарах: 1, 2, эсвэл өөр ямар тоо их давтагдсан байна тэр нь давамгай зан чанарыг илтгэнэ)
  - Төрсөн өдрийн тоо (Love Language): ${data.dayNumber}
  - Хүйс: ${data.gender}
  
  INSTRUCTIONS: Begin exactly with "I ХЭСЭГ ХАЙР ДУРЛАЛЫН ДНХ" on its own line, then double line break.
  Write 3 distinct sections. For each section, provide the SUBTITLE on its own line, followed by a double line break, followed by the content paragraph starting with an emoji.
  Section 1 Subtitle: "Хайрын Архетип" - Analyze their Life Path number and what archetype they are in love.
  Section 2 Subtitle: "Матрицын тоон өгөгдөл ба тайлал" - Analyze their matrix frequencies (especially repeating numbers like 1s, 2s or 8s) and what power/shadow traits it gives them.
  Section 3 Subtitle: "Хайрын Хэл" - Analyze their day number (${data.dayNumber}) to define their primary love language and how they need to be loved.
  
  STYLE GUIDE REFERENCE (Model your structure, depth, and tone exactly after this):
  ${CONFIG.REFERENCES.PART_1}
  `;
  const r1 = callGeminiAPI(prompt1, apiKey, CONFIG.TEMPERATURE);

  // 2nd CALL: Part 2 - Why Single & Red Flags
  const prompt2 = `
  ${SYSTEM_PROMPT}
  TASK: Write PART 2 ONLY (Why single & Red Flags).

  DATA:
  - Кармын өр (Karmic Debt): ${data.karmicDebt.length > 0 ? data.karmicDebt.join(', ') : 'Байхгүй (Цагаан цаас)'}
  - Матрицын цоорхой (Missing numbers): ${data.missing.join(', ') || 'Байхгүй'}
  - Амьдралын зам: ${data.lifePath}
  - Хүйс: ${data.gender}
  
  INSTRUCTIONS: Begin exactly with "II ХЭСЭГ ЯАГААД ГАНЦ БИЕ БАЙНА ВЭ БА АЮУЛЫН ДОХИО" on its own line, then double line break.
  Write 4 distinct sections with subtitles on their own lines, followed by content paragraphs starting with an emoji.
  Section 1 Subtitle: "Кармын Өр" - Explain if they have karmic debt affecting love, or if they are a "clean slate" and it's just their choices.
  Section 2 Subtitle: "Матрицын Цоорхой" - Explain what the missing numbers (${data.missing.join(', ')}) mean in relationships (e.g. missing 4=instability, missing 6=self-worth issues, missing 9=holding onto past).
  Section 3 Subtitle: "Сэтгэл зүйн гацаа" - Combine their Life Path and missing numbers to identify their deepest psychological block (e.g. perfectionism, fear of vulnerability).
  Section 4 Subtitle: "Аюулын бүс Энергийн үл зохицол ба сэрэмжлүүлэг" - Warn them about the types of people/energies they should avoid, based on their chart.
  
  STYLE GUIDE REFERENCE (Model your structure, depth, and tone exactly after this):
  ${CONFIG.REFERENCES.PART_2}
  `;
  const r2 = callGeminiAPI(prompt2, apiKey, CONFIG.TEMPERATURE);

  // 3rd CALL: Part 3 - Partner Avatar
  const prompt3 = `
  ${SYSTEM_PROMPT}
  TASK: Write PART 3 ONLY (Future Partner Avatar).

  DATA:
  - Амьдралын зам: ${data.lifePath}
  - Матрицын цоорхой (Missing numbers that need filling): ${data.missing.join(', ') || 'Байхгүй'}
  - Хүйс: ${data.gender}
  
  INSTRUCTIONS: Begin exactly with "III ХЭСЭГ: ИРЭЭДҮЙН ХАНИЙН АВАТАР" on its own line, then double line break.
  Write 4 distinct sections with subtitles on their own lines, followed by content paragraphs starting with an emoji.
  Section 1 Subtitle: "Зан чанар" - Describe the personality that complements them.
  Section 2 Subtitle: "Мэргэжил ба Статус" - Suggest potential career fields or social roles for this partner.
  Section 3 Subtitle: "Тохирох тоонууд" - What birth dates/numbers would mathematically balance this user? (Suggest complementary life path or day numbers).
  Section 4 Subtitle: "Гадаад төрхийн шинж" - A psychological projection of their aura and physical presence.
  
  STYLE GUIDE REFERENCE (Model your structure, depth, and tone exactly after this):
  ${CONFIG.REFERENCES.PART_3}
  `;
  const r3 = callGeminiAPI(prompt3, apiKey, CONFIG.TEMPERATURE);

  // 4th CALL: Part 4 - Future Timeline
  const prompt4 = `
  ${SYSTEM_PROMPT}
  TASK: Write PART 4 ONLY (Love Timeline).
  
  DATA:
  - Амьдралын зам: ${data.lifePath} (CRITICAL: DO NOT hallucinate this number. It is EXACTLY ${data.lifePath})
  - ${data.personalYears[0].year} он: Хувийн жил ${data.personalYears[0].py}
  - ${data.personalYears[1].year} он: Хувийн жил ${data.personalYears[1].py}
  - ${data.personalYears[2].year} он: Хувийн жил ${data.personalYears[2].py}
  
  INSTRUCTIONS: Begin exactly with "IV ХЭСЭГ: ХАЙР ДУРЛАЛЫН 3 ЖИЛИЙН ЗУРАГЛАЛ" on its own line, then double line break.
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
  TASK: Write PART 5 ONLY (Key to Success).

  DATA:
  - Амьдралын зам: ${data.lifePath} (CRITICAL: Remember this is ${data.lifePath})
  - Хүйс: ${data.gender}
  
  INSTRUCTIONS: Begin exactly with "V ХЭСЭГ: АМЖИЛТЫН НУУЦ ТҮЛХҮҮР" on its own line, then double line break.
  Write 4 distinct sections with subtitles on their own lines, followed by content paragraphs starting with an emoji.
  Section 1 Subtitle: "Стратеги: Тэнцвэрийг олох" - Give them a practical psychological strategy to overcome their main flaw.
  Section 2 Subtitle: "Өглөөний шидэт тарни (Affirmations)" - Provide 3 powerful, specific affirmations tailored to heal their blockages. For the affirmations themselves, include them inside the paragraph naturally, separating them with commas or semicolons, rather than placing them on new lines.
  Section 3 Subtitle: "Аз дуудах өнгө ба чулуу" - Recommend a specific color and crystal based on their energy needs.
  Section 4 Subtitle: "Эцсийн дүгнэлт" - A powerful, grounding closing statement. Remind them their fate is in their hands.
  
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
