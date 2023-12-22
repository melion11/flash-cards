import {
  createBrowserRouter,
  Navigate,
  NavLink,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

import { Button } from './components/ui'
import { DragnDropPage } from './DragnDropPape.tsx'
import {
  useAddDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
} from './services/deck.service.ts'

const publicRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <div>Login</div>,
  },
]

const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Decks />,
  },
  {
    path: '/dragndrop',
    element: <DragnDropPage />,
  },
]

const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: privateRoutes,
  },
  ...publicRoutes,
  {
    path: '*',
    element: <div>Error 404</div>,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

function Decks() {
  const { data } = useGetDecksQuery()
  const [addDeck] = useAddDeckMutation()
  const [deleteDeck] = useDeleteDeckMutation()

  const addNewDeck = () => {
    addDeck({ name: 'new deck1' })
  }

  return (
    <>
      <Button variant={'primary'} onClick={addNewDeck}>
        New Deck
      </Button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cards</th>
            <th>Last Updated</th>
            <th>Created by</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.cardsCount}</td>
              <td>{new Date(item.updated).toLocaleDateString()}</td>
              <td>{item.author.name}</td>
              <td>{item.id}</td>
              <td>
                <Button onClick={() => deleteDeck(item.id)}>Delete</Button>
              </td>
            </tr>
          ))}
          <NavLink to={'/dragndrop'}>dragndrop</NavLink>
        </tbody>
      </table>
    </>
  )
}
