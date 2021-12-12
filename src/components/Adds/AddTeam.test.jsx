import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';
import Teams from '../../views/Teams/Teams';

const mockTeam = {
    id: 2,
    created_at: '2021-12-08T20:26:24.408898+00:00',
    name: 'Best Team',
    city: 'Seattle',
    state: 'Wa',
    players: []
  }

  const server = setupServer(
    rest.get(
      'https://kyymosibdiehskestqsg.supabase.co/rest/v1/teams',
      (req, res, ctx) => {
        return res(ctx.json([mockTeam]))
      }
    ),
    rest.post(
      'https://kyymosibdiehskestqsg.supabase.co/rest/v1/teams',
      (req, res, ctx) => {
        return res(ctx.json([mockTeam]))
      }
    )
  )
  
  beforeAll(() => {
    server.listen()
  })
  
  afterAll(() => {
    server.close()
  })

it.skip('should add a team and refresh', async () => {

    render(
      <Router initialEntries={['/teams']}>
        <Switch>
          <Route path='/teams' component={Teams} />
        </Switch>
      </Router>
    );

    screen.getByText('loading', {exact: false})



    await screen.findAllByText('Seattle', {exact: false})
}
)