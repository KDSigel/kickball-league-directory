import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Players from './Players';

it('it should check to make sure Players loads', async () => {

const {container} = render (
<MemoryRouter>
    <Players />
</MemoryRouter>
)

screen.getByText('loading', {exact: false})
const title = await screen.findByText('Playas')
expect(title).toBeInTheDocument()

expect(container).toMatchSnapshot()

}
)