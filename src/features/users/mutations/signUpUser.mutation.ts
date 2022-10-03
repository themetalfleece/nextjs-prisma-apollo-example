import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

const SignUpUserMutation = gql`
  mutation SignUpUser($name: String, $email: String!) {
    signUpUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

export const useSignUpUserMutation = () => useMutation(SignUpUserMutation);
