setTimeout(() => {
  const desk = [document.querySelector('.Home-desk'),document.querySelector('.About-desk'),document.querySelector('.Gallery-desk'),document.querySelector('.Testimonials-desk'),document.querySelector('.Contact-desk')];
  const desk_navs = [document.querySelector('.Home_nav-desk'),document.querySelector('.About_nav-desk'),document.querySelector('.Gallery_nav-desk'),document.querySelector('.Testimonials_nav-desk'),document.querySelector('.Contact_nav-desk')];

  const mob = [document.querySelector('.Home-mob'),document.querySelector('.About-mob'),document.querySelector('.Gallery-mob'),document.querySelector('.Testimonials-mob'),document.querySelector('.Contact-mob')];
  const mob_navs = [document.querySelector('.Home_nav-mob'),document.querySelector('.About_nav-mob'),document.querySelector('.Gallery_nav-mob'),document.querySelector('.Testimonials_nav-mob'),document.querySelector('.Contact_nav-mob')];
  console.log(desk.length);
  console.log(mob.length);
  for (const i in desk) {
    desk_navs[i].addEventListener('click', () => desk[i].scrollIntoView({block: "center", behavior: "smooth"}));
  }
  for (const i in mob) {
    mob_navs[i].addEventListener('click', () => mob[i].scrollIntoView({block: "center", behavior: "smooth"}));
  }
}, 1000);