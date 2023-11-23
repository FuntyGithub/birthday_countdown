var x	

	function startCounter(birthdate, user, faviconLink) {
		
		var hash = location.hash.substr(1);
		//console.log(decodeURI(hash))
		var selectMenu = document.getElementById("listinput")
		var selectMenuOptions = document.getElementById("formchoice")
		if(hash && !birthdate && !user && !faviconLink){
			user = decodeURI(hash)
			for (var i=0, n=selectMenuOptions.options.length;i<n;i++) {
				if(selectMenuOptions.options[i].value === decodeURI(hash)){
					n = 0
					birthdate = selectMenuOptions.options[i].text
					faviconLink = selectMenuOptions.options[i].dataset.link
				}
			}
		}else{
			if (!birthdate) birthdate = "May 17"
			if (!user) user = "Funty"
			if (!faviconLink) faviconLink = "https://cdn.discordapp.com/attachments/794128684596461598/869914381864022016/hug_Funty.png"
		}

		if(user) location.hash = user

  		const second = 1000,
		minute = second * 60,
		hour = minute * 60,
		day = hour * 24
 
  		let birthday = birthdate + ", " + new Date().getFullYear() + " 00:00:00",
		countDown = new Date(birthday).getTime(),
		nextYear = new Date().getFullYear() + 1,
		nextbirthday = birthdate + ", " + nextYear + " 00:00:00",
		countDown2 = new Date(nextbirthday).getTime()

		x = setInterval(function () {
	  		let now = new Date().getTime()

			distance = countDown - now;
			distance2 = countDown2 - now;
 
		  	document.getElementById("days").innerText = Math.floor(distance / day),
			document.getElementById("hours").innerText = Math.floor((distance % day) / hour),
			document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute),
			document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);
			nextBD.innerText = ""

			document.getElementById("headline").innerText = user + "'s birthday"
			document.title = user + "'s birthday"
			const favicon = document.querySelector('[rel=icon]')
			favicon.href = faviconLink

			if (distance < -86414216) {
				let nextBD = document.getElementById("nextBD");
				document.getElementById("headline").innerText = "Happy Birthday " + user + "!";
				nextBD.innerText = "Next Birthday: "+Math.floor(distance2 / day)+"d, "+Math.floor((distance2 % day) / hour)+"h, "+Math.floor((distance2 % hour) / minute)+"m, "+Math.floor((distance2 % minute) / second)+"s."
			}

			if (distance < 0 && distance > -86414216) {
				let countdown = document.getElementById("countdown")
            	countdown.style.display = "none"
				document.getElementById("headline").innerText = "Happy Birthday " + user + "!"
	
				clearInterval(x)
			}
			
		}, 0)
	}

	function updateBirth() {
		var e = document.getElementById("listinput")
		countdown.style.display = "block"

		var selectMenuOptions = document.getElementById("formchoice")
		for (var i=0, n=selectMenuOptions.options.length;i<n;i++) {
				if(selectMenuOptions.options[i].value === e.value){
					n = 0
					birthdate = selectMenuOptions.options[i].text
					faviconLink = selectMenuOptions.options[i].dataset.link
					
					clearInterval(x)
					startCounter(birthdate, e.value, faviconLink)
				}
		}
	}