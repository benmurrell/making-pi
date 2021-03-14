function distance( aX1, aY1, aX2, aY2 ) {
    return Math.sqrt( Math.pow( aX1 - aX2, 2 ) + Math.pow( aY1 - aY2, 2 ) );
}

function doMonteCarlo( aNumSimulations ) {
    let countInsideTheCircle = 0;

    for( let i = 0; i < aNumSimulations; i++ ) {
        let x = Math.random();
        let y = Math.random();

        if( distance( x, y, 0, 0 ) <= 1 ) {
            countInsideTheCircle++;
        }
    }
    return countInsideTheCircle / aNumSimulations;
}

function makePi( aNumSimulations ) {
    return doMonteCarlo( aNumSimulations ) * 4;
}

function bakePi( aNumSimulations ) {
    let pi = makePi( aNumSimulations );
    console.log( pi + " after " + aNumSimulations + " simulations" );
}

bakePi( 1 );
bakePi( 10 );
bakePi( 100 );
bakePi( 1000 );
bakePi( 10000 );
bakePi( 100000 );
bakePi( 1000000 );
bakePi( 10000000 );
bakePi( 100000000 );
bakePi( 1000000000 );    // Can reliably start teasing after the 6th digit of pi at this point
bakePi( 1000000000 );    // So try again
bakePi( 1000000000 );    // And again
bakePi( 10000000000 );   // ... or go deeper
bakePi( 100000000000 );  // and deeper
bakePi( 1000000000000 ); // into reality