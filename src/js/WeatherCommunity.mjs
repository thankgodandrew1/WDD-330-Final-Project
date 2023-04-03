import { Modal } from './Modal.mjs';
import { Rain } from './Rain.mjs';
import { loadHeaderFooter } from './Utils.mjs';

export default class WeatherCommunity {
    constructor() {
      this.submissions = document.getElementById('submissions');
    }
  
    submitForm(event) {
      event.preventDefault(); // Prevent the form from submitting
  
      // Get the form values
      const name = document.getElementById('name').value;
      const location = document.getElementById('location').value;
      const file = document.getElementById('file').files[0];
  
      if (!file) {
        // If no file is selected, show an error message
        alert('Please select a file.');
        return;
      }
  
      // Check if the file type is valid
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'video/mp4', 'video/quicktime'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please select a valid file type. Allowed types are JPEG, PNG, GIF, MP4, and QuickTime videos.');
        return;
      }
  
      // Create a new submission object
      const submission = {
        name: name,
        location: location,
        file: file,
      };
  
      // Create a new submission element
      const newSubmission = document.createElement('div');
      if (file.type.startsWith('image')) {
        newSubmission.innerHTML = `
          <h3>${submission.name} - ${submission.location}</h3>
          <img src='${URL.createObjectURL(submission.file)}'>
        `;
      } else if (file.type.startsWith('video')) {
        newSubmission.innerHTML = `
          <h3>${submission.name} - ${submission.location}</h3>
          <video controls>
            <source src='${URL.createObjectURL(submission.file)}' type='${file.type}'>
          </video>
        `;
      }
  
      // Add the new submission to the top of the list
      this.submissions.insertBefore(newSubmission, this.submissions.firstChild);
  
      // Clear the form
      document.getElementById('name').value = '';
      document.getElementById('location').value = '';
      document.getElementById('file').value = '';
    }
  }
  

window.addEventListener('load', async function () {
  await loadHeaderFooter();
  new Modal();
  const rain = new Rain('modal-content');

  rain.createRain();
  const form = document.getElementById('community-form');
  const weatherCommunity = new WeatherCommunity();
  form.addEventListener('submit', function (event) {
    weatherCommunity.submitForm(event);
  });

  function toggleMenu() {
    const toggle = document.querySelector('.toggle');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    toggle.classList.toggle('open');
    hamburgerBtn.classList.toggle('open');
    if (toggle.classList.contains('open')) {
      toggle.style.left = '0';
      toggle.style.height = '100vh';
    } else {
      toggle.style.left = '-80%';
      toggle.style.height = '0';
    }
  }

  const x = document.getElementById('hamburgerBtn');
  x.onclick = toggleMenu;

  // Hide the toggle if clicked outside of it
  document.addEventListener('click', function(event) {
    const toggle = document.querySelector('.toggle');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    if (!toggle.contains(event.target) && !hamburgerBtn.contains(event.target)) {
      toggle.classList.remove('open');
      hamburgerBtn.classList.remove('open');
      toggle.style.left = '-80%';
      toggle.style.height = '0';
    }
  });
});
// export default class WeatherCommunity {
//     constructor() {
//       this.submissions = document.getElementById('submissions');
//       this.loadSubmissions();
//     }
  
//     loadSubmissions() {
//       // Load submissions from local storage
//       const storedSubmissions = JSON.parse(localStorage.getItem('submissions')) || [];
  
//       // Add the stored submissions to the submissions list
//       storedSubmissions.forEach(submission => {
//         const newSubmission = this.createSubmissionElement(submission);
//         this.submissions.insertBefore(newSubmission, this.submissions.firstChild);
//       });
//     }
  
//     createSubmissionElement(submission) {
//       // Create a new submission element
//       const newSubmission = document.createElement('div');
//       newSubmission.innerHTML = `
//           <h3>${submission.name} - ${submission.location}</h3>
//           <${submission.type} src='${URL.createObjectURL(submission.file)}'>
//         `;
  
//       // Set the submission type (image or video)
//       if (submission.type === 'img') {
//         newSubmission.firstChild.nextElementSibling.setAttribute('alt', 'Weather event photo');
//       } else if (submission.type === 'video') {
//         newSubmission.firstChild.nextElementSibling.setAttribute('controls', '');
//         newSubmission.firstChild.nextElementSibling.setAttribute('alt', 'Weather event video');
//       }
  
//       return newSubmission;
//     }
  
//     submitForm(event) {
//       event.preventDefault(); // Prevent the form from submitting
  
//       // Get the form values
//       const name = document.getElementById('name').value;
//       const location = document.getElementById('location').value;
//       const file = document.getElementById('file').files[0];
//       const type = file.type.startsWith('image') ? 'img' : 'video';
  
//       if (!file) {
//         // If no file is selected, show an error message
//         alert('Please select a file.');
//         return;
//       }
  
//       // Create a new submission object
//       const submission = {
//         name: name,
//         location: location,
//         file: file,
//         type: type,
//         timestamp: new Date().getTime(),
//       };
  
//       // Add the new submission to the top of the list
//       const newSubmission = this.createSubmissionElement(submission);
//       this.submissions.insertBefore(newSubmission, this.submissions.firstChild);
  
//       // Save the submission to local storage
//       const storedSubmissions = JSON.parse(localStorage.getItem('submissions')) || [];
//       storedSubmissions.unshift(submission);
//       localStorage.setItem('submissions', JSON.stringify(storedSubmissions));
  
//       // Clear the form
//       document.getElementById('name').value = '';
//       document.getElementById('location').value = '';
//       document.getElementById('file').value = '';
//     }
//   }
  