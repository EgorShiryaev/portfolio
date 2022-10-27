var modalBack = document.getElementById("modal-background");

var VGButton = document.getElementById("vg-install-button");
var GlenfieldStoreButton = document.getElementById("glenfield-install-button");
var NCStoreButton = document.getElementById("nc-install-button");

var AppStoreLink = document.getElementById("app-store-link");
var GooglePlayLink = document.getElementById("google-play-link");
var HuaweiStoreLink = document.getElementById("app-gallery-link");

const showModal = function () {
  modalBack.style.display = "flex";
};

var HuaweiStoreButton = document.getElementById("huawei-button");

const hideHuaweiStoreButton = function () {
  HuaweiStoreButton.style.visibility = "hidden";
  HuaweiStoreButton.style.position = "absolute";
};

const showHuaweiStoreButton = function () {
  HuaweiStoreButton.style.visibility = "visible";
  HuaweiStoreButton.style.position = "relative";
};

VGButton.onclick = function () {
  hideHuaweiStoreButton();
  showModal();
  AppStoreLink.href = "https://apps.apple.com/ru/app/vremena-goda/id1546734723";
  GooglePlayLink.href =
    "https://play.google.com/store/apps/details?id=ru.vremenagoda.client&hl=ru&gl=US";
};

GlenfieldStoreButton.onclick = function () {
  hideHuaweiStoreButton();
  showModal();
  HuaweiStoreButton.style.visibility = "hidden";
  AppStoreLink.href = "https://apps.apple.com/ru/app/glenfield/id1613951528";
  GooglePlayLink.href = "";
};

NCStoreButton.onclick = function () {
  showHuaweiStoreButton();
  showModal();
  AppStoreLink.href =
    "https://apps.apple.com/ru/app/norbitconnect/id1597940609";
  GooglePlayLink.href =
    "https://play.google.com/store/apps/details?id=ru.norbit.connect&hl=ru&gl=US";
  HuaweiStoreLink.href = "https://appgallery.huawei.com/#/app/C105065399";
};
