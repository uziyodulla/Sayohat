

let poppara = document.getElementById("poppara");
let popup = document.getElementById("popup");
let url = `https://deepak-server-dosm.onrender.com/country`

let close = document.getElementById("close");


function fetchdata(){
  
  let data1=[
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
      displaydata(data1);


}
fetchdata();

function  displaydata(data){
  //  document.getElementById("Sh-data-main-container1").innerHTML = "Loding...";
  //  document.getElementById("Sh-data-main-container1").innerHTML = "";
  data.forEach((ele)=>{
    let card = document.createElement("div");
    card.classList.add("subdiv");
    let img = document.createElement("img");
    img.setAttribute("src", ele.Image);
 
    let buttonR = document.createElement("button");
    buttonR.classList.add("btnR")
    buttonR.setAttribute("id", ele.id);
    buttonR.innerText = "Batafsil";
    buttonR.addEventListener("click", ()=>{
      document.getElementById('overlay').style.display = 'block';
      document.getElementById('popup').style.display = 'block';
      document.getElementById('popup').style.color = "white";
      document.getElementById('popup').style.fontSize = "20px"
      poppara.innerText = ele.Details;
      document.getElementById('popup').style.backgroundImage =  `url(${ele.Image})`;
    
      document.getElementById('popup').style.backgroundSize = "cover";
    })
  
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
    // book.innerText = "BOOK NOW";
    book.classList.add("booknow");
    book.setAttribute("id", ele.id);
    book.addEventListener("click", ()=>{
      booknow(ele);
    })
    let anchor = document.createElement("a")
    anchor.innerHTML = "O'qish"
    anchor.href = "./payment.html";
    anchor.style.textDecoration = "none";
    anchor.style.color = "white";
    book.append(anchor);
    bookdiv.append(parap, book);
    
    card.append(img, buttonR, head, para, lastdiv, bookdiv);
    document.getElementById("Sh-data-main-container1").append(card);
  })
}



function closePopup() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('popup').style.display = 'none';
}


let pageCount = 1;
let seeMoreBtn = document.getElementById("seeMoreCardBtn");

seeMoreBtn.addEventListener('click', () => {
  // document.getElementById("Sh-data-main-container1").innerHTML = "Loding...";
  document.getElementById("Sh-data-main-container1").style.paddingBottom = "66%";
  document.getElementById("Sh-data-main-container1").style.paddingTop = "0%"
    fetchdata( ++pageCount, 9);
});


// ADD CARD
// let arr = JSON.parse(localStorage.getItem("key"))||[]

// function booknow(ele){
//   if(arr.includes(ele)) {
//     alert("Already Add")
//   } else {
//     arr.push(ele);
//   }
 
//   localStorage.setItem("key", JSON.stringify(arr));
// }

function booknow(ele){
  localStorage.setItem("id", ele.id);
}


// ---------------------dropdown menu functionality----------------------------------

let button = document.getElementById("menuBtn");
    button.addEventListener('click', () => {
      let dropdown = document.getElementById("myDropdown");
      dropdown.classList.toggle("show");
});


// Search

let locations = document.getElementById("placeNameInp");
let check = document.getElementById("checkInDate");
let visitor = document.getElementById("visitor");

let search = document.getElementById("Sh-searchBtn");

// let searchIcon = document.getElementById("searchIcon");
// searchIcon.addEventListener("click", ()=>{
//   console.log("ok")
// })

search.addEventListener("click", ()=>{
  let obj2 = {};
  obj2.locations = locations.value;
  obj2.check = check.value;
  obj2.visitor = visitor.value;
  console.log(obj2);
  let str = obj2.check;
  let num=0;
  let str2 = "";
  let strD = "";
  let strY = "";
  for(let i=0; i<str.length; i++){
    if(i==5 || i==6){
      str2+=str[i];
    } else if(i==8||i==9){
      strD+=str[i];
    }  else if(i==4||i==7){
      str2+"";
    } else {
      strY+=str[i];
    }
  }
  num = +(str2);
  console.log(num);
  let arr = ["", "January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
  
  let month = "";
  for(let i=0; i<arr.length; i++){
      if(num==i){
      month+=arr[i];
      }
  }
  console.log(month);
  let DMY = strD+"-"+month+"-"+strY;
  console.log(DMY);
  document.getElementById("Sh-data-main-container1").innerText="";

  seeMoreBtn.addEventListener('click', () => {
    // document.getElementById("Sh-data-main-container1").innerHTML = "Loding...";
    document.getElementById("Sh-data-main-container1").style.paddingBottom = "0%";
    document.getElementById("Sh-data-main-container1").style.paddingTop = "0%"
      fetchdata( ++pageCount, 9);
  });

  fetchdata(1, 5, `Location_like=${locations.value}&Date_like=${DMY}`);
})