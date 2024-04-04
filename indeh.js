let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");
let button4 = document.querySelector("#button4");
let button5 = document.querySelector("#button5");
let button6 = document.querySelector("#button6");
let button7 = document.querySelector("#button7");
let button8 = document.querySelector("#button8");
let button9 = document.querySelector("#button9");
let button10 = document.querySelector("#button10");
let txt = document.querySelector("#txt");

button1.addEventListener("click", () => {
  const student = {
    familya: "karimov",
    isim: "lochinbek",
    snif: "11sinif",
    maktab: 13,
  };
  for (let key in student) {
    console.log(student[key]);
    txt.textContent += student[key] + ";                          ";
  }
});
button2.addEventListener("click", () => {
  const student = {
    familya: "karimov",
    isim: "lochinbek",
    snif: "11sinif",
    maktab: 13,
  };
  delete student.maktab;
  for (let key in student) {
    console.log(student[key]);
    txt.textContent += student[key] + ";                          ";
  }
});

button3.addEventListener("click", () => {
  const student = {
    familya: "karimov",
    isim: "lochinbek",
    snif: "11sinif",
  };

  for (let key in student) {
    console.log(student[key]);
    txt.textContent += student[key] + ";                           ";
  }
  function a(obj) {
    return Object.keys(obj).length;
  }
  console.log(a(student));
  txt.textContent += a(student) + "=ta                             ";
  const student1 = {
    familya: "karimov",
    isim: "lochinbek",
    snif: "11sinif",
    viloyat: "faegona",
    maktab: 13,
  };
  for (let key in student1) {
    console.log(student1[key]);
    txt.textContent += student1[key] + ";                           ";
  }
  function a(obj) {
    return Object.keys(obj).length;
  }
  console.log(a(student1));
  txt.textContent += a(student1) + "=ta                              ";
});
button4.addEventListener("click", () => {
  function a(isim, oylik, chiqim) {
    this.isim = isim;
    this.oylik = oylik;
    this.chiqim = chiqim;
    this.getMonthlyIncome = function () {
      return this.oylik - this.chiqim;
    };
  }

  const l1 = new a("Ozodbrk", 1200, 200);
  const l2 = new a("Muhamadrasid", 1300, 200);
  const l3 = new a("Mirzabek", 1000, 300);
  const l4 = new a("Lochinbek", 900, 100);
  const l5 = new a("Aloyor", 800, 200);
  const l6 = new a("Jumabek", 2000, 100);
  const l7 = new a("Komiljon", 1800, 200);
  const l8 = new a("Sanjarbek", 1600, 200);
  const l9 = new a("Hurshidbek", 1700, 200);
  const l10 = new a("Alimardon", 9000, 200);
  const k1 = l1.getMonthlyIncome();
  const k2 = l2.getMonthlyIncome();
  const k3 = l3.getMonthlyIncome();
  const k4 = l4.getMonthlyIncome();
  const k5 = l5.getMonthlyIncome();
  const k6 = l6.getMonthlyIncome();
  const k7 = l7.getMonthlyIncome();
  const k8 = l8.getMonthlyIncome();
  const k9 = l9.getMonthlyIncome();
  const k10 = l10.getMonthlyIncome();

  console.log(`${l1.isim}ni chiqimlardan tashqari pulari ${k1} so'm`);
  console.log(`${l2.isim}ni chiqimlardan tashqari pulari ${k2} so'm`);
  console.log(`${l3.isim}ni chiqimlardan tashqari pulari ${k3} so'm`);
  console.log(`${l4.isim}ni chiqimlardan tashqari pulari ${k4} so'm`);
  console.log(`${l5.isim}ni chiqimlardan tashqari pulari ${k5} so'm`);
  console.log(`${l6.isim}ni chiqimlardan tashqari pulari ${k6} so'm`);
  console.log(`${l7.isim}ni chiqimlardan tashqari pulari ${k7} so'm`);
  console.log(`${l8.isim}ni chiqimlardan tashqari pulari ${k8} so'm`);
  console.log(`${l9.isim}ni chiqimlardan tashqari pulari ${k9} so'm`);
  console.log(`${l10.isim}ni chiqimlardan tashqari pulari ${k10} so'm`);

  txt.textContent += `${l1.isim}ni chiqimlardan tashqari pulari ${k1} so'm            `;
  txt.textContent += `${l2.isim}ni chiqimlardan tashqari pulari ${k2} so'm             `;
  txt.textContent += `${l3.isim}ni chiqimlardan tashqari pulari ${k3} so'm             `;
  txt.textContent += `${l4.isim}ni chiqimlardan tashqari pulari ${k4} so'm                `;
  txt.textContent += `${l5.isim}ni chiqimlardan tashqari pulari ${k5} so'm              `;
  txt.textContent += `${l1.isim}ni chiqimlardan tashqari pulari ${k6} so'm               `;
  txt.textContent += `${l7.isim}ni chiqimlardan tashqari pulari ${k7} so'm               `;
  txt.textContent += `${l8.isim}ni chiqimlardan tashqari pulari ${k8} so'm                   `;
  txt.textContent += `${l9.isim}ni chiqimlardan tashqari pulari ${k9} so'm               `;
  txt.textContent += `${l10.isim}ni chiqimlardan tashqari pulari ${k10} so'm           `;
});
button5.addEventListener("click", () => {
  const car = {
    madeli: "nexia 3",
    rangi: "qora",
    start: function () {
      let a = "vrum vrum";
      console.log(a);
      txt.textContent += a + ";                            ";
    },
    drive: function () {
      let b = "driving";
      console.log(b);
      txt.textContent += b + ";                            ";
    },
    stop: function () {
      let c = "ctopping";
      console.log(c), (txt.textContent += c + ";                       ");
    },
  };
  car.start();
  car.drive();
  car.stop();
});
button6.addEventListener("click", () => {
  const obj = {};
  for (let i = 0; i <= 10; i++) {
    obj[i.toString()] = i;
    (txt.textContent +=
      i.toString() + ";" + i + ",                                 "),
      console.log(i.toString() + "" + i);
  }

  console.log(obj);
});
