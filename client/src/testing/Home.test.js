import React from 'react';
import { render } from '@testing-library/react';
import { Home } from '../pages/Home';

describe('Pruebas para el componente Home', () => {
  test('Se renderiza correctamente y sin errores', () => {
    const { container } = render(<Home />);
    expect(container).toBeInTheDocument();
  });

  test('Se renderiza el componente CountryList dentro de la sección', () => {
    const { getByTestId } = render(<Home />);
    const section = getByTestId('home-section');
    const countryList = getByTestId('country-list');
    expect(section).toContainElement(countryList);
  });

  test('Se verifica que la sección tenga un atributo data-testid y que tenga el valor adecuado', () => {
    const { getByTestId } = render(<Home />);
    const section = getByTestId('home-section');
    expect(section).toHaveAttribute('data-testid', 'home-section');
  });

  test('Se verifica que el componente Header no esté presente en la página', () => {
    const { queryByTestId } = render(<Home />);
    const header = queryByTestId('header');
    expect(header).not.toBeInTheDocument();
  });

  test('Se verifica que otros componentes adicionales, como el NavBar, no estén presentes en la página', () => {
    const { queryByTestId } = render(<Home />);
    const navBar = queryByTestId('nav-bar');
    expect(navBar).not.toBeInTheDocument();
  });
});
