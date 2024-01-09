import { Navigate, RouteObject } from 'react-router-dom'

import { Route } from '@/common'
import {
  ForgotPasswordPage,
  SignUpPage,
  CreateNewPasswordPage,
  PageNotFound,
  SignInPage,
  ProfilePage,
  DecksPage,
} from '@/pages'

export const privateRoutes: RouteObject[] = [
  { path: Route.Main, element: <Navigate to={Route.Decks} /> },
  { path: Route.Profile, element: <ProfilePage /> },
  {
    path: Route.Decks,
    element: <DecksPage />,
  },
  { path: `${Route.Decks}/:id/cards`, element: <div>DeckPage Cards</div> },
  { path: `${Route.Decks}/:id/learn`, element: <div>LearnPage</div> },
]

export const publicRoutes: RouteObject[] = [
  { path: Route.SignIn, element: <SignInPage /> },
  { path: Route.SignUp, element: <SignUpPage /> },
  { path: Route.ForgotPassword, element: <ForgotPasswordPage /> },
  { path: `${Route.CreateNewPassword}/:token`, element: <CreateNewPasswordPage /> },
  { path: Route.NotFound, element: <PageNotFound /> },
]
