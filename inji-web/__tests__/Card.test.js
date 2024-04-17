import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import InteractiveCard from '../src/components/Atoms/Card';
import Logo from '../src/assets/inji-logo.png';

jest.mock('../../assets/inji-logo.png', () => ({
    ...jest.requireActual('../../assets/inji-logo.png'),
    imageSrc: '../../__mocks__/inji-logo.png', // Mock the src attribute to return a string value
}));

// Mock console.log
const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation();

test('Test Interactive Card', () => {
    let card = {
        clickable: true,
        title: 'Card 1',
        onClick: () => {
            console.log('Clicked on card');
        },
        actionIcon: null,
        imageUrl: Logo,
        id: 'card1',
    };
    render(
        <InteractiveCard
            title={card.title}
            onClick={card.onClick}
            clickable={card.clickable}
            actionIcon={card.actionIcon}
            imageURL={card.imageUrl}
            id={card.id}
        />,
    );
    // check if the card is rendered and the on click handler(interaction) is fired as expected
    const cardElement = screen.getByTestId(card.id);
    expect(cardElement).toBeInTheDocument();

    fireEvent.click(cardElement);
    expect(mockConsoleLog).toHaveBeenCalledWith('Clicked on card');
});
