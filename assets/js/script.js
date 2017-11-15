const input = document.getElementById('input');
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
    ActiveThis(this, "poundsButton");
    displayPoundResults();


});

kilogramButton.addEventListener('click', function () {
    resetLiContent();
    ActiveThis(this, "kilogramButton");
    displayKilogramResults();


});

gramsButton.addEventListener('click', function () {
    resetLiContent();
    ActiveThis(this, "gramsButton");
    displayGramResults();

});


ouncesButton.addEventListener('click', function () {
    resetLiContent();
    ActiveThis(this, "ouncesButton");
    displayOuncesResults();

});

usTonsButton.addEventListener('click', function () {
    resetLiContent();
    ActiveThis(this, "usTonsButton");
    displayUsTonsResults();

})

// *********************Objects***************************

const poundConversions = {

    poundsToKilogram: function () {
        let inputValue = input.value;

        let convertPoundToKilogram = Number(inputValue) * 0.45359;

        return Math.round(convertPoundToKilogram) + " Kilograms";

    },

    poundsToOunces: function () {
        let inputValue = input.value;

        let convertPoundToOunces = Number(inputValue) * 16.00000;

        return Math.round(convertPoundToOunces) + " Ounces";

    },

    poundsToGrams: function () {
        let inputValue = input.value;

        let convertPoundToGrams = Number(inputValue) * 453.59232;

        return Math.round(convertPoundToGrams) + " Grams";

    },

    poundsToUsTons: function () {
        let inputValue = input.value;

        let convertPoundToUsTons = Number(inputValue) * 0.00050;

        return Math.round(convertPoundToUsTons) + " US Tons";

    }
}

const kilogramConversions = {
    kilogramsToPound: function () {
        let inputValue = input.value;

        let convertKilogramsToPound = Number(inputValue) * 2.20462;

        return Math.round(convertKilogramsToPound) + " Pounds"

    },

    kilogramsToOunces: function () {
        let inputValue = input.value;

        let convertKilogramsToOunces = Number(inputValue) * 35.27397;

        return Math.round(convertKilogramsToOunces) + " Ounces"

    },

    kilogramsToGrams: function () {
        let inputValue = input.value;

        let convertKilogramsToGrams = Number(inputValue) * 1000.00000;

        return Math.round(convertKilogramsToGrams) + " Grams"

    },

    kilogramsToUsTons: function () {
        let inputValue = input.value;

        let convertKilogramsToUsTons = Number(inputValue) * 0.00110;

        return Math.round(convertKilogramsToUsTons) + " Us Tons"

    },
}

const gramConversions = {
    gramsToPound: function () {

        let inputValue = input.value;

        let convertGramsToPounds = Number(inputValue) * 0.00220;

        return Math.round(convertGramsToPounds) + " Pounds";

    },

    gramsToKilograms: function () {

        let inputValue = input.value;

        let convertGramsToKilograms = Number(inputValue) * 0.00100;

        return Math.round(convertGramsToKilograms) + " Kilograms";

    },

    gramsToOunces: function () {

        let inputValue = input.value;

        let convertGramsToOunces = Number(inputValue) * 0.03527;

        return Math.round(convertGramsToOunces) + " Ounces";

    },

    gramsToUsTons: function () {

        let inputValue = input.value;

        let convertGramsToUsTons = Number(inputValue) * 0.00000;

        return Math.round(convertGramsToUsTons) + " Us Tons";

    }
}

const ouncesConversions = {
    ouncesToPounds: function () {

        let inputValue = input.value;

        let convertOuncesToPounds = Number(inputValue) * 0.06250;

        return Math.round(convertOuncesToPounds) + " Pounds";

    },

    ouncesToGrams: function () {

        let inputValue = input.value;

        let convertOuncesToGrams = Number(inputValue) * 28.34952;

        return Math.round(convertOuncesToGrams) + " Grams";

    },

    ouncesToKilograms: function () {

        let inputValue = input.value;

        let convertOuncesToKilograms = Number(inputValue) * 0.02835;

        return Math.round(convertOuncesToKilograms )+ " Kilograms";

    },

    ouncesToUsTons: function () {

        let inputValue = input.value;

        let convertOuncesToUsTons = Number(inputValue) * 0.00003;

        return Math.round(convertOuncesToUsTons) + " Us Tons";
    }
}

const usTonsConversions = {
    usTonsToPounds: function () {

        let inputValue = input.value;

        let convertUsTonsToPounds = Number(inputValue) * 2000.00000;

        return Math.round(convertUsTonsToPounds) + " Pounds";
    },

    usTonsToGrams: function () {

        let inputValue = input.value;

        let convertUsTonsToGrams = Number(inputValue) * 907184.64000;

        return Math.round(convertUsTonsToGrams) + " Grams";

    },

    usTonsToKilograms: function () {

        let inputValue = input.value;

        let convertUsTonsToKilograms = Number(inputValue) * 907.18464;

        return Math.round(convertUsTonsToKilograms) + " Kilograms";

    },

    usTonsToOunces: function () {

        let inputValue = input.value;

        let convertUsTonsToOunces = Number(inputValue) * 32000.00000;

        return Math.round(convertUsTonsToOunces) + " Ounces";

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

// 

function ActiveThis(element, variable) {
    let isActiveElement = element;
    let isActiveVar = variable;

    //array of all the elements in string value
    btnElements = ['poundsButton', 'kilogramButton', 'gramsButton', 'ouncesButton', 'usTonsButton'];

    //only return the elements that are not Active
    let IsNotActive = btnElements.filter(notActive => notActive != isActiveVar);

    //inactive any elements that are not clicked
    for (i = 0; i < IsNotActive.length; i++) {

        //remove the selected class
        eval(IsNotActive[i]).classList.remove("selected");

        //check if not have the class "display"
        if (!hasClass(eval(IsNotActive[i]), "display")) {
            eval(IsNotActive[i]).classList.toggle("display");
        }
    }

    //check if not have the class "display"
    if (hasClass(isActiveElement, "display")) {
        isActiveElement.classList.remove("display");
    }

    //apply the class to the active element
    isActiveElement.classList.toggle("selected");

    //check if the element have the class
    function hasClass(elementCheck, Klass) {
        return elementCheck.classList.contains(Klass);
    }
}