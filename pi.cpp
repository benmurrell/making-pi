#include <iostream>
#include <iomanip>
#include <random>
#include <math.h>
#include <limits.h>

float distanceToOrigin( const double& aX, const double& aY ) {
    return sqrt( pow( aX, 2 ) + pow( aY, 2 ) );
}

int main( int argc, char* argv[] ) {
    std::random_device randomDevice;
    std::mt19937_64 mersenneTwisterEngine( randomDevice() );
    std::uniform_real_distribution<float> uniformDistribution( 0, 1 );

    unsigned long long totalIterations = 0;
    unsigned long long countInside = 0;

    while( totalIterations++ ) {
        double x = uniformDistribution( mersenneTwisterEngine );
        double y = uniformDistribution( mersenneTwisterEngine );

        // Count how many times (x,y) falls inside a unit circle
        if( distanceToOrigin( x, y ) <= 1 ) {
            countInside++;
        }

        // Print progress periodically
        if( totalIterations % (long long)10000000 == 0 || totalIterations == ULLONG_MAX ) {
            double pi = ( 4.0L * ( static_cast<double>( countInside ) / static_cast<double>( totalIterations ) ) );
            std::cout << "pi @ " << totalIterations << ": " << std::setprecision( 20 ) << pi << std::endl;
        }

        // Stop before overflow
        if( totalIterations == ULLONG_MAX ) {
            break;
        }
    }

    return 0;
}
