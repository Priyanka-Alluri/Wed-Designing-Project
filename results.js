function proceedToDiet() {
    // Placeholder function
    window.location.href = "diet_plan.html";

}

function generatePieChart() {
    // Retrieve user selections from the quiz stored in localStorage
    var selections = JSON.parse(localStorage.getItem('quizSelections'));

    if (!selections || selections.length === 0) {
        console.error('No selections found in localStorage.');
        return;
    }

    var categoryCount = { vata: 0, pita: 0, kapha: 0 };

    // Count selections for each category
    selections.forEach(function(selection) {
        if (selection === 0) {
            categoryCount.vata++;
        } else if (selection === 1) {
            categoryCount.pita++;
        } else {
            categoryCount.kapha++;
        }
    });

    // Calculate percentages
    var totalCount = selections.length;
    var vataPercentage = (categoryCount.vata / totalCount) * 100;
    var pitaPercentage = (categoryCount.pita / totalCount) * 100;
    var kaphaPercentage = (categoryCount.kapha / totalCount) * 100;

    // Display pie chart using Chart.js
    var ctx = document.getElementById('pieChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Vata', 'Pita', 'Kapha'],
            datasets: [{
                data: [vataPercentage, pitaPercentage, kaphaPercentage],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'Health Categories'
            },
            // After the chart is drawn, call a function to append the image
            animation: {
                onComplete: function() {
                    appendHighestCategoryImage(categoryCount);
                }
            }
        }
    });
}
// Function to append image of highest scored category
function appendHighestCategoryImage(categoryCount) {
    // Find the category with the highest count
    var highestCategory = Object.keys(categoryCount).reduce(function(a, b){ return categoryCount[a] > categoryCount[b] ? a : b });
    
    // Set the image source based on the highest scored category
    var imgSrc;
    switch(highestCategory) {
        case 'vata':
            imgSrc = 'vata_image.jpeg'; // Replace 'vata_image.jpg' with the actual path to your Vata image
            break;
        case 'pita':
            imgSrc = 'pita_image.jpeg'; // Replace 'pita_image.jpg' with the actual path to your Pita image
            break;
        case 'kapha':
            imgSrc = 'kapha_image.jpeg'; // Replace 'kapha_image.jpg' with the actual path to your Other image
            break;
        default:
            imgSrc = ''; // Default image source if category is not found
    }

    // Create image element and set its attributes
    var img = document.createElement('img');
    img.src = imgSrc;
    img.alt = highestCategory + ' image';
    img.style.width = '400px'; // Adjust image width as needed

    // Append the image to the appropriate container
    var imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = ''; // Clear previous content
    imageContainer.appendChild(img);
}


// Generate and display pie chart
generatePieChart();
