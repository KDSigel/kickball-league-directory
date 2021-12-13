import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import TeamDetail from './TeamDetail';

const mockTeam1 = {
    id: 1,
    created_at: '2021-12-08T20:26:24.408898+00:00',
    name: 'Hot Stuff',
    city: 'Kirkland',
    state: 'Wa',
    players: [],
  };
  
  const server = setupServer(
    rest.get('https://byaeuvaytqhkrzznhwia.supabase.co/rest/v1/teams', (req, res, ctx) => {
      return res(ctx.json(mockTeam1))
    })
  );
  
  beforeAll(() => {
    server.listen();
  });
  
  afterAll(() => {
    server.close();
  });

it('it should check TeamDetail', async () => {

    const {container} = render(
        <MemoryRouter initialEntries={['/teams/1']}>
            <Switch>
                <Route exact path='/teams/:id' component={TeamDetail}/>
            </Switch>
        </MemoryRouter>
    )

    screen.getByText('loading', {exact: false})
    const oneTeamName = await screen.findByText('Edit team', {exact: false})
    expect(oneTeamName).toBeInTheDocument()

    expect(container).toMatchSnapshot()

}
)

// tests by Karl