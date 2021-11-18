 /* Code for changing active 
        link on clicking */
        var btns =
            $("#navigation .navbar-nav .nav-link");

        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click",
                function () {
                    var current = document
                        .getElementsByClassName("active");

                    current[0].className = current[0]
                        .className.replace(" active", "");

                    this.className += " active";
                });
        }

        /* Code for changing active 
        link on Scrolling */
        $(window).scroll(function () {
            var distance = $(window).scrollTop();
            $('.page-section').each(function (i) {

                if ($(this).position().top <=
                    distance + 40) {

                    $('.navbar-nav a.active')
                        .removeClass('active');

                    $('.navbar-nav a').eq(i)
                        .addClass('active');
                }
            });
        }).scroll();

        //Scroll to top button
        const toTop = document.querySelector(".to-top");
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 100) {
                toTop.classList.add("active");
            } else {
                toTop.classList.remove("active");
            }
        })

        //form showing 
        const popup = document.getElementById('form')
        const popupButton = document.getElementById('formButton')

        popupButton.addEventListener('click', () => {
            if (popup.classList.contains('popupShow')) //jesli schowane to pokaz
                popup.classList.remove('popupShow');
            else popup.classList.add('popupShow'); // w innym przypadku schowaj
        })

        const popup2 = document.getElementById('formFb')
        const popupButton2 = document.getElementById('formFbButton')

        popupButton2.addEventListener('click', () => {
            if (popup2.classList.contains('popupShow')) //jesli schowane to pokaz
                popup2.classList.remove('popupShow');
            else popup2.classList.add('popupShow'); // w innym przypadku schowaj
        })

        // Get the modal
        var modal = document.getElementById("myModal");

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        // var img = document.getElementById("myImg");
        var imgs = document.querySelectorAll("#myImg");
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        imgs.forEach(img => {
            img.onclick = function () {
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            }
        })

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }

        //Image slider
        var swiper = new Swiper(".mySwiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            loop:true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: ".swiper-pagination",
            },
        });