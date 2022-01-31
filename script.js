// const faqs = document.querySelectorAll(".faqs")

// faqs.forEach(faq    => {
//     faq.addEventListener("click",()=>{
//         faq.classList.toggle("active");
//     })
// })
// select all accordion faqs
const faqs = document.querySelectorAll(".faqs");

// add a click event for all faqs
faqs.forEach((faq) => faq.addEventListener("click", toggleAcc));

function toggleAcc() {
  // remove active class from all faqs exept current faq
  faqs.forEach((faq) => faq != this ? faq.classList.remove("active") : null
  );

  // toggle active class on current faq
  if (this.classList != "active") {
    this.classList.toggle("active");
  }
}

// console.log(dropdowns)