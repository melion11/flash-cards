import { baseApi } from '@/common'
import {
  CreateDecksData,
  GetDecksData,
  GetDecksDataItems,
} from '@features/decks/model/api/decks-api.types.ts'

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
    deleteDeck: builder.mutation<void, string>({
      query: id => ({
        url: `v1/decks/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Decks'],
    }),
  }),
})

export const { useGetDecksQuery, useAddDeckMutation, useDeleteDeckMutation } = deckService
