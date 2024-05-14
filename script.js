// document.addEventListener('DOMContentLoaded', function() {
//     const navLinks = document.querySelectorAll('nav ul li a');

//     navLinks.forEach(function(link) {
//         link.addEventListener('click', function(event) {
//             event.preventDefault();
//             const page = this.getAttribute('data-page');
//             loadPage(page);
//         });
//     });

//     function loadPage(page) {
//         // You can implement logic here to load content based on the 'page' parameter
//         // For demonstration purposes, let's just update the main content area with the page name
//         document.getElementById('main-content').innerHTML = `<h2>${page.replace('_', ' ').toUpperCase()}</h2>`;
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const page = this.getAttribute('data-page');
            loadPage(page);
        });
    });

    function loadPage(page) {
        // Fetch the HTML content of the page
        fetch(`${page}.html`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Page not found');
                }
                return response.text();
            })
            .then(html => {
                document.getElementById('main-content').innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading page:', error);
            });
    }
});

// dasboard

document.addEventListener('DOMContentLoaded', function() {
    // Function to update test status
    function updateTestStatus() {
        const testStatus = Math.random() > 0.5 ? 'Test in progress' : 'Test ended';
        document.getElementById('test-status').innerText = testStatus;
    }

    // Function to update test ended report
    function updateTestEnded() {
        const testEnded = Math.random() > 0.5 ? 'Test ended successfully' : 'Test ended with errors';
        document.getElementById('test-ended').innerText = testEnded;
    }

    // Function to update first login updates
    function updateLoginUpdates() {
        const loginUpdates = Math.random() > 0.5 ? 'Login successful' : 'Login failed';
        document.getElementById('login-updates').innerText = loginUpdates;
    }

    // Function to update information based on selected batch
    function updateBatchInfo(selectedBatch) {
        updateTestStatus();
        updateTestEnded();
        updateLoginUpdates();
    }

    // Initial update of batch info for default selected batch
    updateBatchInfo('batch-1');

    // Event listener for batch selection dropdown
    document.getElementById('batch-select').addEventListener('change', function() {
        const selectedBatch = this.value;
        updateBatchInfo(selectedBatch);
    });
});
// bulk

// document.addEventListener('DOMContentLoaded', function() {
//     const uploadBtn = document.getElementById('upload-btn');
//     const fileInput = document.getElementById('csv-file');

//     uploadBtn.addEventListener('click', function() {
//         const file = fileInput.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = function(e) {
//                 const csvData = e.target.result;
//                 processData(csvData);
//             };
//             reader.readAsText(file);
//         } else {
//             alert('Please select a CSV file.');
//         }
//     });

//     function processData(csvData) {
//         // Split CSV data into rows
//         const rows = csvData.split('\n');
        
//         // Process each row (assuming CSV format: Roll Number, Batch, Mobile Number)
//         rows.forEach(function(row) {
//             const columns = row.split(',');
//             const rollNumber = columns[0];
//             const batch = columns[1];
//             const mobileNumber = columns[2];
            
//             // Validate data and perform registration process (you can customize this part)
//             if (rollNumber && batch && mobileNumber) {
//                 // Perform registration process with the data (e.g., send data to server)
//                 console.log('Registered:', rollNumber, batch, mobileNumber);
//             }
//         });
        
//         alert('Bulk registration completed.'); // Notify user after processing all rows
//     }
// });
document.addEventListener('DOMContentLoaded', function() {
    const uploadBtn = document.getElementById('upload-btn');
    const fileInput = document.getElementById('csv-file');
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('close');

    uploadBtn.addEventListener('click', function() {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const csvData = e.target.result;
                processData(csvData);
            };
            reader.readAsText(file);
        } else {
            alert('Please select a CSV file.');
        }
    });

    closeBtn.addEventListener('click', function() {
        hidePopup();
    });

    function processData(csvData) {
        // Split CSV data into rows
        const rows = csvData.split('\n');
        
        // Process each row (assuming CSV format: Roll Number, Batch, Mobile Number)
        rows.forEach(function(row) {
            const columns = row.split(',');
            const rollNumber = columns[0];
            const batch = columns[1];
            const mobileNumber = columns[2];
            
            // Validate data and perform registration process (you can customize this part)
            if (rollNumber && batch && mobileNumber) {
                // Perform registration process with the data (e.g., send data to server)
                console.log('Registered:', rollNumber, batch, mobileNumber);
            }
        });

        showPopup(); // Show popup after processing
    }

    function showPopup() {
        popup.style.display = 'block';
    }

    function hidePopup() {
        popup.style.display = 'none';
    }
});
// delete candidates

document.addEventListener('DOMContentLoaded', function() {
    const deleteForm = document.getElementById('delete-form');
    const rollNumberSelect = document.getElementById('roll-number');

    // Populate the select element with roll numbers
    populateRollNumbers();

    // Function to populate select element with roll numbers
    function populateRollNumbers() {
        // Mock data for roll numbers (replace this with actual data)
        const rollNumbers = ['001', '002', '003', '004', '005'];

        // Add options for each roll number
        rollNumbers.forEach(function(rollNumber) {
            const option = document.createElement('option');
            option.value = rollNumber;
            option.textContent = rollNumber;
            rollNumberSelect.appendChild(option);
        });
    }

    // Event listener for form submission
    deleteForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const selectedRollNumber = rollNumberSelect.value;
        if (selectedRollNumber) {
            // Call a function to delete the candidate with the selected roll number
            deleteCandidate(selectedRollNumber);
        } else {
            alert('Please select a roll number.');
        }
    });

    // Function to delete candidate
    function deleteCandidate(rollNumber) {
        // Perform deletion process (replace this with your actual deletion process)
        console.log('Candidate with roll number ' + rollNumber + ' deleted successfully.');
        alert('Candidate with roll number ' + rollNumber + ' deleted successfully.');
    }
});
// faculty

document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('close');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        showPopup();
    });

    closeBtn.addEventListener('click', function() {
        hidePopup();
    });

    function showPopup() {
        popup.style.display = 'block';
    }

    function hidePopup() {
        popup.style.display = 'none';
    }
});
// time updates


