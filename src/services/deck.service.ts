import { baseApi } from './base-api.ts'

export const deckService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getDecks: builder.query<GetDecksData, void>({
      query: () => ({
        url: `v1/decks`,
        method: 'GET',
      }),
      providesTags: ['Decks'],
    }),
    addDeck: builder.mutation<GetDecksDataItems, CreateDecksData>({
      query: body => ({
        url: `v1/decks`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Decks'],
    }),
    deleteDeck: builder.mutation<any, string>({
      query: id => ({
        url: `v1/decks/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Decks'],
    }),
  }),
})

export const { useGetDecksQuery, useAddDeckMutation, useDeleteDeckMutation } = deckService

export type GetDecksData = {
  items: GetDecksDataItems[]
  pagination: GetDecksDataPagination
  maxCardsCount: number
}
export type GetDecksDataItemsAuthor = {
  id: string
  name: string
}
export type GetDecksDataItems = {
  author: GetDecksDataItemsAuthor
  id: string
  userId: string
  name: string
  isPrivate?: boolean
  shots: number
  cover?: string
  rating: number
  created: string
  updated: string
  cardsCount: number
}
export type GetDecksDataPagination = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

type CreateDecksData = Pick<GetDecksDataItems, 'name' | 'cover' | 'isPrivate'>
