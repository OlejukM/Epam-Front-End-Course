var rootNode = document.getElementById("root");

// Your code goes here

function createFileTree(el, prnt) {
  var ul = document.createElement("ul");
  prnt.appendChild(ul);

  for (var i=0; i<el.length; i++) {
    var li = document.createElement("li");
    ul.appendChild(li);
    var p = document.createElement("p");
    li.appendChild(p);
    var icon = document.createElement("i");
    p.appendChild(icon);
    icon.className = "material-icons";

    var span = document.createElement("span");
    p.appendChild(span);
    span.innerHTML = el[i].title;

    if (el[i].folder) {
      icon.innerHTML = "folder";
      p.addEventListener("click", toggle);

      if (el[i].children) {
        createFileTree(el[i].children, li);
      } else {
        var p = document.createElement("p");
        p.textContent = 'Folder is empty';
        li.appendChild(p);
        p.classList.add("emptyFolder");
      }
    } else {
      icon.innerHTML = "insert_drive_file";
      icon.classList.add("file");
    }
  }
}

function toggle() {
  if (this.nextElementSibling.style.display === "none") {
      this.nextElementSibling.style.display = "block";
      this.children[0].innerHTML = "folder_open";
    } else {
      this.nextElementSibling.style.display = "none";
      this.children[0].innerHTML = "folder";
    }
}

var tree = document.createElement('div');
createFileTree(structure, tree);

rootNode.appendChild(tree);
