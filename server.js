const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.set("views", "views");
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/calculate", calculatePostal);

app.listen(port, function() {
    console.log(`Listening on port: ${port}`);
});


function calculatePostal(request, response) {
    console.log("Calculating...");

    postalType = request.query.postalType;
    console.log("postalType: " + postalType);
    const weight = request.query.weight;
    cost = 0;

    if (postalType == "stamped") {
        if (weight <= 1) {
            cost = 0.55;
        }
        else if (weight <= 2) {
            cost = .7;
        }
        else if (weight <= 3) {
            cost = .85;
        }
        else {
            cost = 1;
        }
    }
    else if (postalType == "metered") {
        if (weight <= 1) {
            cost = 0.5;
        }
        else if (weight <= 2) {
            cost = .65;
        }
        else if (weight <= 3) {
            cost = .80;
        }
        else {
            cost = .95;
        }
    }
    else if (postalType == "flats") {
        if (weight <= 1) {
            cost = 1;
        }
        else if (weight <= 2) {
            cost = 1.15;
        }
        else if (weight <= 3) {
            cost = 1.3;
        }
        else if (weight <= 4) {
            cost = 1.4;
        }
        else if (weight <= 5) {
            cost = 1.6;
        }
        else if (weight <= 6) {
            cost = 1.75;
        }
        else if (weight <= 7) {
            cost = 1.9;
        }
        else if (weight <= 8) {
            cost = 2.05;
        }
        else if (weight <= 9) {
            cost = 2.2;
        }
        else if (weight <= 10) {
            cost = 2.35;
        }
        else if (weight <= 11) {
            cost = 2.5;
        }
        else if (weight <= 12) {
            cost = 2.65;
        }
        else {
            cost = 2.8;
        }
    }
     else if (postalType == "retail") {
        if (weight <= 1) {
            cost = 3.66;
        }
        else if (weight <= 2) {
            cost = 3.66;
        }
        else if (weight <= 3) {
            cost = 3.66;
        }
        else if (weight <= 4) {
            cost = 3.6;
        }
        else if (weight <= 5) {
            cost = 4.39;
        }
        else if (weight <= 6) {
            cost = 4.39;
        }
        else if (weight <= 7) {
            cost = 4.39;
        }
        else if (weight <= 8) {
            cost = 4.39;
        }
        else if (weight <= 9) {
            cost = 5.19;
        }
        else if (weight <= 10) {
            cost = 5.19;
        }
        else if (weight <= 11) {
            cost = 5.19;
        }
        else if (weight <= 12) {
            cost = 5.19;
        }
        else {
            cost = 5.71;
        }
    }

    if (postalType == "stamped") {
        postalType = "Letters (Stamped)";
    }
    else if (postalType == "metered") {
        postalType = "Letters (Metered)";
    }
    else if (postalType == "flats") {
        postalType = "Large Envelopes(Flats)";
    }
    else if (postalType == "flats") {
        postalType = "First-Class Package Service—Retail";
    }





    const params = {
        postalType: postalType,
        weight: weight,
        cost: cost
    };

    response.render("response", params);
}
