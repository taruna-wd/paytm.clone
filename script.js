
       const scrollContainer = document.getElementById('scrollContainer');
        const scrollLeftButton = document.getElementById('scrollLeft');
        const scrollRightButton = document.getElementById('scrollRight');

        scrollLeftButton.addEventListener('click', () => {
            scrollContainer.scrollBy({ left: -200, behavior: 'smooth' });
        });

        scrollRightButton.addEventListener('click', () => {
            scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
        });
// second scroll 
        const scrollContainer1 = document.getElementById('scrollContainer1');
        const scrollLeftButton1 = document.getElementById('scrollLeft1');
        const scrollRightButton1 = document.getElementById('scrollRight1');

        scrollLeftButton1.addEventListener('click', () => {
            scrollContainer1.scrollBy({ left: -200, behavior: 'smooth' });
        });

        scrollRightButton1.addEventListener('click', () => {
            scrollContainer1.scrollBy({ left: 200, behavior: 'smooth' });
        });
// accordian

  const accTitle = document.querySelector(".acc-title")
  const accDes = document.querySelector(".acc-des");

      accTitle.addEventListener('click', function () {
         this.classList.toggle('active')
         console.log("click")
       if(accDes.style.display === "block"){
       accDes.style.display = "none"
       document.querySelector('.acc-title i').classList.replace('fa-plus', 'fa-xmark');

    }else{
      accDes.style.display = "block"
        document.querySelector('.acc-title i').classList.replace('fa-xmark', 'fa-plus');
        // document.querySelector('.acc-title i').classList.replace('fa-plus', 'fa-xmark');

    }

  })
