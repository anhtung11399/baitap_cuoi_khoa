let button_hidden = document.getElementById('button_hidden')
let button_add = document.getElementById('button_add')
let button_save = document.getElementById('button_save')
let button_close = document.getElementById('button_close')
let content = document.getElementById('content')

document.addEventListener('DOMContentLoaded', function () {
    loadData();
    show_popup ();
    show_hide_popup ();
    
});


// load data user
function loadData(){
        fetch('https://jsonplaceholder.org/users')
        .then(response => response.json())
        .then(json => 
            {
            console.log(json)
            return json;
            }
        )
        .then(function(data){
            console.log('du lieu trong da ta',data)
            let tbody = document.getElementById('table_user');
            tbody.innerHTML = '';
            data.forEach(function(item){
                let row = tbody.insertRow();
                row.insertCell().textContent = item.firstname;
                row.insertCell().textContent = item.lastname;
                row.insertCell().textContent = item.company['name'];
                row.insertCell().textContent = item.email;
                let button_show = document.createElement('button');
                button_show.textContent = 'show'
                button_show.classList.add('button_show');
                row.insertCell().appendChild(button_show)
            
            })
    
        }
            
        )
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

//show popup 
function show_popup () {
    let tbody = document.getElementById('table_user');

    tbody.addEventListener('click', function (event) {
        if (event.target.classList.contains('button_show')) {
            document.getElementById('popup_wraper').classList.add('show');
        }
    });
};

//hide popup 
function show_hide_popup () {

    button_close.addEventListener('click', function (event) {
            document.getElementById('popup_wraper').classList.remove('show');
    });
};