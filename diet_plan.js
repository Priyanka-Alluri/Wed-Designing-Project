function proceedToDiet() {
    // Find the largest category from the pie chart data
    var largestCategory = findLargestCategory();

    // Redirect to the original diet plan page for the largest category
    // Replace 'url_for_diet_plan' with the URL of your original diet plan page
    window.location.href = "diet_plan.html";
}

function findLargestCategory() {
    // Retrieve user selections from the quiz stored in localStorage
    var selections = JSON.parse(localStorage.getItem('quizSelections'));

    // Calculate category counts
    var categoryCount = { vata: 0, pita: 0, kapha: 0 };
    selections.forEach(function(selection) {
        if (selection === 0) {
            categoryCount.vata++;
        } else if (selection === 1) {
            categoryCount.pita++;
        } else {
            categoryCount.kapha++;
        }
    });

    // Find the largest category
    var largestCategory = Object.keys(categoryCount).reduce(function(a, b){ return categoryCount[a] > categoryCount[b] ? a : b });
    var doshaText = "";
    switch(largestCategory) {
        case 'vata':
            doshaText += "<div class='row'"+
                        "<div class='col-md-8'>"+
                         "<div style='float:left;'>"+
                         "<ul><h2 style='margin-bottom:10px;'>Foods to Favour</h2>" +
                         "<li style='font-size:20px;'>Cooked grains like rice, wheat, oats, and quinoa.</li>" +
                         "<li style='font-size:20px;'>Cooked vegetables, especially root vegetables like carrots, sweet potatoes, and beets.</li>" +
                         "<li style='font-size:20px;'>Nuts and seeds (in moderation), especially almonds and sesame seeds.</li>" +
                         "<li style='font-size:20px;'>Healthy oils such as ghee, sesame oil, and olive oil.</li>" +
                         "<li style='font-size:20px;'>Warm, nourishing soups and stews.</li>" +
                         "<li style='font-size:20px;'>Sweet, sour, and salty tastes.</li>" +
                         "</ul>"+
                         "</div>"+
                         "</div>"+
                         "<div class='col-md-4'>"+
                         "<div style='float:right; margin-right:160px; '>"+
                         "<img src='vata_image1.jpeg' alt='Vata Dosha Image' style='float:right; border-radius:20px; height:250px; width:250px;'>"+
                         "</div>"+
                         "</div>"+
                         "</div>"+
                         "</div>";

            doshaText += "<div class='container-fluid'>"+
                         "<div class='row'>"+
                         "<div class='col-md-8'>"+
                         "<div style='float:left; margin-top:100px;'>"+
                         "<ul><h2 style='margin-bottom:10px;'>Foods to Limit or Avoid:</h2>"+
                         "<li style='font-size:20px;'>Cold, dry, and raw foods.</li>"+
                         "<li style='font-size:20px;'>Bitter, astringent, and pungent tastes.</li>"+
                         "<li style='font-size:20px;'>Light and airy foods like popcorn and rice cakes.</li>"+
                         "<li style='font-size:20px;'>Carbonated drinks and caffeine.</li>"+
                         "</ul>"+
                         "</div>"+
                         "</div>"+
                         "<div class='col-md-4'>"+
                         "<div style='float:right; position:absolute; top:59%; left:67%; '>"+
                         "<img src='vata_image2.jpeg' alt='Vata Dosha Image' style='float:right; border-radius:20px; height:250px; width:250px;'>"+
                         "</div>"+
                         "</div>"+
                         "</div>"+
                         "</div>";
            break;
            case 'pita':
                doshaText += "<div class='container-fluid'>"+
                            "<div class='row'"+
                            "<div class='col-md-8'>"+
                             "<div style='float:left;'>"+
                             "<ul><h2 style='margin-bottom:10px;'>Foods to Favour</h2>" +
                             "<li style='font-size:20px;'>Sweet fruits like grapes, melons, and cherries.</li>" +
                             "<li style='font-size:20px;'>Sweet and bitter vegetables like cucumbers, zucchini, and leafy greens.</li>" +
                             "<li style='font-size:20px;'>Grains like basmati rice, barley, and oats.</li>" +
                             "<li style='font-size:20px;'>Dairy products (in moderation), especially milk and ghee.</li>" +
                             "<li style='font-size:20px;'>Cooling herbs and spices like cilantro, mint, and coriander.</li>" +
                             "<li style='font-size:20px;'>Sweet, bitter, and astringent tastes.</li>" +
                             "</ul>"+
                             "</div>"+
                             "</div>"+
                             "<div class='col-md-4'>"+
                             "<div style='float:right; margin-right:160px; '>"+
                             "<img src='pita_image1.jpeg' alt='Pita Dosha Image' style='float:right; border-radius:20px; height:250px; width:250px;'>"+
                             "</div>"+
                             "</div>"+
                             "</div>"+
                             "</div>";
    
                doshaText += "<div class='container-fluid'>"+
                             "<div class='row'>"+
                             "<div class='col-md-8'>"+
                             "<div style='float:left; margin-top:100px;'>"+
                             "<ul><h2 style='margin-bottom:10px;'>Foods to Limit or Avoid:</h2>"+
                             "<li style='font-size:20px;'>Spicy and heating foods like chili peppers and garlic.</li>"+
                             "<li style='font-size:20px;'>Sour fruits like oranges and pineapples.</li>"+
                             "<li style='font-size:20px;'>Oily and fried foods.</li>"+
                             "<li style='font-size:20px;'>Excessive salt.</li>"+
                             "<li style='font-size:20px;'>Alcohol and caffeine.</li>"+
                             "</ul>"+
                             "</div>"+
                             "</div>"+
                             "<div class='col-md-4'>"+
                             "<div style='float:right; position:absolute; top:59%; left:67%; '>"+
                             "<img src='pita_image2.jpeg' alt='Pita Dosha Image' style='float:right; border-radius:20px; height:250px; width:250px;'>"+
                             "</div>"+
                             "</div>"+
                             "</div>"+
                             "</div>";
                break;
                case 'kapha':
                    doshaText += "<div class='container-fluid'>"+
                    "<div class='row'"+
                    "<div class='col-md-8'>"+
                    "<div style='float:left;'>"+
                    "<ul><h2 style='margin-bottom:10px;'>Foods to Favour</h2>" +
                    "<li style='font-size:20px;'>Light, dry fruits like apples, pears, and berries.</li>" +
                    "<li style='font-size:20px;'>Light and pungent vegetables like broccoli, cauliflower, and leafy greens.</li>" +
                    "<li style='font-size:20px;'>Legumes like lentils and chickpeas.</li>" +
                    "<li style='font-size:20px;'>Spices and herbs with pungent and bitter tastes like ginger, turmeric, and fenugreek.</li>" +
                    "<li style='font-size:20px;'>Warm drinks like ginger tea.</li>" +
                    "<li style='font-size:20px;'>Bitter, pungent, and astringent tastes.</li>" +
                    "</ul>"+
                    "</div>"+
                    "</div>"+
                    "<div class='col-md-4'>"+
                    "<div style='float:right; margin-right:160px; '>"+
                    "<img src='kapha_image1.jpeg' alt='Kapha Dosha Image' style='float:right; border-radius:20px; height:250px; width:250px;'>"+
                    "</div>"+
                    "</div>"+
                    "</div>"+
                    "</div>";
                    
                    doshaText += "<div class='container-fluid'>"+
                    "<div class='row'>"+
                    "<div class='col-md-8'>"+
                    "<div style='float:left; margin-top:100px;'>"+
                    "<ul><h2 style='margin-bottom:10px;'>Foods to Limit or Avoid:</h2>"+
                    "<li style='font-size:20px;'>Heavy and oily foods.</li>"+
                    "<li style='font-size:20px;'>Sweet and sour fruits like bananas and oranges.</li>"+
                    "<li style='font-size:20px;'>Dairy products especially heavy creams and cheeses.</li>"+
                    "<li style='font-size:20px;'>Excessive salt and sweeteners.</li>"+
                    "</ul>"+
                    "</div>"+
                    "</div>"+
                    "<div class='col-md-4'>"+
                    "<div style='float:right; position:absolute; top:59%; left:67%; '>"+
                    "<img src='kapha_image2.jpeg' alt='Kapha Dosha Image' style='float:right; border-radius:20px; height:250px; width:250px;'>"+
                    "</div>"+
                    "</div>"+
                    "</div>"+
                    "</div>";
                    break;
        default:
            doshaText = "Unable to determine dominant dosha.";
    }
    
    // Assuming doshaText is to be displayed in a div with id "doshaInfo"
    document.getElementById("doshaInfo").innerHTML = doshaText;
    // Return the largest category and dosha text
    return { category: largestCategory, text: doshaText };
}

var result = findLargestCategory();

// Create a paragraph element to display the dosha text
var doshaParagraph = document.createElement('p');
doshaParagraph.textContent = result.text;

// Append the dosha paragraph to the diet plan container
var dietPlanContainer = document.getElementById('dietPlan');
dietPlanContainer.appendChild(doshaParagraph);