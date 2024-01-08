import { Navigate, RouteObject } from 'react-router-dom'

import { Route } from '@/common'
import { PageNotFound, SignIn } from '@/pages'
import { CreateNewPassword } from '@pages/auth/create-new-password'
import { ForgotPassword } from '@pages/auth/forgot-password'
import { SignUp } from '@pages/auth/sign-up'

export const privateRoutes: RouteObject[] = [
  { path: Route.Main, element: <Navigate to={Route.Decks} /> },
  { path: Route.Profile, element: <div>ProfilePage</div> },
  {
    path: Route.Decks,
    element: <div>DecksPage</div>,
  },
  { path: `${Route.Decks}/:id/cards`, element: <div>DeckPage</div> },
  { path: `${Route.Decks}/:id/learn`, element: <div>LearnPage</div> },
]

export const publicRoutes: RouteObject[] = [
  { path: Route.SignIn, element: <SignIn /> },
  { path: Route.SignUp, element: <SignUp /> },
  { path: Route.ForgotPassword, element: <ForgotPassword /> },
  { path: `${Route.CreateNewPassword}/:token`, element: <CreateNewPassword /> },
  { path: Route.NotFound, element: <PageNotFound /> },
]
