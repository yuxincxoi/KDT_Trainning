let box1 = document.getElementById('box1');
box1.style.fontSize='30px';
box1.style.fontWeight='600';
box1.style.textAlign='center';
box1.style.fontFamily='TTLaundryGothicB';
box1.addEventListener("mouseover", () => {
  box1.innerHTML='Number';
});
box1.addEventListener("mouseout", () => {
  box1.innerHTML='12345';
});

let box2 = document.getElementById('box2');
box2.style.fontSize='30px';
box2.style.fontWeight='600';
box2.style.textAlign='center';
box2.style.fontFamily='TTLaundryGothicB';
box2.addEventListener("mouseover", () => {
  box2.innerHTML='Character';
});
box2.addEventListener("mouseout", () => {
  box2.innerHTML="'A'";
});

let box3 = document.getElementById('box3');
box3.style.fontSize='30px';
box3.style.fontWeight='600';
box3.style.textAlign='center';
box3.style.fontFamily='TTLaundryGothicB';
box3.addEventListener("mouseover", () => {
  box3.innerHTML='String';
});
box3.addEventListener("mouseout", () => {
  box3.innerHTML="'안녕하세요'";
});



let weather1 = document.getElementById('weather1');
let bool = document.getElementById('bool');
let weather2 = document.getElementById('weather2');
weather1.addEventListener("mouseover", () => {
  weather1.style.transform='scale(1.2)';
});
weather1.addEventListener("mouseout", () => {
  weather1.style.transform='scale(1)';
});
weather1.addEventListener("click", () => {
  bool.style.display='block';
  bool.innerHTML="True !"
});
weather2.addEventListener("mouseover", () => {
  weather2.style.transform='scale(1.2)';
});
weather2.addEventListener("mouseout", () => {
  weather2.style.transform='scale(1)';
});
weather2.addEventListener("click", () => {
  bool.style.display='block';
  bool.innerHTML="False !"
});
