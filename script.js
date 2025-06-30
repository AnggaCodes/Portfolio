let words = document.querySelectorAll(".word")
words.forEach((word)=>{
    let letters = word.textContent.split("");      /*29. MBUH OPO IKI yg penting membuat berubah2 pada text class word*/
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span")
        span.textContent = letter;
        span.className = "letter";
        word.append(span)
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;                /*30. memunculkan kembali text class word */
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words [currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        },i * 80);
})
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i * 80)
    });
    currentWordIndex = currentWordIndex ===maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText,3000);

/*107. circle skill Javascript*/

const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent")
    var percent = Math.floor(dots*marked/100)
    var points = "";
    var rotate = 360 / dots;

    for(let i = 0; i < dots ; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>` /*108. copas dari html ke js*/
    }                            /*112. Ubah yg tadinya --i=1 jadi --i:${i}; --rot:${rotate}deg */
    elem.innerHTML = points;  /*113. buat ini dan JADI DAH ANIMASINYA*/

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i<percent ; i++){
        pointsMarked[i].classList.add('marked')
    }
})

// mix it up portfolio section agar gambar terseleksi jika mengklik masing2 sub judul
var mixer = mixitup('.portfolio-gallery');  /*136. tulis ENTAH APA INI trus isi dengan value dari class parent div gambar diawali titik . jadi .portfolio-gallery*/

// 145. active menu /////////////////////////////////////////////////////////////////////////////////////////
/*KOde Javascript agar nav berubah sesuai halaman dimana scrollbar berada*/
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section')


function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add('active');
}

activeMenu();
window.addEventListener('scroll', activeMenu);

// 148. Sticky navbar /////////////////////////////////////////////////////////////////////////////////////////
const header = document.querySelector("header");
window.addEventListener('scroll',function(){
    header.classList.toggle("sticky",window.scrollY > 50)
})

// 153. toggle icon navbar /////////////////////////////////////////////////////////////////////////////////////////
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

window.onscroll = ()=>{  /*156. Bikin efek ketika klik salah satu menu di navbar menu navbarnya akan hilang dan halaman akan scroll ke bagian menu yang diklik*/
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}

// 157. Parallax /////////////////////////////////////////////////////////////////////////////////////////
// 158. Buat efek transisi munculnya teks persection
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));