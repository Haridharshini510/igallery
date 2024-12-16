# Ex.08 Design of Interactive Image Gallery
## Date:16/12/24

## AIM:
To design a web application for an inteactive image gallery with minimum five images.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM :
```
gallery.html

<html>
<head>
    <link rel="stylesheet" href="gallery.css">
</head>
<body>
    <h1>MY GALLERY</h1>
    
    <div class="imgwrapper" id="wrapper">
        <button id="close">x</button>
        <img src="" id="fullImg" alt="Full Image">
    </div>
    
    <div class="containers">
        <div class="container">
            <img src="1.jpg" alt="Image 1" onclick="openImage('1.jpg')">
            <img src="2.jpg" alt="Image 2" onclick="openImage('2.jpg')">
            <img src="3.jpg" alt="Image 3" onclick="openImage('3.jpg')">
            <img src="4.jpg" alt="Image 4" onclick="openImage('4.jpg')">
        </div>
        <br><br>
        <div class="container">
            <img src="5.jpg" alt="Image 5" onclick="openImage('5.jpg')">
            <img src="6.jpg" alt="Image 6" onclick="openImage('6.jpg')">
            <img src="7.jpg" alt="Image 7" onclick="openImage('7.jpg')">
            <img src="8.jpg" alt="Image 8" onclick="openImage('8.jpg')">
        </div>
        <br><br>
        <div class="container">
            <img src="9.jpg" alt="Image 9" onclick="openImage('9.jpg')">
            <img src="10.jpg" alt="Image 10" onclick="openImage('10.jpg')">
            <img src="11.jpg" alt="Image 11" onclick="openImage('11.jpg')">
            <img src="12.jpg" alt="Image 12" onclick="openImage('12.jpg')">
        </div>
    </div>
    <footer>
        Designed and developed by Haridharshini J
    </footer>

    
        <script src="gallery.js"></script>
</body>
</html>

gallery.css

h1{
    text-align: center;
    font-size: 45px;
}
img{
    height: 350px;
    width: 250px;
    /* padding-bottom: 30px; */
    border: solid black 5px;
    margin: 20px;
    border-radius: 5px;
}
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
}
.item{
align-items: center;
justify-content: space-around;
}
img:hover{
    transform: scale(1.2);
    box-shadow: 0px 32px 75px rgba(68,77, 136, 0.2);

}
.imgwrapper{
    width: 100%;
    height: 100vh;
    background:rgba(0,0,0,0.9);
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    justify-content:center;
    align-items: center;
    z-index: 100;
}
.imgwrapper img{
    width: 90%;
    max-width: 500px;
}
button{
    position: absolute;
    top: 5%;
    right: 5%;
    font-size: 25px;
    color: black;
}
footer{
    padding-top: 20px;
    text-align: center;
    font-size: 20px;
}

gallery.js

let wrapper = document.getElementById('wrapper');
let myImg = document.getElementById('fullImg');
let close = document.getElementById('close');

function open(imageName) {
    wrapper.style.display = 'flex';
    myImg.src = imageName;
}

close.addEventListener('click', () => {
    wrapper.style.display = 'none';
});

```


## OUTPUT:
![alt text](<Screenshot (84)-1.png>)
![alt text](<Screenshot (82).png>)
![alt text](<Screenshot (83).png>)
## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
