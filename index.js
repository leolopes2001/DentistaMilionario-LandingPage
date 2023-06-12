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
