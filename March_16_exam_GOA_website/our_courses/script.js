const coursesP = document.getElementsByClassName('courses-p');

const coursesText = [
    "At our academy, you’ll master full-stack development with hands-on training in both front-end and back-end technologies. Learn to build dynamic, scalable web applications using industry-standard tools like HTML, CSS, JavaScript, and Node.js. Gain real-world experience, create a professional portfolio, and unlock career opportunities in tech.",
    "At our academy, you'll dive into game development, learning to create immersive experiences using industry-standard tools. Master key skills in programming, 3D modeling, and game design with hands-on projects. Build your portfolio, gain real-world experience, and open the door to exciting career opportunities in the gaming industry.",
    "At our academy, you’ll explore Robotech, combining robotics and technology to design and build advanced robotic systems. Learn programming, automation, and mechatronics through practical projects. Gain expertise in creating intelligent robots and automated solutions, preparing you for cutting-edge careers in robotics, AI, and technological innovation.",
    "At our academy, you’ll master algorithms, learning essential concepts for solving complex problems efficiently. Gain expertise in data structures, sorting, searching, and optimization techniques. Through hands-on exercises and real-world applications, you’ll develop problem-solving skills that are critical for success in software development, data science, and engineering."
];
function text(title, mainText){
    document.getElementById('course-div-text-b').textContent = title;
    document.getElementById('course-div-text-p').textContent = mainText;
    document.getElementById('course-div-text').style.zIndex = 1;
};
for(let i = 0; i < coursesP.length; i++){
    coursesP[i].addEventListener('mouseover', () => {
        text(coursesP[i].textContent, coursesText[i])
    });
    coursesP[i].addEventListener('mouseout', () => {
        document.getElementById('course-div-text-b').textContent = '';
        document.getElementById('course-div-text-p').textContent = '';
        document.getElementById('course-div-text').style.zIndex = -1;
    });
};
document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    if(localStorage.getItem('email')){
        alert('You Registered Successfully');
        location.reload();
    }else{
        alert('Please Register First');
    };
});
document.getElementById('login-div').addEventListener('click', () => {
    window.open('/March_16_exam_GOA_website/login/index.html', '_self');
});
document.getElementById('register-div').addEventListener('click', () => {
    window.open('/March_16_exam_GOA_website/register/index.html', '_self');
});