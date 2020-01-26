

function create_rover(rover) {


    return {rover};

}

function create_rover_position(position, orientation) {


    return { position, orientation };
}


function updateorientation(rover, commande) {

    let orientation = ['N', 'E', 'S', 'O'];

    let x = orientation.indexOf(rover.orientation);

    let sens = { d: 1, g: -1 };


    let new_orientation = ((x + sens[commande]) + 4) % 4;

    let orientationactuelle = orientation[new_orientation];

    return { ...rover, orientationactuelle };

}

test('test creation rover', () => {

    let rover = { x: 0, y: 0 };

    let test = create_rover(rover);

    expect(test).toEqual({ rover: { x: 0, y: 0 } });
    
   
}
);

test('test creation rover avec position ', () => {

    let position = { x: 0, y: 0 };

    let orientation = 'N';

    let test = create_rover_position(position,orientation);

    expect(test).toEqual({ position: { x: 0, y: 0 }, orientation: 'N' });
    


}
);
test('test_coordonnée et position aléatoire du rover', () => {

    let absice = Math.floor(Math.random() * 50);

    let ordonne = Math.floor(Math.random() * 50);

    let position = { x: absice, y: ordonne };

    let orientationtab = ['N', 'E', 'S', 'O'];

    let orientation = orientationtab[Math.floor(Math.random() * 3)];


    let test = create_rover_position(position, orientation);

    expect(test.position.x <= 50).toEqual(true);
    expect(test.position.y <= 50).toEqual(true);
    expect(test.orientation == orientation).toEqual(true);
   

}
);






test('passer de N à E en tournant à droite d', () => {

    let position = { x: 0, y: 0 };

    let orientation = 'N';

    const rover = create_rover_position(position, orientation);


    const nouvelleorientation = updateorientation(rover,'d');

    expect(nouvelleorientation.orientationactuelle).toEqual('E');
    
   



});

test('passer de N à O en tournant à gauche g', () => {

    let position = { x: 0, y: 0 };

    let orientation = 'N';

    const rover = create_rover_position(position, orientation);


    const nouvelleorientation = updateorientation(rover, 'g');

    expect(nouvelleorientation.orientationactuelle).toEqual('O');





});

test('passer de E à N en tournant à gauche g', () => {

    let position = { x: 0, y: 0 };

    let orientation = 'E';

    const rover = create_rover_position(position, orientation);


    const nouvelleorientation = updateorientation(rover, 'g');

    expect(nouvelleorientation.orientationactuelle).toEqual('N');





});

function deplacer(rover,commande) {

    let actionx = {

        a : { E: 1, O: -1, N: 0, S: 0 },


        r : { E: -1, O: 1, N: 0, S: 0 }

    };

    let actiony = {

        a : { E: 0, O: 0, N: 1, S: -1 },


        r : { E: 0, O: 0, N: -1, S: 1 }

    };


    let mapx = actionx[commande];

    let mapy = actiony[commande];

    const valeurx = ((rover.position.x + mapx[rover.orientation]) + 50) % 50;
    const valeury = ((rover.position.y + mapy[rover.orientation]) + 50) % 50;

    const newposition = { x: valeurx, y: valeury };

    return { ...rover, newposition};



}


test('avancer  en étant à E avec le rover à la  position x:0 , y:0  on doit avoir comme resultat x:1 y:0', () => {

    let position = { x: 0, y: 0 };

    let orientation = 'E';

    const rover = create_rover_position(position, orientation);


    const nouvelleposition = deplacer(rover,'a');

    expect(nouvelleposition.newposition).toEqual({x:1 , y:0 });





});

test('avancer  en étant à O avec le rover à la  position x:0 , y:0  on doit avoir comme resultat x:49 y:0', () => {

    let position = { x: 0, y: 0 };

    let orientation = 'O';

    const rover = create_rover_position(position, orientation);


    const nouvelleposition = deplacer(rover,'a');

    expect(nouvelleposition.newposition).toEqual({ x: 49, y: 0 });





});

test('avancer  en étant à E avec le rover à la  position x:49 , y:0  on doit avoir comme resultat x:0 y:0', () => {

    let position = { x: 49, y: 0 };

    let orientation = 'E';

    const rover = create_rover_position(position, orientation);


    const nouvelleposition = deplacer(rover,'a');

    expect(nouvelleposition.newposition).toEqual({ x: 0, y: 0 });





});

test('avancer  en étant à N avec le rover à la  position x:0 , y:0  on doit avoir comme resultat x:0 y:1', () => {

    let position = { x: 0, y: 0 };

    let orientation = 'N';

    const rover = create_rover_position(position, orientation);


    const nouvelleposition = deplacer(rover,'a');

    expect(nouvelleposition.newposition).toEqual({ x: 0, y: 1 });





});


test('avancer  en étant à N avec le rover à la  position x:0 , y:49  on doit avoir comme resultat x:0 y:0', () => {

    let position = { x: 0, y: 49 };

    let orientation = 'N';

    const rover = create_rover_position(position, orientation);


    const nouvelleposition = deplacer(rover,'a');

    expect(nouvelleposition.newposition).toEqual({ x: 0, y: 0 });





});

test('reculer  en étant à N avec le rover à la  position x:0 , y:0  on doit avoir comme resultat x:0 y:49', () => {

    let position = { x: 0, y:0 };

    let orientation = 'N';

    const rover = create_rover_position(position, orientation);


    const nouvelleposition = deplacer(rover,'r');

    expect(nouvelleposition.newposition).toEqual({ x: 0, y: 49 });





});

test('reculer  en étant à O avec le rover à la  position x:0 , y:0  on doit avoir comme resultat x:1 y:0', () => {

    let position = { x: 0, y: 0 };

    let orientation = 'O';

    const rover = create_rover_position(position, orientation);


    const nouvelleposition = deplacer(rover, 'r');

    expect(nouvelleposition.newposition).toEqual({ x: 1, y: 0 });





});








