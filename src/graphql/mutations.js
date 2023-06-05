/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAccount = /* GraphQL */ `
  mutation CreateAccount(
    $input: CreateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    createAccount(input: $input, condition: $condition) {
      id
      name
      pin
      createdAt
      updatedAt
      description
      players {
        items {
          id
          accountID
          name
          imageUrl
          createdAt
          updatedAt
        }
        nextToken
      }
      devices {
        items {
          id
          accountID
          name
          note
          number
          createdAt
          updatedAt
        }
        nextToken
      }
      logs {
        items {
          id
          level
          accountID
          score
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateAccount = /* GraphQL */ `
  mutation UpdateAccount(
    $input: UpdateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    updateAccount(input: $input, condition: $condition) {
      id
      name
      pin
      createdAt
      updatedAt
      description
      players {
        items {
          id
          accountID
          name
          imageUrl
          createdAt
          updatedAt
        }
        nextToken
      }
      devices {
        items {
          id
          accountID
          name
          note
          number
          createdAt
          updatedAt
        }
        nextToken
      }
      logs {
        items {
          id
          level
          accountID
          score
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount(
    $input: DeleteAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    deleteAccount(input: $input, condition: $condition) {
      id
      name
      pin
      createdAt
      updatedAt
      description
      players {
        items {
          id
          accountID
          name
          imageUrl
          createdAt
          updatedAt
        }
        nextToken
      }
      devices {
        items {
          id
          accountID
          name
          note
          number
          createdAt
          updatedAt
        }
        nextToken
      }
      logs {
        items {
          id
          level
          accountID
          score
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
      id
      accountID
      name
      imageUrl
      createdAt
      updatedAt
    }
  }
`;
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      id
      accountID
      name
      imageUrl
      createdAt
      updatedAt
    }
  }
`;
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
      id
      accountID
      name
      imageUrl
      createdAt
      updatedAt
    }
  }
`;
export const createDevice = /* GraphQL */ `
  mutation CreateDevice(
    $input: CreateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    createDevice(input: $input, condition: $condition) {
      id
      accountID
      name
      note
      number
      createdAt
      updatedAt
    }
  }
`;
export const updateDevice = /* GraphQL */ `
  mutation UpdateDevice(
    $input: UpdateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    updateDevice(input: $input, condition: $condition) {
      id
      accountID
      name
      note
      number
      createdAt
      updatedAt
    }
  }
`;
export const deleteDevice = /* GraphQL */ `
  mutation DeleteDevice(
    $input: DeleteDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    deleteDevice(input: $input, condition: $condition) {
      id
      accountID
      name
      note
      number
      createdAt
      updatedAt
    }
  }
`;
export const createLog = /* GraphQL */ `
  mutation CreateLog(
    $input: CreateLogInput!
    $condition: ModelLogConditionInput
  ) {
    createLog(input: $input, condition: $condition) {
      id
      level
      accountID
      score
      createdAt
      updatedAt
    }
  }
`;
export const updateLog = /* GraphQL */ `
  mutation UpdateLog(
    $input: UpdateLogInput!
    $condition: ModelLogConditionInput
  ) {
    updateLog(input: $input, condition: $condition) {
      id
      level
      accountID
      score
      createdAt
      updatedAt
    }
  }
`;
export const deleteLog = /* GraphQL */ `
  mutation DeleteLog(
    $input: DeleteLogInput!
    $condition: ModelLogConditionInput
  ) {
    deleteLog(input: $input, condition: $condition) {
      id
      level
      accountID
      score
      createdAt
      updatedAt
    }
  }
`;
