import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

const SignupMutation = gql`
  mutation SignupMutation($name: String, $email: String!) {
    signupUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

export const useSignUpMutation = () => useMutation(SignupMutation);
