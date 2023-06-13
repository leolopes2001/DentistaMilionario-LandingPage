document.querySelectorAll(".card_section_7").forEach((el) => {
    el.addEventListener("click", (event) => {
        document.querySelectorAll(".card_section_7.ative").forEach((el) => el.classList.remove("ative"))
        event.target.closest(".card_section_7").classList.add("ative")
    })
})

document.querySelectorAll(".day_container_section_6 > div:not(.tab)").forEach((el) => {
    el.addEventListener("click", (event) => {
        document.querySelectorAll(".day_container_section_6 > div.active").forEach((el) => el.classList.remove("active"))

        const containerDay = event.target.closest("div")

        containerDay.classList.add("active")

        const containerDayId = containerDay.id
        const hideContainerDayId = containerDayId === "day_1" ? 2: 1;
        document.querySelector(`#schedule_${containerDayId}`).style.display = "block"
        document.querySelector(`#schedule_day_${hideContainerDayId}`).style.display = "none"
    })
})

$(function () {
    if ($('.owl-2').length > 0) {
      $('.owl-2').owlCarousel({
        autoplayTimeout: 2500,
        center: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 20,
        smartSpeed: 1000,
        autoplay: true,
        nav: true,
        dots: true,
        pauseOnHover: false,
        responsive: {
          600: {
            margin: 20,
            nav: true,
            items: 2
          },
          1000: {
            margin: 20,
            stagePadding: 0,
            nav: true,
            items: 3
          },
          1200: {
            margin: 20,
            stagePadding: 0,
            nav: true,
            items: 4
          }
        }
      });
    }
  
  })