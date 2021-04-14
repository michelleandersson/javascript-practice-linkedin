/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */


const cellPhone = {
    color: "blue", 
    sizeCM: 20, 
    apps: {
        game: "Gems and Goblins", 
        social: "Facebook", 
        work: "Teams"
    },
    powerOn: true, 
    togglePower: function(powerStatus) {
        this.powerOn = powerStatus; 
    }
}

console.log(cellPhone); 
console.log("my cell phone is", cellPhone.color); 
console.log("it is", cellPhone.sizeCM, "cm tall"); 
console.log("it contains the following apps:", cellPhone.apps.game, ",",  cellPhone.apps.social, ", and", cellPhone.apps.work); 
 