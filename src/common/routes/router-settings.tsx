import { Navigate, RouteObject } from 'react-router-dom'

import { Route } from '@/common'
import { PageNotFound } from '@/pages'

export const privateRoutes: RouteObject[] = [
  { path: Route.Main, element: <Navigate to={Route.Decks} /> },
  { path: Route.Profile, element: <div>ProfilePage</div> },
  { path: Route.Decks, element: <div className={'container'}>DecksPage</div> },
  { path: `${Route.Decks}/:id/cards`, element: <div>DeckPage</div> },
  { path: `${Route.Decks}/:id/learn`, element: <div>LearnPage</div> },
]

export const publicRoutes: RouteObject[] = [
  { path: Route.SignIn, element: <div>SignInPage</div> },
  { path: Route.SignUp, element: <div>SignUpPage</div> },
  { path: Route.ForgotPassword, element: <div>ForgotPasswordPage</div> },
  { path: `${Route.CreateNewPassword}/:token`, element: <div>CreateNewPasswordPage</div> },
  { path: Route.NotFound, element: <PageNotFound /> },
]
