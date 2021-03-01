window.onload = function () {
    show(0);
}
//Questions

let questions = [
    {
        id: 1,
        question: "WHAT IS MANGO?",
        answer: "Fruit",
    },
    {
        id: 2,
        question: "WHAT IS INDIA?",
        answer: "Country",
    },
    {
        id: 3,
        question: "WHAT IS UP?",
        answer: "State"
    },
    {
        id: 4,
        question: "WHAT IS ZEBRA?",
        answer: "Animal"
    },
    {
        id: 5,
        question: "WHAT IS ODISHA?",
        answer: "None of these"
    },
    {
        id: 6,
        question: "WHO IS FAVOURITE BROWSER?",
        answer: "None of these"
    },
    {
        id: 7,
        question: "IN WHICH YEAR DID GANDHIJI IS BORN?",
        answer: "None of these"
    },
    {
        id: 8,
        question: "WHO IS ASHOKA?",
        answer: "None of these"
    },
    {
        id: 9,
        question: "WHAT IS MANGO?",
        answer: "Fruit"
    }
];







/*function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;


    sessionStorage.setItem("name", name);

    location.href = "quiz1.html";

}

let question_count = 0;
let point = 0;
sessionStorage.setItem("points", point);
var x = "";
var y = "";*/



function myfunction1(){
    sessionStorage.setItem("points", 1);
    location.href = "article.html";
}

function myfunction2(){
    sessionStorage.setItem("points", 2);
    location.href = "article.html";
}

function myfunction3(){
    sessionStorage.setItem("points", 3);
    location.href = "article.html";
}

function myfunction4(){
    sessionStorage.setItem("points", 4);
    location.href = "article.html";
}

function myfunction5(){
    sessionStorage.setItem("points", 5);
    location.href = "article.html";
}

function myfunction6(){
    sessionStorage.setItem("points", 6);
    location.href = "article.html";
}

function myfunction7(){
    sessionStorage.setItem("points", 7);
    location.href = "article.html";
}

function myfunction8(){
    sessionStorage.setItem("points", 8);
    location.href = "article.html";
}

function myfunction9(){
    sessionStorage.setItem("points", 9);
    location.href = "article.html";
}

function myfunction10(){
    sessionStorage.setItem("points", 10);
    location.href = "article.html";
}

function myfunction11(){
    sessionStorage.setItem("points", 11);
    location.href = "article.html";
}

function myfunction12(){
    sessionStorage.setItem("points", 12);
    location.href = "article.html";
}








if (sessionStorage.getItem("points") == 1){
    var element = document.getElementById("id01");
    element.innerHTML = "WEBINAR";
    document.getElementById('myImage').src="A.png";
    var element1 = document.getElementById("id02");
    element1.innerHTML = "When the pandemic was raging all over the world most of us were left none or no recreation at all. It was certainly a depressing phase for everyone and to overcome that gradual degradation of our mind space we under the leadership of our newly elected Executive Board members decided to utilize the online educational platforms by conducting webinars with our fellow regional AIChE student chapters of VIT, TIET, GSFCU and Ahmedabad University. As students of science, we firmly believe that ideas can expand and prosper effectively only through sharing. The webinars were a huge success and led to some really interesting conversations about certain ideas and the potential collaborations that we could work on in the future. These webinars also helped us to consolidate the bonds between the respective chapters and the entire regional fraternity.";
}

else if(sessionStorage.getItem("points") == 2){
    var element = document.getElementById("id01");
    element.innerHTML = "Art-E-Culate ";
    document.getElementById('myImage').src="A.png";
    var element1 = document.getElementById("id02");
    element1.innerHTML = "This was the very first event conducted by our chapter for the 2020-21 session in collaboration with the student chapter of AIChE-GSFCU and it was indeed for a noble cause. In today’s generation there is no place for stereotypes and it is high time that we stop discriminating people based on their sexuality. This event was to showcase our support for the case by celebrating the Pride Month and promoting the LGBTQ+ community. The event was also to spread awareness about the advancements in the modern world and their application in Education and Industry through the inclusion of Artificial Intelligence and modern era machinery. The world is constantly evolving and to adapt ourselves to this transition one always needs to stay up to date with the new aspects in their respective departments. Art-E-Culate enabled us to do that by organizing a poster designing competition based on these causes where the online platforms were put to use for the submission of the E-posters.";
}

else if(sessionStorage.getItem("points") == 3){
    var element = document.getElementById("id01");
    element.innerHTML = "CheMystery Sherlocked ";
    document.getElementById('myImage').src="A.png";
    var element1 = document.getElementById("id02");
    element1.innerHTML = "Science and a Mystery are two sides of the same coin. We term everything without an explanation or something that we do not understand as a mystery. As disciples of Science, it our duty to unravel these mysteries and add them to the list of discoveries instead. CheMystery Sherlocked was entire carried out on our Instagram handle to promote the very unraveling of these mysteries. We covered a very range of topics that included Chemical Engineering on how it is helping mankind in its fight against the Covid-19 pandemic and how it is constantly contributing towards the manufacturing of hybrid polymers to suit our everyday life making it easier. We also covered topics such as the Green Revolution, the importance of refineries (the true sense behind petroleum being called liquid gold) and the use of DNA engineering to make up for the world food shortage by producing Genetically Modified crops.";
}








else if(sessionStorage.getItem("points") == 4){
    var element = document.getElementById("id01");
    element.innerHTML = "Blast from the Past ";
    document.getElementById('myImage').src="A.png";
    var element1 = document.getElementById("id02");
    element1.innerHTML = "Nature can sometimes be really unforgiving and hence disasters must never be forgotten and we should always learn from it to avoid similar situations in the future. Mankind has been the subject to many such horrific disasters and to help people understand them better was the very aim of “Blast from the Past”. In collaboration with AIChE-Ahmedabad University we decided to conduct this event where the participants had to study about a particular disaster and also about the key-people related to it. After conducting a thorough research about the given individuals, they were to suggest what different decisions they could have taken to avoid that disaster. The purpose of this event was to encourage disaster-control amongst our Instagram page followers and Science students in general so that we can work together to create a safe and disaster-free environment.";
}

else if(sessionStorage.getItem("points") == 5){
    var element = document.getElementById("id01");
    element.innerHTML = "GoT-Reel to Real ";
    document.getElementById('myImage').src="A.png";
    var element1 = document.getElementById("id02");
    element1.innerHTML = "It is a general perception that Science is all about experiments, laboratories, research and hard work but it can also be really fun and interesting when looked at from a different perspective. Since “Netflix and Chill” is the current trend, we decided to promote Science with the help of it. The event was all about certain reel elements of the very popular fantasy drama television series Game of Thrones and their possible existence in real life. From Dragons to White walkers and wildfire to The Great Wall-we got it all in there. It was one of our most awaited online post series and the results were really amazing as our efforts and findings were lauded by the Genral student body. Make sure to visit our Blog and Instagram pages and give it a read to have a firsthand experience of the entire series.";
}

else if(sessionStorage.getItem("points") == 6){
    var element = document.getElementById("id01");
    element.innerHTML = "Murder Mystery Science Series ";
    document.getElementById('myImage').src="A.png";
    var element1 = document.getElementById("id02");
    element1.innerHTML = "After the overwhelming success of our GoT series, we decided to try something similar this time but with added efforts to increase the involvement of participants. To maintain our tradition for forensic science mixed with detective stories which had attracted a lot of positive compliments previously during “CheMystery Sherlocked” we tried to recreate some of it. This online series was about combining science with the mysteries of Dr Jekyll and Mr. Hyde and some of our efforts to produce a forensic narrative where important words were stroked off. The participants had to guess those words with the help of the clues that were given in the narrative. Our chapter’s content writers really excelled in creating this entire segment and the winners were given a shoutout from our Instagram page.";
}

else if(sessionStorage.getItem("points") == 7){
    var element = document.getElementById("id01");
    element.innerHTML = "Bid n Win";
    document.getElementById('myImage').src="A.png";
    var element1 = document.getElementById("id02");
    element1.innerHTML = "Bidding wars are surely no joke. Be it for a player auction or for a really valuable painting it is an art in itself and sometimes get really competitive. We decided to utilize that spirit and encourage smart thinking among the science students through “Bid n Win”. As a pre-SRC event this was the perfect way to set the mood for the upcoming council meetings. The participants were to bid for a specific question through the virtual currency allotted to them and each question carried some points which was unknown to the participants. Bidding the right amount was extremely vital as everyone had been allotted the same amount of five thousand virtual dollars. On giving the correct answers, the respective points were awarded and the participant with the highest points by the end of the entire event was declared as the winner.";
}

else if(sessionStorage.getItem("points") == 8){
    var element = document.getElementById("id01");
    element.innerHTML ="Prajwalit(SRC 2020)";
    document.getElementById('myImage').src="A.png";
    var element1 = document.getElementById("id02");
    element1.innerHTML = "Prajwalit was no doubt the most awaited and a trademark event conducted by AIChE NIT Rourkela chapter and its Executive Board members. It was not possible for us to conduct an offline SRC session due to the pandemic situation but that did not stop us and for the first time ever the three-day long Student Regional Council was conducted entirely online. The first event was a paper and poster presentation where the participants had to present results from research projects done at universities or during internships. This was followed by the K-12 stem showcase competition which aimed at exposing the youth to the true potentials of Science and Technology and eventually help them to shape their future more effectively. This was followed by Chem-e-Jeopardy to sharpen the quizzing skills of the participants and Chem-e-Safe to spread awareness among the students about the real-life situations that one might encounter in the industry. The Chief Guests for the event, Prof. B.K. Dutta, Prof. Dr. Yunus Cengel and Mr. Debashish Chakraborty shared their invaluable knowledge with the Counsil. Prajawalit was concluded by workshops on MATLAB and Aspen to help the students familiarize with their intricacies which is absolutely vital in today’s generation.";
}

else if(sessionStorage.getItem("points") == 9){
    var element = document.getElementById("id01");
    element.innerHTML = "Santa’s Secrets ";
    document.getElementById('myImage').src="A.png";
    var element1 = document.getElementById("id02");
    element1.innerHTML = "The year 2020 was a difficult one for a lot of us but nevertheless we had to move on and hope for the best. The experiences we had gained were still an asset to us and it was very important to wrap up 2020 on a good note. To celebrate Christmas and set the mood we released the Santa’s Secret series. This event was special for our chapter as the new batch of freshmen students were also a part of this event and we were optimistic for things returning back to normal in 2021. Santa’s Secret aimed at deciphering certain aspects of Santa and the scientific possibilities behind them. It consisted of six articles, each concerned with a specific ability of Santa such as super-speed, his nanomaterial suit, Rudolph’s shiny nose, mind reading abilities, invisibility and also his long life. Make sure to visit and follow our Instagram page to read the entire segment.";
}

else if(sessionStorage.getItem("points") == 10){
    var element = document.getElementById("id01");
    element.innerHTML = "K-12 Program on Gravitation";
    document.getElementById('myImage').src="A.png";
    var element1 = document.getElementById("id02");
    element1.innerHTML = "We are always represented by our successors, so it is very important for us to pass on our knowledge and experience to our upcoming generations. The youth have a tender mindset and can be molded easily so it is our duty to point them towards the right direction. Our K-12 sessions aim to capitalize on this goal and help them get ready for everything that lies ahead. K-12 Gravitation was conducted for the class 11 students of Kendriya Vidyalaya, Rourkela under K-12 Outreach to inform them about various topics under Gravitation. The modules consisted of many demonstrations to enhance the session and explanations of different concepts to help them understand and retain those topics regarding gravitation. Overall, this event was a success and we got a positive response from the attendees as well as the concerned faculty and professors.";
}

else if(sessionStorage.getItem("points") == 11){
    var element = document.getElementById("id01");
    element.innerHTML = "Navdhara";
    document.getElementById('myImage').src="A.png";
    var element1 = document.getElementById("id02");
    element1.innerHTML = "India has a very large percentage of Rural population and it is very important for us to realize the impact that growing industries, subsequent neglect of safety standards and irresponsibility in general is having on them. The purpose of Navdhara was to spread awareness about the current rural situation and the problems that they are facing along with innovative solutions that can be utilized to counter those problems. With Koel Fresh as our industrial partner we tried to reach a very wide range of audience. Navdhara consisted of a poster making competition, a blog writing competition and an Industrial design problem task with cash rewards for winners of each competition. The event also consisted of a webinar by Asutosh Nayak (Co-Founder and Chief Advisor, SEE Green Technologies) and Kehkashan Basu (Founder of Green Hope Foundation, United Nations). The entire event was a huge success as it got featured in the local newspapers and lauded by all the participants and advisors.";
}

else if(sessionStorage.getItem("points") == 12){
    var element = document.getElementById("id01");
    element.innerHTML = "Career Fair";
    document.getElementById('myImage').src="A.png";
    var element1 = document.getElementById("id02");
    element1.innerHTML = "Engineering is a vast field of study and is categorized under many branches. Consequently, it is very difficult for someone to know about all of those branches and the prospects and opportunities that come along with it. Career decisions are often confusing and are a rally important part of a student’s life as they have to stick with their decision for the rest of their lives. To ease their troubles in this matter our chapter’s K-12 division organized career fair where panelists from all the engineering streams were called to give a presentation on the prospects and opportunities of their respective branches. Students from class seven to twelve were called to participate from various schools under the coordination of our team and the respective faculties of the participating institutes. This three-day long event was a success overall and it also helped a lot of students to clarify their doubts on what branch they could pursue in their undergraduate years.";
}




/*function next() {



    if (question_count == 2) {
        if (question_count == 2) {
            x = document.getElementById("r2").checked;
        }
        //let user_answer = x;
        //console.log(x);
        if (x == true) {
            point += 10
        }
    } else if (question_count == 3) {
        if (question_count == 3) {
            y = document.getElementById("r5").checked;
        }
        //let user_answer = x;
        //console.log(x);
        if (y == true) {
            point += 10
        }
    } else if (question_count == 4) {
        if (question_count == 4) {
            y = document.getElementById("t4").value;
        }
        //let user_answer = x;
        //console.log(x);
        if (y == "state") {
            point += 10
        }
    }else if (question_count == 5) {
        if (question_count == 5) {
            y = document.getElementById("r14");
        }
        //let user_answer = x;
        //console.log(x);
        if (y.options[y.selectedIndex].text == "Google Chrome") {
            point += 10
        }
    }else if (question_count == 6) {
        if (question_count == 6) {
            y = document.getElementById("k4").value;
        }
        //let user_answer = x;
        //console.log(x);
        if (y == "1869") {
            point += 10
        }
    }  else {
        let user_answer = document.querySelector("li.option.active").innerHTML;
        console.log(user_answer);
        if (user_answer == questions[question_count].answer) {

            point += 10;
            sessionStorage.setItem("points", point);
        }
        console.log(question_count);
        if (question_count == questions.length - 1) {
            sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`);
            clearInterval(mytime);
            location.href = "end.html";
            return;
        }
    }



    question_count++;

    show(question_count);

}

function show(count) {
    let question = document.getElementById("questions");



    if (count == 2) {
        question.innerHTML = `
     <h2>Q${question_count + 1}. ${questions[count].question}</h2>
     
     <div id="rates">
  <input type="radio" id="r1" name="rate" value="Fixed Rate" > Fixed Rate
  <input type="radio" id="r2" name="rate" value="State" > State
  <input type="radio" id="r3" name="rate" value="Multi Rate"> Multi Rate  
</div>
     
 
     `;

    }
    else if (count == 3) {
        question.innerHTML = `
     <h2>Q${question_count + 1}. ${questions[count].question}</h2>
     
     <div id="rates">
  <input type="checkbox" id="r4" name="rate1" value="Fixed Rate" > Fixed Rate
  <input type="checkbox" id="r5" name="rate1" value=Animal > Animal
  <input type="checkbox" id="r6" name="rate1" value="Multi Rate"> Multi Rate  
</div>
     
 
     `;

    } 

    else if (count == 4) {
        question.innerHTML = `
     <h2>Q${question_count + 1}. ${questions[count].question}</h2>
     
    <div id="rates">
        <input type="text" id="t4" name="rate4" value="State" >  
    </div>
     
 
     `;

    }

    else if (count == 5) {
        question.innerHTML = `
     <h2>Q${question_count + 1}. ${questions[count].question}</h2>
     
    <div id="rates">
    <select id="r14" >
    <option></option>
    <option>Google Chrome</option>
    <option>Firefox</option>  
    <option>Internet Explorer</option>
    <option>Safari</option>
    <option>Opera</option>
  </select>  
    </div>
     
 
     `;

    }

    else if (count == 6) {
        question.innerHTML = `
     <h2>Q${question_count + 1}. ${questions[count].question}</h2>
     
     <div id="rates">
     <input type="text" id="k4" name="rate49" value="" >  
 </div>
     
 
     `;

    }


     else {
        question.innerHTML = `
        <h2>Q${question_count + 1}. ${questions[count].question}</h2>
        <ul class="option_group">
        <li class="option">${questions[count].options[0]}</li>
        <li class="option">${questions[count].options[1]}</li>
        <li class="option">${questions[count].options[2]}</li>
        <li class="option">${questions[count].options[3]}</li>
        </ul>
    
        `;

    }

    //if (question_count == 2) {
    //    x = document.getElementById("r2").checked;
    //}
    //console.log(x);
    toggleActive();
}

function toggleActive() {

    if (question_count == 2) {
        //x=document.querySelectorAll('input[name="rate"]:checked').value;
        /*var rates = document.getElementById('rates').value;
        var rate_value;
        if (rates == 'Fixed Rate') {
            rate_value = document.getElementById('r1').value;
        } else if (rates == 'Variable Rate') {
            rate_value = document.getElementById('r2').value;
        } else if (rates == 'Multi Rate') {
            rate_value = document.getElementById('r3').value;
        }*/

        //document.getElementById('results').innerHTML = rate_value;
    /*} else {
        let option = document.querySelectorAll("li.option");

        for (let i = 0; i < option.length; i++) {
            option[i].onclick = function () {
                for (let j = 0; j < option.length; j++) {
                    if (option[j].classList.contains("active")) {
                        option[j].classList.remove("active");
                    }
                }
                option[i].classList.add("active");
            }
        }
    }
}*/