var modalBack = document.getElementById("modal-background");

var VremenaGodaInstallButton = document.getElementById("vg-install-button");
var GlenfieldInstallButton = document.getElementById(
  "glenfield-install-button"
);
var NorbitConnectInstallButton = document.getElementById("nc-install-button");
var BPMSoftInstallButton = document.getElementById("bpmsoft-install-button");

var AppStoreLink = document.getElementById("app-store-link");
var GooglePlayLink = document.getElementById("google-play-link");
var HuaweiStoreLink = document.getElementById("app-gallery-link");

var showModal = () => {
  modalBack.style.display = "flex";
};

var HuaweiStoreButton = document.getElementById("huawei-button");

var hideHuaweiStoreButton = () => {
  HuaweiStoreButton.style.visibility = "hidden";
  HuaweiStoreButton.style.position = "absolute";
};

var showHuaweiStoreButton = () => {
  HuaweiStoreButton.style.visibility = "visible";
  HuaweiStoreButton.style.position = "relative";
};

VremenaGodaInstallButton.onclick = () => {
  hideHuaweiStoreButton();
  showModal();
  AppStoreLink.href = "https://apps.apple.com/ru/app/vremena-goda/id1546734723";
  GooglePlayLink.href =
    "https://play.google.com/store/apps/details?id=ru.vremenagoda.client&hl=ru&gl=US";
};

GlenfieldInstallButton.onclick = () => {
  hideHuaweiStoreButton();
  showModal();
  AppStoreLink.href = "https://apps.apple.com/ru/app/glenfield/id1613951528";
  GooglePlayLink.href =
    "https://play.google.com/store/apps/details?id=ru.glenfield.mobile&hl=ru";
};

NorbitConnectInstallButton.onclick = () => {
  showHuaweiStoreButton();
  showModal();
  AppStoreLink.href =
    "https://apps.apple.com/ru/app/norbitconnect/id1597940609";
  GooglePlayLink.href =
    "https://play.google.com/store/apps/details?id=ru.norbit.connect&hl=ru&gl=US";
  HuaweiStoreLink.href = "https://appgallery.huawei.com/#/app/C105065399";
};

BPMSoftInstallButton.onclick = () => {
  hideHuaweiStoreButton();
  showModal();
  AppStoreLink.href = "https://apps.apple.com/ru/app/bpmsoft/id1641881866";
  GooglePlayLink.href =
    "https://play.google.com/store/apps/details?id=ru.bpmsoft.mobileapp&hl=ru";
}