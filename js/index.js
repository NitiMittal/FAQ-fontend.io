const faqSections = document.querySelectorAll(".faq__section");

faqSections.forEach((faqSection) => {
  faqSection.addEventListener("click", () => {
    faqSection.classList.toggle("active");
  });
});
