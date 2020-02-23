"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var faq=function e(n,o){_classCallCheck(this,e),this.question=n,this.answer=o},FAQ_DATA=[new faq("Who all can register?","Students from all over the country are eligible to participate in Code2Create. Everybody is welcome to make a difference."),new faq("How do I choose my track?","The tracks will be announced soon. Please stay tuned and excited for the big reveal."),new faq("What will the hackathon cost me?","Nothing, it's absolutely free. You cannot put a price on groundbreaking ideas."),new faq("Can I start working on my hack before the hackathon?","No, you are not permitted to work on pre-existing projects in the hackathon. To maintain fair standards of judgment you will begin working on your hack after reporting to the venue."),new faq("Can I implement my idea in hardware?","Sure! There's no bias between sofware and hardware. But you'll have to bring your own hardware."),new faq("What is the qualification criterion for the pitching round?","There will be a technical inspection on Day 2 of the hackathon. After the inspection, we will shortlist 120 participants. These 120 participants will get a chance to present their respective hacks in the expo for evaluation."),new faq("What kind of a hackathon is Code2Create?","Code2Create is a tech-based hackathon."),new faq("Is the hackathon only about technology?","We are tech enthusiasts but we believe ‘All work and no play makes Jack a dull boy.’ We have numerous fun activities planned for you."),new faq("How many members can constitute a team?","You can have up to 4 members in a team."),new faq("Who will be on the Judging Panel?","There will be 6 judges forming 3 panels of 2 judges each."),new faq("What if I get hungry or need internet connection?","Code2Create is a place for innovators to create and make a difference. You will get an opportunity to interact with ingenious minds. In addition, we have cash prizes, licenses, schwags, cloud credits and goodies for the winner. The best app built using the Hasura GraphQL Engine will win an Rs.5000 gift card from Flipkart. Apart from this, we have something special in store for all the participants."),new faq("How will I benefit from attending this hackathon?","Code2Create is a place for innovators to create and make a difference. You will get an opportunity to interact with ingenious minds. In addition, we have cash prizes, licenses, schwags, cloud credits and goodies for the winner. The best app built using the Hasura GraphQL Engine will win an Rs.5000 gift card from Flipkart. Apart from this, we have something special in store for all the participants."),new faq("Will there be accommodation for external participants?","We will not be providing any accommodation. We expect our participants to stay at the venue for the entire duration of the hackathon."),new faq("Will there be travel reimbursements provided?","We do not provide reimbursements for external participants for travel expenses.")],organizer=function e(n,o,a){_classCallCheck(this,e),this.name=n,this.image=a,this.designation=o},ORGANIZER_DATA=[new organizer("Kartik Soni","Chair","./images/organizer/kartik.jpg"),new organizer("Shubham Awasthi","Vice Chair - Technical","./images/organizer/shubham.jpg"),new organizer("Nimisha Bhatia","Vice Chair - Management","./images/organizer/nimisha.jpg"),new organizer("Fiza Rasool","General Secretary","./images/organizer/fiza.jpg"),new organizer("Aditya Srivastava","Web Master","./images/organizer/aditya.png"),new organizer("Sarthak Dandotiya","UI UX Lead","./images/organizer/sarthak.jpg"),new organizer("Svetansu Singh","Treasurer","./images/organizer/svetansu.jpg"),new organizer("Rajat Gupta","Competitive Lead","./images/organizer/rajat.jpg"),new organizer("Subhaditya Mukherjee","Research Lead","./images/organizer/subhaditya.jpg"),new organizer("Sparsh Srivastava","App Lead","./images/organizer/sparsh.jpg"),new organizer("Shrey Sindher","Projects Lead - App","./images/organizer/shrey.jpg"),new organizer("Shivank Sahai","Projects Lead - Web","./images/organizer/shivank.jpg"),new organizer("Bhumij Gupta","Creative Head","./images/organizer/bhumij.jpg"),new organizer("Madhur Dixit","Projects Lead - Research","./images/organizer/madhur.jpg"),new organizer("Prof. Balakrushna Tripathy","Dean School of Information Technology & Engineering","./images/organizer/dean_site.jpg"),new organizer("Dr. Aswani Kumar Cherukuri","Faculty Coordinator ACM VIT Student Chapter","./images/organizer/fc1.png"),new organizer("Prof. H.R. Vishwakarma","Faculty Coordinator ACM VIT Student Chapter","./images/organizer/fc2.png"),new organizer("Dr. Divya Udayan J","Faculty Coordinator ACM VIT Student Chapter","./images/organizer/fc3.jpeg")],sponsor=function e(n,o){_classCallCheck(this,e),this.logo=n,this.link=o},SPONSOR_DATA=[new sponsor("./images/sponsors/github.png","https://www.github.com/"),new sponsor("./images/sponsors/devfolio.png","https://devfolio.co/"),new sponsor("./images/sponsors/jetbrains.png","https://www.jetbrains.com/"),new sponsor("./images/sponsors/slack.png","https://slack.com/intl/en-in/"),new sponsor("./images/sponsors/fold.png","https://fold.money/"),new sponsor("./images/sponsors/matic.png","https://matic.network/"),new sponsor("./images/sponsors/gfg.png","https://www.geeksforgeeks.org/"),new sponsor("./images/sponsors/cblogo.png","https://codingblocks.com/"),new sponsor("./images/sponsors/wolfram.png","https://www.wolfram.com/language/"),new sponsor("./images/sponsors/digitalocean.png","https://www.digitalocean.com/"),new sponsor("./images/sponsors/cldsplt.png","https://cloudsploit.com/"),new sponsor("./images/sponsors/axure.png","https://www.axure.com/"),new sponsor("./images/sponsors/rsn.png","https://rosenfeldmedia.com/"),new sponsor("./images/sponsors/hackerrank.png","https://www.hackerrank.com/"),new sponsor("./images/sponsors/orient.png","https://www.orientelectric.com/"),new sponsor("./images/sponsors/hackereath.png","https://www.hackerearth.com/"),new sponsor("./images/sponsors/glamstud.png","https://www.glamstudios.in/")];document.addEventListener("DOMContentLoaded",function(){var e={buttonSelector:"#devfolio-apply-now",key:"code2create"},n=document.createElement("script");n.src="https://apply.devfolio.co",document.head.append(n),n.onload=function(){new Devfolio(e)},n.onerror=function(){document.querySelector(e.buttonSelector).addEventListener("click",function(){window.location.href="https://devfolio.co/external-apply/"+e.key})}}),window.onload=function(){document.querySelector(".pre-loader-wrapper").style.display="none",window.onscroll=function(){if((document.body.scrollTop>=0||document.documentElement.scrollTop>=0)&&document.querySelector("header").classList.add("scrolled"),0===document.body.scrollTop&&0===document.documentElement.scrollTop&&document.querySelector("header").classList.remove("scrolled"),window.innerWidth>="768"){document.querySelector(".icon").style.display="none";var e=document.body.scrollTop,n=document.documentElement.scrollTop,o=document.querySelector("nav").offsetHeight+100,a=document.querySelectorAll(".page"),t=document.querySelectorAll(".indicator");a.forEach(function(r,s){0===r.offsetTop?t.forEach(function(e){return e.classList.remove("active")}):(n+o>=a[s].offsetTop||e+o>=a[s].offsetTop)&&(t.forEach(function(e){return e.classList.remove("active")}),t[s-1].classList.add("active"))})}};var e=document.querySelector(".hamburger");document.querySelector(".icon").addEventListener("click",function(){e.classList.toggle("active"),document.querySelector(".icon").classList.toggle("is-active")}),e.addEventListener("click",function(){e.classList.toggle("active"),document.querySelector(".icon").classList.toggle("is-active")}),document.querySelector("#go-below").addEventListener("click",function(){document.querySelector("#about").scrollIntoView(!0)});var n="",o=document.querySelector(".faq-grid");FAQ_DATA.map(function(e){var o='<div class="collapsible">\n    <button class="collapsible-header">\n      <div class="question-group">\n        <span class="question">'.concat(e.question,'</span>\n        <span class="arrow">\n          <img src="./vectors/arrow-green.svg" alt="FAQ Expand"/>\n        </span>\n      </div>\n    </button>\n    <div class="collapsible-content">\n      <p>').concat(e.answer,"</p>\n    </div>\n  </div>\n  ");n+=o}),n+='<a href="pages/code-of-conduct.html">\n    <div class="code-of-conduct">\n      <button class="c-of-c-text">\n        <div class="c-of-c-collection">\n          <span class="text">Code of Conduct</span>\n          <span class="arrow">\n            <img src="./vectors/arrow-green.svg" alt="Code of Conduct" />\n          </span>\n        </div>\n      </button>\n    </div >\n  </a>',o.innerHTML=n;var a,t,r=document.getElementsByClassName("collapsible-header");function s(e){console.log(),e.classList.add("active");var n=e.nextElementSibling;n.style.maxHeight=n.scrollHeight+"px"}function i(e){e.classList.remove("active"),e.nextElementSibling.style.maxHeight=null}for(a=0;a<r.length;a++)r[a].addEventListener("click",function(){console.log(this),this.classList.contains("active")?i(this):(s(this),t&&t!=this&&i(t)),t=this});var c=document.querySelector(".organizers main");n="",ORGANIZER_DATA.map(function(e){var o="<div>\n        <img\n          src=".concat(e.image,'\n          alt="check"\n        />\n        <p>\n          <span> ').concat(e.name,"</span><br />\n          ").concat(e.designation,"\n        </p>\n      </div>");n+=o}),c.innerHTML=n;var l=document.querySelector(".sponsors main");n="";var p=["title-sponser","secondary-sponser","secondary-sponser","secondary-sponser"];SPONSOR_DATA.map(function(e,o){var a=' <div class="grid-element '.concat(o<p.length?p[o]:"",'">\n      <a href="').concat(e.link,'" target="_blank">\n        <img src="').concat(e.logo,'" alt="Sponsor" />\n      </a>\n    </div>');n+=a}),l.innerHTML=n};