// JavaScript Document

// Pop-up window (./photoghraph.html) //	   
function photograph(id,w,h,scrollbar,resize){
	downloadurl=id
	window.open(downloadurl,'info','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars='+scrollbar+',resizable='+resize+',copyhistory=no,width='+w+',height='+h)
	}