/**
 * FileName: app.js
 * 
 * @author Hassan Kobeissi
 * @date June 22, 2016
 * StudentID: 300847239
 * website: 
 * @description This file is the main javascript file for the web site
 */

// setup your IIFE (Immediately Invoked Function Expression)
(function () {
"use strict";
var paragraphElements = [];
paragraphElements[0] = document.getElementById("IntroParagraph");
paragraphElements[1] = document.getElementById("Folegandros");
paragraphElements[2] = document.getElementById("Alonissos");
paragraphElements[3] = document.getElementById("Spetses");
paragraphElements[4] = document.getElementById("Amorgos");
paragraphElements[5] = document.getElementById("Syros");
paragraphElements[6] = document.getElementById("Milos");
paragraphElements[7] = document.getElementById("Hydra");
paragraphElements[8] = document.getElementById("Ithaca");
paragraphElements[9] = document.getElementById("Gavdos");
var paragraph = [];
//paragraph data
paragraph[0] = "Now is the time to travel to Greece. The country may be going through an economic crisis, but many travellers say that it hasn't impacted the experience of visiting. Plus, there may be some great deals.Greece has 1,400 islands, though only 230 of them are inhabited. And while everyone knows about Santorini and Mykonos, there are gorgeous lesser-known islands in Greece, too.";

paragraph[1] = "Folegandros is almost a Greek cliché, full of beautiful whitewashed houses with bright blue doors lining cobblestoned streets on steep cliffs. Rugged and remote, without chain hotels or package tours — not even a bank or ATM — and accessible only by ferry, the volcanic island boasts solitude in spades, secluded beaches, and incredible sunsets." ;

paragraph[2] = "Off the mainland, this island, whose surrounding waters are a designated marine park full of seals and dolphins, is a nature lover's dream.The spectacular Spot's crystal clear waters and beautiful beaches are perfect for diving, and its lush flora and dense forests ideal for hikes. Since the rich landscape is chock full of indigenous herbs, it's also known for its traditional medicine, and home of the International Academy of Homeopathy."; 

paragraph[3] = "This bohemian paradise is more Côte d'Azur than Grecian island. Spetses was hot in the '60s, when it hosted Marilyn Monroe and Elizabeth Taylor, and remains a swanky summer retreat for Athens' glitterati to this day, full of fancy hotels, mansions and yachts, and stylish boutiques. Aside from a handful of locally-owned cabs, the four-mile-long island has banned cars in town, giving it a refreshingly 19th-century vibe, with horse-drawn carriages being a common sight.";

paragraph[4] = "Shipwrecks, sea caves and beautiful clear waters make Amorgos popular with snorkelers, but the mountainous island is the perfect compromise between unwinding and adventure, boasting beautiful beaches but also hiking, scuba diving and rock-climbing. One of the island's main attractions is the 11th-century cliffside monastery of Panayia Hozoviótissa, which is precariously carved into a cliff.";

paragraph[5] = "A favourite Athenian escape and former shipowners' vacation spot full of grand mansions, Syros is little known to foreigners. Famous for its neoclassical architecture and perfectly preserved heritage, its capital, Ermoupolis, was a 13th-century Venetian-built town and important trade and industrial centre, and boasts giant churches and beautiful villas, a stunning town hall, and labyrinthine streets and stairways.";

paragraph[6] ="This volcanic island, with catacombs and ancient iron mines to explore, is dramatically rugged, and famous for its stunning rock formations. Often likened to a moonscape, it's also known for its hot springs, the ancient Venus De Milo statue that was found here, and for its diversity of incredible beaches. Known as \"the island of colours\" it's home to around 80 beaches — some only accessible by boat — ranging from stunningly white, to striking black, and even unusual red and grey. However, each beach has the same Evian-clear turquoise waters, and is surrounded by a rugged mountain landscape.";

paragraph[7] = "The first thing you'll notice on this beautiful island is the lack of cars — and buses, motorcycles, or other wheeled vehicles, as well as high rises. The winding little streets full of beautiful 18th-century mansions, churches, cathedrals, museums and art galleries are covered in cobblestones, and mostly trafficked by donkeys and humans. Back in the day, the island attracted celebrities like Leonard Cohen and Sophia Loren, but was somehow forgotten over the years. That means that travellers to Hydra can have the chic yet almost rural island paradise more or less to themselves.";

paragraph[8] ="Most famous for being the home of Odysseus, and a prominent figure in Homer's \"The Odyssey,\" Ithaca is said to have been inhabited since the 2nd millennium BC. Made up of two islands joined by a narrow strip of land, many visit it to see the legendary sites mentioned by Homer. However, Ithaca is more than its mythical counterpart, beckoning with secluded beaches, dramatic cliffs, beautiful olive groves, and sleepy fishing villages full of Byzantine churches and monasteries.";

paragraph[9] ="Near the more well-known Crete, Gavdos is the most southern island in Greece — and the most southern spot in Europe discounting the Canaries. Only accessible by ferry, the remote island has only about 50 permanent residents, and can feel like your private playground. Local legend has it that the island was the home of goddess Calypso, who kept Odysseus prisoner here. Today, a favorite tourist activity is to visit the spot believed to be her cave. Be warned, you won't find any luxury hotels here. While the romantically under-developed, super laid back island has a number of rooms for rent, those are limited, as the real draw here for many is the free, seaside camping.";
//Checks to see if intro paragraph exists
for (var index = 0; index < paragraphElements.length; index++)
   
{
     
if (paragraphElements[index]) 
{
  paragraphElements[index].textContent = paragraph[index];
  
}
   
}

                                //contact form below

})();


    function Contact() {
        // create a reference for your form
        var contactForm = document.getElementById("contactForm");
        firstName = document.getElementById("firstName");
        lastName = document.getElementById("lastName");
        email = document.getElementById("email");
        contactNumber = document.getElementById("contactNumber");
        yourMessage = document.getElementById("yourMessage");

        contactForm.addEventListener("submit", onFormSubmit);
    }

            function onFormSubmit(event){
            console.info("entered onFormSubmit event");

            // stops the form from clearing and trying to submit
            event.preventDefault();
            // displays the forms values to the console
            displayFormValues();
            // reset the form
            contactForm.reset();
    }

    /**
     * displays form values on the page and console
     * 
     * @method displayFormValues
     * @returns {void}
     */
    function displayFormValues() {
        var column = document.getElementById("column");
        var formValues = document.createElement("div");
        formValues.setAttribute("id","formValues");

        var formValuesString = "";
        formValuesString += "<p><hr><br>";
        formValuesString += "First Name: " + firstName.value + "<br>";
        formValuesString += "Last Name: " + lastName.value + "<br>";
        formValuesString += "Email: " + email.value + "<br>";
        formValuesString += "Contact Number: " + contactNumber.value + "<br>";
        formValuesString += "Your Message: " + yourMessage.value + "<br>";
        formValuesString += "<hr><br></p>";

        formValues.innerHTML = formValuesString;

        if(document.getElementById("formValues")) {
            var formValuesDiv = document.getElementById("formValues");
            formValuesDiv.innerHTML = formValuesString;
        }
        else {
            column.appendChild(formValues);
        }
        


        console.log("++++++++++++++++++++++++++++++++++++++++++");
        console.log("First Name: " + firstName.value);
        console.log("Last Name: " + lastName.value);
        console.log("Email: " + email.value);
        console.log("Contact Number: " + contactNumber.value);
        console.log("Your Message: " + yourMessage.value);
           window.navigator.geolocation.getCurrentPosition(function (location) 
            {
                console.log("Latitude: " + location.coords.latitude);
                console.log("Longitude: " + location.coords.longitude);
                console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("++++++++++++++++++++++++++++++++++++++++++");
            }
    

  
      
                




