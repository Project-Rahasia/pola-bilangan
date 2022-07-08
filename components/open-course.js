// Sub 1
const subSatu0 = document.querySelector("#sub-1-0");
const subSatu1 = document.querySelector("#sub-1-1");
const subSatu2 = document.querySelector("#sub-1-2");

// Sub 2
const subDua0 = document.querySelector("#sub-2-0");
const subDua1 = document.querySelector("#sub-2-1");
const subDua2 = document.querySelector("#sub-2-2");
const subDua3 = document.querySelector("#sub-2-3");
const subDua4 = document.querySelector("#sub-2-4");
const subDua5 = document.querySelector("#sub-2-5");

// Sub 3
const subTiga0 = document.querySelector("#sub-3-0");
const subTiga1 = document.querySelector("#sub-3-1");
const subTiga2 = document.querySelector("#sub-3-2");
const subTiga3 = document.querySelector("#sub-3-3");
const subTiga4 = document.querySelector("#sub-3-4");
const subTiga5 = document.querySelector("#sub-3-5");

// Sub 4
const subEmpat0 = document.querySelector("#sub-4-0");

const getPage = (idElement, localName) => {
  const getLocal = localStorage.getItem(localName);
  if (getLocal != null) {
    // idElement.forEach((item, index) => {
    // });
    idElement.classList.remove("isDisabled");
  }
};

// Sub 1
getPage(subSatu0, "sub-1-0");
getPage(subSatu1, "sub-1-1");
getPage(subSatu2, "sub-1-2");

// Sub 2
getPage(subDua0, "sub-2-0");
getPage(subDua1, "sub-2-1");
getPage(subDua2, "sub-2-2");
getPage(subDua3, "sub-2-3");
getPage(subDua4, "sub-2-4");
getPage(subDua5, "sub-2-5");

// Sub 3
getPage(subTiga0, "sub-3-0");
getPage(subTiga1, "sub-3-1");
getPage(subTiga2, "sub-3-2");
getPage(subTiga3, "sub-3-3");
getPage(subTiga4, "sub-3-4");
getPage(subTiga5, "sub-3-5");

// Sub 4
getPage(subEmpat0, "sub-4-0");
