const riverSizes = (matrix) => {
    let rivers = [];
    const visited = Array(matrix.length).fill(false).map(x => Array(matrix[0].length).fill(false));
    const move = {
      'L': ([x,y]) => y === 0 ? [x,y] : [x, y-1],
      'R': ([x,y]) => y === matrix[0].length-1 ? [x,y] : [x, y+1],
      'U': ([x,y]) => x === 0 ? [x,y] : [x-1, y],
      'D': ([x,y]) => x === matrix.length-1 ? [x,y] : [x+1, y]
    };
    
    const traverse = (point) => {
      let pointsToExplore = [point];
      let riverCount = 1;
      
      while(pointsToExplore.length > 0) {
        let adjacents = 'LRUD';
        let currentPoint = pointsToExplore.pop();
        for(let adjacent of adjacents) {
          let newPoint = move[adjacent](currentPoint);
          let x = newPoint[0];
          let y = newPoint[1];
          let isVisited = visited[x][y];
          let outOfBounds = x === point[0] & y === point[1];
  
          if(isVisited || outOfBounds) {
            continue;
          }
          visited[x][y] = true;
          if(matrix[x][y] === 1) {
            riverCount++;
            pointsToExplore.push([x,y]);
          }
        }
      }
      riverCount > 0 && rivers.push(riverCount);
      return riverCount;
    }
    
    for(let i=0; i<matrix.length;i++) {
      for(let j=0; j<matrix[0].length;j++) {
        if(!visited[i][j]) {
          visited[i][j] = true;
          if(matrix[i][j] === 0) {
            continue;
          }
          traverse([i,j])
        }
      }
    }
    return rivers;
  };
  
  console.log(riverSizes([[1,0,0,1],[1,0,1,0],[0,1,1,0]])); // [2,1,3]
  console.log(riverSizes([[1,0,1,1],[0,0,0,1],[0,1,1,0],[1,1,0,1]])); // [1,3,4,1]
  console.log(riverSizes([[1,0,1,1,0],[1,1,0,0,1],[1,0,1,1,0],[0,1,1,0,1],[0,0,1,0,1],[0,0,1,0,1]])); // [4,2,1,6,3]

  // =============


// <section>
//   <h3>Default Select Dropdown functionality:</h3>
//   <select name="select-choice" id="select-choice">
//     <option value="Choice 1">Choice 1</option>
//     <option value="Choice 2">Choice 2</option>
//     <option value="Choice 3">Choice 3</option>
//   </select>
// </section>

// <hr>

// <section>
//   <h3>Select imitation attempt with radio buttons</h3>
// </section>
// <div id="wrapper" class="wpr" tabindex="-1"></div>


// <section class="section">Features simlar to real Select element:</section>
// <ul>
//   <li>Click on selected item opens select box</li>
//   <li>Click outside component closes box</li>
//   <li>Click on unselected element moves it to first place and closes box</li>
//   <li>Click on already-selected element closes box</li>
// </ul>
// <section>
//   <h3>Todo:</h3>
//   <ul>
//     <li>Add default values for itemHeight and maxItemsToShow props</li>
//     <li>If container element doesn't exist - create it</li>
//     <li>Add tab support</li>
//     <li>Add keyboard support includingevents for up/dowm arrow keys and enter </li>
//   </ul>
// </section>

var selectData = {
    options: ['Choice 1', 'Choice 2', 'Choice 3', 'Choice 4', 'Choice 5'],
    name: 'radio-choice',
    containerElementId: 'wrapper',
    itemHeight: 52,
    maxItemsToShow: 6
  };
  
  var wpr = document.getElementById(selectData.containerElementId);
  
  var buildSelect = function(container, data) {
    var content = '';
    for(var i=0;i<data.options.length;i++) {
      content += '<input id="' + data.name + i + '" type="radio" name="' + data.name + '" value="' + data.options[i] + '"><label for="' + data.name + i + '">' + data.options[i] + '</label>';
    }
    container.innerHTML = content;
  }
  
  var closeSelect = function(container) {
    container.classList.remove('is-open');
    container.removeAttribute('style');
    container.scrollTop = 0;
  };
  
  var openSelect = function(container, data) {
    var numItems = data.options.length;
    
    container.classList.add('is-open');
    container.style.height = numItems * data.itemHeight + "px";
    container.style.maxHeight = data.itemHeight * data.maxItemsToShow + "px";
    if(numItems > data.maxItemsToShow) {
      container.style.overflow = "auto";
    }
  };
  
  buildSelect(wpr, selectData);
  wpr.addEventListener('click', (e) => {
    var element = e.target;
    
    if(element.tagName !== 'LABEL') {
      return;
    }
    if(element.previousElementSibling.checked) {
      if(wpr.classList.contains('is-open')) {
        closeSelect(wpr);
      } else {
        openSelect(wpr, selectData);
      }
    } else {
      closeSelect(wpr);
    }
  });
  
  wpr.addEventListener('blur', (e) => {
    closeSelect(wpr);
  }, true);
