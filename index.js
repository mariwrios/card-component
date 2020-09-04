const btnshare = document.querySelector("#btnShare")
const tooltip = document.querySelector("#tooltip")
const iconNoActive = document.querySelector("#iconActiveNo")
const iconSiActive = document.querySelector("#iconActiveSi")

btnshare.addEventListener("click", () => {
  btnshare.classList.toggle("share_select")
  tooltip.classList.toggle("card__tooltip-active")
  iconNoActive.classList.toggle("active__icon-si")
  iconSiActive.classList.toggle("active-icon__si")
})
