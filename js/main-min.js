let adultsNumStorage,childrenNumStorage,openButton=document.getElementById("search__open"),form=document.querySelector(".search__form"),submit=form.querySelector(".search__find-button"),checkInDate=form.querySelector("[name = arrival-date]"),adultsNum=form.querySelector("[name = adults-num]"),childrenNum=form.querySelector("[name = children-num]"),isStorageSupport=!0;function openClose(){form.classList.contains("modal-hide")?(form.classList.remove("modal-hide"),form.classList.remove("modal-error"),form.classList.add("modal-show"),setTimeout(function(){checkInDate.focus(),form.classList.remove("modal-show")},400),isStorageSupport&&(adultsNum.value=adultsNumStorage,childrenNum.value=childrenNumStorage)):(form.classList.remove("modal-show"),form.classList.add("modal-close"),setTimeout(function(){form.classList.add("modal-hide"),form.classList.remove("modal-close")},400))}try{adultsNumStorage=localStorage.getItem("adults-num"),childrenNumStorage=localStorage.getItem("children-num")}catch(a){isStorageSupport=!1}form.classList.add("modal-hide");let i=0;openButton.addEventListener("click",function(){0===i&&(openClose(),i++,setTimeout(function(){i=0},500))}),submit.addEventListener("click",function(a){for(let b,c=0;c<form.querySelectorAll("input").length;c++)b=form.querySelectorAll("input")[c],b.value?(b.classList.remove("red-outline"),"number"===b.type&&isStorageSupport&&localStorage.setItem(b.name,b.value)):b.classList.contains("required")&&(b.classList.add("red-outline"),a.preventDefault(),form.classList.remove("modal-error"),form.offsetWidth=form.offsetWidth,form.classList.add("modal-error"))});