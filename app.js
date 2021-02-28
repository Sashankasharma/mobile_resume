const project= document.getElementById('project');
const education= document.getElementById('education');
const experience= document.getElementById('experience');

const projectOverlay= document.getElementById('overlay-projects');
const educationOverlay= document.getElementById('overlay-education');
const experienceOverlay= document.getElementById('overlay-experience');

const overlay= document.querySelector('.inner');
const back= document.getElementById('mbl-background');

const closeProjects= document.getElementById('close-projects');
const closeEducation=document.getElementById('close-education');
const closeExperience=document.getElementById('close-experience');
project.addEventListener('click',()=>{
    projectOverlay.style.display='flex';
    back.style.display= 'none'
})
closeProjects.addEventListener('click',()=>{
    projectOverlay.style.display='none'; 
    back.style.display= 'flex'   
})
education.addEventListener('click',()=>{
   educationOverlay.style.display='flex';
   back.style.display= 'none'
})
closeEducation.addEventListener('click',()=>{
   educationOverlay.style.display='none';
   back.style.display= 'flex'
})
experience.addEventListener('click',()=>{
    experienceOverlay.style.display='flex';
    back.style.display= 'none'
})
closeExperience.addEventListener('click',()=>{
    experienceOverlay.style.display='none';
    back.style.display= 'flex'
})