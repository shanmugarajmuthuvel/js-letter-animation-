 var animation=document.querySelector(".animati")
 var head=document.getElementById("tajhead")
     head.addEventListener("mousemove",sha)
          function sha(){
                name()
		  }   
     const name=()=>{
		   setTimeout(()=>{
			      animation.textContent="COROMANDAL"
				  animation.style.transition="ease"
		   },2000)
		   setTimeout(()=>{
			      animation.textContent="COROMANDAL CHENNAI"
		   },4000)
		    setTimeout(()=>{
			      animation.textContent="COROMANDAL"
		   },6000)
		    setTimeout(()=>{
			      animation.textContent=""
		   },8000)
		   		    setTimeout(()=>{
			      animation.textContent="COROMANDAL"
		   },10000)
		   setTimeout(()=>{
			      animation.textContent="COROMANDAL CHENNAI"
		   },12000)
	 }
	 name()
