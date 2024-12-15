let poppara = document.getElementById("poppara");
let popup = document.getElementById("popup");
let url = `https://deepak-server-dosm.onrender.com/country`

let close = document.getElementById("close");

function fetchdata(){
    let data=[
        {
            "Detail": "Kawaguchi - Yaponiyadagi turli sayohatlar haqida go'zal manzaralar",
            "Location": "YAPONIYA",
            "Image": "https://assets.traveltriangle.com/blog/wp-content/uploads/2018/02/Kawaguchi1.jpg",
            "Price": 6000,
            "Details": "Yaponiyaning eng tabiiy mo''jizasi! Yaponiyadagi bu shahar o'zining Kavaguchiko ko'li va old tomonidagi Fudzi tog'ining hayratlanarli manzaralari bilan mashhur bo'lsa-da, u madaniyat tulporlari uchun jannatmonand marvarid ekanligi bilan ham mashhur.",
            "Time": "4 marta o'qildi",
            "Date": "29-June-2025",
            "id": "1"
        },
        {
            "Detail": "Kuala-Lumpur - Malayziyaning jonli poytaxti bo'lib, u kundan-kun hayajonga to'la.",
            "Location": "MALAYZIYA",
            "Image": "https://www.holidify.com/images/bgImages/KUALA-LUMPUR.jpg",
            "Price": 8000,
            "Details": "Malayziyaga tashrif · Kuala-Lumpur · Penang · Saravak · Johor · Paxan · Masih cherkovi · Batu g'orlari · Gunung Gading milliy bog'i.",
            "Time": "5 marta o'qildi",
            "Date": "5-June-2025",
            "id": "2"
        },
        {
            "Detail": "Ozodlik haykali Nyu-York shahridagi Ozodlik orolida joylashgan 305 fut (93 metr) haykaldir.",
            "Location": "AMERIKA",
            "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQslq-30n4GkazGlcU6XWAd3dr2i9OqgN02vIsNkR3N6Czg1r6PqBfLv7ZScA&s",
            "Price": 10000,
            "Details": "Haykal ayol qiyofasida erkinlik timsoli. U ko'tarilgan o'ng qo'lida mash'alni ushlab turadi va chap tomonida planshetni changallaydi. Ozodlik haykali Nyu-York bandargohidagi ta'sirchan mavjudligi bilan mashhur.",
            "Time": "6 marta o'qildi",
            "Date": "28-May-2025",
            "id": "3"
        },
        {
            "Detail": "Hindistonning Dehli shahridagi Mugʻallar imperatori Humoyun qabri",
            "Location": "HUMAYUN QABRI",
            "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnvfwAaCj__g83nub08qg0OQ4Px-Y8c64bhw&usqp=CAU",
            "Price": 5500,
            "Details": "1570-yilda qurilgan bu qabr Hindiston yarimorolidagi birinchi bogʻ-maqbar boʻlgani uchun alohida madaniy ahamiyatga ega.",
            "Time": "2 marta o'qildi",
            "Date": "25-June-2025",
            "id": "4"
        },
        {
            "Detail": "Yogyakarta hududidagi Borobudur ibodatxonasi haqidagi so'nggi yangiliklar",
            "Location": "BOROBUDUR",
            "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX5CqkTjLyETbVx8VTtDECOIe-nIsfT14O0I4NzcW51KWvOStZudp2ULAlAoZaegGaeWA&usqp=CAU",
            "Price": 6000,
            "Details": "Borobudurda geometriya, geomansiya va ilohiyot izdoshlariga ma'rifatning yakuniy maqsadi sari ko'rsatma beradi.",
            "Time": "4 marta o'qildi",
            "Date": "18-July-2025",
            "id": "5"
        },
        {
            "Detail": "Oyning kuta turizmi bali hududi haqidagi so'nggi yangiliklar",
            "Location": "KUTA BALI",
            "Image": "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/11/17/Pictures/_cf8f7c16-090a-11ea-8da7-95ed4a38ab68.jpg",
            "Price": 4000,
            "Details": "Kuta turistik hudud, maʼmuriy jihatdan shahar qishlogʻi (keluraxan) va Kuta tumanining poytaxti, Bali janubidagi, Indoneziya.",
            "Time": "2 marta o'qildi",
            "Date": "18-June-2025",
            "id": "6"
        }
    ]
      displaydata(data);
      console.log(data);
}
fetchdata();

function  displaydata(data){
  // document.getElementById("Sh-data-main-container1").innerHTML = "";
  data.forEach((ele)=>{
    let card = document.createElement("div");
    card.classList.add("subdiv");
    let img = document.createElement("img");
    img.setAttribute("src", ele.Image);
 
    let buttonR = document.createElement("button");
    buttonR.classList.add("btnR")
    buttonR.setAttribute("id", ele.id);
    buttonR.innerText = "Read More";
    buttonR.addEventListener("click", ()=>{
      document.getElementById('overlay').style.display = 'block';
      document.getElementById('popup').style.display = 'block';
      document.getElementById('popup').style.color = "white";
      document.getElementById('popup').style.fontSize = "20px"
      poppara.innerText = ele.Details;
      document.getElementById('popup').style.backgroundImage =  `url(${ele.Image})`;
      document.getElementById('popup').style.backgroundSize = "cover";
    });
  
    let head = document.createElement("h2");
    head.innerText = ele.Location;
    let para = document.createElement("p");
    para.innerText = ele.Detail;
    para.className = "place-detail";
    
    let lastdiv = document.createElement("div");
    lastdiv.classList.add("last");
    let lastpara1 = document.createElement("p");
    lastpara1.innerText = ele.Time;
    let lastpara2 = document.createElement("p");
    lastpara2.innerText = ele.Date;
    lastdiv.append(lastpara1, lastpara2);
    
    
    let bookdiv = document.createElement("div");
    bookdiv.classList.add("bookdiv")
    let parap = document.createElement("h2");
    parap.innerText = `${ele.Price}$`;
    
    let book = document.createElement("button");
    book.innerText = "O'qish";
    book.classList.add("booknow"); 

    // ========================================
   //add eventlistner on book get id of card
    book.setAttribute("id", ele.id);
    // book.addEventListener("click", ()=>{
    //   booknow(ele);
    // });
    bookdiv.append(parap, book);
    
    card.append(img, buttonR, head, para, lastdiv, bookdiv);
    document.getElementById("Sh-data-main-container1").append(card);  })
}

// ----------------------pop close functionality---------------------------

function closePopup() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('popup').style.display = 'none';
}

let pageCount = 1;
let seeMoreBtn = document.getElementById("seeMoreCardBtn");

seeMoreBtn.addEventListener('click', () => {
    fetchdata(url, 6, pageCount++);

    let dataAlignContainer = document.getElementById("Sh-alignCont9");
    let newHeight1 = dataAlignContainer.offsetHeight + 1300; // Increase height by 10vh
    dataAlignContainer.style.height = newHeight1 + "px";

    let dataContainer = document.getElementById("Sh-data-main-container1");
    let newHeight2 = dataContainer.offsetHeight + 1300; // Increase height by 10vh
    dataContainer.style.height = newHeight2 + "px";
    dataContainer.style.gridTemplateColumns = "repeat(auto-fill, minmax(300px, 1fr))";
    dataContainer.style.gridTemplateRows = "repeat(auto-fill, minmax(600px, 1fr))";

    // console.log("Old Height:", dataAlignContainer.offsetHeight);
    
    // Increase height by 10vh
    // console.log("New Height:", newHeight1);
});


// to store a id in local storage 
function  getcardid(ele){
localStorage.setItem("id", ele.id);
}

// ----------------------Dropdown menu functionality----------------------------------------

let button = document.getElementById("menuBtn");
    button.addEventListener('click', () => {
      let dropdown = document.getElementById("myDropdown");
      dropdown.classList.toggle("show");
});

// --------------------login page attach-----------------------------

function redirectToPage(pagename) {
  var loginPageUrl = `${pagename}`;

  window.location.href = loginPageUrl;
}


// ADD CARD
let arr = JSON.parse(localStorage.getItem("key"))||[]

// function booknow(ele){
//   if(arr.includes(ele)) {
//     alert("Already Add")
//   } else {
//     arr.push(ele);
//   }
//   localStorage.setItem("key", JSON.stringify(arr));
//   
// }

// function booknow(ele){
//   localStorage.setItem("id", ele.id);
//   redirectToPage('payment.html');
// }

//=======================================Package functionality==============================================

async function getDataFromServer(apiOfData){
  try{
    let res = await fetch(apiOfData);
    let data = await res.json();
    createCardForDisplay(data);
    console.log(data);

  } catch(error){
    console.log(error);
  }
}

let dataAppendContainer = document.getElementById("placesCont");

function createCardForDisplay(placesDataArr){

  placesDataArr.forEach((placeObj) => {
    let card = document.createElement("div");
    card.className = "placeCard";

    let imageCont = document.createElement("div");
    imageCont.className = "imgCont";
    let image = document.createElement("img");
    image.src = placeObj.Image;
    imageCont.append(image);

    let detailCont = document.createElement("div");
    detailCont.className = "placeDetailCont";
    let locationName = document.createElement("h3");
    locationName.innerHTML = placeObj.Location;
    let details = document.createElement("p");
    details.innerHTML = placeObj.Detail;

    detailCont.append(locationName);
    detailCont.append(details);

    let timeAndDateCont = document.createElement("div");
    timeAndDateCont.className = "timeAndDateCont";
    // let time = document.createElement("div");
    // time.textContent = placeObj.Time;
    let date = document.createElement("div");
    date.textContent = placeObj.Date;
    // timeAndDateCont.append(time);
    timeAndDateCont.append(date);
    // console.log(placeObj.Date);
    // console.log(placeObj.Time);

    let priceAndBookBtnCont = document.createElement("div");
    priceAndBookBtnCont.className = "priceAndBtnCont";
    let priceCont = document.createElement("div");
    priceCont.innerHTML = `${placeObj.Price}$`;
    let buttonCont = document.createElement("div");
    let buttonBook = document.createElement("button");
    buttonBook.textContent = "O'qish";
    // buttonBook.addEventListener("click", ()=>{
    //   booknow(placeObj);
    // });
    buttonCont.append(buttonBook);
    priceAndBookBtnCont.append(priceCont);
    priceAndBookBtnCont.append(buttonCont);

    card.append(imageCont);
    card.append(detailCont);
    card.append(timeAndDateCont);
    card.append(priceAndBookBtnCont);
    dataAppendContainer.append(card);
  });
  
}


let historyPlaceLink = document.getElementById("HistoricalPackageLInk");

historyPlaceLink.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('Sh-overlap1stCont').style.display = 'none';
  document.getElementById('Sh-overlap2ndCont').style.display = 'none';
  dataAppendContainer.innerHTML= "";
  document.getElementById('placesOuterContainer').style.display = 'block';
  let data = [
    {
        "Location": "HUMAYUN TOG'LARI",
        "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnvfwAaCj__g83nub08qg0OQ4Px-Y8c64bhw&usqp=CAU",
        "Price": 5500,
        "Time": "4 marta o'qildi",
        "Date": "29-December-2024",
        "Detail": "1570-yilda qurilgan bu qabr Hindiston yarimorolidagi birinchi bogʻ-maqbar boʻlgani uchun alohida madaniy ahamiyatga ega.",
        "id": 1
    },
    {
        "Location": "BOROBUDUR",
        "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX5CqkTjLyETbVx8VTtDECOIe-nIsfT14O0I4NzcW51KWvOStZudp2ULAlAoZaegGaeWA&usqp=CAU",
        "Price": 6000,
        "Time": "4 marta o'qildi",
        "Date": "26-January-2025",
        "Detail": "Borobudurda geometriya, geomansiya va ilohiyot izdoshlariga ma'rifatning yakuniy maqsadi sari ko'rsatma beradi.",
        "id": 2
    },
    {
        "Location": "KUTA BALI",
        "Image": "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/11/17/Pictures/_cf8f7c16-090a-11ea-8da7-95ed4a38ab68.jpg",
        "Price": 4000,
        "Time": "5 marta o'qildi",
        "Date": "20-February-2025",
        "Detail": "Kuta turistik hudud, maʼmuriy jihatdan shahar qishlogʻi (keluraxan) va Kuta tumanining poytaxti, Bali janubidagi, Indoneziya.",
        "id": 3
    },
    {
        "Location": "PISA MINORASI",
        "Image": "https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/places-to-visit-in-Bangalore-in-June1.jpg",
        "Price": 10000,
        "Time": "4 marta o'qildi",
        "Date": "29-March-2024",
        "Detail": "Piza shahri o'zining diqqatga sazovor joylari bilan mashhur, ammo Piza minorasi tengsizdir. Bu Italiyadagi eng mashhur yodgorlik va dunyoning yetti mo'jizasidan biri hisoblanadi.",
        "id": 4
    }
  ]
  createCardForDisplay(data);
});


let CampingPackageLink = document.getElementById("CampingPackageLink");

CampingPackageLink.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('Sh-overlap1stCont').style.display = 'none';
  document.getElementById('Sh-overlap2ndCont').style.display = 'none';
  dataAppendContainer.innerHTML= "";
  document.getElementById('placesOuterContainer').style.display = 'block';
  let data =[
    {
        "Image": "https://viatravelers.com/wp-content/uploads/2022/09/Yosemite-Valley-Yosemite-National-Park-768x512.jpg",
        "Detail": "Yosemite milliy bog'i uni dunyodagi eng zo'r lagerga aylantiradi. Yam-yashil manzara va baland tog'lar hayratlanarli manzaradir va ko'rish uchun juda ko'p yovvoyi tabiat mavjud.",
        "Location": "Yosemit milliy bog'i, Kaliforniya",
        "Price": 2000,
        "Time": "6 marta o'qildi",
        "Date": "29-December-2024",
        "id": 1
    },
    {
        "Image": "https://viatravelers.com/wp-content/uploads/2017/04/boya-lake-provincial-park-768x512.jpeg",
        "Detail": "Boya ko'li provinsial bog'i kundalik hayotning shovqin-suronidan uzoqlashishni istaganlar uchun ajoyib joy. Suv billurdek tiniq va ajoyib tarzda bo'shashadi, bu uni tushdan keyin baliq ovlash va qirg'oqda dam olish uchun ajoyib joy qiladi.",
        "Location": "Boya Leyk provinsiya parki, Kanada",
        "Price": 2000,
        "Time": "4 marta o'qildi",
        "Date": "29-June-2025",
        "id": 2
    },
    {
        "Image": "https://viatravelers.com/wp-content/uploads/2022/09/Yosemite-Valley-Yosemite-National-Park-768x512.jpg",
        "Detail": "Yosemite milliy bog'i uni dunyodagi eng zo'r lagerga aylantiradi. Yam-yashil manzara va baland tog'lar hayratlanarli manzaradir va ko'rish uchun juda ko'p yovvoyi tabiat mavjud.",
        "Location": "Yosemit milliy bog'i, Kaliforniya",
        "Price": 3000,
        "Time": "1 marta o'qildi",
        "Date": "1-January-2025",
        "id": 3
    },
    {
        "Image": "https://viatravelers.com/wp-content/uploads/2017/04/miyajima-japan-768x513.jpg",
        "Detail": "Miyajima lagerni o'rnatish uchun to'g'ri joyni tanlash bilan boshlanadi. Siz ajoyib qirg'oq chizig'ining to'siqsiz ko'rinishini taqdim etadigan suv qirg'og'idagi joyni tanlashingiz mumkin. Yoki, siz hali ham ajoyib manzaralarni taqdim etadigan qirg'oq chizig'idan ijaraga olingan idishni tanlashingiz mumkin.",
        "Location": "Miyajima, Yaponiya",
        "Time": "2 marta o'qildi",
        "Date": "29-June-2025",
        "Price": 2500,
        "id": 4
    }
  ]
  createCardForDisplay(data);
});

let DesertPackageLink = document.getElementById("DesertPackageLink");

DesertPackageLink.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('Sh-overlap1stCont').style.display = 'none';
  document.getElementById('Sh-overlap2ndCont').style.display = 'none';
  dataAppendContainer.innerHTML= "";
  document.getElementById('placesOuterContainer').style.display = 'block';
  let data=[
    {
        "Image": "https://cdn2.wanderlust.co.uk/media/1037/cropped-peru-shutterstock_544383520.jpg?anchor=center&mode=crop&width=1280&height=0&format=auto&quality=90&rnd=132056042920000000",
        "Detail": "Agar partiya vohasi degan narsa bo'lsa, bu shunday. Peru janubi-g'arbiy qismidagi qumtepalarda joylashgan bo'lib, uning qirg'oqlari barlar va klublar bilan bezatilgan va qumtepalar qishloqni o'rab turgan baland, dumaloq qumtepalar bo'ylab guvillaydi.",
        "Location": "Huacachina vohasi, Peru",
        "Price": 3000,
        "Time": "3 marta o'qildi",
        "Date": "1-January-2025",
        "id": 1
    },
    {
        "Image": "https://cdn2.wanderlust.co.uk/media/1042/cropped-arizona-shutterstock_167691602.jpg?anchor=center&mode=crop&width=1280&height=0&format=auto&quality=90&rnd=132056047280000000",
        "Detail": "Havasu daryosidagi ulkan, jozibali suv havzasi, bu Katta Kanyon 'vohasi' ohaktoshdan oqib chiqadigan bir qator sharsharalar bilan oziqlanadi va suvga yoqimli ko'k-yashil rang beradi.",
        "Location": "Havasu sharsharasi, Buyuk Kanyon, AQSh",
        "Price": 4000,
        "Time": "4 marta o'qildi",
        "Date": "29-December-2024",
        "id": 2
    },
    {
        "Image": "https://cdn2.wanderlust.co.uk/media/1043/cropped-morocco-shutterstock_124416517.jpg?anchor=center&mode=crop&width=1280&height=0&format=auto&quality=90&rnd=132056048670000000",
        "Detail": "Ziz daryosi sohilida joylashgan Tafilalt Marokashdagi eng yirik Sahroi vohadir. O'zining mustahkam qishloqlari va shirin xurmolari bilan mashhur bo'lib, u Niger daryosidan Tanjersgacha bo'lgan Sahroi karvon yo'lida muhim to'xtash joyi bo'lgan. Sizning Instagram tasmangiz uchun, albatta, bitta.",
        "Location": "Tafilalt, Marokash",
        "Price": 3000,
        "Time": "8 marta o'qildi",
        "Date": "25-December-2024",
        "id": 3
    },
    {
        "Image": "https://cdn2.wanderlust.co.uk/media/1044/cropped-libya-shutterstock_586540589.jpg?anchor=center&mode=crop&width=1280&height=0&format=auto&quality=90&rnd=132056049690000000",
        "Detail": "Ubari - Liviya janubidagi Fezzan mintaqasidagi qumtepalar orasida qolib ketgan suv tufayli yaratilgan 16 ta qumtepali ko'llardan biri atrofida joylashgan voha shahri.",
        "Location": "Ubari vohasi, Liviya",
        "Price": 2000,
        "Time": "4 marta o'qildi",
        "Date": "29-December-2024",
        "id": 4
    }
  ]
  createCardForDisplay(data);
});

let HikingPackageLink = document.getElementById("HikingPackageLink");

HikingPackageLink.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('Sh-overlap1stCont').style.display = 'none';
  document.getElementById('Sh-overlap2ndCont').style.display = 'none';
  dataAppendContainer.innerHTML= "";
  document.getElementById('placesOuterContainer').style.display = 'block';
  let data = [
    {
        "Image": "https://travel.usnews.com/dims4/USNEWS/c4892c1/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FFall-Color-Mammoth-Lakes-Basin-Josh_Wray-Mammoth_Lakes_Tourism_dcbVtu4.jpg",
        "Detail": "Sharqiy Sierradagi Kaliforniya shahri uzoq chang'i mavsumi bilan sarguzasht sayohatchilarni o'ziga tortadi, ammo uning granit cho'qqilari, o'rmonlar va alp ko'llari bo'ylab egilgan 300 dan ortiq milya yo'llari bir xil darajada tetiklantiruvchi.",
        "Location": "Mamont ko'llari",
        "Price": 8000,
        "Time": "4 marta o'qildi",
        "Date": "31-December-2024",
        "id": 1
    },
    {
        "Image": "https://travel.usnews.com/dims4/USNEWS/1fa02ff/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Floch_vale_getty_resized_445x280_y7RfF8x.jpg",
        "Detail": "Denverdan taxminan 70 milya shimoli-g'arbda joylashgan ushbu milliy xazina Koloradoda ko'rish kerak.",
        "Location": "Rokki tog' milliy bog'i",
        "Price": 4000,
        "Time": "3 marta o'qildi",
        "Date": "25-December-2024",
        "id": 2
    },
    {
        "Image": "https://travel.usnews.com/dims4/USNEWS/d5f5ae8/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fsol_duc_2_getty_SwZ4DE3.jpg",
        "Detail": "limpik milliy bog'i butun dunyo bo'ylab sayyohlarni Vashingtonning Olimpiya yarim orolidagi 600 milyadan ortiq eng yaxshi yo'llariga jalb qiladi. Bog'ning qadimgi yomg'irli o'rmonlari, muzliklar bilan qoplangan tog'lari va 70 milyadan ortiq qirg'oqlari bo'ylab sayr qilish uchun vaqt ajrating.",
        "Location": "Olimpiya milliy bog'i",
        "Price": 3000,
        "Time": "9 marta o'qildi",
        "Date": "31-December-2024",
        "id": 3
    },
    {
        "Image": "https://travel.usnews.com/dims4/USNEWS/620ce75/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fmain_street_cropped_445x280_Oe3Jg2g.jpg",
        "Detail": "Rokki tog'laridagi quti kanyonida joylashgan bu kichik Kolorado shaharchasi har qanday piyoda yurish marshrutlariga ega: boshqarish mumkin bo'lgandan tortib to qiyingacha. Bear Creek Trail va Bridal Veil Falls Trail, turli xil suv ob'ektlaridan o'tgan shamol sayohatchilari mashhur mo''tadil variantlardir.",
        "Location": "Telluride",
        "Price": 6000,
        "Time": "6 marta o'qildi",
        "Date": "25-December-2024",
        "id": 4
    }
  ]
  createCardForDisplay(data);
});

let EuropePackageLink = document.getElementById("EuropePackageLink");

EuropePackageLink.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('Sh-overlap1stCont').style.display = 'none';
  document.getElementById('Sh-overlap2ndCont').style.display = 'none';
  dataAppendContainer.innerHTML= "";
  document.getElementById('placesOuterContainer').style.display = 'block';
  let data = [
    {
        "Image": "https://imgs.search.brave.com/8BOkCxWVDJsXdHQQcytFblrWT7z7Bkeg6A2N-2F8Euc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hbGx0/aGF0c2ludGVyZXN0/aW5nLmNvbS93b3Jk/cHJlc3Mvd3AtY29u/dGVudC91cGxvYWRz/LzIwMTMvMDkvc2Fu/dG9yaW5pLWdyZWVj/ZS5qcGc",
        "Detail": "Santorini oroli qadimiy vulqon qoldiqlaridir. Qolgan narsa - kalderaning cheti va bu chekka bo'ylab joylashgan Evropaning eng fotogen shaharlaridan biri.",
        "Location": "SANTORINI, GRETSIYA",
        "Time": "4 marta o'qildi",
        "Date": "1-January-2025",
        "Price": 5000,
        "id": 1
    },
    {
        "Image": "https://www.travelanddestinations.com/wp-content/uploads/2017/03/Prague-in-the-Autumn.jpg",
        "Detail": "Chexiya Respublikasining poytaxti. Yilning istalgan vaqtida eng go'zal arxitektura va diqqatga sazovor joylarga ega bo'lgan bu joyni ziyorat qilish ajoyib.",
        "Location": "Praga",
        "Price": 5000,
        "Time": "2 marta o'qildi",
        "Date": "29-June-2025",
        "id": 2
    },
    {
        "Image": "https://www.travelanddestinations.com/wp-content/uploads/2017/09/Nyhavn-Copenhagen-768x512.jpg",
        "Detail": "Evropaning eng go'zal shimoliy yo'nalishlaridan biri - Kopengagen. Bu shaharning diqqatga sazovor joyi - ajoyib rang-barang arxitektura, bog'langan qayiqlar va jonli atmosferaga ega kanal bo'lgan Nyhavn.",
        "Location": "Kopengagen",
        "Price": 4000,
        "Time": "4 marta o'qildi",
        "Date": "29-June-2025",
        "id": 3
    },
    {
        "Image": "https://www.travelanddestinations.com/wp-content/uploads/2016/05/Hungarian-Parliament-in-Budapest-at-Night-768x512.jpg",
        "Detail": "Evropaning yana bir ajoyib poytaxti - Budapesht. Shahar Vengriya parlamenti, Szechenyi zanjirli ko'prigi, Buda qal'asi va Baliqchilar qal'asi kabi ko'plab ajoyib narsalarni ko'rish uchun arzon va chiroyli manzilga aylanadi.",
        "Location": "Budapesht",
        "Price": 3000,
        "Time": "4 marta o'qildi",
        "Date": "25-December-2024",
        "id": 4
    }
  ]
  createCardForDisplay(data);
});

document.getElementById("backToPageBtn").addEventListener('click', () => {
  document.getElementById('placesOuterContainer').style.display = 'none';
  document.getElementById('Sh-overlap2ndCont').style.display = 'block';
  document.getElementById('Sh-overlap1stCont').style.display = 'block';
});



