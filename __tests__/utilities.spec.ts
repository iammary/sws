import { generateColor } from '../utils';


describe( 'Utitlies', () => {
  describe( 'generateColor', () => {
    it( 'should return correct color based on score value', function () {
      const greenColor = generateColor( 30 );
      const redColor = generateColor( 0, 0.5 )
      expect( greenColor ).toEqual( `rgba(0, 255, 0, 1 )` );
      expect( redColor ).toEqual( `rgba(255, 0, 0, 0.5 )` );
    } );
  } );
} );