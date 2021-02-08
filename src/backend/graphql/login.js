import { gql } from "@apollo/client";

export const LOGIN_WITH_PHONE_AND_PASSWORD = gql`
  mutation login($phone: String!, $password: String!) {
    login(phone: $phone, password: $password) {
      id
      username
      email
      phone
      createdAt
      token
      fullName
    }
  }
`;
