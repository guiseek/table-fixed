let Component = {
  transclude: true,
  bindings: {
    rows: '=',
  },
  template: `
    <div id="flex-table-container">
      <div class="flex-table">
        <div class="flex-table-content">
          <table class="table" script-transclude>
          </table>
        </div>
      </div>
    </div>
  `,
  controller: ['$scope','$attrs','$timeout','$element', function($scope,$attrs,$timeout,$element) {
    let ctrl = this,
        tableContent = $element[0].querySelector('.flex-table-content'),
        trFixRel = tableContent.querySelector('tr.fixrel'),
        thFixed  = tableContent.querySelector('th.fixed'),
        tdFixRel = tableContent.querySelectorAll('td.fixrel'),
        td, tr,
        trHeight = trFixRel.clientHeight,
        thFixedWidth = thFixed.clientWidth
        
    var thFirst = tableContent.querySelector('th.fixed:first-child');
    
    tableContent.addEventListener('scroll', evt => {
      var trFixRel = tableContent.querySelector('tr.fixrel');
      var thFixRel = tableContent.querySelector('th.fixrel');
      var tdFixRel = tableContent.querySelectorAll('td.fixrel');

      trFixRel.classList.add('fixed');
      trFixRel.style.marginLeft = -evt.target.scrollLeft;
      thFirst.style.marginLeft = evt.target.scrollLeft;

      for (td in tdFixRel) {
        tdFixRel[td].classList.add('fixed')
        tdFixRel[td].style.marginTop = -evt.target.scrollTop + trHeight
        // tdFixRel[td].style.marginLeft = evt.target.scrollLeft
      }

    })
    
  }]
}

export default Component