import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Teams from './Teams';

it('it should check to make sure the loading happens and there are teams', async () => {

render (
<MemoryRouter>
    <Teams />
</MemoryRouter>
)

screen.getByText('loading', {exact: false})
const oneTeamName = await screen.findByText('Acme USA')

expect(oneTeamName).toBeInTheDocument()

}
)