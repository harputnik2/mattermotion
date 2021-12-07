import { gql } from '@apollo/client'

const VISUALIZATION = gql`
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

const ANIMATION = gql`
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

const VIRTUAL_TOUR = gql`
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

const VISUALIZATIONS = gql`
  query GetVisualizations {
    visualizations {
      id
      name
      description
      image {
        url
      }
    }
  }
`

const ANIMATIONS = gql`
  query GetAnimations {
    animations {
      id
      name
      description
      animation {
        url
      }
      poster {
        url
      }
    }
  }
`

const VIRTUAL_TOURS = gql`
  query GetVirtualTours {
    virtualTours {
      id
      name
      description
      tour_url
      poster {
        url
      }
    }
  }
`

const VISUALIZATIONS_IDS = gql`
  query GetVisualizationsIds {
    visualizations {
      id
    }
  }
`

const ANIMATIONS_IDS = gql`
  query GetAnimationsIds {
    animations {
      id
    }
  }
`

const VIRTUAL_TOURS_IDS = gql`
  query GetVirtualToursIds {
    virtualTours {
      id
    }
  }
`

export {
  VISUALIZATION,
  ANIMATION,
  VIRTUAL_TOUR,
  VISUALIZATIONS,
  ANIMATIONS,
  VIRTUAL_TOURS,
  VISUALIZATIONS_IDS,
  ANIMATIONS_IDS,
  VIRTUAL_TOURS_IDS,
}
