import { gql } from "@apollo/client";

export const REGISTER_NEW_USER = gql`
  mutation register(
    $fullName: String!
    $username: String!
    $email: String!
    $phone: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        fullName: $fullName
        username: $username
        phone: $phone
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      fullName
      username
      email
      phone
      createdAt
      token
    }
  }
`;
