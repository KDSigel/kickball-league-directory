import { render, screen } from '@testing-library/react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import PlayerDetail from './PlayerDetail';

it.skip('it should check player details', async () => {

    render(
        <MemoryRouter initialEntries={['/player/1']}>
            <Switch>
                <Route exact path='/player/:id' component={PlayerDetail}/>
            </Switch>
        </MemoryRouter>
    )

    screen.getByText('loading', {exact: false})
    const onePlayerName = await screen.findByText('Ben E. Jetts', {exact: false})

    expect(onePlayerName).toBeInTheDocument()

}
)