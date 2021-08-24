const myAlert = () => {
    const x = "Help! I think I found a clue!";
    const alerter = () =>{
        alert(x);
    };
    
    setTimeout(alerter, 1000);
    console.log('what happens first? this log or the alert?');//console then alert 
};

myAlert();

const newClue = (name) => {
    const length = name .length;

    return (weapon) => {
        let clue = length + weapon.length;
        return !!(clue % 1);
    };
};
