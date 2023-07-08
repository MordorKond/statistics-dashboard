/* global bootstrap: false */
(() => {
  'use strict'
  const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(tooltipTriggerEl => {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })

    document.querySelectorAll("#sidebar-narrow a[data-bs-original-title]").forEach(el=>el.addEventListener('click',()=>{
        document.getElementById('sidebar-wide').style.visibility='visible'
        document.getElementById('sidebar-narrow').style.visibility='collapse'
        document.getElementById('sidebar-expanded').style.visibility='collapse'
    }))

    document.querySelector("#sidebar-wide a[data-bs-original-title='Orders']").addEventListener('click',()=>{
        document.getElementById('sidebar-wide').style.visibility='collapse'
        document.getElementById('sidebar-narrow').style.visibility='visible'
        document.getElementById('sidebar-expanded').style.visibility='visible'
    })

})()
