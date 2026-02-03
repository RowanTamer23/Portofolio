
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typing');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typing > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

    // ===================== Portofolio Section =================

function pAll (){
document.querySelector("#Pcards").innerHTML = ``

        for (i=1; i<7; i++){
document.querySelector("#Pcards").innerHTML += `
            <div class="Pimg">
                <img src="images/portfolio/${i}.jpg" alt="">
                <div class="hover"> <p>web design</p> <div> <i class="fa-brands fa-gratipay fa-2x"></i><i class="fa-brands fa-gratipay fa-2x"></i> </div> </div>


        </div>
`
        }
    }

function pBrand (){
document.querySelector("#Pcards").innerHTML = ``

        for (i=4; i<7; i+=2){
document.querySelector("#Pcards").innerHTML += `
            <div class="Pimg">
                <img src="images/portfolio/${i}.jpg" alt="">
                <div class="hover"> <p>web design</p> <div> <i class="fa-brands fa-gratipay fa-2x"></i><i class="fa-brands fa-gratipay fa-2x"></i> </div> </div>
        </div>
`
        }
    }

function pDesign (){
document.querySelector("#Pcards").innerHTML = ``

        for (i=2; i<7; i+=3){
document.querySelector("#Pcards").innerHTML += `
            <div class="Pimg">
                <img src="images/portfolio/${i}.jpg" alt="">
                <div class="hover"> <p>web design</p> <div> <i class="fa-brands fa-gratipay fa-2x"></i><i class="fa-brands fa-gratipay fa-2x"></i> </div> </div>


        </div>
`
        }
    }

function pGraphic (){
document.querySelector("#Pcards").innerHTML = ``

        for (i=1; i<7; i+=2){
document.querySelector("#Pcards").innerHTML += `
            <div class="Pimg">
                <img src="images/portfolio/${i}.jpg" alt="">
                <div class="hover"> <p>web design</p> <div> <i class="fa-brands fa-gratipay fa-2x"></i><i class="fa-brands fa-gratipay fa-2x"></i> </div> </div>


        </div>
`
        }
    }

window.addEventListener("DOMContentLoaded", () => {
    const firstBtn = document.querySelectorAll(".navBut")[0];
    firstBtn.click();
    firstBtn.focus()
});

document.querySelectorAll(".navBut")[0].addEventListener("click",pAll)
document.querySelectorAll(".navBut")[1].addEventListener("click",pBrand)
document.querySelectorAll(".navBut")[2].addEventListener("click",pDesign)
document.querySelectorAll(".navBut")[3].addEventListener("click",pGraphic)

    // ===================== Testimonial Section =================

var Testimonial=[
    {
    image:"images/2.jpeg",
    comment:"Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    name: " Alex Smith",
    ctype: " Envato Customer "
    },
    {
    image:"images/1_New1.jpg",
    comment:"Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    name: "Rowan Tamer",
    ctype: "Envato Customer "
    },
    {
    image:"images/1.jpeg",
    comment:"Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    name: "Atef Tamer",
    ctype: "Envato Customer "
    }

]

function comment1 (){
    document.querySelector(".comment").innerHTML =``
    document.querySelector(".comment").innerHTML += `<img src="${Testimonial[0].image}" alt="">
        <p> ${Testimonial[0].comment}</p>
        
                <h4>${Testimonial[0].name}</h4>
                <p>
                ${Testimonial[0].ctype}
                </p>`
}

function comment2 (){
    document.querySelector(".comment").innerHTML =``
    document.querySelector(".comment").innerHTML += `<img src="${Testimonial[1].image}" alt="">
        <p> ${Testimonial[1].comment}</p>
        
                <h4>${Testimonial[1].name}</h4>
                <p>
                ${Testimonial[1].ctype}
                </p>`
}

function comment3 (){
    document.querySelector(".comment").innerHTML =``
    document.querySelector(".comment").innerHTML += `<img src="${Testimonial[2].image}" alt="">
        <p> ${Testimonial[2].comment}</p>
        
                <h4>${Testimonial[2].name}</h4>
                <p>
                ${Testimonial[2].ctype}
                </p>`
}

document.querySelectorAll(".Tbutt")[0].addEventListener("click", comment1)
document.querySelectorAll(".Tbutt")[1].addEventListener("click", comment2)
document.querySelectorAll(".Tbutt")[2].addEventListener("click", comment3)