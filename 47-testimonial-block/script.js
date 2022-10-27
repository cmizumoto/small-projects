/* 
    Variables and Selectors
*/
const testimonialContainer = document.querySelector(".testimonial-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Maria Joseph",
    position: "Marketing",
    photo: "https://randomuser.me/api/portraits/women/46.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit eros, ultricies in elit in, pellentesque eleifend lorem. Sed et elit leo. Nullam a semper mauris, in suscipit quam. Vivamus suscipit ex a hendrerit tempor. Aenean consectetur, elit ut ultricies ultrices, lectus odio lacinia elit, sit amet molestie neque turpis ac dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In commodo viverra viverra. Maecenas quis ante mollis, venenatis ligula ac, ullamcorper justo. Phasellus eu ex facilisis, consequat felis ut, vestibulum enim. Mauris imperdiet, nunc in lacinia ultricies, mi libero ultrices enim, quis ultrices erat risus nec nisi. Donec vel diam non ex venenatis interdum non ut sem. ",
  },
  {
    name: "Sophia Miguel",
    position: "Human Resources",
    photo: "https://randomuser.me/api/portraits/women/22.jpg",
    text: "Mauris elementum mattis nulla nec semper. Aliquam congue nisl in sagittis luctus. Etiam vitae libero sem. Aenean efficitur sem erat, at malesuada nisi viverra at. Aenean erat tellus, suscipit a lobortis nec, interdum in tellus. Mauris ornare ipsum nec nunc ultrices, et placerat leo varius. Proin sodales, augue id faucibus lacinia, augue purus volutpat tellus, semper placerat ante justo nec leo.",
  },
  {
    name: "Pedro Sky",
    position: "Astronaut",
    photo: "https://randomuser.me/api/portraits/men/22.jpg",
    text: "Morbi velit dui, molestie rhoncus leo et, vehicula feugiat ligula. Praesent a velit lobortis, congue ante vitae, pellentesque ligula. Duis id hendrerit urna, sit amet consectetur mauris. Suspendisse hendrerit eu eros eget commodo. Mauris ac nisi fermentum, varius risus quis, auctor mauris. Sed rhoncus, nisi suscipit ornare convallis, velit eros maximus urna, in ultricies nunc massa id orci. Nam venenatis egestas feugiat. Duis massa massa, iaculis nec lorem non, blandit pellentesque nunc. Ut et mattis ex, ut ornare risus. Nullam neque ex, molestie vitae ullamcorper a, molestie eget lectus. Nunc eget aliquet urna, eu vulputate sapien. Donec a urna egestas, dignissim orci et, tincidunt velit. Proin vel velit facilisis, euismod ex sed, rhoncus turpis. Aenean eros orci, ultricies sed malesuada non, efficitur quis lectus. ",
  },
  {
    name: "Thomas Tank",
    position: "Conductor",
    photo: "https://randomuser.me/api/portraits/men/12.jpg",
    text: "Cras aliquam leo nec metus dictum, eu lobortis massa tempus. Donec rutrum diam egestas magna facilisis, consectetur dictum velit suscipit. Nullam vel massa blandit, gravida purus vel, porta quam. ",
  },
  {
    name: "Finana Ryugu",
    position: "Fisherman",
    photo: "https://randomuser.me/api/portraits/women/31.jpg",
    text: "Maecenas quis ante mollis, venenatis ligula ac, ullamcorper justo. Phasellus eu ex facilisis, consequat felis ut, vestibulum enim. Mauris imperdiet, nunc in lacinia ultricies, mi libero ultrices enim, quis ultrices erat risus nec nisi. Donec vel diam non ex venenatis interdum non ut sem. ",
  },
];

/* 
    Functions
*/
let index = 1;

const updateTestimonial = () => {
  const { name, position, photo, text } = testimonials[index];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  index++;

  if (index >= testimonials.length) {
    index = 0;
  }
};

setInterval(() => updateTestimonial(), 5000);
