// Buttons
let randomSceneBtn = document.querySelector(".btn");
let smallSceneBtn = document.querySelector(".small-btn");

// Container
let container = document.querySelector(".container");
let altBar = document.querySelector(".alt-bar");

// Scenes Array
let legendryScenes = [
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/6AJ_7JnZlDA?si=A2Y3rmOerTLkVq0U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/qIsuPzMt94s?si=O8iWAZijTmIlSRNv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/y4l3In0BFgI?si=deQ0u3Z-uwmaRjGg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<iframe src"https://youtube.com/embed/I75npT1Q180?si=SIGRWPfdIuI53RBL" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src"https://youtube.com/embed/B1-cXHLhngg?si=3HZlbqNA_Q2dnQhm" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src"https://youtube.com/embed/MfVk2UoD8F8?si=s1c58V_LRBlJbVQt" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/zl64iMxezCI?si=lkNiS0F9-4E6Yq6z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://youtube.com/embed/Si4qV1stf8I?si=-H099RSTpciUJZwF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
];

let epicScenes = [
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/fWJoty6gkdc?si=C6RDsYXBmBgPsfR6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/a_VXy2AKkpM?si=yzuwPGfxFfozr17P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/124FqNNXQss?si=ngHIZqiqERIYxS2g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/X9PMa4wXOyc?si=_4s1pKgY8YKZGOCC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<iframe src"https://youtube.com/embed/7VJIHhwYPa0?si=C16Gsw2udEh9NlSo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src"https://youtube.com/embed/mEnvFj_YRWI?si=esITJFR9pEPU8Req" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src"https://youtube.com/embed/9PvjnBSrkDQ?si=ewFP4UJFVj7gvIWT" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src"https://youtube.com/embed/kQ6nh3mWi0s?si=zXMteakVZz2L_LZJ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src"https://youtube.com/embed/UqFW5hU6hYc?si=Vz4x04X4SdI8CTag" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src"https://youtube.com/embed/KLQJcy1KVJU?si=m_V0P4M8W4CT5tlT" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src"https://youtube.com/embed/Opc7zBLePnA?si=bCWq--bu3f7zmFju" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src"https://youtube.com/embed/V_kI8FzeYh4?si=LbUy0kY8WGoeaEz7" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src"https://youtube.com/embed/VZjqk7VX23o?si=6Mkg3ARTvz59FJ52" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src"https://youtube.com/embed/yTnYROl3rh0?si=K57CV6MyIkEEd3zz" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src"https://youtube.com/embed/zVQHC0I3GEc?si=ShK1rbyATKsByjhZ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
];

let rareScenes = [
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/tdwleXKjYpE?si=dKy5eRs6zEmvMsXv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/BBuqi4B5x6Q?si=nwXxY7qyhALTr4mH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/2BAdJkNWQic?si=M8-el2vLoqW6Kl10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<iframe src="https://www.youtube.com/embed/HlE8KZ0QAdk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/UE-pbyB8VGo?si=-4XgBLXiwLjmw_18" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/gxpFa4fHr-E?si=Ux4Jvc4DHzFlbLmF" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/mOiz9woFUxQ?si=QTLHjzAkYRg-RiTs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/Ll-PCkE3n1I?si=Ab5gaIEJaGtS24Pm" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/M_nxGFkH7Fo?si=1hWbpS7CVchDZjBt" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/2fSpgjSgugE?si=qZods_T1BJ0tGnzn" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/DJ9_xqGBhmg?si=txiassBPd1aGFM0h" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/NCrwPYAkbV4?si=ZdmfgxG-M0EcxQNf" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/P5nyoQfSRj8?si=EZjb2pEF1KMu-Kyc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/Gc7rhUcau9o?si=KXvkjY3dm0JD7YfX" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/Vdw3EfWuFhI?si=ynHsEKusWNJJHKqg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/vOTs8rCv87Y?si=vPrGmFkzkM3XUKC-" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/OIu0uZSmtbA?si=jEYaRSL87Y7RoIjY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
];

let commonScenes = [
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZVgRx3eFj5M?si=9LOS4GxVTigx9Eqb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/6wp5vVglb_M?si=FHlX3DvS5L_1-yTW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/CGk29EJwfIw?si=ensblV_iYmdgnXMB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/fekBNlRemPo?si=YMvFevYN5UyGTrJ2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/G062gZo5rEc?si=GSWfSwXUnpP44ZZ3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/gCsaU523V6U?si=SYhEmBl92KMOM7Ru" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<iframe src="https://www.youtube.com/embed/In-o6VLYt8I?si=U72VVsxYniJiJcA-" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/h5HSw_NjMYM?si=LsnOZMnk8RJemV-d" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/26VZUz7HxyM?si=Jw9EezSotYCMbCqt" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/nYnuQrsOn3w?si=pafBbRik2HLrMYHw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/WPsBWq-fUdw?si=oQ_JwvrivVDTEQ7r" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/-YbwpMUJh-8?si=mK6jtmTFVPKOY0KD" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/0GvOcdbTsvA?si=Uz3T2gWbQS2ITi1G" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/shorts/RGAELFWOPp8?si=bYqrRiJ_4FfHcaPw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/FW7ia7JQZV4?si=S7ZPnhMMtZmtAG6f" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/SRK3SPvzAyM?si=AgZOo-KO-w-8zAhS" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/gfmwIUvbPMc?si=dhoIFlRBJta6kj9K" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/uS1w1ra0q8g?si=vGizcKhgo2fHbIMC" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/aHcNKaB07xw?si=QfEFV9XcFVMhJvSS" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/nRIIwLABcJU?si=mYQy9Sxz6hYekCI0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/DXp_1yRvat4?si=RhGBYiwWedU0e2UA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/CqQyadD5C7Q?si=8vzLZmAVAxY_70PP" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/YsdwNQ6DLe4?si=IKPDM4TZUN_QHEfd" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/IwiIgqGIND4?si=3dLdJTXpLClgdEIz" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/NJcMeHk7-8U?si=oshr7jUh1Sq9Bpnw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/gdW6qz1-CBQ?si=ar8rsCHNsRdfO1FS" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/xGyOwZjBCNg?si=-BX52DJVc5XopvwF" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/1pPC_8pkJB4?si=voEGIzf2rEw6IEB8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/Fewmvfua2bE?si=bJLiH51Y4-dFhj8J" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/nq_7sKiUD5Y?si=JBDrueqrQoM_ABz8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/G2I3ZKakeEs?si=p7QfyXCMC766ArJn" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/W6mpbS0nIAE?si=OjX_0Wn2Zp_S76Ib" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/E_FW_mDksWk?si=hPw0fzKE_WpzM-_S" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/eGUrDjqPb-Y?si=oleZY9xaYS4DlUcd" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/FtbJ57O57zM?si=IQudlz-Udrs_JlRK" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/J17vH7ojaG8?si=NzvM8t1iRU4gm5qI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe src="https://youtube.com/embed/uSUxjWYCLr8?si=mvTP2BuN5RcnXQ1R" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/pR5ANJmxqWM?si=kdJEIxvZPRFU-iCQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
];

randomSceneBtn.addEventListener("click", function () {
  smallSceneBtn.style.display = "block";
  randomSceneBtn.style.display = "none";

  generateVideoSpace();

  determineRarity();
});

smallSceneBtn.addEventListener("click", function () {
  const secondChild = container.children[1];

  // İkinci çocuğu sil
  if (secondChild) {
    container.removeChild(secondChild);
  }

  generateVideoSpace();
  determineRarity();
});

let prevRandomIndex = 1002;
function determineRarity() {
  let randomIndex = Math.floor(Math.random() * 100);
  if (prevRandomIndex === randomIndex) {
    randomIndex = Math.floor(Math.random() * 100);
  }
  prevRandomIndex = randomIndex;
  let videoContainer = document.querySelector(".video-container");

  if (randomIndex === 71 || randomIndex === 82) {
    let legScene =
      legendryScenes[Math.floor(Math.random() * legendryScenes.length)];

    legSceneElement = document.createElement("div");
    legSceneElement.classList.add("video-container-frame");
    legSceneElement.innerHTML = legScene;
    videoContainer.appendChild(legSceneElement);

    container.style.backgroundColor = "#FFD700";

    //LEGENDRY
  } else if (randomIndex === 37 || randomIndex === 85 || randomIndex === 99) {
    let epicScene = epicScenes[Math.floor(Math.random() * epicScenes.length)];

    epicSceneElement = document.createElement("div");
    epicSceneElement.classList.add("video-container-frame");
    epicSceneElement.innerHTML = epicScene;
    videoContainer.appendChild(epicSceneElement);

    container.style.backgroundColor = "#660099";
    //EPIC
  } else if (randomIndex < 10) {
    let rareScene = rareScenes[Math.floor(Math.random() * rareScenes.length)];

    rareSceneElement = document.createElement("div");
    rareSceneElement.classList.add("video-container-frame");
    rareSceneElement.innerHTML = rareScene;

    videoContainer.appendChild(rareSceneElement);

    container.stlye.backgroundColor = "#d78e56";

    //RARE
  } else {
    let comScene =
      commonScenes[Math.floor(Math.random() * commonScenes.length)];

    commonSceneElement = document.createElement("div");
    commonSceneElement.classList.add("video-container-frame");
    commonSceneElement.innerHTML = comScene;

    videoContainer.appendChild(commonSceneElement);

    container.style.backgroundColor = "#565F6B";

    //COMMON
  }
}

function generateVideoSpace() {
  let videoContainer = document.createElement("div");
  videoContainer.classList.add("video-container");

  const firstChild = container.children[0];
  container.insertBefore(videoContainer, firstChild.nextSibling);
}
