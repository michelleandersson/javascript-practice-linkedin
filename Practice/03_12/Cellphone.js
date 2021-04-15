
class Cellphone {
    constructor(
        name, 
        color, 
        size, 
        model, 
        powerOn
    )
    {
        this.name = name;
        this.color = color; 
        this.size = size; 
        this.model = model; 
        this.powerOn = powerOn; 
    }
    togglePower(powerStatus) {
        this.powerOn = powerStatus;
    }
}

export default Cellphone; 