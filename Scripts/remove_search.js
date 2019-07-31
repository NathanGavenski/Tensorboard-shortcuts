document.getElementById('center').style.overflowY = 'unset'
var dashboard_center = document.getElementById('center').childNodes[1]
dashboard_center.style.display = 'flex'
dashboard_center.style.flexDirection = 'row'
dashboard_center.style.flexWrap = 'wrap'
var filter = dashboard_center.childNodes[4]
dashboard_center.removeChild(filter)
var panes = document.getElementsByTagName('tf-category-pane')
panes[0].parentElement.removeChild(panes[0])
for (var i = 0; i < panes.length; i++) {
    panes[i].style.margin = '20px 5px 1px 10px'
}