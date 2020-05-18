
// Yeha main IIFE function ka use kia hai ager tujhe kuch problem hai to yeha jake phir se padh le
// https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-stop-feeling-iffy-about-using-an-iife-7b0292aba174
(function () {

    // global variable decleration start here
    const Back_images = ["I1.jpg", "I2.jpg", "I3.jpg", "I4.jpg", "I5.jpeg", "I6.jpg", "I7.jpg", "I8.jpg", "I9.jpg", "I10.jpg"];
    const main_data = document.querySelector('#content');
    const guide_points = document.querySelector('#targets');
    let counter = 0;
    // end here


    // 0th index ke lia default wallpaper aur guide bullets matlab default picture
    main_data.style.cssText = `background: url(images/${Back_images[counter]}); background-repeat: no-repeat; background-size: cover; background-position: center; transition: 800ms; `;
    guide_points.children[counter].style.cssText = "background: #ff00ff; transform: scale(1.4);"
    // end here


// click event
    main_data.addEventListener('click', function (e) {

// wappapers change toward right hand sight
        if (e.target.id === "right") {
            //
            // console.log(e.target);
            if (counter === 9) { // guide_points.children[9].style.cssText = "background: white; transform: scale(1);";
                counter = 0;
                main_data.style.cssText = `background: url(images/${Back_images[counter]}); background-repeat: no-repeat; background-size: cover; background-position: center; transition: 800ms; `;

                // last bullet point  remover and first bullet point adder
                guide_points.children[counter].style.cssText = "background: #ff00ff; transform: scale(1.4);"
                guide_points.children[9].style.cssText = "background: white; transform: scale(1);"
            }
            else {
                // ye wallpapers change karne ka code hai right hand ki taraf
                main_data.style.cssText = `background: url(images/${Back_images[++counter]}); background-repeat: no-repeat; background-size: cover; background-position: center; transition: 800ms; `;

                // ye bullet points change karne ka code hai
                guide_points.children[counter].style.cssText = "background: #ff00ff; transform: scale(1.4);"
                let collect = counter - 1;
                guide_points.children[collect].style.cssText = "background: white; transform: scale(1);"
            }
        }

// ye left hand ke taraf jane ka code hai
        else if (e.target.id === "left") {

            // ye tab ke lia hai jab array ka index 0 pr pauch jayga to phir uska index 9 se doobara suru hoga
            if (counter === 0) {
                counter = 9;
                main_data.style.cssText = `background: url(images/${Back_images[counter]}); background-repeat: no-repeat; background-size: cover; background-position: center; transition: 800ms; `;

                // ye 9th index per bullet point layga aur 0th index per se hatayga
                guide_points.children[counter].style.cssText = "background: #ff00ff; transform: scale(1.4);"
                guide_points.children[0].style.cssText = "background: white; transform: scale(1);"

            }
            else {
                // ye background wallpapers left hand ke taraf change karaga
                main_data.style.cssText = `background: url(images/${Back_images[--counter]}); background-repeat: no-repeat; background-size: cover; background-position: center; transition: 800ms; `;

                // ye bullet point left hand ki taraf change karaga
                guide_points.children[counter].style.cssText = "background: #ff00ff; transform: scale(1.4);"
                let collect = counter + 1;
                guide_points.children[collect].style.cssText = "background: white; transform: scale(1);"

            }
        }
    })

})()