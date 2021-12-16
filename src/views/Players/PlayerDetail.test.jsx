import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import PlayerDetail from './PlayerDetail';

const mockPlayer1 = {
    id: 1,
    created_at: '2021-12-08T20:26:24.408898+00:00',
    name: 'Mr Kick',
    position: 'right side',
    teamId: 1,
  };
  
  const server = setupServer(
    rest.get('https://byaeuvaytqhkrzznhwia.supabase.co/rest/v1/players', (req, res, ctx) => {
      return res(ctx.json(mockPlayer1))
    })
  );
  
  beforeAll(() => {
    server.listen();
  });
  
  afterAll(() => {
    server.close();
  });

it.skip('it should check playerDetail', async () => {

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