import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Teams from './Teams';

it('it should check to make sure Teams loads', async () => {

const {container} = render (
<MemoryRouter>
    <Teams />
</MemoryRouter>
)

screen.getByText('loading', {exact: false})
const title = await screen.findByText('Kicking Ball Teams')
expect(title).toBeInTheDocument()

expect(container).toMatchSnapshot()

}
)