var arr = []
let add = () => {
    let ul = document.querySelector('#TAdd')
    li = ul.getElementsByTagName('li')
    for (i = 0; i < li.length; i++) {
        a = li[i].children[0].textContent
        arr.push(a)
        console.log(a)
    }
    console.log(arr)
    localStorage.setItem("task", JSON.stringify(arr))
}



// if (JSON.parse(localStorage.getItem('data')) == '') {
//     alert('khali')
// } else {
//     // document.querySelector('#TAdd') = localStorage.getItem('data')



// var names = [];
// names[0] = "Muazam";
// names[1] = "SRM";
// localStorage.setItem("names", JSON.stringify(names));
// var storedNames = JSON.parse(localStorage.getItem("names"))
// alert(JSON.parse(localStorage.getItem('data')))

document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('#add').addEventListener('click', addit)

    // document.querySelector('li').addEventListener('click', edit)
    document.querySelector('#search').addEventListener('keyup', search)


    // localStorage.setItem('data', JSON.stringify(tadd))



    // let x = {
    //     name: 'Himanshu',
    //     age: 18
    // }

    var list = document.querySelector('#TAdd');
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);
})


function addit() {
    var task = document.querySelector('#task').value

    var li = document.createElement("li")
    li.className = "tas"
    li.IDName = "ta"
        // alert(li.IDName) 
    var sp = document.createElement('span')
    var t = document.createTextNode(task);
    sp.appendChild(t)
    li.appendChild(sp)

    add()
    if (task === '') {
        alert('Enter a task !!!')
    } else {


        document.querySelector("#TAdd").appendChild(li)
    }
    document.getElementById("task").value = ""

    var icon = document.createElement("i")

    icon.className = "fa fa-close"

    li.appendChild(icon)

    icon.onclick = function() {
        li.style.display = "none"

        let remove = target.parentNode;
        let parentNode = remove.parentNode;
        parentNode.removeChild(remove);

    }



    //..................localstorage...................
    //     document.querySelector('#TAdd')
    //     let tadd = document.querySelector('#TAdd')

    //     for (let i; i < tadd.length; i++) {
    //         data = listvalueq[i];
    //         localStorage.setItem("data", JSON.stringify(names))
    //     }

    //     for (let i; i < tadd.length; i++) {
    //         data = listvalueq[i];
    //         // localStorage.setItem("data", JSON.stringify(names))
    //         var item = JSON.parse(localStorage.getItem("data"))

    //         var test = document.querySelector('#test')
    //         tadd.append(test)
    //     }
    //     //....................................................
    // }

    // function edit() {
    //     alert('edit')
    //         // lis = document.querySelectorAll('li')
    //         //     // li.IDName = "new"
    //         //     // li.style.textDecoration = "line-through"
    //         // lis.style.color = "red"
    //     var list = document.querySelector('#TAdd');
    //     list.addEventListener('click', function(ev) {
    //         if (ev.target.tagName === 'LI') {
    //             ev.target.classList.toggle('checked');
    //         }
    //     }, false);
}

function search() {

    // alert('searching')
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('search').value;
    // alert(input)
    filter = input.toUpperCase();
    // alert(filter)
    ul = document.getElementById("TAdd");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i]
        txtValue = a.textContent || a.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

window.addEventListener("DOMContentLoaded", (event) => {
    let tasks = [];
    if (window.localStorage.task) {
        tasks = JSON.parse(localStorage.getItem("task"));
        console.log(tasks.length);
        let ul = document.querySelector("ul");
        for (let i = 0; i < tasks.length; i++) {
            let li = document.createElement("li");

            li.innerHTML = ` <i class="fa fa-close"></i> <span>${tasks[i]}</span>`;
            ul.appendChild(li);
        }

        // document.querySelector(".tasksBoard").style.display = "block";
    }
});