/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount($filter: ModelSubscriptionAccountFilterInput) {
    onCreateAccount(filter: $filter) {
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
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount($filter: ModelSubscriptionAccountFilterInput) {
    onUpdateAccount(filter: $filter) {
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
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount($filter: ModelSubscriptionAccountFilterInput) {
    onDeleteAccount(filter: $filter) {
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
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onCreatePlayer(filter: $filter) {
      id
      accountID
      name
      imageUrl
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onUpdatePlayer(filter: $filter) {
      id
      accountID
      name
      imageUrl
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onDeletePlayer(filter: $filter) {
      id
      accountID
      name
      imageUrl
      createdAt
      updatedAt
    }
  }
`;
export const onCreateDevice = /* GraphQL */ `
  subscription OnCreateDevice($filter: ModelSubscriptionDeviceFilterInput) {
    onCreateDevice(filter: $filter) {
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
export const onUpdateDevice = /* GraphQL */ `
  subscription OnUpdateDevice($filter: ModelSubscriptionDeviceFilterInput) {
    onUpdateDevice(filter: $filter) {
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
export const onDeleteDevice = /* GraphQL */ `
  subscription OnDeleteDevice($filter: ModelSubscriptionDeviceFilterInput) {
    onDeleteDevice(filter: $filter) {
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
export const onCreateLog = /* GraphQL */ `
  subscription OnCreateLog($filter: ModelSubscriptionLogFilterInput) {
    onCreateLog(filter: $filter) {
      id
      level
      accountID
      score
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLog = /* GraphQL */ `
  subscription OnUpdateLog($filter: ModelSubscriptionLogFilterInput) {
    onUpdateLog(filter: $filter) {
      id
      level
      accountID
      score
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLog = /* GraphQL */ `
  subscription OnDeleteLog($filter: ModelSubscriptionLogFilterInput) {
    onDeleteLog(filter: $filter) {
      id
      level
      accountID
      score
      createdAt
      updatedAt
    }
  }
`;
