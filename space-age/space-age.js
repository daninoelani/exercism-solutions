export const age = (planet, seconds) => {

    //define all of the years based off of earthYear
    const earthYear = 31557600;
    const mercuryYear = 0.2408467 * earthYear;
    const venusYear = 0.61519726 * earthYear;
    const marsYear = 1.8808158 * earthYear;
    const jupiterYear = 11.862615 * earthYear;
    const saturnYear = 29.447498 * earthYear;
    const uranusYear = 84.016846 * earthYear;
    const neptuneYear = 164.79132 * earthYear;


    //each input needs to be divided by that planet's year
    let ageInSeconds;
    if (planet === 'earth') {
        ageInSeconds = seconds / 31557600;
    } else if (planet === 'mercury') {
        ageInSeconds = seconds / mercuryYear;
    } else if (planet === 'venus') {
        ageInSeconds = seconds / venusYear;
    } else if (planet === 'mars') {
        ageInSeconds = seconds / marsYear;
    } else if (planet === 'jupiter') {
        ageInSeconds = seconds / jupiterYear;
    } else if (planet === 'saturn') {
        ageInSeconds = seconds / saturnYear;
    } else if (planet === 'uranus') {
        ageInSeconds = seconds / uranusYear;
    } else if (planet === 'neptune') {
        ageInSeconds = seconds / neptuneYear;
    }

    //needs to be converted to a float and fixed to two points past the decimal
    return parseFloat(ageInSeconds.toFixed(2));
}