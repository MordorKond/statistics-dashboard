/* global bootstrap: false */
(() => {
  'use strict'
  const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(tooltipTriggerEl => {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })

    document.querySelectorAll("a[data-bs-original-title]").forEach(el=>el.addEventListener('mouseenter',(e)=>{
        const option =e.target.attributes['data-bs-original-title'].value.trim().toLowerCase() 
        let sidebar = document.getElementById('sidebar-expanded-'+option)
        let overlay = document.getElementById('main-pane-overlay')
        if(!sidebar) {
            document.querySelectorAll(".sidebar-expanded").forEach(el=>el.style.visibility='collapse')
            overlay.style.visibility='collapse'
        }
        // const visibilityState=(sidebar.style.visibility=="collapse")?"visible":"collapse"
        // sidebar.style.visibility=visibilityState
        sidebar.style.visibility="visible"
        overlay.style.visibility="visible"
        console.log(e.target.innerText.trim().toLowerCase())
    }))

    /* document.querySelectorAll("a[data-bs-original-title]").forEach(el=>el.addEventListener('mouseout',(e)=>{
        const option =e.target.innerText.trim().toLowerCase() 
        let sidebar = document.getElementById('sidebar-expanded-'+option)
        if(!sidebar)return;
        // const visibilityState=(sidebar.style.visibility=="collapse")?"visible":"collapse"
        // sidebar.style.visibility=visibilityState
        sidebar.style.visibility="collapse"
        console.log(e.target.innerText.trim().toLowerCase())
    })) */

    document.querySelector(".main-pane-overlay").addEventListener('mouseenter',()=>{
        document.querySelectorAll(".sidebar-expanded").forEach(el=>el.style.visibility='collapse')
        let overlay = document.getElementById('main-pane-overlay')
        overlay.style.visibility='collapse'
        // document.getElementById('sidebar-wide').style.visibility='collapse'
        // document.getElementById('sidebar-narrow').style.visibility='visible'
        // document.getElementById('sidebar-expanded').style.visibility='visible'
    })

    /* document.querySelector("a[data-bs-original-title='Orders']").addEventListener('click',()=>{
        // document.getElementById('sidebar-wide').style.visibility='collapse'
        // document.getElementById('sidebar-narrow').style.visibility='visible'
        document.getElementById('sidebar-expanded').style.visibility='visible'
    }) */

})()
