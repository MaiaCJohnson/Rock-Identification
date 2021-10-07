//input function
function percent() {
	var qtz = document.getElementById("qtz").value;
    var fds = document.getElementById("fds").value;
    var plag = document.getElementById("plag").value;
	var fel = document.getElementById("fel").value;


	if((0 < qtz) && (qtz < 100)){
		if((0 < qtz) && (qtz < 5)){
			if(((0 < fds) && (fds < 10)) && ((90 < plag) && (plag < 100))){
				document.getElementById("demo").innerHTML = "Anothsite, Gabbro, or Diorite";
			} else if (((10 < fds) && (fds < 35)) && ((65 < plag) && (plag < 90))){
				document.getElementById("demo").innerHTML = "Monzodiorite, or MonzoGabbro";
			} else if((( 35 < fds) && (fds < 65)) && ((35 < plag) && (plag < 65))){
				document.getElementById("demo").innerHTML = "Monzonite";
			} else if(((65 < fds) && (fds < 90)) && ((10 < plag) && (plag < 35))){
				document.getElementById('demo').innerHTML = "Syenite"
			} else if (((90 < fds) && (fds < 100)) && ((0 < plag) && (plag < 10))){
				document.getElementById('demo').innerHTML = "Kfeldspar Syenite";
			} else {
				alert("ERROR: Please re-enter the information again");
			}
		} else if((5 < qtz) && (qtz < 20)){
			if(((0 < fds) && (fds < 10)) && ((90 < plag) && (plag < 100))){
				document.getElementById("demo").innerHTML = "Quartz Gabbro or Quartz Diorite";
			} else if (((10 < fds) && (fds < 35)) && ((65 < plag) && (plag < 90))){
				document.getElementById("demo").innerHTML = "Quartz Monzodiorite, or Quartz MonzoGabbro";
			} else if((( 35< fds) && (fds < 65)) && ((35 < plag) && (plag < 65))){
				document.getElementById("demo").innerHTML = "Quartz Monzonite";
			} else if(((65 < fds) && (fds < 90)) && ((10 < plag) && (plag < 35))){
				document.getElementById('demo').innerHTML = "Syenite"
			} else if (((90 < fds) && (fds < 100)) && ((0 < plag) && (plag < 10))){
				document.getElementById('demo').innerHTML = "Kfeldspar Quartz Syenite"
			} else {
				alert("ERROR: Please re-enter the information again");
			}
		} else if((20 < qtz) && (qtz < 60)){
			if(((0 < fds) && (fds < 10)) && ((90 < plag) && (plag < 100))){
				document.getElementById("demo").innerHTML = "Tonalite";
			} else if (((10 < fds) && (fds < 35)) && ((65 < plag) && (plag < 90))){
				document.getElementById("demo").innerHTML = "Granodiorite";
			} else if((( 35< fds) && (fds < 90)) && ((10 < plag) && (plag < 65))){
				document.getElementById("demo").innerHTML = "Granite";
			} else if (((90 < fds) && (fds < 100)) && ((0 < plag) && (plag < 10))){
				document.getElementById('demo').innerHTML = "Kfeldspar Granite"
			} else {
				alert("ERROR: Please re-enter the information again");
			}
		} else if((60 < qtz) && (qtz < 90)){
			if(((0 < fds) && (fds < 100)) && ((0 < plag) && (plag < 100))){
				document.getElementById("demo").innerHTML = "Greissen";
			} else {
				alert("ERROR: Please re-enter the information again");
			}
		} else if((90 < qtz) && (qtz < 100))
			if(((0 < fds) && (fds < 100)) && ((0 < plag) && (plag < 100))){
				document.getElementById("demo").innerHTML = "Quartzolite";
			} else {
				alert("ERROR: Please re-enter the information again");
			}
	} else if ((0 < fel) && (fel < 100)) {
		if((0 < fel) && (fel < 10)){
			if(((0 < fds) && (fds < 10)) && ((90 < plag) && (plag < 100))){
				document.getElementById("demo").innerHTML = "FOID-bearing Gabbro, or FOID-bearing Diorite";
			} else if (((10 < fds) && (fds < 35)) && ((65 < plag) && (plag < 90))) {
				document.getElementById("demo").innerHTML = "FOID-bearing Monzogabbro, or FOID-bearing Monzodiorite";
			} else if (((35 < fds) && (fds < 65)) && ((35 < plag) && (plag < 65))) {
				document.getElementById("demo").innerHTML = "FOID-bearing Monzonite";
			} else if (((65 < fds) && (fds < 90)) && ((10 < plag) && (plag < 35))) {
				document.getElementById("demo").innerHTML = "FOID-bearing Syenite";
			} else if (((90 < fds) && (fds < 100)) && ((0 < plag) && (plag < 10))) {
				document.getElementById("demo").innerHTML = "Kfeldspar FOID-bearing Syenite";
			} else {
				alert("ERROR: Please re-enter the information again");
			}
		} else if((10 < fel) && (fel < 60)){
			if(((0 < fds) && (fds < 10)) && ((90 < plag) && (plag < 100))){
				document.getElementById("demo").innerHTML = "Foid Gabbro, or Foid Diorite";
			} else if (((10 < fds) && (fds < 50)) && ((50 < plag) && (plag < 90))) {
				document.getElementById("demo").innerHTML = "Foid Monzogabbro, or Foid Monzodiorite";
			} else if (((50 < fds) && (fds < 90)) && ((10 < plag) && (plag < 50))) {
				document.getElementById("demo").innerHTML = "Foid Monzonite";
			} else if (((90 < fds) && (fds < 100)) && ((0 < plag) && (plag < 10))) {
				document.getElementById("demo").innerHTML = "Foid Syenite";
			} else {
				alert("ERROR: Please re-enter the information again");
			}
		} else if((60 < fel) && (fel < 90)){
			if (((0 < fds) && (fds < 100)) && ((0 < plag) && (plag < 100))) {
				document.getElementById("demo").innerHTML = "Foidolite";
			} else {
				alert("ERROR: Please re-enter the information again");
			}
		} else if((90 < fel) && (fel < 100)){
			if (((0 < fds) && (fds < 100)) && ((0 < plag) && (plag < 100))) {
				document.getElementById("demo").innerHTML = "Urite";
			} else {
				alert("ERROR: Please re-enter the information again");
			}
		}
	} else {
		alert("ERROR: Please re-enter the information again");
	}

  //document.getElementById("demo").innerHTML = qtz + "%, " + fds + "%, " + plag + "%, " + fel + "%: ";
}
