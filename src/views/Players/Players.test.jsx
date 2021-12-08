import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Players from './Players';

it('it should check to make sure the loading happens and there are players', async () => {

render (
<MemoryRouter>
    <Players />
</MemoryRouter>
)

screen.getByText('loading', {exact: false})
const onePlayerName = await screen.findByText('Ben E. Jetts')

expect(onePlayerName).toBeInTheDocument()

}
)