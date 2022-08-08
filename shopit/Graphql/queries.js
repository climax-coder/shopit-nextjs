import { gql } from '@apollo/client';

export const categoryquery = gql`
  query {
    categories {
      data {
        attributes {
          cid
          cname
          cimage {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const productsquery = gql`
  query {
    products {
      data {
        attributes {
          pid
          pname
          price
          pslug
          pimage {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const productslug = gql`
  query {
    products {
      data {
        attributes {
          pslug
        }
      }
    }
  }
`;

export function getProductbySlug(slug) {
  return gql`
    query {
      products(
        filters: { pslug: { eq: "${slug}" } }
      ) {
        data {
          attributes {
            pid
            pname
            price
            pslug
            pdescription
            pimage {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  `;
}
