import { gql } from '@apollo/client'

export const VISUALIZATION = gql`
  query GetVisualization($id: ID!) {
    visualization(id: $id) {
      id
      name
      description
      image {
        url
      }
    }
  }
`

export const ANIMATION = gql`
  query GetAnimation($id: ID!) {
    animation(id: $id) {
      id
      name
      description
      poster {
        url
      }
      animation {
        url
      }
    }
  }
`

export const VIRTUAL_TOUR = gql`
  query GetVirtualTour($id: ID!) {
    virtualTour(id: $id) {
      id
      name
      description
      poster {
        url
      }
      tour_url
    }
  }
`
