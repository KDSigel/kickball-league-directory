import { render, screen } from '@testing-library/react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import TeamDetail from './TeamDetail';

it('it should check team details', async () => {

    render(
        <MemoryRouter initialEntries={['/teams/1']}>
            <Switch>
                <Route exact path='/teams/:id' component={TeamDetail}/>
            </Switch>
        </MemoryRouter>
    )

    screen.getByText('loading', {exact: false})
    const oneTeamName = await screen.findByText('Bridge City Sneakers', {exact: false})

    expect(oneTeamName).toBeInTheDocument()

}
)