import * as React from 'react';
import { mount, shallow } from 'enzyme';
import Layout from '../components/Layout';
import TheGrid from '../components/TheGrid';
import TheGridItem from '../components/TheGridItem';
import { stock } from './mocks';


describe( 'Components', () => {
  describe( 'Layout', () => {
    it( 'should render without throwing an error', function () {
      const renderedComponent = mount( <Layout/> );
      expect( renderedComponent ).toBeTruthy();
    } );
  } );

  describe( 'The Grid', () => {
    it( 'should render without throwing an error', function () {
      const renderedComponent = shallow( <TheGrid/> );
      expect( renderedComponent ).toBeTruthy();
    } );
  } );

  describe( 'The Grid Item', () => {
    it( 'should render without throwing an error', function () {
      const renderedComponent = shallow( <TheGridItem stock={ stock }/> );
      expect( renderedComponent ).toBeTruthy();
    } );
  } );
} );