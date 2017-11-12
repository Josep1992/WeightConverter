// Todos:

// Make the selected button add a class of selected on click.
// Only one selected button at a time.
// Finish the animations on the results section.

const input = document.getElementById('input');
const btn = document.getElementsByClassName('btn');
const poundsButton = document.getElementById('pounds');
const kilogramButton = document.getElementById('kilograms');
const gramsButton = document.getElementById('grams');
const ouncesButton = document.getElementById('ounces');
const usTonsButton = document.getElementById('usTons');
const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');
const result3 = document.getElementById('result3');
const result4 = document.getElementById('result4');

// *************************Event Listeners****************************

poundsButton.addEventListener("click", function () {
    resetLiContent();
    this.classList.toggle('selected');
    kilogramButton.classList.toggle('display');
    gramsButton.classList.toggle('display');
    ouncesButton.classList.toggle('display');
    usTonsButton.classList.toggle('display');
    displayPoundResults();


});

kilogramButton.addEventListener('click', function () {
    resetLiContent();
    this.classList.toggle('selected');
    poundsButton.classList.toggle('display');
    gramsButton.classList.toggle('display');
    ouncesButton.classList.toggle('display');
    usTonsButton.classList.toggle('display');
    displayKilogramResults();
    

});

gramsButton.addEventListener('click', function () {
    resetLiContent();
    this.classList.toggle('selected');
    poundsButton.classList.toggle('display');
    kilogramButton.classList.toggle('display');
    ouncesButton.classList.toggle('display');
    usTonsButton.classList.toggle('display');
    displayGramResults();
    
});


ouncesButton.addEventListener('click', function () {
    resetLiContent();
    this.classList.toggle('selected');
    poundsButton.classList.toggle('display');
    gramsButton.classList.toggle('display');
    kilogramButton.classList.toggle('display');
    usTonsButton.classList.toggle('display');
    displayOuncesResults();
    
});

usTonsButton.addEventListener('click', function () {
    resetLiContent();
    this.classList.toggle('selected');
    poundsButton.classList.toggle('display');
    gramsButton.classList.toggle('display');
    ouncesButton.classList.toggle('display');
    kilogramButton.classList.toggle('display');
    displayUsTonsResults();
    
})

// *********************Objects***************************

const poundConversions = {

    poundsToKilogram: function () {
        let inputValue = input.value;

        let convertPoundToKilogram = Number(inputValue) * 0.45359;

        return convertPoundToKilogram + " Kilograms";

    },

    poundsToOunces: function () {
        let inputValue = input.value;

        let convertPoundToOunces = Number(inputValue) * 16.00000;

        return convertPoundToOunces + " Ounces";

    },

    poundsToGrams: function () {
        let inputValue = input.value;

        let convertPoundToGrams = Number(inputValue) * 453.59232;

        return convertPoundToGrams + " Grams";

    },

    poundsToUsTons: function () {
        let inputValue = input.value;

        let convertPoundToUsTons = Number(inputValue) * 0.00050;

        return convertPoundToUsTons + " US Tons";

    }
}

const kilogramConversions = {
    kilogramsToPound: function () {
        let inputValue = input.value;

        let convertKilogramsToPound = Number(inputValue) * 2.20462;

        return convertKilogramsToPound + " Pounds"

    },

    kilogramsToOunces: function () {
        let inputValue = input.value;

        let convertKilogramsToOunces = Number(inputValue) * 35.27397;

        return convertKilogramsToOunces + " Ounces"

    },

    kilogramsToGrams: function () {
        let inputValue = input.value;

        let convertKilogramsToGrams = Number(inputValue) * 1000.00000;

        return convertKilogramsToGrams + " Grams"

    },

    kilogramsToUsTons: function () {
        let inputValue = input.value;

        let convertKilogramsToUsTons = Number(inputValue) * 0.00110;

        return convertKilogramsToUsTons + " Us Tons"

    },
}

const gramConversions = {
    gramsToPound: function () {

        let inputValue = input.value;

        let convertGramsToPounds = Number(inputValue) * 0.00220;

        return convertGramsToPounds + " Pounds";

    },

    gramsToKilograms: function () {

        let inputValue = input.value;

        let convertGramsToKilograms = Number(inputValue) * 0.00100;

        return convertGramsToKilograms + " Kilograms";

    },

    gramsToOunces: function () {

        let inputValue = input.value;

        let convertGramsToOunces = Number(inputValue) * 0.03527;

        return convertGramsToOunces + " Ounces";

    },

    gramsToUsTons: function () {

        let inputValue = input.value;

        let convertGramsToUsTons = Number(inputValue) * 0.00000;

        return convertGramsToUsTons + " Us Tons";

    }
}

const ouncesConversions = {
    ouncesToPounds: function () {

        let inputValue = input.value;

        let convertOuncesToPounds = Number(inputValue) * 0.06250;

        return convertOuncesToPounds + " Pounds";

    },

    ouncesToGrams: function () {

        let inputValue = input.value;

        let convertOuncesToGrams = Number(inputValue) * 28.34952;

        return convertOuncesToGrams + " Grams";

    },

    ouncesToKilograms: function () {

        let inputValue = input.value;

        let convertOuncesToKilograms = Number(inputValue) * 0.02835;

        return convertOuncesToKilograms + " Kilograms";

    },

    ouncesToUsTons: function () {

        let inputValue = input.value;

        let convertOuncesToUsTons = Number(inputValue) * 0.00003;

        return convertOuncesToUsTons + " Us Tons";
    }
}

const usTonsConversions = {
    usTonsToPounds: function () {

        let inputValue = input.value;

        let convertUsTonsToPounds = Number(inputValue) * 2000.00000;

        return convertUsTonsToPounds + " Pounds";
    },

    usTonsToGrams: function () {

        let inputValue = input.value;

        let convertUsTonsToGrams = Number(inputValue) * 907184.64000;

        return convertUsTonsToGrams + " Grams";

    },

    usTonsToKilograms: function () {

        let inputValue = input.value;

        let convertUsTonsToKilograms = Number(inputValue) * 907.18464;

        return convertUsTonsToKilograms + " Kilograms";

    },

    usTonsToOunces: function () {

        let inputValue = input.value;

        let convertUsTonsToOunces = Number(inputValue) * 32000.00000;

        return convertUsTonsToOunces + " Ounces";

    }


}

function displayUsTonsResults() {
    result1.textContent = usTonsConversions.usTonsToPounds();
    result2.textContent = usTonsConversions.usTonsToGrams();
    result3.textContent = usTonsConversions.usTonsToKilograms();
    result4.textContent = usTonsConversions.usTonsToOunces();
}


function displayOuncesResults() {
    result1.textContent = ouncesConversions.ouncesToPounds();
    result2.textContent = ouncesConversions.ouncesToGrams();
    result3.textContent = ouncesConversions.ouncesToKilograms();
    result4.textContent = ouncesConversions.ouncesToUsTons();
}


function displayGramResults() {
    result1.textContent = gramConversions.gramsToPound();
    result2.textContent = gramConversions.gramsToOunces();
    result3.textContent = gramConversions.gramsToKilograms();
    result4.textContent = gramConversions.gramsToUsTons();

}


function displayKilogramResults() {
    result1.textContent = kilogramConversions.kilogramsToPound();
    result2.textContent = kilogramConversions.kilogramsToOunces();
    result3.textContent = kilogramConversions.kilogramsToGrams();
    result4.textContent = kilogramConversions.kilogramsToUsTons();
}

function displayPoundResults() {
    result1.textContent = poundConversions.poundsToGrams();
    result2.textContent = poundConversions.poundsToKilogram();
    result3.textContent = poundConversions.poundsToOunces();
    result4.textContent = poundConversions.poundsToUsTons();
}


function resetLiContent() {
    result1.textContent = " ";
    result2.textContent = " ";
    result3.textContent = " ";
    result4.textContent = " ";

}